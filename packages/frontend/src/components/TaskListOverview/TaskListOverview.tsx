import React from 'react';
import { useParams } from 'react-router-dom';
import gql from 'graphql-tag';
import { useTaskListDetailsQuery } from '../../generated/graphql';
import { CreateTask } from '../CreateTask';
import { Task } from '../Task';

gql`
  query taskListDetails($taskListId: Int!) {
    taskList(where: { id: $taskListId }) {
      id
      name
      tasks {
        id
        label
        completed
      }
    }
  }
`;

export const TaskListOverview: React.FC = () => {
  const { taskListId } = useParams();
  const { data, loading, error, refetch } = useTaskListDetailsQuery({
    variables: { taskListId: Number(taskListId) },
  });

  if (error) {
    return <p>I am error!</p>;
  }

  if (loading) {
    return <p>Loading tasklist...</p>;
  }

  if (!data || !data.taskList) {
    return null;
  }

  return (
    data.taskList && (
      <>
        <h2 className="text-3xl my-4">{data.taskList.name}</h2>
        {data.taskList.tasks.length === 0 ? (
          <p className="bg-white p-4 shadow-xl mb-4">
            This list does not have any tasks yet, perhaps you would like to add some!
          </p>
        ) : (
          <ul className="bg-white shadow-xl p-4 mb-4">
            {data.taskList.tasks.map((task) => (
              <Task taskId={task.id} key={task.id} />
            ))}
          </ul>
        )}
        <CreateTask refetch={refetch} />
      </>
    )
  );
};
