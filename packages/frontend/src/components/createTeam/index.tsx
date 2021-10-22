import React, { FormEvent, useCallback, useState } from 'react';
import gql from 'graphql-tag';
import { useCreateTeamMutation } from '../../generated/graphql';

gql`
  mutation createTeam($teamName: String!) {
    createTeam(data: { name: $teamName }) {
      id
      name
    }
  }
`;

export const CreateTeam = () => {
  const [name, setName] = useState<string>('');

  const setNameHandler = useCallback((event: FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  }, []);

  const [createTeam, { loading, data, error }] = useCreateTeamMutation();

  const addTeamHandler = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        await createTeam({
          variables: {
            teamName: name,
          },
        });
      } catch (e) {}

      setName('');
    },

    [createTeam, name],
  );

  return (
    <>
      {loading && <p>Creating your team. One second please</p>}
      <form onSubmit={addTeamHandler}>
        <input value={name} onChange={setNameHandler} className="text-4xl align-middle" />{' '}
        <button
          type="submit"
          className="inline-block p-2 rounded text-white bg-blue-800 shadow-md"
          disabled={loading}
        >
          Create your own team
        </button>
        {error && <p className="text-red-700 font-bold">{error.message}</p>}
      </form>
    </>
  );
};
