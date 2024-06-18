import React, {useState, useEffect} from 'react';
import { TbReportMedical } from "react-icons/tb";
import { MdOutlineNoteAlt, MdDashboardCustomize } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ changeViewingMode, onShow }) => {

  const [currentModeLocal, setCurrentModeLocal] = useState('')

  useEffect(()=>{
    setCurrentModeLocal(localStorage.getItem('mode'))
  }, [])

  const divClasses = "flex items-center cursor-pointer py-1 gap-2 rounded-md px-2"

  return (
    <div className='text-sm flex-col h-full space-y-3 px-3 font-inter'> {/* Reduce the width by 30% */}
      {/* <h1 className="flex text-2xl pt-12 items-center justify-center gap-2 text-black font-mono">
        <img src="/medico-white.png" width={80} alt="Medico logo"/>
        NIROG
      </h1> */}
      <div className='flex justify-end mt-3'>
        <IoMdClose className='text-3xl text-white hover:cursor-pointer' onClick={onShow}/>
      </div>
      <div className='text-3xl text-white'>
        <p className='border-b pb-2'>NIROG</p>
      </div>
      <div className={`flex flex-col space-y-3 text-lg w-full mt-10 text-white `}>
        <div className={`${divClasses} ${currentModeLocal == 'landing' && `bg-blue-500`}`}>
          {/* <img className="inline" width={80} src="/dbb.png" alt="Dashboard icon"/> */}
          <MdDashboardCustomize className='text-3xl'/>
          <p className={`m-0 `} 
            onClick={() => {
              setCurrentModeLocal('landing')
              changeViewingMode('landing')
            }}>
            Dashboard
          </p>
        </div>
        <div className={`${divClasses} ${currentModeLocal == 'report' && `bg-blue-500`}`}>
          <TbReportMedical className='text-3xl'/>
          <p className={` m-0 `} 
            onClick={() => {
              setCurrentModeLocal('report')
              changeViewingMode('report')
            }}>
            {/* <img className="inline" width={80} src="/reports.png" alt="Reports icon"/> */}
            My Reports
          </p>
        </div>
        <div className={`${divClasses} ${currentModeLocal == 'prescription' && `bg-blue-500`}`}>
          <MdOutlineNoteAlt className='text-3xl'/>
          <p className={`m-0 `} 
            onClick={() => {
              setCurrentModeLocal('prescription')
              changeViewingMode('prescription')
            }}>
            My Prescriptions
          </p>
        </div>
        <div className={`${divClasses} ${currentModeLocal == 'doxaab' && `bg-blue-500`}`}>
          <p className={`m-0 `} 
            onClick={() => {
              setCurrentModeLocal('doxaab')
              changeViewingMode('doxaab')
            }}>
            {/* <img className="inline" width={80} src="/doxxab.png" alt="DOXAAB (beta) icon"/> */}
            DOXAAB (beta)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
