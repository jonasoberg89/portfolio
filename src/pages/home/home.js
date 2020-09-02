import React from 'react';
import "./home.css"
import { motion } from "framer-motion";


function Home() {

    const containerVariants = {
        before: {},
        after: { transition: { staggerChildren: 0.4 } },
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

    let welcome = ["Hello!", "My name is Jonas Öberg", "I am a frontend developer"]
    let info = ["Welcome to my portfolio!"]
    let images = ["react", "angular", "vue"]

    return (
        <motion.div
            className="container-home"
            center={"y"}
            width={"100%"}
            background={""}
            style={{
                fontWeight: "bold",
                letterSpacing: "-0.04em",
                fontSize: 26,
                color: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}
            variants={containerVariants}
            initial={"before"}
            animate={"after"}
        >
            {welcome.map((letter, index) => (
                <motion.h1
                    className="home-text big"
                    key={index}
                    width={"auto"}
                    background={""}
                    style={{ position: "relative" }}
                    variants={letterVariants}
                >
                    {letter}
                </motion.h1>

            ))}
            {info.map((letter, index) => (
                <motion.h3
                    className="home-text small"
                    key={index}
                    width={"auto"}
                    background={""}
                    color={"yellow"}
                    style={{ position: "relative" }}
                    variants={letterVariants}
                >
                    {letter}
                </motion.h3>

            ))}
            <div>
                {images.map((img, index) => (
                    <motion.img
                        className="home-logo"
                        key={index}
                        src={require(`../../static/${img}.png`)}
                        width={"auto"}
                        alt={img}
                        background={""}
                        style={{ position: "relative" }}
                        variants={letterVariants}
                    >
                    </motion.img>

                ))}

            </div>

        </motion.div>
    );
}

export default Home;