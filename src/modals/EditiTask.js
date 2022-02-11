import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {useState , useEffect} from 'react'

export const EditiTask = ({modal , toggle , updateTask , taskObj}) => {
  const [taskName , setTaskName] = useState("")
  const [discription , setDiscription] = useState("")
  const handleChange = (event) => {
    const {name , value } = event.target
    if(name == "taskName") {
        setTaskName(value)
    }else{
        setDiscription(value)
    }
  }
  useEffect(()=>{
      setTaskName(taskObj.Name)
      setDiscription(taskObj.Discription)
  } , [])
  const handleUpdate = (e) =>{
      e.preventDefault()
     let tempObj = {}
     tempObj['Name'] = taskName
     tempObj['Discription'] = discription
      updateTask(tempObj);
  }
  return (
    <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Update Task</ModalHeader>
          <ModalBody>
            <form>
                <div className="form-group">
                    <label>Task Name</label>
                    <input type="text"
                       className="form-control"
                       value={taskName}
                       onChange={handleChange}
                       name = "taskName"
                    ></input>
                </div>
                <div className="form-group mt-1">
                    <label>Task Description</label>
                    <textarea  
                    rows="5" className="form-control"
                    value = {discription}
                    onChange={handleChange}
                    name = "discription"
                    ></textarea>
                </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary"
             onClick={toggle}
             onClick ={handleUpdate}
             >Update</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
    </div>
  )
}
