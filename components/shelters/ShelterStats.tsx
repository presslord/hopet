interface ShelterStatsProps {
    founded: string;
    volunteers: number;
    petsCount: number;
}

export default function ShelterStats({
    petsCount,
}: ShelterStatsProps) {
    return (
        <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex min-h-44 flex-col justify-center rounded-xl bg-[linear-gradient(40deg,#d86542_22%,#efb05c_90%)] p-5 text-center sm:min-h-52">
                <p className="text-sm text-white">Ищут дом</p>
                <p className="mt-3 text-5xl text-white font-semibold tracking-tight text-amber-950 sm:text-6xl">
                    { petsCount }
                </p>
            </div>
        </div>
    ); 
}