import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import Button from '@/Components/Button/Button';

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill={true} alt="" className={styles.img}></Image>

                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDesc}>
                        Handcrafting award winning digital experiences
                    </h2>
                </div>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Are We?</h1>
                    <p className={styles.desc}>
                        Welcome to Discoverly, your gateway to a world of knowledge, inspiration, and discovery. We are a passionate team of writers, researchers, and explorers committed to bringing you the most fascinating stories, insights, and information from across the globe. <br /> <br />

                        Our mission is to ignite your curiosity, spark your imagination, and broaden your horizons. Whether you're an avid traveler, a history enthusiast, a tech geek, or simply a curious soul, Discoverly is here to fuel your thirst for knowledge. <br /> <br />

                        With a diverse range of topics, from travel adventures to scientific breakthroughs, cultural explorations to lifestyle tips, we strive to provide you with engaging and thought-provoking content that both informs and entertains. <br /> <br />

                        Join us on this exciting journey of discovery, where every article is an invitation to learn, explore, and share. We believe that knowledge has the power to inspire change and create a better world, and we're thrilled to have you along for the ride. <br /> <br />

                        Thank you for being part of the Discoverly community. Together, we'll uncover the wonders of our world and beyond.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What We Do?</h1>
                    <p className={styles.desc}>
                        At Discoverly, our mission is to provide you with a diverse range of high-quality content that informs, inspires, and entertains. Here's a glimpse of what we do: <br /> <br />

                        <strong>1. Explore the World:</strong> We're passionate about travel and exploration. Our travel articles take you on virtual journeys to breathtaking destinations, offering travel tips, local insights, and unforgettable experiences. <br /> <br />

                        <strong>2. Uncover Knowledge:</strong> Dive into the depths of knowledge with our informative pieces. From science and technology to history and culture, we bring you well-researched articles that expand your horizons. <br /> <br />

                        <strong>3. Inspire Creativity:</strong> Creativity knows no bounds, and neither do our creative articles. Discover art, photography, and design inspiration to fuel your own creative endeavors. <br /> <br />

                        <strong>4. Lifestyle and Wellness:</strong> We care about your well-being. Explore articles on health, lifestyle, and personal development, designed to help you live your best life. <br /> <br />

                        Whether you're here to learn, explore, find inspiration, or simply unwind, Discoverly is your trusted source for diverse, engaging, and meaningful content. Join us on this journey of discovery, and let's explore the world together.
                    </p>
                    <Button url="/contact" text="Contact" />
                </div>
            </div>
        </div>
    );
};

export default About;