import { Profile } from "@/data/profile";
import Image from "next/image";

interface ProfileHeroProps{
    profile: Profile;
}

export default function ProfileHero({ profile }: ProfileHeroProps) {
    return (
        <section className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
            <div className="flex flex-col gap-5 items-center sm:flex-row">
                <div className="relative h-24 w-24 overflow-hidden rounded-full bg-gray-100 sm:h-28 sm:w-28">
                    <Image src={profile.avatar} sizes="100px" className="object-cover object-center" alt={`${profile.firstName} ${profile.lastName}`} fill/>
                </div>
            <div className="text-center sm:text-left">
                <p className="text-sm font-medium text-neutral-500">Профиль</p>
                <h1 className="mt-1 text-3xl font-semibold text-neutral-900 ">{profile.firstName} {profile.lastName}</h1>
            </div>
        </div>
        </section>
    );
}