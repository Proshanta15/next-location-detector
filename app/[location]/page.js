import LocationInfo from "@/components/LocationInfo";
import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLon } from "@/lib/location-info";

export default async function Home({ params, searchParams }) {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  const resolved = await getResolvedLatLon(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <LocationInfo lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo locationName={location} />;
  }
}
