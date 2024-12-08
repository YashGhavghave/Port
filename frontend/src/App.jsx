import { useEffect, useState } from 'react'
import Profile from './components/Profile'
import Icon from './components/Icon'
import Home from './components/Cont'
import TypingEffect from './components/TypingEffect'
import Conttwo from './components/ContTwo'
import Intro from './components/intro'
import Containerthree from './components/Containerthree'
import axios from 'axios'

function App() {
  const [fileSrc, setFileSrc] = useState(null);

    useEffect(()=>{
      const fetchFile = async()=>{
        try{
          const responce = await axios.get('http://localhost:3000/Public/image.png', {responseType: 'bolb'})
          const fileURL = URL.createObjectURL(responce.data)
          setFileSrc(fileURL);
        }catch(error){
          console.error(error)
        }
      }
      fetchFile();
    })

  return (
    <div>
      <Icon/>
      <Profile>{fileSrc ? (
                <img src={fileSrc} alt="Dynamic File"/>
            ) : (
                <p>Loading file...</p>
            )}</Profile>
      <TypingEffect/>
      <Home/>
      <Conttwo/>
      <Containerthree/>
      <Intro/>
    </div>
  )
}

export default App
