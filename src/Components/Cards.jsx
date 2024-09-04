import { useState } from "react";
import Card from "./Card";

const Cards = ({courses, category})=>{

  const [likedCourse,setLikedCourse] = useState([])

  function getCourses(){
    if(category == "All"){
      let allCourses = [];
      Object.values(courses).forEach(array=>{
        array.forEach(courseData =>{
          allCourses.push(courseData);
        })
      })
      return allCourses;
    }
    else{
      return courses[category];
    }
    
  }

  return (
    <div className="container1">
      {
        getCourses().map((course)=>(
          <Card key={course.id} course={course} likedCourse={likedCourse} setLikedCourse={setLikedCourse} ></Card>
        ))
      }
    </div>
  )
}

export default Cards;