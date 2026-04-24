"use client"
import { useState } from "react"
import Elite from "@/components/Elite";

export default function Footer(){
const [isApplicationOpen, setIsApplicationOpen] = useState(false);
return(
  <>
<footer className="mx-auto mb-3 mt-8 w-full max-w-7xl px-3 hidden sm:block sm:px-6 lg:px-8">
          <div className="rounded-xl bg-gray-800 px-4 py-6 text-center text-white sm:px-6">
            <p className="cursor-default">Сайт помощи приютам и поиска домов для животных</p>
            <p onClick={() => setIsApplicationOpen(true)} className="mt-2 text-gray-400 hover:underline cursor-pointer">Сайт разработан студентами НовГУ</p>
            <p className="mt-2">Приючу! {new Date().getFullYear()} </p>
          </div>
        </footer>
      <Elite isOpen={isApplicationOpen}  onClose={() => setIsApplicationOpen(false)} />
        </>
)
}