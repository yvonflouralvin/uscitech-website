"use client";

import PageHeader from "@/components/partials/PageHeader";
import SectionWrapper from "@/components/partials/SectionWrapper";
import InscriptionForm from "@/components/sections/inscription/InscriptionForm";

export default function InscriptionPage() {
  
    return (
        <>
            <PageHeader 
                title="Inscription" 
                
                links={[{ label: 'Inscription', href: 'https://uscitech-cisnet.com/inscriptions/formulaire' }]} 
            />
            <SectionWrapper marginSize="md">
                <InscriptionForm />
            </SectionWrapper>
        </>
    );
}
