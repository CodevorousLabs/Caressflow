export default function FormSection() {
  return (
    <div className="w-full max-w-md rounded-xl">
      <div className="flex justify-start">
        <p className="text-4xl font-semibold text-center text-[#888989] mb-6">Bize Ulaşın</p>
      </div>
      <form className="space-y-4 font-rubik">
        <div>
          <input
            type="text"
            placeholder="Adınız..."
            className="w-full py-4 px-8 border border-pink-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-bg bg-[#F4F5F8]"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="E-posta Adresiniz..."
            className="w-full py-4 px-8 border border-pink-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-bg bg-[#F4F5F8]"
          />
        </div>
        <div>
          <textarea
            placeholder="Size Nasıl yardımcı olabiliriz?"
            rows={4}
            className="w-full py-4 px-8 border border-pink-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-bg bg-[#F4F5F8]"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-pink-bg w-full py-3 border-pink-bg text-white font-semibold rounded-lg hover:bg-pink-600 focus:outline-none"
          >
            GÖNDER
          </button>
        </div>
      </form>
    </div>
  )
}