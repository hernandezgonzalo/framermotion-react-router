import React from "react";
import { motion } from "framer-motion";
import ScrollForMore from "../components/scrollForMore";

const transition = {
  delay: 0.2,
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9]
};

const thumbnailVariants = (imageDetails) => ({
  initial: {
    y: "-50%",
    height: imageDetails.height,
    width: imageDetails.width
  },
  animate: {
    y: 0,
    width: "100%",
    transition
  }
});

const imageVariants = {
  initial: { scale: 1.1 },
  animate: { y: -700, transition }
};

const textVariants = {
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1
    }
  }
};

const letterVariants = {
  initial: {
    y: 400
  },
  animate: {
    y: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }
  }
};

const Model = ({ imageDetails }) => {
  return (
    <div className="single">
      <div className="container fluid">
        <div className="row center top-row">
          <div className="top">
            <div className="model">
              <motion.span
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="first"
              >
                <motion.span variants={letterVariants}>H</motion.span>
                <motion.span variants={letterVariants}>e</motion.span>
                <motion.span variants={letterVariants}>l</motion.span>
                <motion.span variants={letterVariants}>l</motion.span>
                <motion.span variants={letterVariants}>o</motion.span>{" "}
                <motion.span variants={letterVariants}>w</motion.span>
                <motion.span variants={letterVariants}>o</motion.span>
                <motion.span variants={letterVariants}>r</motion.span>
                <motion.span variants={letterVariants}>l</motion.span>
                <motion.span variants={letterVariants}>d</motion.span>
              </motion.span>
            </div>
          </div>
        </div>
        <div className="row bottom-row">
          <div className="bottom">
            <div className="image-container-single">
              <motion.div
                variants={thumbnailVariants(imageDetails)}
                initial="initial"
                animate="animate"
                className="thumbnail-single"
              >
                <div className="frame-single">
                  <motion.img
                    variants={imageVariants}
                    src={require("../images/yasmeen.webp")}
                    alt="an image"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className="detailed-information">
        <div className="container">
          <div className="row">
            <h2 className="title">
              The inspiration behind the artwork & <br /> what it means.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
