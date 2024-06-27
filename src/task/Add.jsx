import React, { useState, useEffect } from 'react'

function Add({data,setData,edit,setEdit}) {

   let [name,setName] = useState("")
   let [description,setDesc] = useState("")
   
   const handleSubmit = ()=> {
     let newTodo = 
      {
        id: data.length?data[data.length-1].id+1:1,
        name,
        description,
        status:false,
      }
      
     let newData = [...data]
     newData.push(newTodo)
     setData(newData)
     setName("")
     setDesc("") 

   }

   useEffect(()=>{
    setName(edit?.name)
    setDesc(edit?.description)
 console.log(edit)
  },[edit])

  let handleEdit=()=>{
    let newTodo={
      name,
      description,
    }
    
    setData(data.map((e,i)=>{ 
      if(i==edit.i)
        {
          return newTodo  
        }
        return e
    }))
  setName("")
  setDesc("")
  setEdit(undefined)
  }

  return <>
        <div className="mb-3 flex justify-content-center">
                <input type="text" className="form-control ip-width" placeholder="Todo Name"value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" className="form-control ip-width ip-margin" placeholder="Todo Description"value={description} onChange={(e)=>setDesc(e.target.value)}/>
                <button className={`ip-margin ${edit?.i!==undefined?"btn btn-success":"btn btn-info"}`} onClick={edit?.i!==undefined?handleEdit:handleSubmit}>{edit?.i!==undefined?"Update":"Add Todo"}</button>
          </div>
  </>
}

// export default Add

//////////////////////////////////////////////////

// function Add({ data, setData, edit, setEdit }) {
//   const [newTask, setNewTask] = useState({ name: '', description: '', status: false });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (edit) {
//       // Update the existing task
//       const updatedTask = {...edit,...newTask };
//       const updatedData = data.map((task) => (task.id === edit.id? updatedTask : task));
//       setData(updatedData);
//       setEdit(null);
//     } else {
//       // Add a new task
//       const newTaskId = data.length + 1;
//       const newTaskData = { id: newTaskId,...newTask };
//       setData([...data, newTaskData]);
//     }
//   };


/////////////////////////////////////////////////
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={newTask.name}
//         onChange={(e) => setNewTask({...newTask, name: e.target.value })}
//         placeholder="Task Name"
//       />
//       <input
//         type="text"
//         value={newTask.description}
//         onChange={(e) => setNewTask({...newTask, description: e.target.value })}
//         placeholder="Task Description"
//       />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// }

export default Add