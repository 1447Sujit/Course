
const Filter = ({filterData,  setCategory})=>{

  function filterHandler(title){
      setCategory(title)
  }

  return (
    <div className="filter">
     {filterData.map((data)=>{
      return <button key={data.id} className="filterButton" onClick={()=>filterHandler(data.title)} >{data.title}</button>
     })}
    </div>
  )
}

export default Filter;