import { NextApiRequest, NextApiResponse } from 'next';

interface User {
  id: string;
  name: string;
  age: number;
  profileUrl: string;
}

interface ErrorMessage {
  error: string;
}

function makeRandomString(length: number) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;

  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | ErrorMessage>
) {
  if (req.method === 'GET') {
    const { userId } = req.query;

    if (typeof userId !== 'string') {
      res.status(400).json({ error: 'userId is not string' });
      return;
    }

    res.status(200).json({
      id: userId,
      name: makeRandomString(10),
      age: Math.floor(Math.random() * 40),
      profileUrl: `https://test.com/${makeRandomString(40)}`,
    });
  }
}
