import React from 'react';
import { TeamsList } from './features/Teams';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TeamOverview } from './features/TeamOverview';
import { Home } from './features/Home';
import { PageNotFound } from './features/404';

export const App: React.FC = () => {
  return (
    <Router>
      <main className="grid grid-cols-12 h-screen w-screen">
        <aside className="col-span-2 bg-gray-800">
          <TeamsList />
        </aside>

        <Routes>
          <Route path="team/:teamId/*" element={<TeamOverview />} />

          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </Router>
  );
};
