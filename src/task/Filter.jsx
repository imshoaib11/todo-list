import React,{ useState } from 'react'



function Filter({data,onFilterChange}) {

  let [filterr,setFilterr] = useState("All")

  const filterData = () =>{
    switch(filterr) {
      case "completed":
      return data.filter(todo=>todo.status)
      case "Not Completed":
      return data.filter(todo=>!todo.status)
      default:
        return data

    }
  }

  const handleFilter = (e) =>{
    setFilterr(e.target.value)
    onFilterChange(filterData)

  }

  return <>
      <div className="container text-center">
             <div className="row">
                  <div className="col-2"><h4>My ToDos</h4></div>
                  <div className="col-4 content"><h4>Select Filter:</h4></div>
                  <div className="col" style={{textAlign:"left",width:"50%"}}><select className="form-select ip-width" aria-label="Default select example"
                  value={filterr} onChange={handleFilter}>
                            <option selected>All</option>
                            <option value="1">Completed</option>
                            <option value="2">Not Completed</option>
                          </select>
                  </div>
             </div>
          </div>
  </>
}

export default Filter