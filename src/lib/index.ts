import galery from "./galery"

export interface Galery {
    id: string
    title: string
    description: string,
    images: string[]
}
export const galeries: Galery[] = [
    {
        id: "defense-2024",
        title: "Défense 2024",
        description: "Découvrez les moments forts de la cérémonie de défense des mémoires de la promotion 2024",
        images: [
            ...galery.defenses
        ]
    },
    {
        id: "remise-bourses",
        title: "Remise des bourses d'études",
        description: "Parce que nous croyons en l'éducation et en l'avenir de nos étudiants, nous offrons des bourses d'études pour les meilleurs étudiants.",
        images: [
            ...galery.remise_bourses
        ]
    },
    {
        id: "graduation-2024",
        title: "Graduation 2024",
        description: "Célébrons ensemble la victoire de nos champions académiques ! Après des années de persévérance, de défis relevés et d'obstacles surmontés, nos étudiants émergent triomphants, prêts à conquérir le monde avec leurs connaissances et leur détermination.",
        images: [
            ...galery.graduations
        ]
    },
    
]