"use client"

interface VolunteerModalProps { isOpen: boolean; onClose: () => void; }

export default function ApplicationModal({isOpen, onClose}: VolunteerModalProps) { if (!isOpen) { return null;}
    return (
        <div className="fixed inset-0 z-60 flex items-center justify-center backdrop-blur-sm bg-black/45 p-4">
            <div className="absolute inset-0" onClick={onClose} aria-hidden="true"/>
            <section className="relative bg-white z-10 w-full max-w-lg rounded-2xl p-6 shadow-2xl sm:p-7">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-medium text-gray-800">Заявка</p>
                        <h2 className="mt-1 text-2xl font-bold text-gray-900">Ответьте на несколько вопросов</h2>
                    </div>
                    <button type="button" onClick={onClose} className="inline-flex h-10 w-10 items-center justify-center rounded-2xl sm:max-h-full max-h-8 text-center bg-gray-100 text-3xl leading-none text-gray-500 transition hover:bg-gray-200 hover:text-gray-900">&times;</button>
                </div>
                <form className="mt-6 space-y-4">
                    <fieldset className="rounded-2xl border border-gray-200 p-4">
                            <legend className="px-1 text-sm font-medium text-gray-700">Чем бы Вы хотели помочь?</legend>
                            <div className="flex flex-col gap-3 text-sm text-gray-700">
                                <label className="flex items-center gap-3">
                                    <input type="checkbox" name="other_pets"/>
                                    <span>Уход за животными</span>
                                </label>
                                <label className="flex items-center gap-3">
                                    <input type="checkbox" name="other_pets"/>
                                    <span>Фотографирование животных</span>
                                </label>
                                <label className="flex items-center gap-3">
                                    <input type="checkbox" name="other_pets"/>
                                    <span>Организация мероприятий</span>
                                </label>
                                <label className="flex items-center gap-3">
                                    <input type="checkbox" name="other_pets"/>
                                    <span>Уборка вольеров или помещений</span>
                                </label>
                                <label className="flex items-center gap-3">
                                    <input type="checkbox" name="other_pets"/>
                                    <span>Заполнение анкет животных</span>
                                </label>
                            </div>
                        </fieldset>
                    <div>
                        <label htmlFor="applicatiome-home-type" className="mb-2 block text-sm font-medium text-gray-700">
                            Где будет жить питомец?
                        </label>
                        <select name="home_type" id="application-home-type" className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-900">
                            <option value="house">Частный дом</option>
                            <option value="appartment">Квартира</option>
                        </select>
                    </div>
                    <div>
                        <fieldset className="rounded-2xl border border-gray-200 p-4">
                            <legend className="px-1 text-sm font-medium text-gray-700">Есть ли у Вас домашние животные?</legend>
                            <div className="flex flex-col gap-3 text-sm text-gray-700">
                                <label className="flex items-center gap-3">
                                    <input type="radio" name="other_pets" value="yes"/>
                                    <span>Да</span>
                                </label>
                                <label className="flex items-center gap-3">
                                    <input type="radio" name="other_pets" value="yes"/>
                                    <span>Нет</span>
                                </label>
                            </div>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset className="rounded-2xl border border-gray-200 p-4">
                            <legend className="px-1 text-sm font-medium text-gray-700">Есть ли у Вас дети?</legend>
                            <div className="flex flex-col gap-3 text-sm text-gray-700">
                                <label className="flex items-center gap-3">
                                    <input type="radio" name="have_childs" value="yes"/>
                                    <span>Да</span>
                                </label>
                                <label className="flex items-center gap-3">
                                    <input type="radio" name="have_childs" value="yes"/>
                                    <span>Нет</span>
                                </label>
                            </div>
                        </fieldset>
                    </div>
                    <div>
                        <label htmlFor="application-email" className="mb-2 block text-sm font-medium text-gray-700">Ваша почта</label>
                        <input id="application-email" name="email" type="email" placeholder="example@email.com" className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-900"/>
                    </div>
                    <div>
                        <label htmlFor="confidential-agreement" className="flex items-start gap-3 rounded-2xl border border-gray-200 p-4 text-sm text-gray-700">
                            <input type="checkbox" name="policy" className="mt-1 h-4 w-4 rounded-2xl border border-gray-300 text-gray-900 focus:ring-gray-700"></input>
                            <span>Согласие на обработку персональных данных</span>
                        </label>
                    </div>
                    <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                        <button type="submit" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-700">Отправить</button>
                        <button type="button" onClick={onClose} className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-100">Отмена</button>
                    </div>
                </form>
            </section>            
        </div>
    )
}