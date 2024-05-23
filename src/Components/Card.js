import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) =>{
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setlikedCourses = props.setlikedCourses;
    function clickHandler(){
        if(likedCourses.includes(course.id)) {
            // Pehle se like hai 
            setlikedCourses((prev) => prev.filter( (cid) => (cid != course.id) ) );
            toast.warning("Like removed...")
        }
        else{
            // not liked , we have to insert this in liked courses
            if(likedCourses === 0){
                setlikedCourses([course.id]);
            }
            else{
                // non empty pehle se
                setlikedCourses((prev) => [...prev , course.id]);
            }
            toast.success("Liked Successfully...")
        }
    }
    return(
        <div className="w-[300px] bg-bgDark bg-opacity-90 rounded-md overflow-hidden ">
            <div className="relative">
                <img src = {course.image.url}/>
                 <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-1 bottom-[-12px]
                 grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id)?
                            (<FcLike  fontSize={"1.50rem"}/>) :
                             (<FcLikePlaceholder fontSize={"1.50rem"}/>)
                        }
                    </button>
                </div>
            </div>
            <div className=" py-4"> 
                <p className="text-white font-semibold text-lg leading-6 px-2">{course.title} </p>
                <p className="mt-2 text-white px-2">
                    {
                    course.description.length >100 ?
                    (course.description.substr(0,100)) + "...":
                    (course.description)
                    }
                    </p>
            </div>
        </div>
    )
};

export default Card;