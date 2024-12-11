import Link from 'next/link';

const url = 'https://www.course-api.com/react-tours-project';

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(url);
  const data: Tour[] = await res.json();
  return data;
};

async function ToursPage() {
  const data = await fetchTours();

  return (
    <section className=" mt-8">
      {' '}
      {data.map((tour) => {
        return (
          <Link
            key={tour.id}
            href={`/tours/${tour.id}`}
            className="hover:text-emerald-500"
          >
            <h2 key={tour.id}>{tour.name}</h2>
          </Link>
        );
      })}
    </section>
  );
}
export default ToursPage;
