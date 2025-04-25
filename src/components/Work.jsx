import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { work } from "../constants";
import { SectionWrapper } from "./hoc";
import { textVariant } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";

const WorkCard = ({ work }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={work.date}
      iconStyle={{ background: work.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={work.icon}
            alt={work.company_name}
            className='w-[80%] h-[80%] object-contain rounded-full'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{work.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {work.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {work.points.map((point, index) => (
          <li
            key={`work-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Work = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I work on
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
            Work Experience
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {work.map((work, index) => (
            <WorkCard
              key={`work-${index}`}
              experience={work}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Work, "work");
