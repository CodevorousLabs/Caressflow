import Link from 'next/link'
import Image from 'next/image'
import doctorTechSheet from '@/assets/doctorBenefits/technicSheet.jpg'
import fadPic from '@/assets/doctorBenefits/fadPic.png'
import SectionDescription from '../landingPageComponents/sectionDescription'

export default function ImageSection() {
  return (
    <div className='w-full md:w-10/12 lg:w-7/12 mx-auto flex flex-col justify-start items-center py-12 md:py-20 lg:py-[100px] gap-8 md:gap-12 lg:gap-14 px-4 md:px-6 lg:px-0 text-center'>

   
      <div className='w-full'>
        <Image
          src={doctorTechSheet}
          alt='doctorTechImage'
          className='w-full h-auto rounded-md object-cover'
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1024px) 80vw,
                 60vw"
        />
      </div>

      <SectionDescription>Caress Flow ECM Kursunu (FAD) Keşfedin</SectionDescription>

      <Link href={'/'}>
        <div className='w-full mx-auto'>
          <Image
            src={fadPic}
            alt='fadPic'
            className='w-full h-auto object-contain'
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1024px) 70vw,
                   50vw"
          />
        </div>
      </Link>
    </div>
  )
}
