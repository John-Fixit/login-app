import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import "./homeLayout.css";
import useWindowSize from '../../hooks/useWindowSize';
import Sidebar from '../../components/sidebars/Sidebar';

export default function EmandateLayout() {


    //========== using this for designing admin ======================//

    const isAdmin = true;

    //================== ends here ===================//

    const [navIsOpen, setNavIsOpen] = useState(true);
    const windowSize = useWindowSize({});
    const handleOpenNav=(param)=>{
        setNavIsOpen(param);
    }
    useEffect(()=>{
      if(window.innerWidth<768){
          setNavIsOpen(false);
      }
    }, [])

  

  return (
    <>
        <main style={{backgroundColor: "#FFFFFF"}}>
          
            <Sidebar visible={navIsOpen} show={handleOpenNav} isAdmin={isAdmin}/>
            <section className={`py-5 md:!px-5 !px-3 ${!navIsOpen? "page": "page page-with-navbar"}`} onClick={()=>{
              if(windowSize.width<768){
                navIsOpen && handleOpenNav(false)
              }
            }}>
                <Outlet />
            </section>
        </main>
    </>
  )
}
