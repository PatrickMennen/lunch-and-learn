import React, { useCallback, useMemo } from 'react';
import gql from 'graphql-tag';
import { useGetTaskDetailsQuery, useSetTaskCompletedMutation } from '../../generated/graphql';

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
`;

type TaskProps = {
  taskId: number;
};

export const Task: React.FC<TaskProps> = ({ taskId }) => {
  const { loading, data } = useGetTaskDetailsQuery({ variables: { taskId } });
  const [updateTask] = useSetTaskCompletedMutation();

  const taskClasses = useMemo(() => {
    if (!data) {
      return;
    }

    const completed = data.task!.completed ? 'line-through text-gray-300' : null;
    return `text-xl border-b-2 py-2 ${completed}`;
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
  }, [data]);

  if (loading || !data) {
    return null;
  }

  return (
    <li onClick={updateTaskHandler} className={taskClasses}>
      {data.task!.label}
    </li>
  );
};
