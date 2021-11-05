import gql from 'graphql-tag';
import { useGetTeamDetailsQuery } from '../../generated/graphql';
import React from 'react';
import { Routes, Outlet, useParams } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { TaskListList } from '../../components/TaskListList';
import { TaskListOverview } from '../../components/TaskListOverview';

gql`
  query getTeamDetails($teamId: Int) {
    team(where: { id: $teamId }) {
      id
      name
    }
  }
`;

export const TeamOverview: React.FC = () => {
  const { teamId } = useParams();
  const { loading, data, error } = useGetTeamDetailsQuery({
    variables: { teamId: Number(teamId) },
  });

  return (
    <section className="col-span-10 bg-gray-200 p-4 shadow-md">
      {loading || (!data && <p>Loading team overview</p>)}
      {error && <p>Could not load team with id ${teamId}</p>}
      {data && data.team && (
        <>
          <h1 className="text-4xl border-b-2 border-blue-400 m-y4">{data.team.name}</h1>
          <Outlet />

          <Routes>
            <Route path="/" element={<TaskListList />} />
            <Route path="/tasks/:taskListId" element={<TaskListOverview />} />
          </Routes>
        </>
      )}
    </section>
  );
};
