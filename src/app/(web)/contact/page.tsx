import PageHeader from "@/components/partials/PageHeader";
import SectionWrapper from "@/components/partials/SectionWrapper";
import Button from "@/components/ui/Button";
import { ArrowUpRightIcon, Mail, MapPinIcon, Phone } from "lucide-react";


export default async function Page() {
    return <>
        <PageHeader title="Contact" links={[{ label: 'Contact', href: '/contact' }]} />
        <SectionWrapper marginSize='md'>
            <div className='flex flex-col gap-10 py-20'>
                <div className='flex flex-col sm:flex-row gap-6'>
                    <div className='w-full sm:w-1/3 flex gap-3 items-start py-5 px-8 border'>
                        <div className='p-2 rounded-full bg-black text-white'>
                            <MapPinIcon size={25} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='font-bold'>Notre Adresse</h3>
                            <span className='text-zinc-700'>
                                41, Av. Kananga, Q. Pigeon, C. Ngaliema, Kinshasa
                            </span>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/3 flex gap-3 items-start py-5 px-8 border'>
                        <div className='p-2 rounded-full bg-black text-white'>
                            <Phone size={25} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='font-bold'>Nous contacter</h3>
                            <span className='text-zinc-700'>
                                (+243) 975 123 456
                            </span>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/3 flex gap-3 items-start py-5 px-8 border'>
                        <div className='p-2 rounded-full bg-black text-white'>
                            <Mail size={25} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='font-bold'>Nous écrire</h3>
                            <span className='text-zinc-700'>
                                info@uscitech.ac.cd
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-5 p-6 sm:p-12 md:p-20 bg-[#F0EFEA]'>
                    <h2 className='max-w-lg mx-auto text-2xl sm:text-3xl font-bold text-center'>
                        Vous pouvez nous laisser un message
                    </h2>
                    <form action="" className='max-w-lg w-full mx-auto flex flex-col gap-3.5'>
                        <input required type="text" placeholder='Nom complet' className='w-full rounded-full px-4 py-2' />
                        <input required type="text" placeholder='Email' className='w-full rounded-full px-4 py-2' />
                        <textarea required name="" id="" rows={5} placeholder='Votre message' className='w-full rounded-3xl px-4 py-2'></textarea>
                        <Button
                            label='Envoyer le Message'
                            type='primary'
                            icon={<ArrowUpRightIcon size={13} />}
                        />
                    </form>
                </div>
            </div>
        </SectionWrapper>

    </>
}