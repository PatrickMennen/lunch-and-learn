import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { TeamsList } from './features/Teams';
import gql from 'graphql-tag';
import { useCreateTeamMutation } from './generated/graphql';

gql`
  mutation createTeam($teamName: String!) {
    createTeam(data: { name: $teamName }) {
      id
      name
      totalNumberOfOpenTasks
    }
  }
`;

export const App: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [createTeam] = useCreateTeamMutation();
  const addTeamHandler = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await createTeam({
        variables: {
          teamName: name,
        },
      });

      setName('');
    },

    [createTeam, name],
  );

  const setNameHandler = useCallback((event: FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  }, []);

  return (
    <main className="grid grid-cols-12 h-screen w-screen">
      <aside className="col-span-2 bg-gray-800">
        <TeamsList />
      </aside>
      <section className="col-span-10 bg-gray-200 p-4">
        <h1 className="font-semibold text-4xl">Welcome to the quadruple aim kanban board</h1>
        <p className="my-5">
          Definitely not your average todo list tutorial kickstarter on steroids.
        </p>

        <form onSubmit={addTeamHandler}>
          <input value={name} onChange={setNameHandler} className="text-4xl align-middle" />{' '}
          <button
            type="submit"
            className="inline-block p-2 rounded text-white bg-blue-800 shadow-md"
          >
            Create your own team
          </button>
        </form>
      </section>
    </main>
  );
};
