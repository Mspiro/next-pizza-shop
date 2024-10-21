import { Inter } from "next/font/google";
import CarouselComponent from "@/components/home/Carousel";
import Card from "@/components/home/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <CarouselComponent />
      <Card />
    </>
  );
}
