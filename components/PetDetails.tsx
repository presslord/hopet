import { Pet } from "@/data/pets";

interface PetDetailsProps {
    pet : Pet;
}

interface DetailItemProps {
    label: string;
    value: string;
    status?: "positive" | "negative" | "neutral";
}

function DetailItem({ label, value, status = "neutral" }: DetailItemProps) {
    const statusColors = {
        positive: "text-green-500",
        negative: "text-red-500",
        neutral: "text-gray-600"
    };
    return (
        <div className="flex flex-col p-3 md:p-4 bg-gray-50 rounded-lg">
            <span className="text-xs md:text-sm text-gray-600 mb-1">{label}</span>
            <span className={`text-base md:text-xl font-medium ${statusColors[status]}`}>{value}</span>
        </div>
    );
}

export default function PetDetails( { pet }: PetDetailsProps) {
    
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 custom-font">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Информация о животном
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                <DetailItem label="Прививки" value={pet.vaccinated ? "Привит" : "Не привит"} status={pet.vaccinated ? "positive" : "negative"} />
                <DetailItem label="Приучен к лотку" value={pet.litterTrained ? "Да" : "Нет"} status={pet.litterTrained ? "positive" : "negative"} />
                <DetailItem label="Стерилизация" value={pet.sterilized ? "Стерилизован" : "Не стерилизован"} status={pet.sterilized ? "positive" : "neutral"} />
                <DetailItem label="Возраст" value={pet.age} status="neutral" />
                <div className="mt-4 md:mt-6">
                    <DetailItem label="Состояние здоровья" value={pet.health} status={pet.health === "Здоров" ? "positive" : "neutral"} />
                </div>
            </div>
        </div>
    );
}