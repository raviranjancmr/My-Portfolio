
import React from 'react';

function openWebsite(url) {
  window.open(url, '_blank');
}
function login() {
  alert('This function will enable soon');
}
export default function App() {
  const linkedinUrl = 'https://www.linkedin.com/in/ravi-ranjan-7686ba241/';
  const instagramUrl = 'https://www.instagram.com/';
  const githubUrl = 'https://github.com/raviranjancmr';
  return (
    <div className="bg-black h-auto w-full">
      {/* ------------------------------nav--------------------- */}
      <nav className="w-full h-14 bg-indigo-200 flex justify-between px-4 items-center md:px-4">
        <div className="text-2xl text-indigo-600 font-bold">Ravi.</div>
        <ul className="md:flex hidden font-semibold ">
          <li className="mx-[10px] cursor-pointer"><a href="/about">About</a></li>
          <li className="mx-[10px] cursor-pointer"><a href="/projects">Projects</a></li>
          <li className="mx-[10px] cursor-pointer"><a href="/contact">Contact</a></li>
        </ul>
        <div onClick={login} className="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer">Login/signup</div>
        <div className="md:hidden">
          <a className="text-4xl" href="#">&#8801;</a>
        </div>
      </nav>
      {/* ---------------------header-------------------------- */}
      <header>
        <div className="bg-black w-full h-screen sm:flex justify-between">
          <div class="bg-black pt-[60px] md:pt-[170px] px-4 lg:px-8 font-bold">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white">Hi, I'm <span class="text-red-500">Ravi </span>Ranjan</h1>
            <p className="text-white text-1xl md:text-2xl mt-6">Coder | Web Developer</p>
            {/* -----------------------resume---------------------------- */}
            <div className="text-white  mt-20">
              <a download className="px-8 py-3 md:text-[20px] mt-10 bg-indigo-600 rounded-[20px] md:rounded-[30px] md:mx-[120px] active:bg-indigo-700" href="./Resume.pdf">Resume</a>
              {/* ---------------------logo png----------------------- */}
              <div className="md:mx-[121px] mt-8 w-10 flex space-x-2">
                <img onClick={() => openWebsite(linkedinUrl)} className="cursor-pointer" src="./linkedin.png" alt="" />
                <img onClick={() => openWebsite(instagramUrl)} className="cursor-pointer" src="./instagram.png" alt="" />
                <img onClick={() => openWebsite(githubUrl)} className="cursor-pointer" src="./github.png" alt="" />
              </div>
            </div>
            {/* ------------------------ravi img-------------------- */}
          </div>
          <div >
            <img className="w-full h-full object-cover" src='./Ravi.jpg' alt="" />
          </div>
        </div>
        {/* ---------------------------About------------------------ */}
        <div className="text-white w-full h-screen bg-black pt-2">
          <div className='flex justify-center items-center'>
            <h1 className='sm:mt-14 mt-36 font-bold text-4xl md:text-5xl lg:text-6xl'>About Me</h1>
          </div>
          <div className='mt-8 flex justify-center'>
            {/* ------------------About left------------------------ */}
            <div className=' w-full h-screen'>
              <div className='w-full h-[50%]'>
                <img className='p-4 w-full h-full object-cover' src="https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              </div>
              <div className=' w-full h-[50%]'>
                <img className='p-4 w-full h-full object-cover' src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              </div>
            </div>
            {/* --------------------About right------------------- */}
            <div className='w-full h-screen'>
              <div className='w-full h-[50%] p-4 overflow-hidden'>
                <div className='flex justify-center'><h1 className=' text-3xl font-semibold'>Programmer</h1></div>
                <p className='mt-5'>
                  Enthusiastic programmer fluent in C/C++, Java, and Python.My journey is defined by a love for problem-solving and a commitment to continuous learning. Join me as I navigate the intricate world of algorithms and craft elegant solutions. Let's build, innovate, and make code tell compelling stories together!
                </p>
              </div>
              <div className=' w-full h-[50%]  p-4 overflow-hidden'>
                <div className='flex justify-center'><h1 className='  text-3xl font-semibold'>Web Developer</h1></div>
                <p className='mt-5'>
                  In the realm of web development, I find my passion in crafting stunning and functional websites. Proficient in front-end technologies, I specialize in turning design concepts into captivating user experiences. My skills extend to database management, allowing me to build dynamic web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------project------------------------ */}
        <div class="bg-black w-full h-screen">
          <div className='flex justify-center items-center'>
            <h1 className='text-white mt-72 md:mt-[230px] font-bold text-4xl md:text-5xl lg:text-6xl'>My Projects</h1>
          </div>
          <div className='justify-center mt-8 w-full h-screen bg-black'>
            {/* ---------------------project top------------------- */}
            <div className='w-full h-auto text-white'>

              <div className='w-full h-[35vh] p-4 overflow-hidden'>
                <div><h1 className=' mt-5 text-3xl font-semibold'>Golf Website</h1></div>
                <p className='mt-5'>
                  My golf website showcases stunning courses, upcoming events, and expert tips for golf enthusiasts. Through HTML, CSS, and JavaScript, I've crafted an engaging platform to explore the sport's intricacies.With visually appealing design and intuitive functionality, my website aims to elevate the golfing experience online.
                </p>
              </div>

              <div className='w-full h-[35vh] sm:h-[50vh] lg:h-[65vh]'>
                <video autoPlay loop muted className="p-4 w-full h-full object-cover" src="./Vid-Golf.mp4"></video>
              </div>

            </div>
            {/* --------------------project bottom------------------- */}
            <div className='w-full h-auto text-white bg-black'>

              <div className='w-full h-[35vh] p-4 overflow-hidden'>
                <div><h1 className=' mt-5 text-3xl font-semibold'>Portfolio Website</h1></div>
                <p className='mt-5'>
                  My portfolio website serves as a demonstration of my capabilities. I've developed this site to showcase my proficiency in web development. This website itself is a practice ground for refining my coding abilities and exploring new techniques. As a work-in-progress, it reflects my ongoing journey of growth and improvement in the field of web development.
                </p>
              </div>

              <div className='w-full h-[35vh] sm:h-[50vh] lg:h-[65vh]'>
                <video autoPlay loop muted className="p-4 w-full h-full object-cover" src="./Vid-port.mp4"></video>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------contact form-------------------- */}
        <div className='w-full h-80 bg-black mt-[300px] sm:h-[480px] md:h-[550px] lg:h-[830px] xl:h-[820px] 2xl:h-[720px]'></div>

        <div className='w-full h-auto p-4 bg-black'>

          <div className='flex justify-center items-center'>
            <h1 className='text-white mt-20 font-bold text-4xl md:text-5xl lg:text-6xl'>Contact Me</h1>
          </div>
          {/* ---------below contact-------- */}
          <div className='mt-14 text-center sm:flex sm:justify-evenly  text-1xl lg:text-[21px]'>
            <div className='bg-black'>
              <form action="">
                <label htmlFor="">
                  <span className='font-semibold pr-6 text-white'>Name: </span><input
                    className='rounded hover:bg-gray-200' type="text" placeholder='Enter Your Name' />
                </label><br /><br />

                <label htmlFor="">
                  <span className='font-semibold pr-7 text-white'>Email: </span><input
                    className='rounded hover:bg-gray-200' type="email" placeholder='Enter Your Email' />
                </label><br /><br />

                <label htmlFor="">
                  <span className='font-semibold pr-6 text-white'>Phone: </span><input
                    className='rounded hover:bg-gray-200' type="tel" placeholder='Enter Phone No.' />
                </label><br /><br />

                <label htmlFor="gender">
                  <span className='font-semibold pr-14 text-white'>Gender: </span>
                  <input type="radio" name='gender' /> <span className='text-white'>Male </span>sp
                  <input type="radio" name='gender' /> <span className='text-white'>Female </span>
                </label><br /><br />
              </form>
            </div>
            <div className=''>
              <label htmlFor="">
                <textarea className='overflow-auto rounded hover:bg-gray-200' name="" id="" cols="30" rows="6" placeholder='Enter your text here'></textarea>
              </label><br /><br />

              <div className='flex justify-center'>
                <button className='bg-indigo-600 px-6 py-1 rounded-3xl active:hover:bg-green-700 text-white font-semibold'>Submit</button>
              </div>
            </div>
          </div>

        </div>
        <div>
          <div className='mt-12 w-full h-16 bg-[#262626] flex justify-center items-center text-white'>       
              Copyright @ 2024 Ravi Ranjan
          </div>
        </div>
      </header>

    </div>
  )
}