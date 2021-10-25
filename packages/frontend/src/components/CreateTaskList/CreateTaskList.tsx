import React, { useCallback, useState } from 'react';
import gql from 'graphql-tag';

type CreateTaskListParams = {
  teamId: number;
};

export const CreateTaskList: React.FC<CreateTaskListParams> = () => {
  const [name, setName] = useState<string>('');

  const setNameHandler = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setName(event.currentTarget.value);
    },
    [setName],
  );

  const submitHandler = useCallback(() => {}, []);

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
      >
        Add tasklist
      </button>
    </form>
  );
};
