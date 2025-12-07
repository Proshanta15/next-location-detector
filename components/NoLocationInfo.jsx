import Link from "next/link";
import Card from "./Card";

export default function NoLocationInfo({ locationName }) {
  return (
    <Card>
      <h6>No location found in {locationName}</h6>
      <Link href={`/`}>Back to your current Location</Link>
    </Card>
  );
}
