import { Box, Container } from '@mui/material'
import React from 'react'
import css from '../styles/Navbar.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Link from 'next/link';
import { FiSettings,FiTruck,FiServer,FiCreditCard,FiFileText,FiTrendingUp } from "react-icons/fi";


const Navbar = () => {
  return (
    
    <div className="Nav">
     <Container  maxWidth="sm" sx={{ display:"flex", flexDirection:"column"}}>
      <div className={css.logo_container}>
      <i className={css.logo}>logo
      </i>
      </div>
        <div className={css.top}>
          <i className={css.i}><FiCreditCard/></i>
          <Link  href={"kan"} className={css.a}>Kanban Board
          </Link>
        </div>
        <div className={css.top}>
        <i className={css.i}> <FiSettings/> </i>
        <Link  href={"settings"} className={css.a}>Settings Board
          </Link>
        </div>
        <div className={css.border}>
        </div>
      {/* bottom navlinks that doesn't work */}
        <div className={css.Disable}>
        <i className={css.i}> <FiTruck/> </i>
        <p  className={css.anchor}>Release
          </p>
        <p  className={css.implemented}>Not implemented
          </p>
        </div>
        <div className={css.Disable}>
        <i className={css.i}> <FiServer/> </i>
        <p   className={css.anchor}>Issue and filters
          </p>
        <p   className={css.implemented}>Not implemented
          </p>
        </div>
        <div className={css.Disable}>
        <i className={css.i}> <FiFileText/> </i>
        <p   className={css.anchor}>Pages
          </p>
        <p   className={css.implemented}>Not implemented
          </p>
        </div>
        <div className={css.Disable}>
        <i className={css.i}> <FiTrendingUp/> </i>
        <p   className={css.anchor}>Reports
          </p>
        <p   className={css.implemented}>Not implemented
          </p>
        </div>
        <div className={css.Disable}>
        <i className={css.i}> <FiFileText/> </i>
        <p   className={css.anchor}>Components
          </p>
        <p   className={css.implemented}>Not implemented
          </p>
        </div>
     </Container>
    </div>
  )
}

export default Navbar
