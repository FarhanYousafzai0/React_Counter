import React, { useEffect,useState } from 'react'

const CleanUp = () => {


    const [width,setWidth] = useState(window.innerWidth);

 const handleSize = ()=>{

    setWidth(window.innerWidth);
 }



 useEffect(() => {
   window.addEventListener('resize',handleSize);
 console.log("Widht is added.")
   return () => {
     window.removeEventListener('resize',handleSize)
   }
 }, [width])
 
  return (
    <>
      <div className='text-4xl text-center text-5xl
'>Window Width:{width}</div>

    </>
  )
}

export default CleanUp
