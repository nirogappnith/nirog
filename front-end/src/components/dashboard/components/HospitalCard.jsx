// <div
          //   key={hospital._id}
          //   className="flex border-black bg-slate-200 border-2 w-11/12 m-auto rounded-3xl items-center justify-between px-5 py-2"
          // >
          //   <div className="flex flex-col items-start">
          //     <h5 className="font-bold">{hospital.name}</h5>
          //     <p className="italic underline font-semibold">
          //       {hospital.rating}
          //     </p>
          //     <div className="flex items-center">
          //       <img
          //         src="/location.png"
          //         alt="Location icon"
          //         className="mr-0"
          //         style={{ width: "3em", height: "3em", marginTop: "-0.50em" }}
          //       />
          //       <p>{hospital.address}</p>
          //     </div>
          //     <div className="flex items-center">
          //       <img
          //         src="/mail.png"
          //         alt="Location icon"
          //         className="mr-0"
          //         style={{
          //           width: "4em",
          //           height: "4em",
          //           marginTop: "-0.50em",
          //           marginRight: "-1em",
          //         }}
          //       />{" "}
          //       <p>{hospital.email}</p>
          //     </div>
          //   </div>
          //   <button
          //     className="bg-[#2e90f5] rounded-full py-2 px-5 text-white hover:scale-105 duration-100 hover:shadow-lg"
          //     onClick={() => handleSelect(hospital.name)}
          //   >
          //     SELECT
          //   </button>
// </div>
import { PiHospitalDuotone } from "react-icons/pi";
import { AiTwotoneMail } from "react-icons/ai";

function HospitalCard({ data, onSelection }) {
  console.log(data)
  return (
    <div className="flex flex-col border p-3 rounded-md bg-zinc-100/40 max-w-md min-w-56 space-y-3 font-inter">
      <p className="m-0 text-zinc-700 text-xl font-bold">
      {data.name}
      </p>
      <div className="flex text-zinc-600 text-base gap-1 items-center">
      <PiHospitalDuotone />
      <p className="m-0">
        {data.address}
      </p>
      </div>
      <div className="flex text-zinc-600 text-base gap-1 items-center">
        <AiTwotoneMail />
        <p className="m-0">
        {data.email}
      </p>
      </div>
      <div className="flex justify-end">
        <button onClick={() => onSelection(data.name)} className="bg-blue-600 text-white px-2 py-1 rounded" >
          SELECT
        </button>
      </div>
    </div>
  )
}

export default HospitalCard;