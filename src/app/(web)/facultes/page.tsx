import PageHeader from "@/components/partials/PageHeader";

export default async function Page() {
    return <>
        <PageHeader title="Nos Facultés" links={[{ label: 'Nos Facultés', href: '/facultes' }]} />
        
    </>
}