import { BallCanvas } from './canvas'
import { SectionWrapper } from './hoc'
import { technologies } from '../constants'
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
       <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I work with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
            Technologies
        </h2>
      </motion.div>

    <div className='flex flex-wrap flex-row gap-10 justify-center'>

      {technologies.map((technology)=>(
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
  ))}
    </div>
    </>
  )
}

export default Tech