import React, { useEffect, useState } from 'react';
import why1 from "../../public/why1.png";
import why2 from "../../public/why2.png";
import why3 from "../../public/why3.png";
import why4 from "../../public/why4.png";
import why5 from "../../public/why5.png";
import why6 from "../../public/why6.png";
import why7 from "../../public/why7.png";

const Whychoose = () => {
    const data = [
        { img: why1, h1: "Rigorous Checking", p: "We have instituted 60+ quality checks, undertaken detailed design planning, and put in place feasibility processes to avoid errors." },
        { img: why2, h1: "Attractive EMI options", p: "Don't let financial worries be an obstacle in the path to your dream home design. Choose from our attractive range of EMI options and choose one that best suits you." },
        { img: why3, h1: "Suited for all Budgets", p: "We have a wide range of home products for every budget. There is something for everyone. We value total transparency in our quotes and there will be no cost overruns in the quote given to you." },
        { img: why4, h1: "On-Time Completion", p: "Rest assured that your dream home will be handed over on time, within budget, and as per schedule." },
        { img: why5, h1: "Assured Warranty", p: "There is a manufacturer-led product warranty on modular kitchens, wardrobes and bath solutions for up to 10 years*." },
        { img: why6, h1: "Personalised Interior Design", p: "We create home spaces tailored to your tastes and lifestyle, balancing visual appeal with functional ease, and optimising available space-and we keep it all within your budget." },
        { img: why7, h1: "Single Point of Contact", p: "We understand that material selection, vendor management, and site supervision can lead to unpleasant experiences, hence our CES will be a single point of contact for all your requirements." }
    ];
    
    const [imgIndex, setImgIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true); // to control fade-in and fade-out effect

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFadeIn(false); // Start fade-out
            setTimeout(() => {
                setImgIndex(prevIndex => (prevIndex + 1) % data.length); // Change image
                setFadeIn(true); // Start fade-in
            }, 500); // Delay for the fade-out effect
        }, 3500); // Slightly longer interval to allow both fade-out and fade-in

        return () => clearInterval(intervalId);
    }, [data.length]);

    return (
        <div className="whychoose">
            <div><h1>Why choose the Beautiful Homes Service?</h1></div>
            <div className="imgmain">
                <img
                    className={`imgwhy ${fadeIn ? 'fade-in' : 'fade-out'}`}
                    src={data[imgIndex].img}
                    alt={`Image ${imgIndex + 1}`}
                />
                <div className={`ded ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                    <h1>{data[imgIndex].h1}</h1>
                    <p>{data[imgIndex].p}</p>
                </div>
            </div>
        </div>
    );
};

export default Whychoose;
