import React, { useState } from 'react'






const Counter = () => {


    const [count,setCount] = useState(0);

    const handleCount = (e)=>{
    
    let text = e.target.innerHTML;

    if(text === 'Decrease'){

        setCount(count - 1)
    }else if(text === 'Increase'){
        setCount(count + 1)
    }else{
        setCount(0)
    }
    };


  return (
    <>
    <div className="container p-5 border-0 shadow-lg mx-auto rounded-md w-full md:w-[75%] lg:w-[35%] my-10">
    <div className={`text-center text-5xl uppercase ${count < 0 ? 'animate-bounce text-red-600'  : 'text-green-500'}`}>
  Counter
</div>

<div className={`text-center text-grey-700 text-5xl my-4 ${count > 0 ? 'text-green-600' : 'text-yellow-600'} ${count == 0 && 'text-blue-600'}`}>{count}</div>

<div  onClick={handleCount} className="flex items-center justify-center gap-3 my-5">
<button class="px-6 p-2 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all cursor-pointer duration-300 shadow-lg transform hover:scale-105">Decrease
  </button>


  <button onClick={handleCount} class="px-6 p-2 text-white font-semibold rounded-lg bg-gradient-to-r from-pink-500 to-orange-500 hover:from-orange-500 hover:to-pink-500 transition-all cursor-pointer duration-300 shadow-lg transform hover:scale-105">Reset
  </button>

  <button onClick={handleCount} class="px-6 p-2 text-white font-semibold rounded-lg bg-gradient-to-r from-green-400 to-teal-500 hover:from-teal-500 hover:to-green-400 transition-all cursor-pointer duration-300 shadow-lg transform hover:scale-105">Increase
    
  </button>

</div>
    </div>
    </>
  )
}

export default Counter
