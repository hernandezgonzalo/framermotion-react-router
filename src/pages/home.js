import React from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";
import { motion } from "framer-motion";

const imageVariants = {
  whileHover: {
    scale: 1.1,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <div className="container">
        <div className="row center">
          <div className="image-container">
            <div
              className="thumbnail"
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height
              }}
            >
              <div className="frame">
                <Link to={`/page`}>
                  <ProgressiveImage
                    src={require("../images/photo.jpg")}
                    placeholder={require("../images/compressed-image.jpg")}
                  >
                    {(src) => (
                      <motion.img
                        variants={imageVariants}
                        whileHover="whileHover"
                        src={src}
                        alt="Yasmeen Tariq"
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div exit={{ opacity: 0 }} className="information">
              <span>Press the image</span>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
