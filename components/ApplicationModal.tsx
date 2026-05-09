"use client"

import Link from "next/link";

interface ApplicationModalProps {isOpen: boolean; petName: string; shelterName?: string; onClose: () => void;}

export default function ApplicationModal({isOpen, petName, shelterName, onClose,}: ApplicationModalProps) {if(!isOpen) {return null;}
return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm">
        <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
        <section className="max-h-150 overflow-scroll no-scrollbar relative z-10 w-full max-w-lg rounded-2xl bg-white pr-2 pl-2 pb-6 pt-6 shadow-2xl sm:p-7"> 
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-gray-500">Заявка</p>
                    <h2 className="mt-1 text-2xl font-bold text-gray-900">Забрать {petName} домой</h2>
                    <p className="mt-2 text-sm leading-6 text-gray-600">Заполните заявку, и приют {shelterName} с Вами свяжется</p>
                </div>
<button type="button" onClick={onClose} className="inline-flex h-10 w-10 px-5 items-center justify-center rounded-[50%] bg-[#d86542]/10 text-[#d86542] hover:bg-[#d86542]/20 text-xl leading-none transition">
                    &times;
                </button>
                </div>

            <form className="mt-6 space-y-4">
                <div>
                    <label htmlFor="application-home-type" className="mb-2 block text-sm font-medium text-gray-700">
                        Тип жилья для содержания животного
                    </label>
                    <select name="home_type" id="application-home-type" className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-900">
                        <option value="apartment">Квартира</option>
                        <option value="house">Частный дом</option>
                    </select>
                </div>

                <div>
                    <fieldset className="rounded-2xl border border-gray-200 p-4">
                        <legend className="px-1 text-sm font-medium text-gray-700">Есть ли у вас дети?</legend>
                        <div className="mt-3 flex flex-col gap-3 text-sm text-gray-700">
                            <label className="flex items-center gap-3">
                                <input type="radio" name="have_children" value="yes" className="w-4 h-4"/>
                                <span>Да</span>
                            </label>
                            <label className="flex items-center gap-3">
                                <input type="radio" name="have_children" value="no" className="w-4 h-4"/>
                                <span>Нет</span>
                            </label>
                        </div>
                    </fieldset>
                </div>

                <div>
                    <fieldset className="rounded-2xl border border-gray-200 p-4">
                    <legend className="px-1 text-sm font-medium text-gray-700">Какого они возраста?</legend>
                    <div className="flex flex-row gap-4 flex-wrap">
                    <label className="flex items-start gap-3 rounded-2xl p-1 text-sm text-gray-700">
                        <input type="checkbox" name="age" className="mt-1 h-4 min-w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-700"/>
                        <span>0-5</span>
                    </label>
                    <label className="flex items-start gap-3 rounded-2xl p-1 text-sm text-gray-700">
                        <input type="checkbox" name="age" className="mt-1 h-4 min-w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-700"/>
                        <span>5-10</span>
                    </label>
                    <label className="flex items-start gap-3 rounded-2xl p-1 text-sm text-gray-700">
                        <input type="checkbox" name="age" className="mt-1 h-4 min-w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-700"/>
                        <span>10-15</span>
                    </label>
                    <label className="flex items-start gap-3 rounded-2xl p-1 text-sm text-gray-700">
                        <input type="checkbox" name="age" className="mt-1 h-4 min-w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-700"/>
                        <span>15-18</span>
                    </label>
                    </div>
                    </fieldset>
                </div>

                <div>
                    <label htmlFor="application_have_pets" className="mb-2 block text-sm font-medium text-gray-700">Есть ли у Вас другие животные? Перечислите их.</label>
                    <textarea name="have_pets" id="application_have_pets" rows={4} placeholder="Напишите тут какие именно животные у вас есть" className="w-full resize-none rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-900"></textarea>
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