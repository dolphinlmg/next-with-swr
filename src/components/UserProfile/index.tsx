import useSWR from 'swr';

interface UserProfileProps {
  userId: string;
}

interface User {
  id: string;
  name: string;
  age: number;
  profileUrl: string;
}

export default function UserProfile({ userId }: UserProfileProps) {
  const { data, error, isLoading } = useSWR<User>(`/api/user/${userId}`);

  if (error) return <div>fail to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <div>{JSON.stringify(data)}</div>;
}
