import { useState } from 'react';

interface InputProps {
  onClick: (userId: string) => void;
}

export default function Input({ onClick }: InputProps) {
  const [value, setValue] = useState<string>('');

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => onClick(value)}> send </button>
    </div>
  );
}
