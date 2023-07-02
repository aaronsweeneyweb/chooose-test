export type TripItemProps = {
  id: number;
  title: string;
  countries: number;
  days: number;
  emissionsValue: number;
  emissionsUnit: "kg" | "t";
  rating: number;
  imageUrl: string;
}