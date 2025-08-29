interface ComponentProps {
  clinic: {
    adress: string,
    date_created: string,
    date_updated: string,
    doctorName: string,
    hospitalName: string,
    id: number,
    phoneNumber: string,
    location?: { lat: number, lng: number }
  }
  setFocusedClinic: any,
  setZoom: any
}



export default function AddressCard({ setFocusedClinic, setZoom, clinic }: ComponentProps) {

  function chooseLocation() {
    setFocusedClinic(clinic.location)
    setZoom(20)
  }



  return (
    <div onClick={() => chooseLocation()} className="w-full rounded-xl border border-pink-bg bg-white p-4 shadow-md mb-4 cursor-pointer hover:bg-gray-200 duration-150">

      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {clinic.hospitalName}
      </h2>


      <p className="text-sm text-gray-600 mb-2">
        📍 {clinic.adress}
      </p>


      <p className="text-sm text-gray-600">
        👨‍⚕️ {clinic.doctorName}
      </p>

      <p className="text-sm text-gray-600">
        👨‍⚕️ {clinic.phoneNumber}
      </p>

    </div>
  );
}