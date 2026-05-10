
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
}

from "@/components/ui/carousel"
import { team } from "@/data/team";

export default function Page() {
    return(<>
            <div className="relative isolate overflow-hidden bg-white w-full h-full sm:py-0 shadow-lg rounded-lg border-none">
              <img src={"/team-avatars/all-photo.jpg"} className="absolute object-center inset-0 w-full h-full object-cover -z-10 brightness-70 shadow-lg"></img>
              <h1 className="text-center text-4xl pt-5 font-semibold text-gray-200 sm:pt-7 sm:text-5xl">Наша команда</h1>
              <div className="sm:py-75 py-53"></div>
            </div>

            <Carousel className="mt-12 w-full shadow-xl rounded-2xl bg-white">
              <CarouselContent>        
                {Array.from({ length: 10 }).map((_, index) => (
                  <div className="w-full h-full flex flex-row text-center px-10" key={index}>
                  <CarouselItem key={index}>
                      <Card className="border-none shadow-none">
                          <CardContent className="relative items-center rounded-2xl">
                            <img src={team[index].avatar} className="rounded-3xl min-w-65 object-cover object-center"></img>
                              <div className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-white ">
                                <p>{team[index].name}</p>
                                <p>{team[index].lastname}</p>
                              </div>                
                            </CardContent>
                      </Card>
                  </CarouselItem>
                  </div>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-3" />
                <CarouselNext className="right-5" />
            </Carousel>

                  <div className="mt-5 relative isolate overflow-hidden sm:pt-1 pb-0 rounded-2xl">
                <div>
                  <h1 className="text-4xl text-center font-bold text-black pt-12 pb-4">О создании проекта</h1>
                  <div className="p-3 m-3 text-justify">
                    <h2 className="text-lg">Веб-приложение создано студентами Новгородского университета как платформа для помощи питомцам из приютов Великого Новгорода. Наша цель - помочь животным обрести дом, а людям - верного друга</h2>

                    <h1 className="text-2xl pt-5 pb-3">Приютить питомца - важный и отвественный шаг</h1> 

                    <h2 className="text-lg">Мы поможем сделать его осознанно: предоставим полную информацию о животных - их характере, возрасте, состоянии здоровья и особенностях поведения </h2>

                    <h1 className="text-2xl pt-5 pb-3">Что Вы найдете на платформе?</h1> 
                    <h2 className="text-lg">Больше не нужно искать информацию в десятках постов в социальных сетях или приложениях:

                    анкеты животных, информация о приютах Великого Новгорода, способы и возможности помочь - собрали все важное в одном месте</h2>
                    <h1 className="text-2xl pt-5 pb-3 ">Для кого наша платформа?</h1> 

                    <h2 className="text-lg ">Мы объединили три группы неравнодушных людей: "кто хочет забрать", "кто готов помогать" и "кто ищет помощи"</h2>

                    <h1 className="text-3xl text-center pt-10">Вместе мы сделаем мир добрее и дадим шанс каждому животному обрести семью!</h1>
        </div>
                </div>
            </div>
          </>);    
}



