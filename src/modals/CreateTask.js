import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {useState} from 'react'

export const CreateTask = ({modal , toggle , save}) => {
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
  const handleSave = ()=>{
      let taskObject = {}
      taskObject["Name"]  = taskName
      taskObject["Discription"] = discription
      save(taskObject)
      setTaskName("")
      setDiscription("")
  }
  return (
    <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
             onClick ={handleSave}
             >Create</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
    </div>
  )
}
