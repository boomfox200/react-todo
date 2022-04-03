import React, { Compomemt } from "react";
import content from "./content.module.css";



const Content = (nameElement) => {
    return (
        <div className={content.contBlock}>
            <div className={content.time}>{nameElement.time}</div>
            <div className={content.textBlock}>
                <div className={content.img}><img src={nameElement.imgSrc} /></div>
                <div className={content.text}>{nameElement.text}</div>
            </div>
        </div>
    );
};
export default Content;