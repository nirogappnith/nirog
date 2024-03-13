import React, {useState, useEffect} from 'react';

const Sidebar = ({ changeViewingMode }) => {

  const [currentModeLocal, setCurrentModeLocal] = useState('')

  useEffect(()=>{
    setCurrentModeLocal(localStorage.getItem('mode'))
  }, [])


  return (
    <div> {/* Reduce the width by 30% */}
      <h1 className="flex text-2xl pt-12 items-center justify-center gap-2 text-white font-mono">
        <img src="/medico-white.png" width={80} alt="Medico logo"/>
        NIROG
      </h1>

      <div className={`flex flex-col gap-2 text-lg w-full px-5 text-white mt-5`}>
        <p className={`flex items-center justify-center cursor-pointer ${currentModeLocal == 'landing' && `border-b-2 border-black`}`} 
          onClick={() => {
            setCurrentModeLocal('landing')
            changeViewingMode('landing')
          }}>
          <img className="inline" width={80} src="/dbb.png" alt="Dashboard icon"/>
          Dashboard
        </p>
        <p className={`flex items-center justify-center cursor-pointer ${currentModeLocal == 'report' && `border-b-2 border-black`}`} 
          onClick={() => {
            setCurrentModeLocal('report')
            changeViewingMode('report')
          }}>
          <img className="inline" width={80} src="/reports.png" alt="Reports icon"/>
          My Reports
        </p>
        <p className={`flex items-center justify-center cursor-pointer ${currentModeLocal == 'prescription' && `border-b-2 border-black`}`} 
          onClick={() => {
            setCurrentModeLocal('prescription')
            changeViewingMode('prescription')
          }}>
          <img className="inline" width={80} src="/prescription.png" alt="Prescription icon"/>
          My Prescriptions
        </p>
        <p className={`flex items-center justify-center cursor-pointer ${currentModeLocal == 'doxaab' && `border-b-2 border-black`}`} 
          onClick={() => {
            setCurrentModeLocal('doxaab')
            changeViewingMode('doxaab')
          }}>
          <img className="inline" width={80} src="/doxxab.png" alt="DOXAAB (beta) icon"/>
          DOXAAB (beta)
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
