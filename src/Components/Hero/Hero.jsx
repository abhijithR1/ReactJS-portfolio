import "./Hero.scss"
import {motion} from "framer-motion"

const textVariants={
  initial:{
    x: -500,
    opacity: 0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren: 0.1,
    },
  },

  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration: 2,
      repeat: Infinity,
    },
  },
};

const silderVariants={
  initial:{
    x: 0,
  },
  animate:{
    x:"-500%",
    transition:{
      duration: 35,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "linear",
    },
  },
};

const Hero = ({contactRef,portfolioRef}) => {
  const handleContactClick = () => {
    contactRef.current.scrollIntoView({behaviour: "smooth"});
  };

  const handlePortfolioRef = () =>{
    const link = document.createElement('a');
    link.href = './Resume.pdf'; 
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>ABHIJITH</motion.h2>
                <motion.h1 variants={textVariants}>Computer Science Engineer Graduate</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants} onClick={handlePortfolioRef}>Download Resume</motion.button>
                    <motion.button variants={textVariants} onClick={handleContactClick}>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="./scroll.png" alt="" />
            </motion.div>
            </div>  
            <motion.div className="slidingTextContainer" variants={silderVariants} initial="initial" animate="animate">
            Welcome To My World  
            </motion.div>  
            <div className="imageContainer">
                <img src="./hero1.png" alt="" />
            </div>
    </div>
  )
}

export default Hero
