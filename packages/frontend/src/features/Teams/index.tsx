import React from 'react';
import gql from 'graphql-tag';
import { useGetAllTeamsQuery } from '../../generated/graphql';
import { NavLink } from '../../components/NavLink';

gql`
  query getAllTeams {
    teams {
      id
      name
      totalNumberOfOpenTasks
      totalNumberOfTasks
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
    return null;
  }

  return (
    <ul>
      {data.teams.map((team) => (
        <li key={team.id}>
          <NavLink to={`/team/${team.id}`}>
            {team.name}
            {team.totalNumberOfOpenTasks > 0 && (
              <span className="inline-block bg-red-400 p-1 rounded ml-auto">
                {team.totalNumberOfOpenTasks} / {team.totalNumberOfTasks}
              </span>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
