import { Profile } from "@/data/profile";
import Image from "next/image";

interface ProfileHeroProps{
    profile: Profile;
}

export default function ProfileHero({ profile }: ProfileHeroProps) {
    return (
        <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-gray-100 sm:h-28 sm:w-28">
                    <Image src={profile.avatar} sizes="100px" className="object-cover object-center" alt={`${profile.firstName} ${profile.lastName}`} fill/>
                </div>
            </div>
        </section>
    );
}