'use client'
import { BaseSyntheticEvent, ChangeEvent, useState } from "react"

export default function ContactForm() {

  const [formData, setFormData] = useState({
    userRole: "",
    name: "",
    surname: "",
    phone: "",
    email: "",
    message: ""
  })

  function gatherFormData(key: string, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({
      ...prev,
      [key]: e.target.value
    }))
  }

  async function submitForm(e: BaseSyntheticEvent){
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={(e) => submitForm(e)} className="w-full max-w-lg space-y-6 bg-white py-7 px-5 text-pink-bg">

      <div>
        <p className="font-medium text-gray-800 mb-2">
          Doktor musunuz yoksa Hasta mı?
        </p>
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="doctor"
              className="w-4 h-4 text-pink-600 focus:ring-pink-500 checked:bg-pink-bg accent-pink-bg"
              required
              onChange={(e) => gatherFormData("userRole", e)}
            />
            <span className="text-gray-700">Doktor</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="patient"
              className="w-4 h-4 text-pink-600 focus:ring-pink-500 checked:bg-pink-bg accent-pink-bg"
              required
              onChange={(e) => gatherFormData("userRole", e)}
            />
            <span className="text-gray-700">Hasta</span>
          </label>
        </div>
      </div>


      <div className="flex flex-col space-y-5">
        <div className="flex flex-col space-y-1 w-full">
          <label className="text-sm font-medium text-gray-700">İsim</label>
          <input
            name="name"
            placeholder="İsminizi Giriniz"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
            onChange={(e) => gatherFormData("name", e)}
          />
        </div>

        <div className="flex flex-col space-y-1 w-full">
          <label className="text-sm font-medium text-gray-700">Soyisim</label>
          <input
            name="surname"
            placeholder="Soyisminizi Giriniz"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
            onChange={(e) => gatherFormData("surname", e)}
          />
        </div>

        <div className="flex flex-col space-y-1 w-full">
          <label className="text-sm font-medium text-gray-700">Telefon</label>
          <input
            name="phone"
            placeholder="Telefon Numaranızı Giriniz"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
            onChange={(e) => gatherFormData("phone", e)}
          />
        </div>

        <div className="flex flex-col space-y-1 w-full">
          <label className="text-sm font-medium text-gray-700">Email *</label>
          <input
            name="email"
            type="email"
            placeholder="Email Adresinizi Giriniz"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
            onChange={(e) => gatherFormData("email", e)}
          />
        </div>

        <div className="flex flex-col space-y-1 w-full">
          <label className="text-sm font-medium text-gray-700">Mesaj</label>
          <textarea
            name="message"
            placeholder="Mesajınızı Giriniz"
            rows={4}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
            onChange={(e) => gatherFormData("message", e)}
          />
        </div>
      </div>


      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition cursor-pointer">
        Gönder
      </button>
    </form>
  )
}
