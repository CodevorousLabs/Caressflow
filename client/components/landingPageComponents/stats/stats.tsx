

export default function Stats() {
  return (
    <div className="flex relative w-full justify-center items-center h-0">
      <div className="flex items-center justify-around gap-x-5 bg-[#00ACB0] w-8/12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 min-h-[200px]">
        <div className="text-white text-center font-rubik space-y-5">
          <p className="text-5xl font-medium text-pink-600">5400+</p>
          <p className="text-xl">İyileşen Hastalar</p>
        </div>
        <div className="text-white text-center font-rubik space-y-5">
          <p className="text-5xl font-medium text-pink-600">220+</p>
          <p className="text-xl">Uygulama Klinikleri</p>
        </div>
        <div className="text-white text-center font-rubik space-y-5">
          <p className="text-5xl font-medium text-pink-600">5+</p>
          <p className="text-xl">Yıllık Deneyim</p>
        </div>
        <div className="text-white text-center font-rubik space-y-5">
          <p className="text-5xl font-medium text-pink-600">380+</p>
          <p className="text-xl">Doktorlar ve Uzmanlar</p>
        </div>
      </div>
    </div>
  )
}