import React from 'react';
import './profile.css';
import image from '../assets/image.png'; // Adjust the path to the file location.

function Profile() {
  return (
    <div
      id="image"
      className="bg-black w-[1/3vw] h-[50vh] absolute top-[22vh] left-[50%] transform -translate-x-1/2 
                 rounded-full object-cover overflow-hidden hover:shadow-[0px_0px_50px_rgba(255,0,0,0)] 
                 transition-all duration-500 
                 max-sm:w-[300px] max-sm:h-[300px] max-sm:flex max-sm:justify-center 
                 max-sm:top-[18vh] 
                 max-2xl:w-[30vw] max-xl:h-[36vh] max-lg:w-[50vw] max-lg:top-[12vh] 
                 lg:left-[20vw] lg:translate-x-0"
    >
      <img src={image} alt="Profile" className="h-[100%] w-[100%]" />
    </div>
  );
}

export default Profile;
