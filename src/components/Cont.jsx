import React from 'react'
import './Cont.css'

function Home() {
  return (
    <div id='container1' className='h-[80vh] w-[80vw] relative top-[68rem] bg-gradient-to-r from-red-500 to-blue-500  left-[10vw] rounded-3xl max-md:h-[90vh] max-sm:h-[70vh]  max-2xl:h-[90vh]'>
      <p className='text-4xl bg-transparent relative left-[5%] top-[5%] font-bold max-sm:top-[2%]'>@About</p>
      <p className='text-3xl bg-transparent font-mono w-[80%] relative left-[10%] top-[15%] max-lg:text-lg max-lg:top-[10%] max-2xl:text-2xl max-sm:top-[6%] max-sm:text-sm '>
       I'm Yash Ghavghave,  Engineering student pursuing B.Tech in Artificial Intelligence and Machine Learning (AIML) from the FEAT, Sawangi(Meghe), Wardha.

       <br/>
       <br/>
       <hr/>
       <br/>
      As a full-stack web developer, I have hands-on experience with both front-end and back-end technologies. I'm proficient in HTML, CSS, JavaScript, and frameworks like React and Node.js. I’ve worked on several projects where I was responsible for designing user-friendly interfaces as well as developing robust back-end systems.
      Alongside web development, I’m diving deep into the world of Artificial Intelligence and Machine Learning, constantly learning and exploring new concepts. This combination of design, development, and AI/ML makes me uniquely positioned to work on projects that are both innovative and functional.

      </p>

    </div>
  )
}

export default Home
