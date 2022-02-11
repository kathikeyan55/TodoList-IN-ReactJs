import React, { useEffect } from 'react'
import { useState  } from 'react'
import { CreateTask } from '../modals/CreateTask';
import Card from './Card'

export default function TodoList () {
    const [modal , setModel] = useState(false)
    const [taskList , setTaskList] = useState([])
    useEffect(()=>{
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            console.log(obj)
            setTaskList(obj)
        }
    },[])
    const  deleteTask = (index) =>{
         let tempList = taskList
         tempList.splice(index , 1);
         localStorage.setItem("taskList", JSON.stringify(tempList))
         setTaskList(tempList)
         window.location.reload()   
     }
    const updateListArray = (obj , index) =>{
        let tempList = taskList
        tempList[index] = obj
        setTaskList(tempList)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        window.location.reload()
    }

    const toggle = ()=>{
        setModel(!modal); 
    }
    const saveTask = (taskObject)=>{
        let templist = taskList
        templist.push(taskObject)
        localStorage.setItem( "taskList" , JSON.stringify(templist) )
        // ACCESSING LOCAL_STORAGE BY REACT
        setTaskList(templist)
        setModel(false);
    }
  return (
   <>
     <div className="header text-center"
     
     >
        <h3 className="">Todo List</h3>
        <button className="btn btn-primary mt-2"
        onClick={()=> setModel(true)}
        >Create Task</button>
     </div>
    <div className="task-container">
            {taskList.map((obj , index) => {
                console.log(obj)
                return <Card  taskObj = {obj} index = {index} deleteTask={deleteTask} 
                updateListArray={updateListArray}/>
            })}
    </div>
    <CreateTask toggle ={toggle} modal ={modal} save={saveTask}/>
   </>
  )
}
