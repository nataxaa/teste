"use client"
import { Footer } from "@/components/footer";
import { Header } from "@/components/Header"
import { EightPage } from "@/pages/EightPage";
import { FirstPage } from "@/pages/FirstPage";
import { FivePage } from "@/pages/FivePage";
import { FourthPage } from "@/pages/FourthPage";
import { SecondPage } from "@/pages/SecondPage";
import { SevenPage } from "@/pages/SevenPage";
import { SixPage } from "@/pages/SixPage";
import { ThirdPage } from "@/pages/ThirdPage";


export default function Home() {
  return (
    <div>
      <Header/>
      <FirstPage/>
      <SecondPage/>
      <ThirdPage/>
      <FourthPage/>
      <FivePage/>
      <SixPage/>
      <SevenPage/>
      <EightPage/>
      <Footer/>
    </div>
  );
}
