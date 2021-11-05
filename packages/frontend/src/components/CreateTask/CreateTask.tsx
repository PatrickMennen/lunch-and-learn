import { gql } from 'graphql-tag';
import React, { FormEvent, useCallback, useState } from 'react';
import { useCreateTaskMutation } from '../../generated/graphql';
import { useParams } from 'react-router-dom';

gql`
  mutation createTask($tasklistId: Int, $label: String!) {
    createTask(data: { label: $label, Tasklist: { connect: { id: $tasklistId } } }) {
      id
    }
  }
`;

export const CreateTask: React.FC = () => {
  const [name, setName] = useState<string>('');
  const { taskListId } = useParams();

  const setNameHandler = useCallback((event: FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  }, []);

  const [createTask, { loading, error }] = useCreateTaskMutation();

  const addTaskHandler = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        await createTask({
          variables: {
            tasklistId: Number(taskListId),
            label: name,
          },
        });
        setName('');
      } catch (e) {}
    },

    [createTask, name, taskListId],
  );

  return (
    <>
      {loading && <p>Creating your task</p>}
      <form onSubmit={addTaskHandler}>
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
          Add task
        </button>
        {error && <p className="text-red-700 font-bold">{error.message}</p>}
      </form>
    </>
  );
};
