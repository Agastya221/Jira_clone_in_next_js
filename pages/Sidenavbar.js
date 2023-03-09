import Image from 'next/image'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import style from "../styles/Sidenavbar.module.css"

const sidenavbar = () => {
  return (
    <nav className={style.side}>
      <div className={style.ul}>
     <div className={style.logo}>
     <Image className={style.Image} src="/jira-icon.svg" alt='Image of Jira' width='30' height='30'/>
      </div> 
      <div className={style.search}>
        <i className={style.i}><SearchIcon  fontSize='large' /></i>
        <h3  className={style.h3}>Search issues</h3>
      </div>
      <div className={style.search}>
        <i className={style.i}><AddIcon fontSize='large'/></i>
        <h3 className={style.h3}>Create issue</h3>
      </div>
      </div>
    </nav>
  )
}

export default sidenavbar
