import React from 'react'
import NavNareshIT from './NavNareshIT'
import RgihtNaresh from './RgihtNaresh'
import FotterNareshIt from './FotterNareshIt'

export default function ServiceNaresh() {
  return (
    <div className='  bg-gradient-to-br  flex-col  bg-gray-300 flex items-center justify-center px-4'>
   
   
           <div className=' h-full  w-7xl  mt-4 mb-4 drop-shadow-2xl  drop-shadow-black drop-shadow-current p-0 pb-12'>
               <NavNareshIT/>

               <div className=' bg-[#FFFFFFCC] space-x-250 flex pl-8 pt-10'>
                <div className='font-semibold text-2xl'>
                    <h2>Services</h2>
                </div>
                <div>
                    <p className=' text-sm tracking-widest'><a href="/" className='text-red-500 hover:text-black '>HOME</a> » SERVICES</p>
                </div>
               </div>

               <div className='flex w-full bg-[#FFFFFFCC] pt-12'>

                    <div className=' w-750 mr-45 '>

                        <div className='mt-10  ml-10 '>
                            <p className=' text-sm/6 '>
                               <b>Naresh i Technologies</b>  Major Aspect of Concentration is IT Training at all the levels like Academic or Corporate Level. The mode of training and the course content for the training program varies depending upon the participants and their requirements.  Hence we have segregated our training division into the below segments so that maximum efficacy can be derived from the training. we are recognized to be the connoisseur in providing the best training program to the Candidates who are inclined to be Software Professionals
                            </p>
                        </div>

                        <div className='  ml-10 pt-10'>
                             <div className='font-semibold text-2xl'>
                                <h2>Classroom Training</h2>
                             </div>
                             <div className='mt-6'>
                                <p className='text-sm/6'>This is a custom-made training program to suit the aspirants from different educational backgrounds held at our campus. We are renowned around the world for this training where every aspirant shall attend technical sessions discussing every facet of the subject with in excruciating detail on varied technologies. Every aspirant will be provided with the hands on experience through a number of lab assignments and case study thereby making them more employable.</p>

                                <p className='text-sm font-bold pt-8 pb-6'>On-Campus Training</p>

                                <p className='text-sm/6 '>
                                    This training program is for the educational organizations like Colleges and Universities.  Objective of this training program is to bridge the gap between academic standards and the industry requirements while the student is still on the campus, thereby enhancing the recruitment and hiring chances of the students.
                                </p>


                                <p className='text-sm font-bold pt-8 pb-6'>Online Training</p>

                                <p className='text-sm/6 '>
                                   Our sole maximum in introducing Online Technical Training Sessions is to cater to the Training Requirements of the Aspirants who due to various reasons cannot travel physically to our location. In the online training program the training sessions shall be conducted over the internet using the latest state of the art software tools and the hands on experience also will be provided at the convenience of the participant.
                                </p>

                                <p className='text-sm font-bold pt-8 pb-6'>Corporate Training</p>



                                
                                <p className='text-sm/6 '>
                                  his training program is tailor-made to suit the working professionals and the course structure is customized to meet the project requirements expected from them. We provide these training sessions either at the Client Location or in our Campus depending upon the need of the client.Training and Development of the Technical expertise of the employees has become the most important integral sub-system of any organization operating in the IT industry. It also requires regular enhancements and updating of the training programs in accordance with the advancements in the technological outset, which poses the major difficulty for the development organizations. This is the key juncture where we share our expertise in reducing the training over-heads to the corporate sector.  We customize the course content depending on the project requirements of the client and the experience level of the participants thereby enhancing the productivity.
                                </p>
                             </div>
                        </div>


                    </div>
                   
                     <RgihtNaresh />
                
                    
                
               </div>
               <FotterNareshIt/>
             
           </div>
    </div>
  )
}
