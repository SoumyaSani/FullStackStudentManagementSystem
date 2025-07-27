import {React} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUncharted } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faSquareXTwitter}  from '@fortawesome/free-brands-svg-icons';
import {faTelegram}  from '@fortawesome/free-brands-svg-icons';
import {faLinkedin}  from '@fortawesome/free-brands-svg-icons';
import NavNareshIT from './NavNareshIT';


export default function () {

    const navigate = useNavigate();
  return (
    <div>

     <div className='items-center w-full bg-[#ffffffcc]
                justify-center flex space-x-170 pb-18 pt-8'>
                    <div>
                            <a href="/">

                                                    <img src="../src/images/nareshItLogo.png" alt="" className='h-25 w-100 pl-10 '/>

                            </a>
                    </div>
                    <div className='pt-8'>
                        <p className='pl-8 font-semibold tracking-widest'>FOLLOW US SOCIAL MEDIA :</p>
                        <div className='flex space-x-7 pt-5 pr-6' >
                            <button className=' hover:text-red-600'  >
                                <a target='blank' href="https://www.facebook.com/nareshitechnologies/"> <FontAwesomeIcon icon={faFacebook} className='text-2xl' /></a>
                            </button>
                            <button className=' hover:text-red-600' >
                                <a target='blank' href="https://www.instagram.com/nareshitech/"> <FontAwesomeIcon icon={faInstagram}  className='text-2xl'/></a>
                            </button>
                             <button className=' hover:text-red-600' >
                               <a target='blank' href="https://www.youtube.com/channel/UC4o8Fdpv3g_AjgShAeivqpA"><FontAwesomeIcon icon={faYoutube}  className='text-2xl'/></a>
                            </button>
                            <button className=' hover:text-red-600' >
                                <a target='blank' href="https://x.com/nareshitech"><FontAwesomeIcon icon={faSquareXTwitter} className='text-2xl' /></a>
                            </button>
                             <button className=' hover:text-red-600' >
                              <a target='blank' href="https://t.me/nareshit"><FontAwesomeIcon icon={faTelegram}  className='text-2xl'/></a> 
                            </button>
                             <button className=' hover:text-red-600' >
                               <a target='blank' href="https://www.linkedin.com/company/naresh-i-technologies"><FontAwesomeIcon icon={faLinkedin}  className='text-2xl'/></a>
                            </button>
                        </div>
                    </div>
    
                </div>
                <nav className='space-x-10 h-12 bg-[#555555]  text-white justify-center justify-items-center'>
                   
                    <ul className='flex space-x-14 font-semibold text-[14px] pt-3 '>
                        <li ><a href="/" >HOME  </a></li>
                        <li ><a href="/allCourses" >ALL COURSES </a></li>
                        {/* <li><a href="/service" >Services</a></li> */}
                         <li>
                       <div className="relative group inline-block">
                        {/* This is your tab or button */}
                        <a href="/service" >SERVICES </a>

                        {/* Dropdown menu */}
                        {/* <div className=" absolute hidden group-hover:block bg-black border  shadow-md mt-3  w-40 z-50">
                            <ul className="py-1 pl-4">
                            <li className="px-4 py-2  hover:bg-gray-200 cursor-pointer" >Internship Programs</li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Internship assistance</li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Internships</li>
                            </ul>
                        </div> */}
                        </div>
                        </li> 
                        <li><a href="/softwareTraining">SOFTWARE TRAINING</a></li>
                        <li><a href="/projects">PROJECTS</a></li>
                        <li><a href="">NEW BATCHES</a></li>
                        
                        <li><a href="">INTERNSHIPS</a></li>
                        <li><a href="/carrer">CAREERS</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/blog">BLOG</a></li>
    
                    </ul>
                    
                </nav>



    </div>
  )
}
