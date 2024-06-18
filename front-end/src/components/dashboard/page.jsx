import React, {useState, useEffect} from 'react'
import Sidebar from './components/Sidebar'
import LandingPage from './components/LandingPage'
import MyReports from './components/MyReports'
import MyPrescriptions from './components/MyPrescriptions'
import HospitalSelect from './components/HospitalSelect'
import Doxaab from './components/Doxaab'
import RegistrationForm from './components/RegistrationForm'
import TokenDetails from './components/TokenDetails'
import { IoReorderThreeOutline } from "react-icons/io5";


const Page = () => {
  const [currentViewingMode, setCurrentViewingMode] = useState('landing')
  const [selectedHospital, setSelectedHospital] = useState('');
  const [showSidebar, setShowSidebar] = useState(false)

  const changeFromComp = (value) => {
    setCurrentViewingMode(value)
    localStorage.setItem('mode', value)
  }


  const hospSelect = (value) => {
    setSelectedHospital(value)
  }

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev)
  }

  return (
    <div className="flex flex-col">
      { showSidebar ? <div className="w-64 h-full left-0 bg-blue-600 fixed z-50">
        <Sidebar changeViewingMode={changeFromComp} onShow={toggleSidebar}/>
      </div> :
      <div className='py-1 pl-2 h-full w-auto'>
        <IoReorderThreeOutline className='hover:cursor-pointer text-4xl' onClick={toggleSidebar}/>
      </div> 
      }
      <div className="w-full">
        {
          (()=>{
            switch (currentViewingMode) {
              case 'landing':
                return(
                  <LandingPage changeMode={changeFromComp} />
                  )
                  break;
              case 'hospitalSelect':
                    return(
                      <HospitalSelect changeMode = {setCurrentViewingMode} setHospital={hospSelect}/>
                      )
                      break;
              case 'registration':
                        return(
                  <RegistrationForm changeMode={setCurrentViewingMode}/>
                  )
                  break
              case 'report':
                    return(
                      <MyReports />
                      )
                      break
              case 'prescription':
                        return(
                          <MyPrescriptions />
                          )
                          break
              case 'doxaab':
                            return(
                              <Doxaab />
                              )
                              break
              case 'tokenDetails':
                return(
                  <TokenDetails />
                  )
                  break;
              default:
                break;
            }
          })()
        }
      </div>
    </div>
  )
}

export default Page
