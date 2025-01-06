import React from 'react';
import PageHeader from "@/components/partials/PageHeader";
import CTASection from '@/components/sections/CTASection';


interface Props {
    children: React.ReactNode;
}
export default async function Layout(props: Props) {
    return <>
        { props.children }
        <CTASection />
    </>
}