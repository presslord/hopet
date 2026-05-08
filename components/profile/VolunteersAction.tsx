"use client"
import VolunteerModal from "@/components/profile/VolunteerModal"; 
import Link from "next/link";
import { useState } from "react";

export default function VolunteerAction() {
    const [isApplicationOpen, setIsApplicationOpen] = useState(false);
    return(
        <>
<h2 className="text-2xl font-bold  text-center">Хотите стать волонтером?</h2>
        <section className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#200f09] text-white p-5 shadow-sm">
                <p className="text-lg">Присоединиться к волонтерскому движению</p>
                <button type="button" onClick={() => setIsApplicationOpen(true)}
                className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#200f09] transition hover:bg-[#ffecce]">Оставить заявку</button>
            </div>
            <div className="rounded-2xl bg-[#200f09] text-white p-5 shadow-sm">
                <p className="text-lg">Посещение приюта: что важно знать</p>
                <Link href="/volunteerMemo" 
className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#200f09] transition hover:bg-[#ffecce]">Ознакомиться с памяткой</Link>
            </div>
        </section>
        <VolunteerModal
            isOpen={isApplicationOpen} onClose={() => setIsApplicationOpen(false)}
            />
        </>
    )
}
