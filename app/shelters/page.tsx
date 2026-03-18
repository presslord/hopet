import SheltersHero from "@/components/shelters/SheltersHero";
import ShelterCard from "@/components/shelters/ShelterCard";
import { shelters } from "@/data/shelters"

export default function Home() {
    return(
        <div className="space-y-8 sm:space-y-10">
            <SheltersHero></SheltersHero>
            <section className="grid gap-6 lg:grid-cols-3">
                {shelters.map((shelter) => (
                    <ShelterCard key={shelter.id} shelter={shelter}/>
                ))}
            </section>
        </div>
        
)
}