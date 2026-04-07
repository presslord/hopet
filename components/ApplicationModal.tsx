"use client"

interface ApplicationModalProps { isOpen: boolean; petName: string; shelterName?: string; onClose: () => void; }

export default function ApplicationModal({isOpen, petName, shelterName, onClose,}: ApplicationModalProps) { if (!isOpen) { return null;}
    return (
        <div className="fixed inset-0 z-60 flex items-center justify-center backdrop-blur-sm bg-black/45 p-4">
            <div className="absolute inset-0" onClick={onClose} aria-hidden="true"/>
            <section className="relative bg-white z-10 w-full max-w-lg rounded-2xl p-6 shadow-2xl sm:p-7">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-medium text-gray-800">Заявка</p>
                        <h2 className="mt-1 text-2xl font-bold text-gray-900">Забрать {petName} домой</h2>
                        <p className="mt-2 text-sm leading-6 text-gray-600">Оставьте контакты, и приют {shelterName} с Вами свяжется</p>
                    </div>
                    <button type="button" onClick={onClose} className="inline-flex h-10 w-10 items-center justify-center rounded-2xl max-h-8 text-center bg-gray-100 text-3xl leading-none text-gray-500 transition hover:bg-gray-200 hover:text-gray-900">&times;</button>
                </div>
                <form className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="application-name" className="mb-2 block text-sm font-medium text-gray-700">Ваше имя</label>
                        <input id="application-name" name="name" type="text" placeholder="Иван" className="w-full rounded-2xl border border-gray-200 px-4  py-3 text-sm text-gray-900 outline-none transition focus:border-gray-900" required/>
                    </div>
                    <div>
                        <label htmlFor="application-phone" className="mb-2 block text-sm font-medium text-gray-700">Ваш телефон</label>
                        <input id="application-phone" name="phone" type="phone-number" placeholder="+79999999999" className="w-full rounded-2xl border border-gray-200 px-4  py-3 text-sm text-gray-900 outline-none transition focus:border-gray-900" required/>
                    </div>
                    <div>
                        <label htmlFor="application-email" className="mb-2 block text-sm font-medium text-gray-700">Ваша почта</label>
                        <input id="application-email" name="email" type="email" placeholder="example@email.com" className="w-full rounded-2xl border border-gray-200 px-4  py-3 text-sm text-gray-900 outline-none transition focus:border-gray-900"/>
                    </div>
                    <div>
                        <label htmlFor="application-pet" className="text-sm font-medium">Есть ли у вас домашние животные?</label>
                        <div className="flex py-3 ml-1">
                            <input id="application-pet1" type="radio" name="app-pet"></input>
                            <label htmlFor="application-pet1" className="px-2 text-sm font-medium">Да</label>
                        </div>
                        <div className="flex ml-1">
                            <input id="application-pet2" type="radio" name="app-pet"></input>
                            <label htmlFor="application-pet2" className="ml-2 text-sm font-medium text-heading">Нет</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="application-childs" className="text-sm font-medium">Есть ли у вас дети?</label>
                        <div className="flex py-3 ml-1">
                            <input id="application-childs1" type="radio" name="app-childs"></input>
                            <label htmlFor="application-childs1" className="px-2 text-sm font-medium">Да</label>
                        </div>
                        <div className="flex ml-1">
                            <input id="application-childs2" type="radio" name="app-childs"></input>
                            <label htmlFor="application-childs2" className="ml-2 text-sm font-medium text-heading">Нет</label>
                        </div>
                    <div>
                        <label htmlFor="application-comment" className="pt-4 py-2 block text-sm font-medium text-gray-700">Комментарий</label>
                        <input id="application-comment" name="comment" type="text" placeholder="Дополнительно..." className="w-full rounded-2xl border border-gray-200 px-4  py-3 text-sm text-gray-900 outline-none transition focus:border-gray-900" required/>
                    </div>
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