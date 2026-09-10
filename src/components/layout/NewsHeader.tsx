"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import type { Language } from "@/i18n";

const languages: Language[] = ["en", "ru", "tm"];

export default function NewsHeader() {
    const router = useRouter();
    const pathname = usePathname();

    const currentLanguage = pathname.split("/")[1] as Language;

    const changeLanguage = (newLanguage: Language) => {
        const parts = pathname.split("/");

        parts[1] = newLanguage;

        const newPath = parts.join("/");

        router.replace(newPath, { scroll: false });
    };

    return (
        <header className="w-full py-6">
            <div className="flex items-center justify-between cursor-pointer">
                <Image
                    src="/logo-desktop.png"
                    width={200}
                    height={190}
                    alt="logo"
                />

                <div className="flex items-center gap-2 text-[#B42226]">
                    {languages.map((lang) => (
                        <button
                            key={lang}
                            onClick={() => changeLanguage(lang)}
                            className={`border border-[#B42226] rounded-sm p-3 cursor-pointer transition-colors ${
                                currentLanguage === lang
                                    ? "bg-[#B42226] text-white"
                                    : "hover:bg-[#B42226] hover:text-white"
                            }`}
                        >
                            {lang.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
}