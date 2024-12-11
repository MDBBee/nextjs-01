'use server';
import { readFile, writeFile } from 'fs/promises';
import { revalidatePath } from 'next/cache';

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (formData: FormData) => {
  'use server';
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  //   const entry = Object.fromEntries(formData);
  const newUser: User = { firstName, lastName, id: Date.now().toString() };
  await saveUser(newUser);
  revalidatePath('/actions');
};

export const fetchUsers = async (): Promise<User[]> => {
  const res = await readFile('users.json', { encoding: 'utf8' });
  const users = res ? JSON.parse(res) : [];

  return users;
};

export const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile('users.json', JSON.stringify(users));
};
