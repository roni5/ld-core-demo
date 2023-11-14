import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react"

const AirlineInfoCard = ({
  headerTitleText,
  subtitleText,
  imgSrc,
}: {
  headerTitleText: string;
  subtitleText: string;
  imgSrc: any;
}) => {
  return (
    <Card className="flex sm:w-[340px] sm:h-[460px] border-0 flex-col animate-fade-in grid-rows-2
     bg-slate-900 z-0 !rounded-none relative">
      <CardHeader className="!space-y-0 !p-0">
        <img src={imgSrc.src} className="w-full h-full object-fit" />
      </CardHeader>
      <div className="pt-[2.5rem] px-[2.5rem] flex flex-col gap-y-2 bg-gradient-to-b from-[#58595B] to-[#212121] h-full">
        <CardTitle className="!font-normal !text-left">
          <p className=" text-2xl text-gray-300 ">{headerTitleText}</p>
        </CardTitle>
        <CardContent className="p-0 ">
          <p className="text-gray-300 pt-2 text-lg !font-normal text-left">{subtitleText}</p>
        </CardContent>

        <ArrowRight className="h-6 w-6 text-airlinePurple cursor-pointer mt-auto absolute bottom-0 mb-6" />
      </div>
    </Card>
  );
};

export default AirlineInfoCard;
