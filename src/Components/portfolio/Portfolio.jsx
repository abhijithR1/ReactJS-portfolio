import React, { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/9551192/pexels-photo-9551192.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quaerat ab id aperiam in itaque pariatur neque numquam quibusdam minima omnis praesentium, at architecto? Inventore, voluptas. Illum ipsa odit molestias.",
    },
    {
        id: 2,
        title: "something",
        img: "https://images.pexels.com/photos/24589418/pexels-photo-24589418/free-photo-of-a-waterfall-is-surrounded-by-trees-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quaerat ab id aperiam in itaque pariatur neque numquam quibusdam minima omnis praesentium, at architecto? Inventore, voluptas. Illum ipsa odit molestias.",
    },
    {
        id: 3,
        title: "anything",
        img: "https://images.pexels.com/photos/26926257/pexels-photo-26926257/free-photo-of-just-chillin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quaerat ab id aperiam in itaque pariatur neque numquam quibusdam minima omnis praesentium, at architecto? Inventore, voluptas. Illum ipsa odit molestias.",
    },
    {
        id: 4,
        title: "nothing",
        img: "https://images.pexels.com/photos/25583966/pexels-photo-25583966/free-photo-of-a-small-flower-with-green-leaves-and-red-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quaerat ab id aperiam in itaque pariatur neque numquam quibusdam minima omnis praesentium, at architecto? Inventore, voluptas. Illum ipsa odit molestias.",
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref,});

    const y = useTransform(scrollYProgress, [0, 1], [-300,300]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Work</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
