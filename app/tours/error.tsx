'use client';

function error({ error }: { error: Error }) {
  console.log(error);

  return <div>There was an error..</div>;
}
export default error;
