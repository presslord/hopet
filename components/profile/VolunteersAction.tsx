"use client"
import VolunteerModal from "@/components/profile/VolunteerModal"; 
import { useState } from "react";

export default function VolunteerAction() {
    const [isApplicationOpen, setIsApplicationOpen] = useState(false);
    return(
        <>
        <section className="rounded-2xl bg-neutral-900 p-6 text-white shadow-lg sm:p-8">
            <h2 className="text-2xl font-semibold">Хотите помочь животным и стать волонтером?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">Присоединяйтесь к волонтерской программе</p>
            <button type="button" onClick={() => setIsApplicationOpen(true)} className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900">Оставить заявку</button>
        </section>
        <VolunteerModal isOpen={isApplicationOpen}  onClose={() => setIsApplicationOpen(false)} />
        </>
    )
}