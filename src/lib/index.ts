import galery from "./galery"

export interface Galery {
    id: string
    title: string
    /** Résumé court, affiché sur la carte de la liste des activités */
    description: string,
    /** Date de l'activité, affichée sur la page de l'activité */
    date?: string
    /** Récit complet de l'activité, un élément par paragraphe */
    content?: string[]
    images: string[]
}

// Construit les chemins publics complets à partir des noms de base (.jpg)
const toJpg = (names: string[]) => names.map((name) => `/gallery/${name}.jpg`)

// Construit les chemins d'un dossier dont les images sont numérotées (prefix-01.jpeg ...)
const toNumbered = (folder: string, prefix: string, count: number) =>
    Array.from(
        { length: count },
        (_, i) => `/gallery/${folder}/${prefix}-${String(i + 1).padStart(2, "0")}.jpeg`
    )

export const galeries: Galery[] = [
    {
        id: "salon-etudiants-entrepreneurs",
        title: "Salon des Étudiants Entrepreneurs",
        description: "Retour en images sur la 2ᵉ édition du Salon des Étudiants Entrepreneurs, accueillie par l'USCITECH : un rendez-vous entre étudiants, entrepreneurs et professionnels autour de l'esprit d'initiative.",
        date: "Juillet 2026",
        content: [
            "Après l'Université de Kinshasa, c'est au tour de l'USCITECH d'avoir accueilli la 2ᵉ édition du Salon des Étudiants Entrepreneurs. Un rendez-vous incontournable qui a réuni étudiants, entrepreneurs et professionnels autour d'une question centrale : comment passer du statut de demandeur d'emploi à celui de créateur d'opportunités en RDC ?",
            "Cette rencontre a été marquée par des échanges riches en idées, des témoignages inspirants et des réflexions stratégiques pour encourager l'innovation et l'esprit d'initiative chez les jeunes.",
            "À l'USCITECH, l'entrepreneuriat n'est pas seulement une activité, c'est l'un des 5 piliers fondamentaux de notre vision éducative. Ce salon illustre parfaitement notre engagement à former une génération capable de transformer les défis en opportunités et de contribuer activement au développement du pays.",
        ],
        images: toNumbered("SalonEntrepreneurs", "salon-entrepreneurs", 44)
    },
    {
        id: "uscitech-cup",
        title: "Finale de l'UscitechCup",
        description: "Un duel mémorable pour la grande finale du tournoi inter facultaire UscitechCup, remportée par la promotion de Bac 1 Ingénierie sur un score serré de 3-2.",
        date: "25 juillet 2026",
        content: [
            "La grande finale du tournoi inter facultaire UscitechCup a tenu toutes ses promesses ce 25 juillet 2026 au terrain Poteau Galo à Binza Pigeon. Dans une ambiance électrique, la promotion de Bac 1 Ingénierie s'est imposée avec brio face à l'équipe fusionnée de Bac 2 Économie et Informatique, sur un score serré de 3-2.",
            "Ce match palpitant a été marqué par intensité, esprit d'équipe et détermination. Les ingénieurs en herbe ont su faire preuve de stratégie et de solidarité pour arracher la victoire, confirmant leur place de champions de cette édition.",
            "Au-delà du résultat, cette finale illustre parfaitement l'objectif de l'UscitechCup : favoriser la cohésion, l'excellence et la passion sportive au sein de la communauté universitaire.",
        ],
        images: toNumbered("Football", "uscitech-cup", 18)
    },
    {
        id: "visite-azes",
        title: "Visite à l'AZES",
        description: "Une visite d'étude enrichissante de nos étudiants à l'Agence des Zones Économiques Spéciales (AZES), à la découverte de la Zone Économique Spéciale de Maluku et de son écosystème industriel.",
        images: toNumbered("VisiteAZES", "visite-azes", 71)
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
