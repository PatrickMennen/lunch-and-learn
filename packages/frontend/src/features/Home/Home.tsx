import { CreateTeam } from '../../components/CreateTeam';
import React from 'react';

export const Home: React.FC = () => (
  <section className="col-span-10 bg-gray-200 p-4">
    <h1 className="font-semibold text-4xl">Welcome to the quadruple aim kanban board</h1>
    <p className="my-5">Definitely not your average todo list tutorial kickstarter on steroids.</p>
    <CreateTeam />
  </section>
);
