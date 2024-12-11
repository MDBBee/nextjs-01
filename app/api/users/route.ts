import { fetchUsers, saveUser } from '@/utils/actions';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  console.log(req.url);

  //   console.log(searchParams);
  //   console.log(searchParams.get('id'));

  const users = await fetchUsers();
  return Response.json(users);
};

export const POST = async (req: Request) => {
  const res = await req.json();
  await saveUser(res);
  return Response.json({ msg: 'user created!' });
};
