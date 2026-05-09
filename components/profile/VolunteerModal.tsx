"use client"

import Link from "next/link";

interface VolunteerModalProps {isOpen: boolean; onClose: () => void;}

export default function VolunteerModal({isOpen, onClose}: VolunteerModalProps) {if(!isOpen) {return null;}
return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm">
        <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
        <section className="max-h-150 overflow-scroll no-scrollbar relative z-10 w-full max-w-lg rounded-2xl bg-white pr-2 pl-2 pb-6 pt-6 shadow-2xl sm:p-7"> 
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-gray-500">Заявка</p>
                    <h2 className="mt-1 text-2xl font-bold text-gray-900">Стать волонтером</h2>
                </div>
                <button type="button" onClick={onClose} className="inline-flex h-10 w-10 px-5 items-center justify-center rounded-[50%] bg-[#d86542]/10 text-[#d86542] hover:bg-[#d86542]/20 text-xl leading-none transition">
                    &times;
                </button>            
                </div>

            <form className="mt-6 space-y-4">
                <div>
                    <label htmlFor="application-is-volunteer" className="mb-2 block text-sm font-medium text-gray-700">
                        Являетесь ли Вы действующим волонтером в другой организации?
                    </label>
                    <select name="is-volunteer" id="application-is-volunteer" className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-900">
                        <option value="no">Нет</option>
                        <option value="yes">Да</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="application-experience-volunteer" className="mb-2 block text-sm font-medium text-gray-700">
                        Был ли опыт работы в приютах?
                    </label>
                    <select name="experience-volunteer" id="application-experience-volunteer" className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-900">
                        <option value="no">Нет</option>
                        <option value="yes">Да</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="application-name-shelters" className="mb-2 block text-sm font-medium text-gray-700">
                        Выберете приют, которому Вы хотите помочь.
                    </label>
                    <select name="name-shelters" id="application-name-shelters" className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-900">
                        <option value="1">Надежда</option>
                        <option value="2">Вера</option>
                        <option value="3">Любовь</option>
                    </select>
                </div>

                <div>
                    <fieldset className="rounded-2xl border border-gray-200 p-4">
                    <legend className="px-1 text-sm font-medium text-gray-700">Чем бы Вы могли помочь?</legend>
                    <label className="flex items-start gap-3 rounded-2xl p-1 text-sm text-gray-700">
                        <input type="checkbox" name="help" className="mt-1 h-4 min-w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-700"/>
                        <span>Уход за животными</span>
                    </label>
                    <label className="flex items-start gap-3 rounded-2xl p-1 text-sm text-gray-700">
                        <input type="checkbox" name="help" className="mt-1 h-4 min-w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-700"/>
                        <span>Хозяйственно-бытовые работы</span>
                    </label>

                    <label className="flex items-start gap-3 rounded-2xl p-1 text-sm text-gray-700">
                        <input type="checkbox" name="help" className="mt-1 h-4 min-w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-700"/>
                        <span>Фотографирование животных</span>
                    </label>
                    <label className="flex items-start gap-3 rounded-2xl p-1 text-sm text-gray-700">
                        <input type="checkbox" name="help" className="mt-1 h-4 min-w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-700"/>
                        <span>Организация проведения мероприятий</span>
                    </label>
                    <label className="flex items-start gap-3 rounded-2xl p-1 text-sm text-gray-700">
                        <input type="checkbox" name="help" className="mt-1 h-4 min-w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-700"/>
                        <span>Заполнение анкет животных</span>
                    </label>
                    <label className="flex items-start gap-3 rounded-2xl p-1 text-sm text-gray-700">
                        <input type="checkbox" name="help" className="mt-1 h-4 min-w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-700"/>
                        <span>Перевозки</span>
                    </label>
                    </fieldset>
                </div>

                <div>
                    <fieldset className="rounded-2xl border border-gray-200 p-4">
                    <legend className="px-1 text-sm font-medium text-gray-700">В какие дни недели Вы готовы помогать?</legend>
                    <div className="flex flex-row gap-0.5 flex-wrap">
                    <label className="flex items-start gap-3 rounded-2xl p-1 text-sm text-gray-700">
                        <input type="checkbox" name="week" className="mt-1 h-4 min-w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-700"/>
                        <span>Пн</span>
                    </label>
                    <label className="flex items-start gap-3 rounded-2xl p-1 text-sm text-gray-700">
                        <input type="checkbox" name="week" className="mt-1 h-4 min-w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-700"/>
                        <span>Вт</span>
                    </label>
                    <label className="flex items-start gap-3 rounded-2xl p-1 text-sm text-gray-700">
                        <input type="checkbox" name="week" className="mt-1 h-4 min-w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-700"/>
                        <span>Ср</span>
                    </label>
                    <label className="flex items-start gap-3 rounded-2xl p-1 text-sm text-gray-700">
                        <input type="checkbox" name="week" className="mt-1 h-4 min-w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-700"/>
                        <span>Чт</span>
                    </label>
                    <label className="flex items-start gap-3 rounded-2xl p-1 text-sm text-gray-700">
                        <input type="checkbox" name="week" className="mt-1 h-4 min-w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-700"/>
                        <span>Пт</span>
                    </label>
                    <label className="flex items-start gap-3 rounded-2xl p-1 text-sm text-gray-700">
                        <input type="checkbox" name="week" className="mt-1 h-4 min-w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-700"/>
                        <span>Сб</span>
                    </label>
                    <label className="flex items-start gap-3 rounded-2xl p-1 text-sm text-gray-700">
                        <input type="checkbox" name="week" className="mt-1 h-4 min-w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-700"/>
                        <span>Вс</span>
                    </label>
                    </div>
                    </fieldset>
                </div>
                <div>
                    <label className="flex items-start gap-3 rounded-2xl border border-gray-200 p-4 text-sm text-gray-700">
                        <input type="checkbox" name="policy" className="mt-1 h-4 min-w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-700"/>
                        <span>Согласие на обработку <Link href="/personalData" className="text-blue-600 hover:text-blue-400 hover:underline">персональных данных</Link></span>
                    </label>
                </div>
 <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                    <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full border border-[#200f09] bg-[#200f09] text-white px-5 py-3 text-sm font-medium  transition hover:bg-[#200f09]/85"
                    >
                    Отправить
                    </button>
                    <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex items-center justify-center text-sm font-medium rounded-full px-5 py-2.5 border border-[#d86542]/20 bg-[#d86542]/10 text-[#d86542] hover:bg-[#d86542] hover:text-white"
                    >
                    Отмена
                    </button>
                </div>
            </form>
        </section>
    </div>    
);
}