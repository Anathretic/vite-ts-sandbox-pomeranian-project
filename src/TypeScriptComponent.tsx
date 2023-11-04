import React, { useState } from 'react';

type Props = {
  name: string;
  age: number;
};

export const TypeScriptComponent = ({
  age,
  name,
}: Props): JSX.Element | null => {
  const [description, setDescription] = useState('');
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  return (
    <div>
      <h3>TypeScript React Component Example</h3>
      <p>
        Data from props: {name} {age}
      </p>
      <label>
        Description field{' '}
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
        <p>Input value: {description}</p>
        <button onClick={() => setDescription('')}>Clear</button>
      </label>
    </div>
  );
};
