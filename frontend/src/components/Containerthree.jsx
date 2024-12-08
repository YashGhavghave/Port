import React from 'react'
import './Containerthree.css'

function Containerthree() {
  return (
    <div id='three' className='h-[80vh] w-[80vw] relative top-[96rem] bg-white left-[10vw] rounded-3xl bg-gradient-to-b from-blue-500 to-black max-md:h-[50vh] '>
       
       <p className='text-4xl bg-transparent relative left-[5%] top-[5%] font-bold max-sm:top-[2%] '>@Projects</p>
          <div className='bg-transparent font-mono relative top-[15%] text-3xl max-md:text-xl max-md:w-[80%] max-md:top-[10%]  text-white' >
            <h2 className='bg-transparent font-mono relative left-[10vw]'>• Web Application Student Nest</h2>
            <br/>
            <h2 className='bg-transparent font-mono relative left-[10vw]'>• Medicinal Description System Using Gemini(1.5 Flash)</h2>
            <br/>
            <h2 className='bg-transparent font-mono relative left-[10vw]'>• Resume Analysis System</h2>
            <br/>
          
          </div>

    </div>
  )
}

export default Containerthree
