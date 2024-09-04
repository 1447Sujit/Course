
import './App.css'
import { toast } from 'react-toastify'
import { filterData , apiUrl } from './data'

import Filter from './Components/Filter'
import Cards from './Components/Cards'
import Spinner from './Components/Spinner'
import { useEffect, useState } from 'react'

function App() {

  const [courses,setCourses] = useState(null)
  const [loading,setLoading] = useState(true)
  const [category,setCategory] = useState(filterData[0].title)


  // Api ke liye function
  async function fetchData(){
    try{
      setLoading(true)
        const response = await fetch(apiUrl)
        const output = await response.json()
        setCourses(output.data)
    }
    catch(error){
        toast.error("Network Error")
    }
    setLoading(false)
  }

  useEffect( ()=>{
    fetchData();
  },[])
 

  return (
  <div>
    {/* NavBar */}
   <div className='navBar'>
      <nav>
        <h1>Top Courses</h1>
      </nav>
   </div>

{/* Filter */}
<div>
  <Filter filterData={filterData}  setCategory={setCategory} ></Filter>  
</div>

<div>
 
  {
    loading ? ( <Spinner></Spinner>) : ( <Cards courses={courses} category={category} ></Cards>)
  }
</div>
  </div>
  )
}

export default App
