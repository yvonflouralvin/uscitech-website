import PageHeader from "@/components/partials/PageHeader";
import SectionWrapper from "@/components/partials/SectionWrapper";
import Image from "next/image";

export default async function Page() {
    const facultes: {
        name: string
        accroche: string
        description: string
        programs: string[]
        illustration?: string
    }[] = [
            {
                "name": "Faculté des Sciences Informatiques",
                "accroche": "Explorez le monde numérique et ses possibilités infinies.",
                "description": "La Faculté des Sciences Informatiques prépare les étudiants à devenir des leaders dans le domaine des technologies de l'information. Que vous soyez passionné par le développement logiciel, la cybersécurité ou l’intelligence artificielle, nos programmes vous ouvrent les portes d'une carrière prometteuse.",
                "programs": [
                    "Génie logiciel",
                    "Réseaux informatiques",
                    "Sécurité informatique",
                    "Systèmes intelligents",
                    "Analyse de données massives (Big Data)"
                ],
                "illustration": "/faculties/compute-sciences.png"
            },
            {
                "name": "Faculté d’Ingénierie",
                "accroche": "Donnez vie aux grandes idées.",
                "description": "Cette faculté est destinée à ceux qui souhaitent résoudre les problèmes techniques complexes du monde moderne. Avec un équilibre parfait entre innovation et durabilité, nos programmes d’ingénierie permettent aux étudiants de concevoir des infrastructures et des systèmes qui façonnent le futur.",
                "programs": [
                    "Génie civil et travaux publics",
                    "Génie robotique et mécatronique",
                    "Génie informatique et télécommunications",
                    "Génie des mines et de la minéralurgie",
                    "Génie du bâtiment et de l’architecture"
                ],
                "illustration": "/faculties/engenier-sciences.png"
            },
            {
                "name": "Faculté des Sciences Économiques et Administration",
                "accroche": "Maîtrisez les rouages de l'économie et du management.",
                "description": "Pour ceux qui rêvent de diriger, d’innover ou de transformer des organisations, cette faculté est faite pour vous. Nos programmes vous enseignent les principes économiques, les stratégies d’entreprise et les compétences nécessaires pour prospérer dans le monde des affaires.",
                "programs": [
                    "Management et Leadership",
                    "Économie - Finance",
                    "Marketing et Communication",
                    "Gestion des Ressources Humaines",
                    "Commerce international et logistique"
                ],
                "illustration": "/faculties/finance-sciences.png"
            },
            {
                "name": "Faculté des Sciences de l’Éducation",
                "accroche": "Transformez l’apprentissage avec des méthodes innovantes.",
                "description": "Préparez-vous à devenir un acteur clé dans l'éducation, en intégrant les technologies modernes et des approches pédagogiques avancées. Cette faculté forme des éducateurs capables de répondre aux défis du 21e siècle avec créativité et expertise.",
                "programs": [
                    "Enseignement des sciences et technologies",
                    "Administration et gestion des établissements scolaires",
                    "Technopédagogie et ludopédagogie",
                    "Éducation entrepreneuriale"
                ],
                "illustration": "/faculties/teacher-sciences.png"
            },
            {
                "name": "Programme Spécial : Double Diplomation",
                "accroche": "Une opportunité unique pour les jeunes.",
                "description": "Grâce à notre partenariat exclusif avec des organisations canadiennes, USCITECH offre un programme de double diplomation. Les étudiants obtiennent à la fois le diplôme d’État congolais et le Diplôme d’Études Secondaires de l’Ontario (DESO), ouvrant ainsi les portes à des perspectives internationales.",
                "programs": [
                    "Diplôme d’État congolais",
                    "Diplôme d’Études Secondaires de l’Ontario (DESO)"
                ]
            }
        ];
    return <>
        <PageHeader title="Nos Facultés" links={[{ label: 'Nos Facultés', href: '/facultes' }]} />
        <SectionWrapper marginSize='md'>
            {/* <div className="float-right border-primary border-[5px] m-[20px] mt-[70px] ">
                <Image width={1000} height={1000} src='/students.jpg' alt="Uscitech Diplomate" className="relative top-[-20px] right-[-20px] border border-primary w-[200px] h-auto m-auto" />
            </div> */}
            <div className="py-[30px]">
                <h1 className="text-orange text-[25px] font-bold">Bienvenue aux Facultés d'USCITECH</h1>
                <p>Chez USCITECH, nos facultés sont le cœur de notre engagement à fournir une éducation d'excellence. Chaque faculté est conçue pour répondre aux besoins spécifiques des étudiants et du marché de l'emploi, en combinant théorie, pratique et innovation. Découvrez nos facultés et trouvez la voie qui correspond à vos aspirations.</p>
            </div>

            <div>
                {
                    facultes.map((e, i) => {
                        return <div key={i + 1} className="flex items-center gap-[30px]">
                            <div className="border-primary border-[5px] m-[20px] mt-[70px] float-left ">
                                <Image width={1000} height={1000} src={`${e.illustration ? `${e.illustration}` : "/students.jpg"}`} alt="Uscitech Diplomate" className="relative top-[-20px] right-[-20px] border border-primary w-[300px] h-auto m-auto" />
                                <h4 className="text-[20px] font-light max-w-[250px] relative top-[-20px] left-[20px]">{e.accroche}</h4>
                            </div>
                            <div className="flex-1">
                                <div className="w-[200px] h-[2px] bg-primary py-[2px] mb-[5px]"></div>
                                <h1 className="font-bold text-[20px]">{e.name}</h1>

                                <p>{e.description}</p>
                                <div className="flex gap-[1px] items-end">
                                    <p className="font-semibold mt-[5px]">Programmes phares :</p>
                                    {/* <Image width={100} height={50} src={"/faculties/fleche.png"} alt="fleche" className="w-[30px] h-[15px]" /> */}
                                </div>
                                <div className="pl-[20px]">
                                    {
                                        e.programs.map((p, i1) => {
                                            return <p key={i1 + 1}>- {p}</p>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </SectionWrapper>
    </>
}