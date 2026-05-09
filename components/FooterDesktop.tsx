"use client"
import { useState } from "react"
import Elite from "@/components/Elite";
import Link from "next/link";

export default function Footer(){
const [isApplicationOpen, setIsApplicationOpen] = useState(false);
return(
  <>
<footer className="mx-auto mb-3 mt-8 w-full max-w-7xl px-3 hidden sm:block sm:px-6 lg:px-8">
          <div className="rounded-xl bg-[#200f09] px-4 py-6 text-center text-white sm:px-6">
            <p className="cursor-default">Сайт помощи приютам и поиска домов для животных</p>
            <Link href={"/about"} className="flex justify-center my-2 text-gray-400 hover:underline cursor-pointer">Сайт разработан студентами НовГУ</Link>
            <Link href="/policypage" className="text-gray-400 hover:underline cursor-pointer">Политика конфиденциальности</Link>
            <p className="mt-2">Приючу! {new Date().getFullYear()} ©</p>
          </div>
        </footer>
      <Elite isOpen={isApplicationOpen}  onClose={() => setIsApplicationOpen(false)} />
        </>
)
}