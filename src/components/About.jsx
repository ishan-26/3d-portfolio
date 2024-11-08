import React, { useRef } from "react";
import { Tilt } from "react-tilt";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Import your image
import myPhoto from "../assets/ishan.jpg"; // Update the path as needed

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.3 }}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  // Set up ref and in-view detection for the cards section
  const cardsRef = useRef(null);
  const isInView = useInView(cardsRef, { once: true, threshold: 0.25 });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-4 flex flex-col sm:flex-row items-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I'm a skilled software developer with experience in C++, HTML/CSS
          and expertise in frameworks like React.js, TailwindCSS. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        {/* Photo Container */}
        <div className="green-pink-gradient p-1 rounded-full ml-4">
          <img
            src={myPhoto}
            alt="My Photo"
            className="w-64 h-64 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Card section with AnimatePresence */}
      <div ref={cardsRef} className="mt-20 flex flex-wrap gap-10">
        <AnimatePresence>
          {isInView &&
            services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
