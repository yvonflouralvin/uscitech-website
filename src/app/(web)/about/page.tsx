'use client'
import PageHeader from "@/components/partials/PageHeader";
import SectionWrapper from "@/components/partials/SectionWrapper";
import { Mail, Phone, WebhookIcon } from "lucide-react";
import Image from "next/image";

export default function Page() {
    return <>
        <PageHeader title="A Propos" links={[{ label: 'A Propos', href: '/about' }]} />
        <SectionWrapper marginSize="md">
            <div className="float-right border-primary border-[5px] m-[20px] mt-[70px] ">
                <Image width={1000} height={1000} src='/students.jpg' alt="Uscitech Diplomate" className="relative top-[-20px] right-[-20px] border border-primary md:w-[300px] w-[550px] h-auto m-auto" />
            </div>
            <div className="p-[30px]">
                <div className="flex">
                    <div className="flex-1">
                        <h1 className="font-bold text-[30px]">Bienvenue à USCITECH</h1>
                        <p className="text-gray-500">L'Université des Sciences et Technologies (USCITECH) est une institution académique d'excellence, pionnière dans l'offre d'une éducation canadienne bilingue (français et anglais) en République Démocratique du Congo. Notre mission est de préparer les leaders de demain grâce à une formation axée sur l'innovation, l'entrepreneuriat et l'intégration des technologies modernes dans le monde professionnel.</p>
                    </div>
                </div>
                <h1 className="font-bold text-[20px] mt-[20px]">Notre Vision</h1>
                <p className="text-gray-500">USCITECH aspire à devenir un modèle de référence dans l'enseignement supérieur en Afrique, offrant des programmes éducatifs de classe mondiale qui répondent aux besoins réels du marché professionnel. Nous visons à former des diplômés prêts à relever les défis du XXIe siècle tout en contribuant activement au développement économique et social de la RDC.</p>

                <h1 className="font-bold text-[20px] mt-[20px]">Nos Valeurs</h1>
                <ul className="text-gray-500 list-disc">
                    <li>
                        <strong>Excellence Académique</strong>: Des programmes de qualité enrichis par des partenariats internationaux et des contenus constamment mis à jour.
                    </li>
                    <li>
                        <strong>Innovation et Technologie </strong>: Un cadre moderne équipé de laboratoires de pointe et d'espaces collaboratifs pour l'apprentissage pratique.
                    </li>
                    <li>
                        <strong>Entrepreneuriat et Leadership </strong>: Former des créateurs d'entreprises et de richesses, indispensables au développement durable de la RDC.
                    </li>
                    <li>
                        <strong>Bilinguisme </strong>: Préparer nos étudiants à un environnement global en développant leurs compétences en français et en anglais.
                    </li>
                </ul>

                <div className="bg-[url('/bibliotech.jpg')] bg-blur mt-[20px]">
                    <div className="pt-[150px] pb-[20px] pl-[20px] bg-[rgba(0,0,0,0.7)] backdrop-blur-sm">
                        <div className="h-[5px] w-[200px] bg-primary"></div>
                        <h1 className="text-[50px] text-white font-bold">Nos Facultés et Programmes</h1>
                        <p className="text-white">USCITECH offre une gamme diversifiée de programmes académiques répartis dans quatre facultés principales </p>
                    </div>
                </div>
                <div className="text-gray-500 mt-[20px]">
                    <p>
                        USCITECH offre une diversité exceptionnelle de programmes académiques structurés autour de quatre grandes facultés, chacune répondant aux besoins des secteurs stratégiques et en pleine croissance en République Démocratique du Congo et au-delà. Ces programmes sont conçus pour allier formation théorique, apprentissage pratique, et ouverture internationale, afin de garantir une employabilité optimale à nos diplômés.
                    </p>
                    <ul className="list-decimal">
                        <li><strong>Faculté de Sciences Informatiques </strong>: Pour les passionnés de technologies, avec des spécialisations telles que le génie logiciel, la cybersécurité et les systèmes intelligents.</li>
                        <li><strong>Faculté d'Ingénierie </strong>: Préparer des ingénieurs dans des domaines comme le génie civil, la robotique, ou encore l'architecture.</li>
                        <li><strong>Faculté de Sciences Économiques et Administration </strong>: Pour les futurs entrepreneurs et gestionnaires, couvrant des domaines comme le management, la finance, et le commerce international.</li>
                        <li><strong>Faculté de Sciences de l’Éducation </strong>: Former des enseignants et éducateurs de haut niveau, intégrant la technopédagogie et l'éducation entrepreneuriale.</li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-bold text-[20px] mt-[20px]">Un Partenariat Unique</h1>
                    <p className="text-gray-500 mt-[20px]">
                        Nous sommes fiers de notre collaboration avec des organisations canadiennes comme « Idée Éducation Entrepreneuriale » et le Conseil Scolaire du District Catholique de l’Est Ontarien (CSDCEO). Grâce à ces partenariats, nous proposons des programmes innovants, notamment une double diplomation permettant à nos étudiants d'obtenir le Diplôme d'Études Secondaires de l'Ontario (DESO) en plus du diplôme d'État congolais.
                    </p>
                    <h1 className="font-bold text-[20px] mt-[20px]">
                        Pourquoi Choisir USCITECH ?
                    </h1>

                    <ul className="text-gray-500 mt-[20px]">
                        <li>
                            Une éducation canadienne de qualité en RDC.</li>
                        <li>Un accent sur l'entrepreneuriat et le leadership.</li>
                        <li>Des infrastructures modernes et des auditoires ergonomiques.</li>
                        <li>Une formation bilingue pour des opportunités internationales.</li>
                        <li>Une approche pratique, avec des stages supervisés et des partenariats avec des milieux professionnels.</li>
                    </ul>

                    <h1 className="font-bold text-[20px] mt-[20px]">
                        Rejoignez-nous !
                    </h1>
                    <p className="text-gray-500 mt-[20px]">
                        Que vous soyez étudiant ou parent, USCITECH vous offre une opportunité unique de préparer un avenir prometteur dans un cadre stimulant et enrichissant. Venez découvrir nos campus modernes situés à Binza Pigeon et Kinshasa-Gombe, et explorez un monde d'opportunités sans limites.
                    </p>
                    <p className="text-gray-500 mt-[20px]">
                        Pour plus d'informations, contactez-nous : <br />
                        <span className="flex gap-[10px]"><Phone size={"13px"}/> +243 998 123 456<br /></span>
                        <span className="flex gap-[10px]"><Mail size={"13px"}/> info@uscitech.ac.cd<br /></span>
                        <span className="flex gap-[10px]"><WebhookIcon size={"13px"}/> www.uscitech.ac.cd<br /></span>
                    </p>
                </div>
            </div>

        </SectionWrapper>
    </>
}