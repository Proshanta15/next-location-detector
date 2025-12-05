import TemperatureComponent from "@/components/TemperatureComponent";

const TemperaturePage = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  return (
    <>
      <TemperatureComponent lat={latitude} lon={longitude} />
    </>
  );
};

export default TemperaturePage;
