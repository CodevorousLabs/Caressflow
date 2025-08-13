export default function Stats() {
  return (
    <div className="relative w-full max-lg:h-[250px]">
      <div className="
        absolute 
        left-1/2 top-1/2 
        -translate-x-1/2 -translate-y-1/2 

        bg-[#00ACB0] 
        w-10/12 max-w-6xl 
        min-h-[200px]

        grid
        grid-cols-1
        gap-x-6 gap-y-6
        justify-items-center
        items-center

        md:grid-cols-2
        lg:grid-cols-4

        max-lg:py-8
      ">
        <div className="text-white text-center font-rubik space-y-3">
          <p className="text-5xl font-medium text-pink-600">5400+</p>
          <p className="text-xl">İyileşen Hastalar</p>
        </div>
        <div className="text-white text-center font-rubik space-y-3">
          <p className="text-5xl font-medium text-pink-600">220+</p>
          <p className="text-xl">Uygulama Klinikleri</p>
        </div>
        <div className="text-white text-center font-rubik space-y-3">
          <p className="text-5xl font-medium text-pink-600">5+</p>
          <p className="text-xl">Yıllık Deneyim</p>
        </div>
        <div className="text-white text-center font-rubik space-y-3">
          <p className="text-5xl font-medium text-pink-600">380+</p>
          <p className="text-xl">Doktorlar ve Uzmanlar</p>
        </div>
      </div>
    </div>
  )
}
