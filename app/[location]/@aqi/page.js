import AQIComponent from "@/components/AQIComponent";

const AQIPage = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  return (
    <>
      <AQIComponent lat={latitude} lon={longitude} />
    </>
  );
};

export default AQIPage;
