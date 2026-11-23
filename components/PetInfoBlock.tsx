"use client";

import { Pet } from "@/data/pets";
import Image from "next/image";
import Link from "next/link";
import { Shelter } from "@/data/shelters";
import ApplicationModal from "@/components/ApplicationModal";
import { useEffect, useState } from "react";

interface PetInfoBlockProps {
    pet : Pet;
    shelter?: Shelter;
}

export default function PetInfoBlock({ pet, shelter }: PetInfoBlockProps) {
    const [isApplicationOpen, setIsApplicationOpen] = useState(false);

    useEffect(() => {
        const transitionPetId = window.sessionStorage.getItem("pet-card-transition");
        const isTransition = transitionPetId === String(pet.id);

        window.requestAnimationFrame(() => {
            window.dispatchEvent(new CustomEvent("pet-detail-ready", { detail: { petId: pet.id } }));
        });

        if (!isTransition) {
            return;
        }

        const handleOverlayFinished = (event: Event) => {
            if (!(event instanceof CustomEvent) || event.detail?.petId !== pet.id) {
                return;
            }

            document.body.classList.remove("pet-transition-active");
            window.sessionStorage.removeItem("pet-card-transition");
        };

        window.addEventListener("pet-transition-overlay-finished", handleOverlayFinished);

        return () => {
            window.removeEventListener("pet-transition-overlay-finished", handleOverlayFinished);
            document.body.classList.remove("pet-transition-active");
        };
    }, [pet.id]);

    return (
        <>
    <div className="pet-profile-card">
        <div className="pet-profile-grid">
            <div className="pet-profile-media bg-gray-200">
                {pet.media.type === "video" ? (
                <video className="h-full w-full object-center object-cover" autoPlay muted loop playsInline>
                    <source src={pet.media.src} type ="video/mp4" />
                    </video>
                ) : (
                    <Image
                    src={pet.media.src}
                    alt={pet.media.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-center object-cover" />
                )}

            </div>

            <div className="pet-profile-content">
                <h1 className="pet-profile-title">{pet.name}</h1>
                <p className="pet-profile-meta">
                    {pet.type === "cat" ? "Кошка" : "Собака"}, {pet.age} год(а)
                </p>
                <div className="pet-profile-description">
                    <p>{pet.description}</p>
                </div>
                {shelter && (
                <div className="pet-profile-shelter-card">
                    <div className="pet-profile-shelter-info">
                        <div className="pet-profile-shelter-avatar bg-gray-100 shadow-2xl">
                            <Image src={shelter.avatarImage} alt={"Shelter avatar"} fill sizes="64px" className="object-cover" />
                        </div>
                        <div>
                            <p className="pet-profile-shelter-label">Приют</p>
                            <h2 className="pet-profile-shelter-name">{shelter.name}</h2>
                            <p className="pet-profile-shelter-details">{shelter.city} | {shelter.workingHours}</p>
                        </div>
                    </div>
                    <div className="pet-profile-actions">
                            <Link
                            href={`/shelters/${shelter.id}`}
                            className="pet-profile-action pet-profile-action-secondary hover:bg-[#d86542] hover:text-white">
                                Перейти в приют
                            </Link>
                            <button 
                            type="button"
                            onClick={() => setIsApplicationOpen(true)}
                            className="pet-profile-action pet-profile-action-primary cursor-pointer transition hover:bg-[#200f09]/85">
                                Забрать питомца
                            </button>
                            
                        </div>
                </div>
            )}
            </div>
        </div>
    </div>
    <ApplicationModal isOpen={isApplicationOpen} petName={pet.name} shelterName={shelter?.name} onClose={() => setIsApplicationOpen(false)}/>
    </>
   );
}
