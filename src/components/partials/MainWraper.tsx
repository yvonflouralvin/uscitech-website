import React from 'react'
import Header from './Header';
import FooterSection from '../sections/FooterSection';


interface Props {
    children: React.ReactNode;
}
export default async function MainWrapper(props: Props) {
    // Implement your custom loading state here
    // For example, you could use a library like React Suspense or use a loading component

    return <div className="flex flex-col w-full">
        
        {props.children}
        <FooterSection />
        <Header />
    </div>
}