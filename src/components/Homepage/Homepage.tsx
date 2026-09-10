'use client'

import { useLanguage } from "@/context/LanguageContext";
import Header from "../layout/Header"



export default function Homepage() {
    const { t } = useLanguage();
    return(
            <div id="home" className="relative bg-linear-to-l lg:bg-cover lg:bg-center lg:bg-no-repeat lg:bg-[url('/back.jpg')] from-[rgba(12,35,62,0.5)] to-[rgba(12,35,62,1)]">
                <div className="hidden pointer-events-none lg:block absolute z-0 inset-0 lg:bg-linear-to-r lg:from-[rgba(12,35,62,1)] lg:via-[rgba(12,35,62,0.6)] lg:to-[rgba(12,35,62,0)] "></div>
                <div className="relative">
                    <section className="">
                        <div className=" text-white mx-auto px-9 lg:mx-10 min-h-screen justify-center flex flex-col gap-15 lg:items-start lg:text-left">
                            <div className="flex flex-col gap-5 lg:gap-10">
                                <h1 className="text-[48px] max-w-300 font-semibold lg:hidden">{t.homepage.title}</h1>
                                <h1 className="text-[110px] max-w-300 font-semibold hidden lg:block leading-25">{t.homepage.title}</h1>
                                <p className="text-[20px] lg:text-[35px] max-w-230">{t.homepage.subtitle}</p>  
                            </div>
                        </div>
                    </section>
                </div>
            </div>
    )
}