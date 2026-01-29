const USERS_API_ENDPOINT = 'https://randomuser.me/api?results=50';

export async function fetchCallingUsers(page) {
  const res = await fetch(`${USERS_API_ENDPOINT}&page=${page}`);
  if (!res.ok) {
    throw new Error('Failed fetching users');
    }

  const json = await res.json();

  return json.results;
}