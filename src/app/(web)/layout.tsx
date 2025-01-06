import React from 'react'; 
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