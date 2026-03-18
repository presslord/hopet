"use client";

import { useState } from "react";

const categories = ["Все", "Кошки", "Собаки"] as const;
type Category = typeof categories[number];

interface FilterButtonsProps {
    onFilterChange: (category: Category) => void;
}

export default function FilterButtonsProps({ onFilterChange: onFilterChange }: FilterButtonsProps) {
    
    const [activeTab, setActiveTab] = useState<Category>("Все");
    
    const handleClick = (category: Category) => {
        setActiveTab(category);
        onFilterChange(category);
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-2 py-2 sm:gap-3 sm:py-4 md:py-6">
            {categories.map((category) => (
                <button 
                key={category} 
                type="button"
                onClick={() => handleClick(category)}
                className={`min-w-24 rounded-lg border px-4 py-2 text-sm font-medium shadow-lg transition-all duration-150 sm:px-5 sm:py-2.5 ${ activeTab === category ? 
                 "bg-gray-800 text-white border-gray-800" : "text-gray-700 hover:border-gray-400 active:bg-gray-300"}`}>
                    {category}
                </button>
            ))}
        </div>
    );
}

export type {Category}