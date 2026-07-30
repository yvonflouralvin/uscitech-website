import galery from "./galery"

export interface Galery {
    id: string
    title: string
    description: string,
    images: string[]
}

// Construit les chemins publics complets à partir des noms de base (.jpg)
const toJpg = (names: string[]) => names.map((name) => `/gallery/${name}.jpg`)

// Images de la visite à l'AZES (visite-azes-01.jpeg ... visite-azes-71.jpeg)
const visiteAzes = Array.from(
    { length: 71 },
    (_, i) => `/gallery/VisiteAZES/visite-azes-${String(i + 1).padStart(2, "0")}.jpeg`
)

export const galeries: Galery[] = [
    {
        id: "visite-azes",
        title: "Visite à l'AZES",
        description: "Une visite d'étude enrichissante de nos étudiants à l'Agence des Zones Économiques Spéciales (AZES), à la découverte de la Zone Économique Spéciale de Maluku et de son écosystème industriel.",
        images: visiteAzes
    },
    {
        id: "defense-2024",
        title: "Défense 2024",
        description: "Découvrez les moments forts de la cérémonie de défense des mémoires de la promotion 2024",
        images: toJpg(galery.defenses)
    },
    {
        id: "remise-bourses",
        title: "Remise des bourses d'études",
        description: "Parce que nous croyons en l'éducation et en l'avenir de nos étudiants, nous offrons des bourses d'études pour les meilleurs étudiants.",
        images: toJpg(galery.remise_bourses)
    },
    {
        id: "graduation-2024",
        title: "Graduation 2024",
        description: "Célébrons ensemble la victoire de nos champions académiques ! Après des années de persévérance, de défis relevés et d'obstacles surmontés, nos étudiants émergent triomphants, prêts à conquérir le monde avec leurs connaissances et leur détermination.",
        images: toJpg(galery.graduations)
    },

]
