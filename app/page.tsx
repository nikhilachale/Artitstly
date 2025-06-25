import CategoryCardGrid from "@/components/CategoryCardGrid";
import CTASection from "@/components/CTASection";
import Feature from "@/components/Feature";
import Herosection from "@/components/Herosection";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function Home() {
  return (
   <div>

    <Herosection/>
    <Stats/>
    <CategoryCardGrid/>
    <Feature/>
    <CTASection/>
   </div>
  );
}
