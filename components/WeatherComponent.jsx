import { getWeatherData } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./Card";

export default async function WeatherComponent({ lat, lon }) {
  const { main, description } = await getWeatherData(lat, lon);
  return (
    <Card>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icon_rain.png"
          alt="rain icon"
          width={40}
          height={40}
        />
        <h3 className="feature-title">{main}</h3>
        <span className="feature-name">{description}</span>
      </div>
    </Card>
  );
}
