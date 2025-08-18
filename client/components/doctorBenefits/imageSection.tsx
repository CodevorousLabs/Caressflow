import Link from 'next/link'
import Image from 'next/image'
import doctorTechSheet from '@/assets/doctorBenefits/technicSheet.jpg'
import fadPic from '@/assets/doctorBenefits/fadPic.png'
import SectionDescription from '../landingPageComponents/sectionDescription'
export default function ImageSection() {
  return (
    <div className='w-full md:w-10/12 lg:w-7/12 mx-auto flex flex-col justify-start items-start py-12 md:py-20 lg:py-[100px] gap-8 md:gap-12 lg:gap-14 px-4 text-center'>
      <Image src={doctorTechSheet} alt='doctorTechImage' />
      <SectionDescription>Caress Flow ECM Kursunu (FAD) Keşfedin</SectionDescription>
      <Link href={'/'}>
        <Image src={fadPic} alt='fadPic' />
      </Link>
    </div>
  )
}