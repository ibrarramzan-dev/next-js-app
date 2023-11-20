import Image from "next/image";
import ContentType from "@/components/ContentType";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export default function Home() {
  return (
    <main className={`flex justify-center px-8 py-[30px] ${poppins.className}`}>
      <ContentType />
    </main>
  );
}
