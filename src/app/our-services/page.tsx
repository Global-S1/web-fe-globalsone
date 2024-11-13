import { Descriptons } from "./components/descriptions";
import { Hero } from "./components/hero";

export default async function OurServices() {
  return (
    <>
      <Hero />
      <Descriptons />
    </>
  );
}

export async function generateStaticParams() {
  return [{}];
}
