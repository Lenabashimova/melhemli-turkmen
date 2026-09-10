import Image from "next/image"
import Link from "next/link"

type CardProps={
    title: string,
    subtitle?: string,
    className?:string,
    contentClassName?:string,
    textClassName?:string,
    linkClassName?:string,
    iconClassName?:string
}


export default function Card({title, subtitle, className, contentClassName, textClassName, linkClassName}:CardProps){
    return(
        <div className={`flex lg:flex-col items-center justify-center gap-6 rounded-3xl px-8 py-8 lg:px-10 bg-[#111B45] ${className}`}>
            <div className={`flex gap-4 items-center text-10 lg:text-[20px] ${contentClassName}`}>
                <h3 className="text-white flex items-center justify-center text-center font-semibold leading-tight lg:text-[25px]">
                    {title}
                </h3>  
            </div>
            {subtitle && (
                <p className={`hidden lg:block text-white text-[10px] font-thin ${textClassName}`}>
                    {subtitle}
                </p>
            )}
            <Link href="#" className={`hidden lg:block items-start text-[16px] font-medium text-white hover:text-[#111B45] ${linkClassName}`}>
                See More...
            </Link>
        </div>
    )
}