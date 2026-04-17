export default function Home() {
  return (
      <div className="relative isolate overflow-hidden rounded-xl bg-white px-4 py-50 shadow-lg sm:px-6 sm:py-24 lg:py-64">
        <video className="absolute inset-0 w-full h-full object-cover -z-10 brightness-50" autoPlay muted loop>
          <source src="/cats-pets.mp4" />
        </video>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white sm:text-5xl">Добро пожаловать в Приючу!</h1>
          <p className="mt-3 text-base text-white sm:mt-4 sm:text-lg">Сайт помощи приютам и поиска домов для животных</p>
        </div>
      </div>
      );
    }