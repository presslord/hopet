
interface ProfileStatsProps {
    volunteerDays: number;
    city: string;
}

export default function ProfileStats({
    volunteerDays,
    city
 } : ProfileStatsProps) {
    return(
        <section className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-lg">
                <p className="text-sm font-medium text-neutral-500">Дней будучи волонтером</p>
                <p className="mt-2 text-2xl font-semibold text-neutral-900">{volunteerDays}</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-lg">
                <p className="text-sm font-medium text-neutral-500">Город</p>
                <p className="mt-2 text-2xl font-semibold text-neutral-900">{city}</p>
            </div>
        </section>
    )
 }