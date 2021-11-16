import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import {
  GetTaskDetailsDocument,
  GetTaskDetailsQuery,
  TaskUpdatedDocument,
} from '../../generated/graphql';
import { Task } from './Task';
import { act, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const renderComponent = async (
  children: JSX.Element,
  graphqlMock: MockedResponse[],
  delay: number = 0,
) => {
  await waitFor(() => new Promise((res) => setTimeout(res, delay)));
  return render(
    <MockedProvider addTypename={true} mocks={graphqlMock}>
      {children}
    </MockedProvider>,
  );
};

const task: GetTaskDetailsQuery = {
  task: {
    id: 1,
    completed: false,
    label: 'Achieve World Domination',
  },
};

const completedTask: GetTaskDetailsQuery = {
  task: {
    id: 1,
    completed: true,
    label: 'Achieve World Domination',
  },
};

const mockGraphQL: MockedResponse[] = [
  {
    request: {
      query: GetTaskDetailsDocument,
      variables: {
        taskId: 1,
      },
    },
    result: {
      data: task,
    },
  },
  {
    request: {
      query: GetTaskDetailsDocument,
      variables: {
        taskId: 2,
      },
    },
    error: new Error('Could not load Task #2 from the backend'),
  },
  {
    request: {
      query: TaskUpdatedDocument,
      variables: {
        taskId: 1,
      },
    },
    result: {
      data: completedTask,
    },
    delay: 20,
  },
];

describe('Task', () => {
  it('renders the tasks title', async () => {
    const { getByText } = await renderComponent(<Task taskId={1} />, mockGraphQL);
    expect(getByText('World Domination')).toBeInTheDocument();
  });

  it('changes to completed when clicked', async () => {
    const { getByRole } = await renderComponent(<Task taskId={1} />, mockGraphQL);
    const task = getByRole('listitem');

    await act(async () => {
      await userEvent.click(task);
    });

    expect(task).toHaveClass('line-through');
  });
});
