import React, { useCallback, useState } from 'react';
import gql from 'graphql-tag';
import { useParams, Navigate } from 'react-router-dom';
import { useAddTaskListMutation } from '../../generated/graphql';

gql`
  mutation addTaskList($name: String!, $teamId: Int!) {
    createTaskList(data: { name: $name, Team: { connect: { id: $teamId } } }) {
      id
    }
  }
`;

export const CreateTaskList: React.FC = () => {
  const { teamId } = useParams();
  const [name, setName] = useState<string>('');
  const [createTaskList, { data, loading, error }] = useAddTaskListMutation();

  const setNameHandler = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setName(event.currentTarget.value);
    },
    [setName],
  );

  const submitHandler = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await createTaskList({ variables: { name, teamId: Number(teamId) } });
    },
    [createTaskList, name, teamId],
  );

  if (data) {
    return <Navigate to={`tasks/${data.createTaskList.id}`} />;
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        value={name}
        onChange={setNameHandler}
        className="text-4xl align-middle focus:ring-4"
      />{' '}
      <button
        type="submit"
        className="inline-block p-2 rounded text-white bg-blue-800 shadow-md focus:ring-2"
        disabled={loading}
      >
        Add tasklist
      </button>
      {error && <p className="text-red-700 font-bold">{error.message}</p>}
    </form>
  );
};
