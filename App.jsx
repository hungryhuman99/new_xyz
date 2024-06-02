import {motion} from "framer-motion"

const gridContainerVarients = {
  hidden: {opacity:0},
  show: {opacity:1, transition: {staggerChildren:0.5}}
}

const gridSquareVarients = {hidden:{opacity:0}, show: {opacity:1}}

export default function App() {
  return (
    <div className='flex flex-col gap-10 overflow-x-hidden'>
      
      <motion.section
        variants={gridContainerVarients}
        initial = "hidden"
        animate = "show"
        className='grid grid-cols-3 p-10 gap-10'>
 
{/* fade-up */}

          <motion.div 
            variants={gridSquareVarients}
            className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>
    
            <motion.div 
              className="w-20 h-20 bg-stone-100 rounded-lg"
              initial = {{opacity:0, y:-100}}
              animate = {{opacity:1, y: 0}}
              transition = {{duration:.5, ease: "easeOut", delay: 0.2}} >
            </motion.div>
            <motion.div 
              className="w-20 h-20 bg-stone-100 rounded-full"
              initial = {{opacity:0, y: 100}}
              animate = {{opacity:1, y: 0}}
              transition = {{duration:.5, ease: "easeOut", delay: .2}} >
            </motion.div>
          </motion.div>


      {/* shape shifting */}
      
          <motion.div 
            variants={gridSquareVarients}
            className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>

            <motion.div
            className="w-1/3 h-1/3 shadow-md bg-rose-400"
            animate = {{
              scale:[1,2,2,1],
              rotate: [0,90,90,0]
            }}>

            </motion.div>




          </motion.div>







          <motion.div 
            variants={gridSquareVarients}
            className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>
          </motion.div>
          
          
          
          
      </motion.section>
    </div>
  )
}