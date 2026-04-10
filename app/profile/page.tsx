import ProfileHero from "@/components/profile/ProfileHero";
import { profile } from "@/data/profile";

export default function ProfilePage() {
    return (
        <div className="space-y-6">
            <ProfileHero profile={profile}/>
        </div>
    );
}