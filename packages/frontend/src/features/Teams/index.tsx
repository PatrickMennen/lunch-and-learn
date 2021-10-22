import React from 'react';
import gql from 'graphql-tag';
import { useGetAllTeamsQuery } from '../../generated/graphql';

gql`
  query getAllTeams {
    teams {
      id
      name
      totalNumberOfOpenTasks
    }
  }
`;

export const TeamsList: React.FC = () => {
  const { error, loading, data } = useGetAllTeamsQuery();

  if (loading) {
    return <p>Loading teams...</p>;
  }

  if (error) {
    return (
      <>
        <p>Could not load teams from the backend.</p>
        {error.message}
      </>
    );
  }

  if (!data) {
    return <p>No teams found, would you like to create one?</p>;
  }

  return (
    <ul>
      {data.teams.map((team) => (
        <li
          className="justify-center bg-blue-800 text-blue-100 p-2 flex justify-start"
          key={team.id}
        >
          {team.name}
          {team.totalNumberOfOpenTasks > 0 && (
            <span className="inline-block ml-auto bg-red-400 text-center p-1">
              {team.totalNumberOfOpenTasks} open task(s)
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};
