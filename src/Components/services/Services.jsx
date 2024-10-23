// Services.js
import React, { useState, useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";
import Modal from "../Modal/Modal";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const servicesData = [
  {
    title: "BNP Paribas ISPL",
    briefDescription: "Application developer intern",
    detailedDescription: [
      "Developed and implemented an automatic file altering system to monitor polled files, generating real-time alerts via email forfile status changes, reducing manual file monitoring time by 80%.",
      "Configured Intellimatch for reconciliation processes, ensuring accuracy and efficiency in financial data matching",
      "Analysed data streams for actionable insights, interpreting vital information to optimize system performance",
      "Utilized interpreted data to create informative dashboards using Grafana which improved decision-making efficiency by providing stakeholders with real-time insights thereby increasing stakeholders’ satisfaction by 40% through easy visualization of key metrics"
    ],
  },
  {
    title: "Newgen Software Technologies Limited",
    briefDescription: "Web Development Intern.",
    detailedDescription: [
      "Created a hotel booking site, enhancing responsiveness by 20% and improving user experience",
     "Contributed to the design and development of the platform’s features and functionality, which contributed to the platform’s overall success and resulted with a 20-30% increase in hotel bookings",
     "Implemented responsive design and intuitive navigation, resulting in increased user engagement and bookings."
    ],
  },
  {
    title: "Bharat Heavy Electrical Limited",
    briefDescription: "Network Intern.",
    detailedDescription: [
      "Provided technical support in web servers, remote access. software-defined networking, and 10+ other internal operations tasks. Collaborated with other IT staff to ensure smooth integration of network and system infrastructures.",
      "Providing technical support to end-users and resolving network-related issues.",
      "Assisted in configuring network devices, analysing performance metrics, and implementing solutions to enhance overall connectivity and efficiency."
    ],
  },
];
  
const Services = () => {
  const [modalContent, setModalContent] = useState({ title: "", content: "" });
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const handleOpenModal = (service) => {
    setModalContent({ title: service.title, content: service.detailedDescription });
  };

  const handleCloseModal = () => {
    setModalContent({ title: "", content: "" });
  };

  return (
    <motion.div className={`Services ${modalContent.content ? 'blurred' : ''}`} variants={variants} initial="initial" ref={ref} animate="animate">
      <motion.div className="textContainer" variants={variants}>
        <p>I focus on helping your company grow<br /> and move forward</p> <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1><motion.b whileHover={{ color: "orange" }}>My</motion.b> professional</h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>
              work
            </motion.b> experiences
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
            onClick={() => handleOpenModal(service)}
          >
            <h2>{service.title}</h2>
            <p>{service.briefDescription}</p>
            <button>Read more</button>
          </motion.div>
        ))}
      </motion.div>
      <Modal isOpen={modalContent.content !== ""} onClose={handleCloseModal} title={modalContent.title} content={modalContent.content} />
    </motion.div>
  );
};

export default Services;
