import Link from 'next/link';

function page() {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <Link
        href="/about"
        className="text-xl text-blue-500 inline-block mt-8 ml-8"
      >
        About Page
      </Link>
    </div>
  );
}
export default page;
