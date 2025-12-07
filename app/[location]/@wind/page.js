import NoLocationInfo from "@/components/NoLocationInfo";
import WindComponent from "@/components/WindComponent";
import { getResolvedLatLon } from "@/lib/location-info";

const WindPage = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  const resolved = await getResolvedLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <WindComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo />;
  }
};

export default WindPage;
