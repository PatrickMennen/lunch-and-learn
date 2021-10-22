import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { TeamsList } from './features/Teams';
import { useCreateTeamMutation } from './generated/graphql';
import { CreateTeam } from './components/createTeam';

export const App: React.FC = () => {
  const [name, setName] = useState<string>('');

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
        <CreateTeam />
      </section>
    </main>
  );
};
