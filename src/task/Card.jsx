import React, { useEffect, useState } from 'react'
import {findIndexById} from '../utility/Helper'

function Card({data,setData,setEdit}) {

  // let [status,setStatus] = useState(true)

  // const handleStatusChange = (status) => {
  //   setData((todos) =>
  //     todos.map((t) => (t.id === data.id ? { ...t, status } : t))
  //   );
  // };

  // function handleStatus(id){

  //   const updatedStatus = [...data].map(todo=> {
  //          if(todo.id == id){
  //           return{...todo,status: !todo.status}
  //          }
  //          return todo
  //   })
  //         setData(updatedStatus)
  // }

  function handleStatus(id) {
    // Create a new array by spreading the original data array
    const updatedStatus = [...data].map(todo => {
      // Check if the current todo's id matches the id passed as an argument
      if (todo.id == id) {
        // If it matches, return a new object with the updated status
        // by spreading the original todo object and overriding the status property
        return { ...todo, status: !todo.status }
      }
      // If it doesn't match, return the original todo object unchanged
      return todo
    })
    // Update the data state with the new updatedStatus array
    setData(updatedStatus)
  }

  const deleteData = (id) => {
      
      let index = findIndexById(data,id)
      if(index!==-1)
        {
            let newData = [...data]
            newData.splice(index,1)
            setData(newData)
            console.log(newData)
        }
      else
        {
            console.error("not found")
        }
  }

  let [filterr,setFilterr] = useState("All")

  const filterData = () =>{
    switch(filterr) {
      case "completed":
      return data.filter(todo=>todo.status)
      case "not-completed":
      return data.filter(todo=>!todo.status)
      default:
        return data

    }
  }
 
  return <>

<div className="container text-center">
      <div className="row">
        <div className="col-2"><h4>My ToDos</h4></div>
        <div className="col-4 content"><h4>Select Filter:</h4></div>
        <div className="col" style={{textAlign:"left",width:"50%"}}>
          <select className="form-select ip-width" aria-label="Default select example" value={filterr} onChange={(e) => setFilterr(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not Completed</option>
          </select>
        </div>
      </div>
    </div>

      <div className='row container'>
      {
        filterData().map((e,i) =>{
        return  <div className="card" style={{width: "24rem",height:"200px",margin:"10px 10px 10px 10px"}}>
                <div className="card-body" key={e.id}>
                      <h5 style={{ textDecoration: e.status ? 'line-through' : 'none' }}
                      className="card-title">Name: {e.name} </h5>
                      <p style={{ textDecoration: e.status ? 'line-through' : 'none' }} className="card-text">Description: {e.description}</p>
                      <div className='row'>
                             <p>Status: <button className= {e.status ? "btn btn-outline-dark mt-auto":"btn btn-dark mt-auto"}
                                onClick={()=>handleStatus(e.id)}
                                >{e.status?"Completed":"Not Completed"}</button></p>
                     </div>      
                              <div className="row justify-content-end">
                                <button href="#" className="btn btn-primary btn-width"onClick={() =>setEdit({...e,i})}>Edit</button>
                                <button href="#" className="btn btn-danger btn-width"onClick={()=>deleteData(e.id)}>Delete</button>
                              </div>
                 </div>
                 </div>
        })
      }
      </div>

  </>
}

// export default Card

/////////////////////////////////

// function Card({ data, setData, setEdit }) {
//   const handleComplete = (taskId) => {
//     const updatedData = data.map((task) => {
//       if (task.id === taskId) {
//         return { ...task, status: !task.status };
//       }
//       return task;
//     });
//     setData(updatedData);
//   };

//   const handleEdit = (taskId) => {
//     const taskToEdit = data.find((task) => task.id === taskId);
//     setEdit(taskToEdit);
//   };

//   return (
//     <div>
//       {data.map((task) => (
//         <div key={task.id}>
//           <h2>{task.name}</h2>
//           <p>{task.description}</p>
//           <span style={{ textDecoration: task.status ? 'line-through' : 'none' }}>
//             {task.status ? 'Completed' : 'Not Completed'}
//           </span>
//           <button onClick={() => handleComplete(task.id)}>
//             {task.status ? 'Mark as Not Completed' : 'Mark as Completed'}
//           </button>
//           <button onClick={() => handleEdit(task.id)}>Edit</button>
//         </div>
//       ))}
//     </div>
//   );
// }


export default Card