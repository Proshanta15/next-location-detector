import WindComponent from "@/components/WindComponent";

const WindPage = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  return (
    <>
      <WindComponent lat={latitude} lon={longitude} />
    </>
  );
};

export default WindPage;
