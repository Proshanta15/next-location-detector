import { getAQIData } from "@/lib/weather-info";

export default async function AQIComponent({ lat, lon }) {
  const { main, components } = await getAQIData(lat, lon);
  console.log(main, components);

  return <div>AQI</div>;
}
