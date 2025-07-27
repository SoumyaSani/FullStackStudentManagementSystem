import React from 'react'
import NavNareshIT from './NavNareshIT'
import FotterNareshIt from './FotterNareshIt'
import RgihtNaresh from './RgihtNaresh'

export default function ProjectNaresh() {
  return (
     <div className='  bg-gradient-to-br  flex-col  bg-gray-300 flex items-center justify-center px-4'>
       
       
               <div className=' h-full  w-7xl  mt-4 mb-4 drop-shadow-2xl  drop-shadow-black drop-shadow-current p-0 pb-12'>
                   <NavNareshIT/>
                    <div className=' bg-[#FFFFFFCC] space-x-245 flex pl-8 pt-10'>
                    <div className='font-semibold text-2xl'>
                        <h2>Projects</h2>
                    </div>
                    <div>
                        <p className=' text-sm tracking-widest'><a href="/" className='text-red-500 hover:text-black '>HOME</a> » PROJECTS</p>
                    </div>
                   </div>

                    <div className='flex w-full bg-[#FFFFFFCC] pt-12'>
                         <div className=' w-750 mr-45 '>
                            <div className='pl-26 pt-20  '>
                                <div className='justify-center flex justify-items-center space-x-10'>

                                    <img src="../src/images/microsoft.png" alt="microSoft.net" className='size-38 grayscale hover:grayscale-0'  />
                                   <img src="../src/images/android.png" alt="android" className='size-38 grayscale hover:grayscale-0'  />
                                   <img src="../src/images/hadoop.jpg" alt="hadoop" className='size-45 w-55 grayscale hover:grayscale-0' />

                                </div>
                                 <div className='justify-center flex justify-items-center space-x-10'>

                                    <img src="../src/images/ios.webp" alt="ios" className='size-38 pt-8 w-70 grayscale hover:grayscale-0'  />
                                   <img src="../src/images/php.png" alt="php" className='size-50 grayscale hover:grayscale-0'  />
                                </div>

                                <div className='space-x-1'>
                                        <button className='bg-[#006d8d] hover:bg-[#5a81a4] py-3 px-4 shadow-2xl shadow-black rounded-3xl'>
                                             <p className='font-[Opens-sens] text-white text-sm tracking-widest font-semibold'> IEEE PROJECTS</p>
                                             
                                        </button>
                                         <button className='bg-[#D9593D] hover:bg-[#b17264] py-3 px-4 shadow-2xl shadow-black rounded-3xl'>
                                             <p className='font-[Opens-sens] text-white text-sm tracking-widest  font-bold'> LIVE WEB BASED PROJECTS</p>
                                             
                                        </button>
                                         <button className='bg-[#B4BA6C] hover:bg-[#a5ab5f] py-3 px-4 shadow-2xl shadow-black rounded-3xl'>
                                             <p className='font-[Opens-sens] text-white text-sm tracking-widest  font-bold'> REAL-TIME PROJECTS</p>
                                             
                                        </button>
                                </div>





                                

                                  
                            </div>
                          
                            
                          

                         </div>
                         <RgihtNaresh/>
                    </div>

                    <FotterNareshIt/>
               </div>
     </div>
  )
}
