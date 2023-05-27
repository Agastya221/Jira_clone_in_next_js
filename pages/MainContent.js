import { Container } from '@mui/material'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Link from 'next/link'
import React,{useEffect,useState, useId} from 'react'
import css from '../styles/Main.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Sidenavbar from './Sidenavbar';
import Navbar from './Navbar';
import { FiSearch } from "react-icons/fi";

const MainContent = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  const data = [
    {
      id: useId(),
      text: "Try leaving a comment on this issue.",
    },
    {
      id: useId(),
      text: "this is just for testing"
    },
    {
      id: useId(),
      text: "this is just for "
    },
   
  ];
 
  const data1 = [
    {
      id: useId(),
      text: "Try leaving a comment on this issue. ahgdvajdv",
    },
    {
      id: useId(),
      text: "this is just for testing asdasd"
    },
    {
      id: useId(),
      text: "this is just for  asdad"
    },
   
  ];
  const data2 = [
    {
      id: useId(),
      text: "Try leaving a comment on this issue. ahgdvajdv adsfljjsDkjfsDKfhkadshfuk",
    },
    {
      id: useId(),
      text: "this is just for testing asdasd"
    },
    {
      id: useId(),
      text: "this is just for  asdad"
    },
   
  ];
 
const dataWithIndexes = data.map((item, index) => {
  return {
    ...item,
    index
  };
});
const dataWithIndexes1 = data1.map((item, index) => {
  return {
    ...item,
    index
  };
});
const dataWithIndexes2 = data2.map((item, index) => {
  return {
    ...item,
    index
  };
});

useEffect(() => {
  setIsBrowser(process.browser);
}, [])


  return (
    <>
      <Sidenavbar />
      <Navbar />
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
              <i className={css.icon}><GitHubIcon fontSize='small' /></i>
              <p className={css.p}>Github Repo</p>
            </Link>
          </div>
        </div>
        <div className={css.container} >
          <div className={css.inputContainer}>
            <i className={css.search}><FiSearch color='black' /></i>
            <input className={css.input} type="text" />
          </div>
        </div>
        <div className={css.wholediv}>
        {isBrowser ? <DragDropContext > 
          <Droppable droppableId='dndcontainer'>
            {(provided) => (
              <div className={css.dndcontainer}>
                <div className={css.flexcontainer}>
                  <div className={css.heading}>
                    backlog 2
                  </div>
                  <div className={css.dragcontainer}  ref={provided.innerRef} {...provided.droppableProps}>
                  {dataWithIndexes.map((item) => (
                    <Draggable key={item.id} draggableId={item.id} index={item.index}>
                      {(provided) => {
                        console.log(provided.dragHandleProps);
                        return(
                        <div  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className={css.dragAblecontainer} >
                            <p className={css.ptagofdarg}>
                              {item.text}
                            </p>
                            <div className={css.bottomtags}>
                              <i className={css.tick}><CheckBoxIcon /></i>
                            </div>
                          </div>
                         
                        </div>
                      )}}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  </div>
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId='dndcontainer1'>
            {(provided) => (
              <div className={css.dndcontainer}>
                <div className={css.flexcontainer}>
                  <div className={css.heading}>
                    backlog 2
                  </div>
                  <div className={css.dragcontainer}  ref={provided.innerRef} {...provided.droppableProps}>
                  {dataWithIndexes1.map((item) => (
                    <Draggable key={item.id} draggableId={item.id} index={item.index}>
                      {(provided) => {
                        console.log(provided.dragHandleProps);
                        return(
                        <div  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className={css.dragAblecontainer} >
                            <p className={css.ptagofdarg}>
                              {item.text}
                            </p>
                            <div className={css.bottomtags}>
                              <i className={css.tick}><CheckBoxIcon /></i>
                            </div>
                          </div>
                        </div>
                      )}}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  </div>
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId='dndcontainer2'>
            {(provided) => (
              <div className={css.dndcontainer}>
                <div className={css.flexcontainer}>
                  <div className={css.heading}>
                    backlog 2
                  </div>
                  <div className={css.dragcontainer}  ref={provided.innerRef} {...provided.droppableProps}>
                  {dataWithIndexes2.map((item) => (
                    <Draggable key={item.id} draggableId={item.id} index={item.index}>
                      {(provided) => {
                        console.log(provided.dragHandleProps);
                        return(
                        <div  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className={css.dragAblecontainer} >
                            <p className={css.ptagofdarg}>
                              {item.text}
                            </p>
                            <div className={css.bottomtags}>
                              <i className={css.tick}><CheckBoxIcon /></i>
                            </div>
                          </div>
                        </div>
                      )}}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  </div>
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
           </DragDropContext> : null}
           </div>
      </Container>
    </>
  )
}


export default MainContent;
