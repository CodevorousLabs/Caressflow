'use client'
import { BaseSyntheticEvent, ChangeEvent, useState } from "react"
import { FormData } from "@/Types/GlobalTypes"
export default function FormSection() {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  })

  function gatherFormData(inputType: string, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({
      ...prev,
      [inputType]: e.target.value
    }))
  }

  async function sendMessage(e: BaseSyntheticEvent) {
    e.preventDefault()
    if (formData.name.trim().length === 0 || formData.email.trim().length === 0 || formData.message.trim().length === 0) {
      console.log("Lütfen tüm alanları doldurun")
      return;
    }

    try {
      const response = await fetch(`EndpointURL`)

      if (!response.ok) {
        const customErrorMessage = await response.json()
        const error = new Error(customErrorMessage.message)
        throw error
      }

      const customSuccessMessage = await response.json()
      console.log(customSuccessMessage.message)

    } catch (err: unknown) {
      const error = err as Error
      console.log(error.message)
    }
  }


  return (
    <div className="w-full max-w-md rounded-xl">
      <div className="flex justify-start">
        <p className="text-4xl font-semibold text-center text-[#888989] mb-6">Bize Ulaşın</p>
      </div>

      <form onSubmit={(e) => sendMessage(e)} className="space-y-4 font-rubik">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Adınız..."
            className="w-full py-4 px-8 border border-pink-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-bg bg-[#F4F5F8]"
            required
            onChange={(e) => gatherFormData("name", e)}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="E-posta Adresiniz..."
            className="w-full py-4 px-8 border border-pink-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-bg bg-[#F4F5F8]"
            required
            onChange={(e) => gatherFormData("email", e)}

          />
        </div>
        <div>
          <textarea
            placeholder="Size Nasıl yardımcı olabiliriz?"
            rows={4}
            className="w-full py-4 px-8 border border-pink-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-bg bg-[#F4F5F8]"
            required
            name="message"
            onChange={(e) => gatherFormData("message", e)}
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-pink-bg w-full py-3 border-pink-bg text-white font-semibold rounded-lg hover:bg-pink-600 focus:outline-none cursor-pointer"
          >
            GÖNDER
          </button>
        </div>
      </form>
    </div>
  )
}