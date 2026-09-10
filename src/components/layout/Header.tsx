'use client'
import { useLanguage } from "@/context/LanguageContext";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Language } from "@/i18n";

const languages: Language[] = ["en", "ru", "tm"];

export default function Header(){
    const router = useRouter();
        
    
        const pathname = usePathname();
        const currentLanguage = pathname.split("/")[1] as Language;
    
        
    const { language, t, setLanguage } = useLanguage();

    const isNewsPage = pathname.includes("/news/");

    const changeLanguage = (newLanguage: Language) => {
        const parts = pathname.split("/");

        parts[1] = newLanguage;

        window.history.replaceState(
            null,
            "",
            parts.join("/")
        );

        setLanguage(newLanguage);
    };

    if (isNewsPage) {
        return null;
    }

    return(
        <>
            <header className={isNewsPage ? "" : "lg:sticky lg:top-0 lg:z-50 lg:h-0"}>
                <div className="sm:mx-auto flex h-20 items-center justify-between px-6">
                    {/* Mobile */}
                    <div className="flex w-full items-center justify-between lg:hidden">
                        <Image src="/logo-desktop.png" width={119} height={34} alt="logo"/>
                        <div className="flex items-center gap-2 text-[#B42226]">
                            {languages.map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => changeLanguage(lang)}
                                    className={`border border-[#B42226] rounded-sm p-2 cursor-pointer transition-colors ${
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
                    {/* Desktop */}
                    <div className="hidden w-full items-center justify-between lg:flex bg-white text-[#275283de] lg:border-[#0C233E] lg:border-3 rounded-2xl px-11 py-5 mt-15 mx-10">
                        <Image src="/logo-desktop.png" width={166} height={48} alt="logo" className="cursor-pointer"/>
                        <nav className="flex items-center gap-19">
                            <Link href={'#home'} className="cursor-pointer hover:[text-shadow:0_0_0_currentColor] hover:text-[#0C233E] text-[24px]">{t.header.home}</Link>
                            <Link href={'#programs'} className="cursor-pointer hover:[text-shadow:0_0_0_currentColor] hover:text-[#0C233E] text-[24px]">{t.header.services}</Link>
                            <Link href={'#process'} className="cursor-pointer hover:[text-shadow:0_0_0_currentColor] hover:text-[#0C233E] text-[24px]">{t.header.projects}</Link>
                            <Link href={'#news'} className="cursor-pointer hover:[text-shadow:0_0_0_currentColor] hover:text-[#0C233E] text-[24px]">{t.header.news}</Link>
                            <Link href={'#footer'} className="cursor-pointer hover:[text-shadow:0_0_0_currentColor] hover:text-[#0C233E] text-[24px]">{t.header.contacts}</Link>
                        </nav>
                        <div className="flex items-center gap-2 text-[#B42226]">
                            {languages.map((lang) => (
                                <button key={lang} onClick={() => changeLanguage(lang)} className={`border-[#B42226] border rounded-sm p-4 cursor-pointer ${language === lang? "bg-[#B42226] text-white" : "hover:text-white hover:bg-[#B42226]"}`}>
                                    {lang.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}