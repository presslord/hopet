import ProfileHero from "@/components/profile/ProfileHero";
import ProfileStats from "@/components/profile/ProfileStats";
import VolunteerAction from "@/components/profile/VolunteersAction";
import { profile } from "@/data/profile";

export default function ProfilePage() {
    return (
        <div className="space-y-6">
            <ProfileHero profile={profile}/>
            <ProfileStats volunteerDays={profile.volunteerDays} city={profile.city} />
            <VolunteerAction />
        </div>
    );
}