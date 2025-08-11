interface ComponentProps {
  feat: any,
  Icon: any
}

export default function FeatureCard({ feat, Icon }: ComponentProps) {
  return (
    <div className="flex flex-col gap-2 p-10 bg-white w-1/4">
      <div className="flex flex-col justify-start items-start">
        <div className=" w-[70px] h-[70px] bg-[#F8F8F8] flex items-center justify-center text-5xl text-pink-bg">
          <Icon />
        </div>
        <p className="text-[20px] text-[#888989] font-heebo mt-6 font-semibold">{feat.title}</p>
      </div>
      {feat.description ? <p className="text-base font-rubik text-[#686A6F] leading-8">Mikrosirkülasyonu tetikleyerek Neoanjiojenez (yeni kan damarı oluşumu)'nu teşvik eder. Doku yenilenmesini destekler. Trofizmi artırır ve doku elastisitesini iyileştirerek hücre yenilenmesini uyarır</p>
        :
        <ul>
          {feat.specs.map((spec: string) => <li className="font-rubik text-[#686A6F] mb-1" key={spec}>{"· " + spec}</li>)}
        </ul>
      }

    </div>
  )
}