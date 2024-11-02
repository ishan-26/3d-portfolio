import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import StarsCanvas from './canvas/Stars';
import Typewriter from 'typewriter-effect';
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <StarsCanvas />
      <div className={`absolute inset-0 top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#ff00ff]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-pink-500 via-pink-400 to-pink-300' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#00ffff]'>Ishan</span>
          </h1>

          <p className={`${styles.heroSubText} text-white`}>
  <Typewriter
    options={{
      strings: ["I'm a Software Developer", "Aviation Enthusiast", "Stocks and Crypto Enthusiast"],
      autoStart: true,
      loop: true,
    }}
  />
</p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute w-full flex justify-center items-center' style={{ bottom: '-30px' }}>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
