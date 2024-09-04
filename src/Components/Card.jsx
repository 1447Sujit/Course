import style from "./Card.module.css"
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify'

const Card = ({course, likedCourse, setLikedCourse})=>{

    function clickHandle(){
      if(likedCourse.includes(course.id)){
        setLikedCourse( (prev)=> prev.filter((cid)=>(cid !== course.id)))
        toast.warning("Like remove")
      }
      else{
        if(likedCourse.length == 0){
            setLikedCourse([course.id])
        }
        else{
          setLikedCourse((prev)=> [...prev, course.id])
        }
        toast.success("Liked successfully")
      }

    }


  return (
    <div className={style.card}>
      <div>
        <img src={course.image.url} alt="" className={style.image} />
      </div>
      <div className={style.buttonBox}>
        <button onClick={clickHandle}>
        {
              likedCourse.includes(course.id) ? (  <FcLike />)  : (<FcLikePlaceholder />)
         }
        </button>
      </div>
      <div className={style.cardDetail}>
        <p className={style.title}>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  )
}

export default Card;