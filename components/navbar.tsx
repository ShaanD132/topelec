import React from "react";
import Link from "next/link"

const Navbar: React.FC = () => {
    return(
        <div className = "navbar drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] relative z-10">
            <div className = "flex justify-between flex-row mx-20 py-5">
                <a href = "#home"><h1 className = "text-3xl font-mb main-logo">TOPELEC LTD</h1></a>
                <div className = "flex flex-row text-xl mt-2 font-h">
                    <a href = "/" className = "hover:text-blu"><h2 className = "mx-6">Home</h2></a>
                    <a href = "#products" className = "hover:text-blu"><p className = "mx-6">Products</p></a>
                    <a href = "#services" className = "hover:text-blu"><p className = "mx-6 hover:text-blu">Services</p></a>
                    <a href = "#about" className = "hover:text-blu"><p className = "mx-6 hover:text-blu">About Us</p></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar