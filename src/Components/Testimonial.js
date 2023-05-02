import React, { useState } from 'react'
import Card from './Card'
// import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa"
import { BiArrowBack  } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
export default function Testimonial( {reviews}) {
const[index,setIndex] =useState(0)
function leftClickHandler(){
if(index-1<0){
    setIndex(reviews.length-1)
}else{
    setIndex(index-1)
}
}

function RightClickHandler(){
    if(index+1 >=reviews.length){
        setIndex(0)
    }else{
       setIndex(index+1)
    }

}
 function surpriseHandler(){
 let random =Math.floor(Math.random()*(reviews.length));
 setIndex(random)
 }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md' >

        <Card reviews={reviews[index]}/>


<div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto' >
    <button
    onClick={leftClickHandler}
    className='cursor-pointer hover:text-violet-500 '>
        <BiArrowBack/>
    </button>
    <button
     onClick={RightClickHandler}
    className='cursor-pointer hover:text-violet-500'>
<FiArrowRight/>
    </button>
</div>
<div className='mt-6'>
    <button 
onClick={surpriseHandler}
    className= 'bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg '>Surprise Me</button>
</div>
    </div>
  )
}
