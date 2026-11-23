"use client";

import Link from "next/link";
import Image from "next/image";
import type { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { Pet } from "@/data/pets";
import { shelters } from "@/data/shelters";

interface PetCardProps {
    pet: Pet;
}

export default function PetCard({ pet }: PetCardProps) {
    const shelter = shelters.find((item) => item.id === pet.shelterId);
    const router = useRouter();
    const href = `/pets/${pet.id}`;

    const handleOpen = (event: MouseEvent<HTMLAnchorElement>) => {
        if (
            event.defaultPrevented ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey ||
            event.button !== 0
        ) {
            return;
        }

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const card = event.currentTarget.querySelector<HTMLElement>("[data-pet-card-shell]");
        const media = event.currentTarget.querySelector<HTMLElement>("[data-pet-card-media]");

        if (!card || !media) {
            return;
        }

        event.preventDefault();
        window.sessionStorage.setItem("pet-card-transition", String(pet.id));
        document.body.classList.add("pet-transition-active");

        const rect = card.getBoundingClientRect();
        const overlay = document.createElement("div");
        overlay.className = "pet-open-overlay";

        const isMobile = window.innerWidth < 640;
        const main = document.querySelector("main");
        const header = document.querySelector("header");
        const mainRect = main?.getBoundingClientRect();
        const mainStyles = main ? window.getComputedStyle(main) : undefined;
        const headerStyles = header ? window.getComputedStyle(header) : undefined;
        const headerRect = header?.getBoundingClientRect();
        const isHeaderVisible = headerStyles && headerStyles.display !== "none" && headerRect;
        const mainPaddingX = mainStyles
            ? Number.parseFloat(mainStyles.paddingLeft) + Number.parseFloat(mainStyles.paddingRight)
            : isMobile ? 24 : 48;
        const mainPaddingTop = mainStyles ? Number.parseFloat(mainStyles.paddingTop) : isMobile ? 24 : 32;
        const targetWidth = mainRect ? mainRect.width - mainPaddingX : Math.min(window.innerWidth - mainPaddingX, 1280);
        const desktopGap = 24;
        const mediaSize = isMobile ? targetWidth : (targetWidth - desktopGap) / 2;
        const initialTargetHeight = isMobile ? mediaSize : mediaSize;
        const panelRadius = "0.5rem";
        const targetLeft = mainRect ? mainRect.left + Number.parseFloat(mainStyles?.paddingLeft ?? "0") : (window.innerWidth - targetWidth) / 2;
        const targetTop = isHeaderVisible
            ? headerRect.bottom + mainPaddingTop
            : mainPaddingTop;

        const panel = document.createElement("div");
        panel.className = "pet-open-panel";
        panel.style.left = `${targetLeft}px`;
        panel.style.top = `${targetTop}px`;
        panel.style.width = `${targetWidth}px`;
        panel.style.height = `${initialTargetHeight}px`;
        panel.style.borderRadius = panelRadius;
        panel.style.transformOrigin = "top left";
        panel.style.setProperty("--pet-open-media-size", `${mediaSize}px`);

        const mediaClone = document.createElement("div");
        mediaClone.className = "pet-open-panel-media";

        if (pet.media.type === "video") {
            const video = document.createElement("video");
            video.src = pet.media.src;
            video.autoplay = true;
            video.muted = true;
            video.loop = true;
            video.playsInline = true;
            video.className = "pet-open-panel-media-element";
            mediaClone.appendChild(video);
        } else {
            const image = document.createElement("img");
            image.src = pet.media.src;
            image.alt = pet.media.alt;
            image.className = "pet-open-panel-media-element";
            mediaClone.appendChild(image);
        }

        const content = document.createElement("div");
        content.className = "pet-open-panel-content pet-profile-content";

        const contentHeader = document.createElement("div");
        contentHeader.className = "pet-open-panel-header";

        const title = document.createElement("h2");
        title.className = "pet-open-panel-title pet-profile-title";
        title.textContent = pet.name;

        const meta = document.createElement("p");
        meta.className = "pet-open-panel-meta pet-profile-meta";
        meta.textContent = `${pet.type === "cat" ? "Кошка" : "Собака"}, ${pet.age} год(а)`;

        contentHeader.append(title, meta);

        const description = document.createElement("p");
        description.className = "pet-open-panel-description pet-profile-description";
        description.textContent = pet.description;

        const shelterCard = document.createElement("div");
        shelterCard.className = "pet-open-shelter-card pet-profile-shelter-card";

        if (shelter) {
            const shelterInfo = document.createElement("div");
            shelterInfo.className = "pet-open-shelter-info pet-profile-shelter-info";

            const avatar = document.createElement("div");
            avatar.className = "pet-profile-shelter-avatar bg-gray-100 shadow-2xl";

            const avatarImage = document.createElement("img");
            avatarImage.src = shelter.avatarImage;
            avatarImage.alt = shelter.name;
            avatarImage.className = "pet-open-shelter-avatar-image";
            avatar.appendChild(avatarImage);

            const shelterText = document.createElement("div");
            shelterText.className = "pet-open-shelter-text";

            const label = document.createElement("p");
            label.className = "pet-open-shelter-label pet-profile-shelter-label";
            label.textContent = "Приют";

            const name = document.createElement("h3");
            name.className = "pet-open-shelter-name pet-profile-shelter-name";
            name.textContent = shelter.name;

            const details = document.createElement("p");
            details.className = "pet-open-shelter-details pet-profile-shelter-details";
            details.textContent = `${shelter.city} | ${shelter.workingHours}`;

            shelterText.append(label, name, details);
            shelterInfo.append(avatar, shelterText);
            shelterCard.append(shelterInfo);
        }

        const actions = document.createElement("div");
        actions.className = "pet-open-actions pet-profile-actions";

        const shelterButton = document.createElement("span");
        shelterButton.className = "pet-open-action pet-open-action-secondary pet-profile-action pet-profile-action-secondary";
        shelterButton.textContent = "Перейти в приют";

        const adoptButton = document.createElement("span");
        adoptButton.className = "pet-open-action pet-open-action-primary pet-profile-action pet-profile-action-primary";
        adoptButton.textContent = "Забрать питомца";

        actions.append(shelterButton, adoptButton);
        shelterCard.append(actions);

        content.append(contentHeader, description, shelterCard);
        panel.append(mediaClone, content);
        overlay.appendChild(panel);
        document.body.appendChild(overlay);

        panel.style.height = "auto";
        const measuredHeight = panel.getBoundingClientRect().height;
        const availableHeight = window.innerHeight - targetTop - 12;
        const targetHeight = Math.min(Math.max(measuredHeight, mediaSize), availableHeight);
        const scaleX = rect.width / targetWidth;
        const scaleY = rect.height / targetHeight;
        const translateX = rect.left - targetLeft;
        const translateY = rect.top - targetTop;
        panel.style.height = `${targetHeight}px`;
        panel.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scaleX}, ${scaleY})`;

        let isFinished = false;
        const finishTransition = () => {
            if (isFinished) {
                return;
            }

            isFinished = true;
            window.removeEventListener("pet-detail-ready", handleDetailReady);
            window.dispatchEvent(new CustomEvent("pet-transition-overlay-finished", { detail: { petId: pet.id } }));

            overlay.animate(
                [{ opacity: 1 }, { opacity: 0 }],
                { duration: 180, easing: "ease-out", fill: "forwards" }
            );

            window.setTimeout(() => {
                overlay.remove();
            }, 190);
        };

        const handleDetailReady = (readyEvent: Event) => {
            if (!(readyEvent instanceof CustomEvent) || readyEvent.detail?.petId !== pet.id) {
                return;
            }

            window.setTimeout(finishTransition, 240);
        };

        window.addEventListener("pet-detail-ready", handleDetailReady);

        card.animate(
            [
                { transform: "scale(1)", opacity: 1 },
                { transform: "scale(.985)", opacity: 0 },
            ],
            { duration: 120, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }
        );

        overlay.animate(
            [
                { backgroundColor: "rgb(249 250 251 / 0%)" },
                { backgroundColor: "rgb(249 250 251 / 100%)" },
            ],
            { duration: 220, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }
        );

        const panelAnimation = panel.animate(
            [
                {
                    transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scaleX}, ${scaleY})`,
                    borderRadius: panelRadius,
                },
                {
                    transform: "translate3d(0, 0, 0) scale(1)",
                    borderRadius: panelRadius,
                },
            ],
            { duration: 280, easing: "cubic-bezier(.22,1,.36,1)", fill: "forwards" }
        );

        panelAnimation.onfinish = () => {
            panel.classList.add("pet-open-panel-ready");
        };

        window.setTimeout(() => {
            router.push(href, { scroll: true });
        }, 430);

        window.setTimeout(finishTransition, 1000);
    };

    return (
        <Link href={href} onClick={handleOpen} className="group block h-full">
            <div data-pet-card-shell className="group relative cursor-pointer transition-transform duration-300 ease-out active:scale-[0.97] sm:hover:-translate-y-1">
                    <div className="flex h-full flex-col">
                        <div data-pet-card-media className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-200 shadow-lg transition-all duration-300 ease-out group-hover:shadow-2xl">
                            {pet.media.type === "video" ? (
                                <video className="h-full w-full object-cover object-center ..." autoPlay muted loop playsInline>
                                    <source src={pet.media.src} type="video/mp4"></source>  
                                </video>
                            ) : (
                                <Image src={pet.media.src} alt={pet.media.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-center" />
                                
                            )}
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-[#180803] via-[#180803]/20 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-sm text-white/75">{shelter?.city ?? "Город не указан"}</p>
                            <h3 className="text-xl font-semibold text-white">{pet.name}</h3>
                            </div>
                        </div>
                    </div>
                </div>
    </Link>
    );           
}
