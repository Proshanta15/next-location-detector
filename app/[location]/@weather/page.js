import NoLocationInfo from "@/components/NoLocationInfo";
import WeatherComponent from "@/components/WeatherComponent";
import { getResolvedLatLon } from "@/lib/location-info";

const WeatherPage = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  const resolved = await getResolvedLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <WeatherComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo />;
  }
};

export default WeatherPage;
