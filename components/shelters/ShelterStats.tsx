interface ShelterStatsProps {
    founded: string;
    volunteers: number;
    petsCount: number;
}

export default function ShelterStats({
    founded,
    volunteers,
    petsCount,
}: ShelterStatsProps) {
    return (
        <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex min-h-44 flex-col justify-center rounded-xl bg-gray-50 p-5 text-center sm:min-h-52">
                <p className="text-sm text-gray-500">Основан</p>
                <p className="mt-3 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                    { founded }
                </p>
            </div>
            <div className="flex min-h-44 flex-col justify-center rounded-xl bg-gray-50 p-5 text-center sm:min-h-52">
                <p className="text-sm text-gray-500">Волонтеров</p>
                <p className="mt-3 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                    { volunteers }
                </p>
            </div>
            <div className="flex min-h-44 flex-col justify-center rounded-xl bg-[linear-gradient(40deg,#d86542_22%,#efb05c_90%)] p-5 text-center sm:min-h-52">
                <p className="text-sm text-white">Ищут дом</p>
                <p className="mt-3 text-5xl text-white font-semibold tracking-tight text-amber-950 sm:text-6xl">
                    { petsCount }
                </p>
            </div>
        </div>
    ); 
}