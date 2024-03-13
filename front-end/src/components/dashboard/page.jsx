import React, {useState, useEffect} from 'react'
import Sidebar from './components/Sidebar'
import LandingPage from './components/LandingPage'
import MyReports from './components/MyReports'
import MyPrescriptions from './components/MyPrescriptions'
import HospitalSelect from './components/HospitalSelect'
import Doxaab from './components/Doxaab'
import RegistrationForm from './components/RegistrationForm'
import TokenDetails from './components/TokenDetails'

const Page = () => {
  const [currentViewingMode, setCurrentViewingMode] = useState('landing')
  const [selectedHospital, setSelectedHospital] = useState('')

  const changeFromComp = (value) => {
    setCurrentViewingMode(value)
    localStorage.setItem('mode', value)
  }


  const hospSelect = (value) => {
    setSelectedHospital(value)
  }


  return (
    <div className="m-0 flex justify-end min-h-full w-full text-center">
      <div className="w-[17vw] h-[90vh] left-0 top-10 rounded-tr-3xl rounded-br-3xl bg-[#2e90f5] fixed z-50">

        <Sidebar changeViewingMode={changeFromComp}/>
      </div>
      
      <div className="w-[80vw] self-end">
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
