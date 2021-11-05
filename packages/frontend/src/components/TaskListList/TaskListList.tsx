import React from 'react';
import { Link, useParams } from 'react-router-dom';

import gql from 'graphql-tag';
import { useGetTaskListsForTeamQuery } from '../../generated/graphql';
import { CreateTaskList } from '../CreateTaskList';

gql`
  query getTaskListsForTeam($teamId: Int!) {
    taskLists(where: { teamId: { equals: $teamId } }) {
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

export const TaskListList: React.FC = () => {
  const { teamId } = useParams();
  const { loading, data, error } = useGetTaskListsForTeamQuery({
    variables: { teamId: Number(teamId) },
  });

  if (loading) {
    return <p>Loading task lists for this team...</p>;
  }

  if (error) {
    return <p>Could not load the tasks lists for this team :(</p>;
  }

  if (data) {
    return (
      <>
        <h2 className="text-2xl my-4">Task lists</h2>
        {data.taskLists.length === 0 && (
          <p className="bg-white p-4 shadow-xl my-4">
            There are no task lists for this specific team, yet...
          </p>
        )}

        {data.taskLists.length > 0 && (
          <ul className="p-4 bg-white mb-4 shadow-md">
            {data.taskLists.map((list) => (
              <li key={list.name}>
                <Link
                  className="block p-2 border-b-2 border-gray-300 hover:bg-gray-200 "
                  to={`tasks/${list.id}`}
                >
                  {list.name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <CreateTaskList />
      </>
    );
  }

  return null;
};
