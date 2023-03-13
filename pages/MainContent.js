import { Container } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import css from '../styles/Main.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import Sidenavbar from './Sidenavbar';
import Navbar from './Navbar';
import { FiSearch } from "react-icons/fi";



const mainContent = () => {
  return (<>
    <Sidenavbar/>
      <Navbar/>
    <Container className='Main'>
      
      <div className={css.rootfileDesign}>Projects
      <span className={css.line}>/
      </span>singularity 1.0
      <span className={css.line}>/</span>Kanban Board
      </div>
      <div className={css.Header}>
        <div className={css.Kanban}>Kanban board</div>
        <div className={css.linkheading}>
        <Link className={css.links} href={"https://github.com/Agastya221/Jira_clone_in_next_js"}>
          <i className={css.icon}><GitHubIcon fontSize='small'/></i>
        </Link>
        <p className={css.p}>Github Repo</p>
        </div>
      </div>
      <div className={css.container} >
        <div className={css.inputContainer}>
        <i className={css.search}><FiSearch color='black'/></i>
          <input className={css.input} type="text" />
        </div>
    
        </div>
    </Container>
    </>
  )
}

export default mainContent
