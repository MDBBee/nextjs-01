function page({ params }: { params: { id: string } }) {
  console.log(params.id);

  return <div>page</div>;
}
export default page;
