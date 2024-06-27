import React,{useState} from 'react'
import Header from './task/Header'
import Add from './task/Add'
import Filter from './task/Filter'
import Card from './task/Card'

function App() {

      // let [data,setData] = useState([])
  
  let [edit,setEdit] = useState()
  let [data,setData] = useState([
    {
      id: 1,
      name: "Office Task 1",
      description: "API Task",
      status: false
    },
    { 
      id: 2,
      name: "Office Task 2",
      description: "CARD Task",
      status: false
    },
    {
      id: 3,
      name: "Office Task 1",
      description: "Sunday Task",
      status:false,
    }
  ])

  // const [filteredData, setFilteredData] = useState(data);

  // const handleFilterChange = (filteredData) => {
  //   setFilteredData(filteredData);
  // }

  return <>
    <div id="rot">
          <Header/>
          <Add data={data} setData={setData} edit={edit} setEdit={setEdit} />
          {/* <Filter data={data} setData={setData} onFilterChange={handleFilterChange}/> */}
          
            <Card data= {data} 
                setData={setData}
                setEdit={setEdit}
                />
          
          

    </div>
    
    </>
}

export default App