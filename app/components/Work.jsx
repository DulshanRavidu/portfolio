import { assets, workData } from '@/app/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

       <motion.h4
       initial={{y: -20, opacity: 0}}
       whileInView={{ y: 0, opacity: 1}}
       transition={{ delay: 0.3, duration: 0.5}}
       className='text-center mb-2 text-lg font-Ovo'>My portfolio</motion.h4>

         <motion.h2
         initial={{y: -20, opacity: 0}}
         whileInView={{ y: 0, opacity: 1}}
         transition={{ delay: 0.5, duration: 0.5}}
         className='text-center text-5xl font-Ovo' >My Projects</motion.h2>

         <motion.p
         initial={{opacity: 0}}
         whileInView={{opacity: 1}}
         transition={{ delay: 0.7, duration: 0.5}}
         className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo' >Welcome to my wen development portfolio! Explore a collection of projects showcasing my expertise in front-end development. </motion.p>

        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ delay: 0.9, duration: 0.6}}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-8 dark:text-black'>
            {workData.map((project, index)=>(
                <motion.div
                whileHover={{scale: 1.05}}
                transition={{duration: 0.3}}
                key={index} className='bg-gray-900 dark:bg-gray-800 rounded-2xl p-6 flex flex-col gap-4 cursor-pointer group border border-gray-700 h-full min-h-[600px]'>  

                  {/* Project Image */}
                  <div className='w-full h-48 bg-no-repeat bg-center rounded-lg overflow-hidden flex-shrink-0' style={{backgroundImage: `url(${typeof project.bgImage === 'string' ? project.bgImage : project.bgImage.src})`, backgroundSize: 'contain', backgroundPosition: 'center'}}></div>

                  {/* Project Info */}
                  <div className='flex flex-col gap-3 flex-grow justify-between'>
                     <div>
                        <h2 className='font-semibold text-white text-lg' >{project.title}</h2>
                        <p className='text-sm text-gray-400 line-clamp-3 mt-2' >{project.fullDescription || project.description}</p>
                     </div>
                     
                     {/* Buttons */}
                     <div className='flex flex-col gap-2 mt-auto'>
                        <button className='w-full border border-cyan-500 text-cyan-500 rounded-full px-4 py-2 text-sm hover:bg-cyan-500 hover:text-white transition flex items-center justify-center gap-2'>
                          <span className='text-lg'>⊕</span> Read More
                        </button>
                     
                        <div className='flex items-center gap-2'>
                           {project.githubLink && (
                             <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className='flex-1 bg-orange-500 text-white rounded-full px-4 py-2 text-sm hover:bg-orange-600 transition flex items-center justify-center gap-2'>
                               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                               </svg>
                               GitHub
                             </a>
                           )}
                           {project.linkedinLink && (
                             <a href={project.linkedinLink} target='_blank' rel='noopener noreferrer' className='flex-1 bg-orange-500 text-white rounded-full px-4 py-2 text-sm hover:bg-orange-600 transition flex items-center justify-center gap-2'>
                               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                               </svg>
                               LinkedIn
                             </a>
                           )}
                           {project.demoLink && (
                             <a href={project.demoLink} target='_blank' rel='noopener noreferrer' className='flex-1 bg-purple-600 text-white rounded-full px-4 py-2 text-sm hover:bg-purple-700 transition flex items-center justify-center gap-2'>
                               <span>▶</span> Demo
                             </a>
                           )}
                        </div>
                     </div>
                  </div>

                </motion.div>
            ))}
        </motion.div>


         <motion.a
         initial={{opacity: 0}}
         whileInView={{opacity: 1}}
         transition={{ delay: 1.1, duration: 0.5}}
         
         href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover  ' >
            Show more <Image src={ isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4' />
         </motion.a>



    </motion.div>
  )
}

export default Work
