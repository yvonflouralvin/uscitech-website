import React from 'react'


type SectionWrapperType = {
    children: React.ReactNode,
    marginSize: "sm" | "md",
    className?: string
}

const spaces: { [key: string]: string } = {
    "sm": "max-w-6xl",
    "md": "max-w-[1250px]"
}

function SectionWrapper({
    children, marginSize, className
}: SectionWrapperType) {

    return (
        <section className={`w-full flex flex-col m-auto ${className || ''} duration-500 md:px-9 sm:px-6 px-3`}>
            <div className={`w-full ${spaces[marginSize]} mx-auto`}>
                {children}
            </div>
        </section>
    )
}

export default SectionWrapper