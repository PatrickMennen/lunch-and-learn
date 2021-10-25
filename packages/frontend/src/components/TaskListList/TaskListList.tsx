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
        <h2 className="text-2xl m-y4">Task lists</h2>
        {data.taskLists.length === 0 && (
          <p className="m-y4">There are no task lists for this specific team, yet...</p>
        )}

        {data.taskLists.length > 0 && (
          <ul>
            {data.taskLists.map((list) => (
              <li>
                <Link key={list.name} to={`tasks/${list.id}`}>
                  {list.name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <CreateTaskList teamId={Number(teamId)} />
      </>
    );
  }

  return null;
};
