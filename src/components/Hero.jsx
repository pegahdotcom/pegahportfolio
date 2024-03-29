import React from 'react';
import pegahheader from '../assets/pegahheader.jpeg';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id="hero">
      <img 
      className="w-full h-screen object-cover object-left scale-x-[-1]" 
      src={pegahheader} 
      alt="/" 
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
        <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I´m Pegah Astaneh</h1>
        <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800"></h2>
        <h2>
            I'm a
            <TypeAnimation
              sequence={['Developer', 2000, 'Coder', 2000, 'UX/UI Designer', 2000, ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full" >
            <FaTwitter   className= "cursor-pointer" size={20}/>
            <FaFacebookF className= "cursor-pointer" size={20}/>
            <FaInstagram className= "cursor-pointer" size={20}/>
            <FaLinkedin  className= "cursor-pointer" size={20} />
            <a href= "https://github.com/pegahdotcom"><FaGithub className= "cursor-pointer" size={20}></FaGithub></a>
          

          </div> 
        </div>
      </div>
    </div>
  
  );
};

export default Hero;
