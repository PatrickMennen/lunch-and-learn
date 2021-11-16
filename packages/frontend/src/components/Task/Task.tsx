import React, { useCallback, useMemo } from 'react';
import gql from 'graphql-tag';
import {
  useGetTaskDetailsQuery,
  useSetTaskCompletedMutation,
  useTaskUpdatedSubscription,
} from '../../generated/graphql';

gql`
  query getTaskDetails($taskId: Int) {
    task(where: { id: $taskId }) {
      id
      label
      completed
    }
  }

  mutation setTaskCompleted($id: Int, $completed: Boolean) {
    updateTask(data: { completed: { set: $completed } }, where: { id: $id }) {
      id
      completed
    }
  }

  subscription taskUpdated($taskId: Int!) {
    updatedTask(where: { id: { equals: $taskId } }) {
      id
      label
      completed
    }
  }
`;

type TaskProps = {
  taskId: number;
};

export const Task: React.FC<TaskProps> = ({ taskId }) => {
  const { loading, data } = useGetTaskDetailsQuery({ variables: { taskId } });
  const [updateTask] = useSetTaskCompletedMutation();
  useTaskUpdatedSubscription({ variables: { taskId } });

  const taskClasses = useMemo(() => {
    if (!data) {
      return;
    }

    const completed = data.task!.completed ? 'line-through text-gray-300' : '';
    return `text-xl border-b-2 py-2 cursor-pointer ${completed}`;
  }, [data]);

  const updateTaskHandler = useCallback(() => {
    if (!data) {
      return;
    }

    updateTask({
      variables: {
        id: taskId,
        completed: !data.task!.completed,
      },
    });
  }, [data, taskId, updateTask]);

  if (loading || !data) {
    return null;
  }

  return (
    data && (
      <li onClick={updateTaskHandler} className={taskClasses}>
        {data.task!.label}
      </li>
    )
  );
};
