import NoLocationInfo from "@/components/NoLocationInfo";
import TemperatureComponent from "@/components/TemperatureComponent";
import { getResolvedLatLon } from "@/lib/location-info";

const TemperaturePage = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  const resolved = await getResolvedLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <TemperatureComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo />;
  }
};

export default TemperaturePage;
