import React, { useRef } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import useObserver from "../hooks/useObserver";

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
    borderRadius: 0,
    transition
  }
});

const imageVariants = {
  initial: { scale: 1.1 },
  animate: {
    y: -500,
    transition
  }
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

const informationVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Page = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.5]);
  const informationRef = useRef(null);
  const { inViewport } = useObserver(informationRef, 0.25);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="single"
    >
      <div className="container fluid">
        <div className="row center top-row">
          <div className="top">
            <div className="title">
              <motion.span variants={textVariants} className="first">
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
                    style={{ scale }}
                    variants={imageVariants}
                    src={require("../images/photo.jpg")}
                    alt="an image"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="detailed-information" ref={informationRef}>
        <div className="container">
          {inViewport && (
            <motion.div variants={informationVariants} className="row">
              <h2 className="title">
                Congue purus elementum vel quisque ornare <br />
                class at hac felis integer montes.
              </h2>
              <p>
                Scelerisque tempus commodo ante est sem lobortis duis senectus,
                arcu posuere ridiculus facilisi vehicula a proin, iaculis
                imperdiet dui himenaeos id dignissim urna. Pellentesque dapibus
                litora ridiculus semper ante venenatis morbi commodo aptent in
                massa neque et, quam ultricies vel turpis sit sem imperdiet
                himenaeos consequat felis tellus convallis. Diam elementum
                cursus sociis viverra volutpat laoreet rutrum sagittis magna
                consequat turpis pulvinar, neque aliquam phasellus a vivamus et
                ligula ridiculus imperdiet sed lectus eleifend, morbi tincidunt
                quam euismod bibendum fusce enim eu metus dictum mi. Facilisis
                curae phasellus habitasse auctor praesent amet, risus viverra
                pulvinar commodo nisl condimentum pharetra, dignissim rutrum
                suspendisse volutpat ante. Sagittis fringilla eu feugiat potenti
                ligula nostra lobortis nec tristique luctus, cubilia phasellus
                lorem purus consectetur pharetra nisi integer vestibulum
                rhoncus, faucibus suspendisse ipsum velit placerat sapien libero
                at fames. Ridiculus non imperdiet orci penatibus eleifend proin
                mi nulla natoque venenatis taciti, pretium felis donec velit
                risus magna per massa fringilla. Est nec curae arcu integer
                lorem etiam phasellus maecenas, sagittis dapibus cubilia
                consectetur inceptos massa morbi, nisl lectus augue mattis
                adipiscing lacinia in. Sodales fames ac facilisi imperdiet
                porttitor a, adipiscing natoque consequat eleifend facilisis
                eros senectus, molestie ridiculus nostra lacinia dictum. Platea
                sodales inceptos commodo integer turpis ad, condimentum bibendum
                penatibus accumsan lacus, himenaeos maecenas habitasse per
                scelerisque.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
