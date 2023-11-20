"use client";

import { Poppins } from "next/font/google";
import ContentType from "@/components/ContentType";
import WizardBackNext from "@/components/WizardBackNext";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export default function Home() {
  const onNextClick = () => {
    alert("Next clicked");
  };

  const onBackClick = () => {
    alert("Back clicked");
  };

  return (
    <main className={`pt-[30px] ${poppins.className}`}>
      <ContentType />
      <WizardBackNext onBackClick={onBackClick} onNextClick={onNextClick} />
    </main>
  );
}
