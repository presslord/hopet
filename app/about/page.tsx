"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} 
from "@/components/ui/carousel"

export default function Page() {
    return(<>
          <div className="relative isolate overflow-hidden bg-white pt-12 sm:pt-10 sm:pb-152 shadow-lg rounded-lg border-none ">
        <img src={"photo"} className="absolute inset-0 w-full h-full object-cover -z-10 brightness-50 shadow-lg">
        </img>
        <div className="max-w-2xl ml-6 pb-4 ">
          <h1 className="text-5xl font-semibold text-gray-200 custom-font">Наша команда</h1>
        </div>
      </div>
    <Carousel className="mt-5 w-full shadow-xl rounded-2xl bg-white">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="flex flex-row justify-between">
            <div className="p-1 w-full h-full block1">
              <Card className="border-none shadow-none">
                <CardContent className="flex flex-col aspect-square items-center rounded-2xl">
                  <img src={"test.jpg"} className="max-w-45 rounded-full"></img>
                  <span className="text-3xl font-medium mt-2 custom-font">Имя, должность</span>
                    <span className="text-2xl font-medium mt-3 text-center max-w-90 custom-font">В своём стремлении улучшить пользовательский опыт мы упускаем,
                                                                                        что диаграммы связей своевременно верифицированы.</span>
                </CardContent>
              </Card>
            </div>
            <div className="p-1 w-full h-full">
              <Card className="border-none shadow-none h-120 block1">
                <CardContent className="flex flex-col aspect-square items-center rounded-2xl">
                  <img src={"test.jpg"} className="max-w-45 rounded-full "></img>
                  <span className="text-3xl font-medium mt-2 custom-font">Имя, должность</span>
                    <span className="text-2xl font-medium mt-3 text-center max-w-90 custom-font">В своём стремлении улучшить пользовательский опыт мы упускаем,
                                                                                        что диаграммы связей своевременно верифицированы.</span>
                </CardContent>
              </Card>
            </div>
            <div className="p-1 w-full h-full">
              <Card className="border-none shadow-none h-120 block1">
                <CardContent className="flex flex-col aspect-square items-center rounded-2xl">
                  <img src={"test.jpg"} className="max-w-45 rounded-full "></img>
                  <span className="text-3xl font-medium mt-2 custom-font">Имя, должность</span>
                    <span className="text-2xl font-medium mt-3 text-center max-w-90 custom-font">В своём стремлении улучшить пользовательский опыт мы упускаем,
                                                                                        что диаграммы связей своевременно верифицированы.</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
          <div className="mt-5 relative isolate overflow-hidden bg-white sm:pt-1 py-24 sm:py-24 pb-0 rounded-2xl shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-medium text-black font-mono pt-4 custom-font">О создании проекта</h1>
          <p className="pt-5 pl-10 pr-10 pb-0 font-medium font-mono text-center indent-4 text-xl leading-7 custom-font">В Современные технологии достигли такого уровня, что перспективное
             планирование является качественно новой ступенью поэтапного и последовательного развития общества. Как уже неоднократно упомянуто, представители современных 
             социальных резервов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ограничены исключительно образом мышления. 
             С другой стороны, постоянный количественный рост и сфера нашей активности выявляет срочную потребность прогресса профессионального сообщества. В своём 
             стремлении улучшить пользовательский опыт мы упускаем, что независимые государства разоблачены. Учитывая ключевые сценарии поведения, граница обучения кадров 
             выявляет срочную потребность направлений прогрессивного развития. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные 
             исследования, инициированные исключительно синтетически, описаны максимально подробно. Не следует, однако, забывать, что постоянное информационно-пропагандистское
              обеспечение нашей деятельности напрямую зависит от системы массового участия.</p>
        </div>
    </div>
    </>);    
}



