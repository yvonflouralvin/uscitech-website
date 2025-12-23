import PageHeader from "@/components/partials/PageHeader";
import SectionWrapper from "@/components/partials/SectionWrapper";
import Image from "next/image";
import Link from "next/link";


export default async function Page() {
    const parteners = [
        {
            title: "Airtel",
            link:"https://www.airtel.cd/",
            description:"",
            image:"Airtel_logo-01.png"
        },
        {
            title: "Idée Education Entrepeneuriale",
            link:"https://idee.education/fr/",
            description:"",
            image:"7HQ4oLiM_400x400.jpg"
        },
        {
            title: "UNESCO",
            link:"https://www.unesco.org/fr",
            description:"",
            image:"logo-unesco.jpg"
        },
        {
            title: "Rawbank",
            link:"https://rawbank.com/",
            description:"",
            image:"rawbank_180704_png_711_473_1.png"
        },
        {
            title: "Rawbank1",
            link:"https://rawbank.com/",
            description:"",
            image:"rawbank_180704_png_711_473_1.png"
        }
    ]
    return <>
        <PageHeader title="Nos Partenaires" links={[{ label: 'Nos Partenaires', href: '/parteners' }]} />
        <SectionWrapper marginSize='md'>
            <div className="flex items-center justify-center py-[20px]">
                <h1 className="max-w-[500px] text-[20px] font-light align-center text-center">USCITECH s'appuie sur des partenariats de qualité pour toujours fournir une formation pour votre enfant</h1>
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
                {
                    parteners.map( partener => {
                        return <div key={partener.title}>
                            <Link target="_blank" href={partener.link}><Image src={`/images/parteners/${partener.image}`} alt={`${partener.title}`} width={200} height={150} className="h-150 w-auto" /></Link>
                        </div>
                    })
                }
            </div>
        </SectionWrapper>
    </>
}