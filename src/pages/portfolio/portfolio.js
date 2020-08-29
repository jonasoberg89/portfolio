import React from 'react';
import "./portfolio.css"
import Me from "../../utils/work"
import { motion } from "framer-motion";

function Portfolio() {

    const containerVariants = {
        before: {},
        after: { transition: { staggerChildren: 0.5 } },
    }
    const letterVariants = {
        before: {
            opacity: 0,
            y: 20,
            transition: {
                type: "tween",
                damping: 16,
                stiffness: 200,
            },
        },
        after: {
            opacity: 1,
            y: 0,
            transition: {
                type: "tween",
                damping: 16,
                stiffness: 200,
            },
        },
    }

    return (
        <div className="portfolio-container">
            <div className="portfolio-container-header">
                <h2 className="portfolio-container-header-text">Porfolio</h2>
            </div>
            <motion.div
                variants={containerVariants}
                initial={"before"}
                animate={"after"}
                className="portfolio-body">
                {
                    Me.images.map((img, index) => {
                        return (

                            <motion.div
                                key={index}
                                variants={letterVariants}
                                className="portfolio-body-row">
                                <div className="portfolio-body-container-img">
                                    <img className="portfolio-body-row-img" src={require(`../../static/${img.file}.jpg`)} alt="" />
                                </div>
                                <div className="portfolio-body-container-text">
                                    <div className="portfolio-body-row-header"><h3 className="portfolio-body-row-header-text">{img.title}</h3></div>
                                    <div className="portfolio-body-row-info">
                                        <span className="portfolio-body-row-info-text">{img.info}</span>
                                    </div>
                                    <p className="portfolio-body-row-info-text framework-title"> Framework: <span className="portfolio-framework">{img.framework}</span></p>
                                    {img.url && <a target="blank" href={img.url} className="portfolio-body-row-info-text">{img.url}</a>}
                                </div>
                            </motion.div>

                        )
                    })
                }
            </motion.div>
        </div>
    );
}

export default Portfolio;