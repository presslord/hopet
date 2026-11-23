import Image from "next/image";
interface EliteProps { isOpen: boolean; onClose: () => void;}

export default function Elite({isOpen, onClose}: EliteProps) { if (!isOpen) { return null;}
    return (
        <div className="fixed inset-0 z-60 flex items-center justify-center backdrop-blur-sm bg-black/45 p-4">
            <div className="absolute inset-0 " onClick={onClose} aria-hidden="true" />
            <section className="relative bg-white z-10 w-full max-w-lg rounded-2xl p-6 shadow-2xl sm:p-7 max-h-150 overflow-scroll no-scrollbar">
                            <div className="flex flex-col gap-5 items-center sm:flex-row">
                                <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-gray-100 sm:h-28 sm:w-28">
                                    <Image src="/profile/avatar.jpg" alt="Башуков Эдуард" fill sizes="112px" className="object-cover" />
                                </div>
                            <div className="text-center sm:text-left">
                                <p className="text-sm font-medium text-neutral-500">Frontend-разработчик</p>
                                <h1 className="mt-1 text-2xl font-semibold text-neutral-900">Башуков Эдуард</h1>
                            </div>
                        </div>
                            <div className="flex flex-col gap-5 items-center mt-5 sm:flex-row">
                                <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-gray-100 sm:h-28 sm:w-28">
                                    <Image src="/profile/avatar.jpg" alt="Башуков Эдуард" fill sizes="112px" className="object-cover" />
                                </div>
                            <div className="text-center sm:text-left">
                                <p className="text-sm font-medium text-neutral-500">Backend-разработчик</p>
                                <h1 className="mt-1 text-2xl font-semibold text-neutral-900">Вердеревский Егор</h1>
                            </div>
                        </div>
                                                    <div className="flex flex-col gap-5 items-center mt-5 sm:flex-row">
                                <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-gray-100 sm:h-28 sm:w-28">
                                    <Image src="/profile/avatar.jpg" alt="Башуков Эдуард" fill sizes="112px" className="object-cover" />
                                </div>
                            <div className="text-center sm:text-left">
                                <p className="text-sm font-medium text-neutral-500">Frontend-разработчик</p>
                                <h1 className="mt-1 text-2xl font-semibold text-neutral-900">Демидова Софья</h1>
                            </div>
                        </div>
                                                    <div className="flex flex-col gap-5 items-center mt-5 sm:flex-row">
                                <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-gray-100 sm:h-28 sm:w-28">
                                    <Image src="/profile/avatar.jpg" alt="Башуков Эдуард" fill sizes="112px" className="object-cover" />
                                </div>
                            <div className="text-center sm:text-left">
                                <p className="text-sm font-medium text-neutral-500">Backend-разработчик</p>
                                <h1 className="mt-1 text-2xl font-semibold text-neutral-900">Исаева Светлана</h1>
                            </div>
                        </div>
                            <div className="flex flex-col gap-5 items-center mt-5 sm:flex-row">
                                <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-gray-100 sm:h-28 sm:w-28">
                                    <Image src="/profile/avatar.jpg" alt="Башуков Эдуард" fill sizes="112px" className="object-cover" />
                                </div>
                            <div className="text-center sm:text-left">
                                <p className="text-sm font-medium text-neutral-500">Frontend-разработчик</p>
                                <h1 className="mt-1 text-2xl font-semibold text-neutral-900"></h1>
                            </div>
                        </div>
                                                    <div className="flex flex-col gap-5 items-center mt-5 sm:flex-row">
                                <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-gray-100 sm:h-28 sm:w-28">
                                    <Image src="/profile/avatar.jpg" alt="Башуков Эдуард" fill sizes="112px" className="object-cover" />
                                </div>
                            <div className="text-center sm:text-left">
                                <p className="text-sm font-medium text-neutral-500">Frontend-разработчик</p>
                                <h1 className="mt-1 text-2xl font-semibold text-neutral-900">Башуков Эдуард</h1>
                            </div>
                        </div>
                                                    <div className="flex flex-col gap-5 items-center mt-5 sm:flex-row">
                                <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-gray-100 sm:h-28 sm:w-28">
                                    <Image src="/profile/avatar.jpg" alt="Башуков Эдуард" fill sizes="112px" className="object-cover" />
                                </div>
                            <div className="text-center sm:text-left">
                                <p className="text-sm font-medium text-neutral-500">Frontend-разработчик</p>
                                <h1 className="mt-1 text-2xl font-semibold text-neutral-900">Башуков Эдуард</h1>
                            </div>
                        </div>
                                                    <div className="flex flex-col gap-5 items-center mt-5 sm:flex-row">
                                <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-gray-100 sm:h-28 sm:w-28">
                                    <Image src="/profile/avatar.jpg" alt="Башуков Эдуард" fill sizes="112px" className="object-cover" />
                                </div>
                            <div className="text-center sm:text-left">
                                <p className="text-sm font-medium text-neutral-500">Frontend-разработчик</p>
                                <h1 className="mt-1 text-2xl font-semibold text-neutral-900">Башуков Эдуард</h1>
                            </div>
                        </div>
                                                    <div className="flex flex-col gap-5 items-center mt-5 sm:flex-row">
                                <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-gray-100 sm:h-28 sm:w-28">
                                    <Image src="/profile/avatar.jpg" alt="Башуков Эдуард" fill sizes="112px" className="object-cover" />
                                </div>
                            <div className="text-center sm:text-left">
                                <p className="text-sm font-medium text-neutral-500">Frontend-разработчик</p>
                                <h1 className="mt-1 text-2xl font-semibold text-neutral-900">Башуков Эдуард</h1>
                            </div>
                        </div>
                                                    <div className="flex flex-col gap-5 items-center mt-5 sm:flex-row">
                                <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-gray-100 sm:h-28 sm:w-28">
                                    <Image src="/profile/avatar.jpg" alt="Башуков Эдуард" fill sizes="112px" className="object-cover" />
                                </div>
                            <div className="text-center sm:text-left">
                                <p className="text-sm font-medium text-neutral-500">Frontend-разработчик</p>
                                <h1 className="mt-1 text-2xl font-semibold text-neutral-900">Башуков Эдуард</h1>
                            </div>
                        </div>
                                                    <div className="flex flex-col gap-5 items-center mt-5 sm:flex-row">
                                <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-gray-100 sm:h-28 sm:w-28">
                                    <Image src="/profile/avatar.jpg" alt="Башуков Эдуард" fill sizes="112px" className="object-cover" />
                                </div>
                            <div className="text-center sm:text-left">
                                <p className="text-sm font-medium text-neutral-500">Frontend-разработчик</p>
                                <h1 className="mt-1 text-2xl font-semibold text-neutral-900">Башуков Эдуард</h1>
                            </div>
                        </div>
            </section>            
        </div>
    )
}
