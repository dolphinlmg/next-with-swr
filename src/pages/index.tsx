import Input from '@/components/Input';
import UserProfile from '@/components/UserProfile';
import { useState } from 'react';

export default function Home() {
  const [userId, setUserId] = useState<string>('');

  return (
    <>
      <Input onClick={(id) => setUserId(id)} />
      {userId && <UserProfile userId={userId} />}
    </>
  );
}
