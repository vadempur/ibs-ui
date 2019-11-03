import React from "react"
import "./styles.css"


export default function Product({img,title,desc}){
    return(
        <div className="product-container">

            <div className="product-img" data-aos="fade-down">
                <img src={img} alt="product-img"/>
            </div>

            <div className="product-desc" data-aos="fade-up">
                <h3 className="product-desc-title" >{title}</h3>
                <p className="product-desc-text">{desc}</p>
            </div>
            
        </div>
    )
}