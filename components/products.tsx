import React from "react";
import Product from "./product";


const Products: React.FC = () => (
    <div className = "products flex flex-col items-center justify-center" id = "products">
        <p className = "font-latob text-5xl mt-20">Our Products</p>
        <div className = "flex flex-row justify-between w-full px-32 mt-12">
            <div className = "grid gap-x-3 gap-y-28 grid-rows-2 grid-cols-3 items-center w-full auto-rows-min">
                <Product id = "legrand" name = "Legrand" link = "https://www.legrand.com/ecatalogue/" />
                <Product id = "osram" name = "Osram" link = "https://www.osram.com/cb/products/index.jsp" />
                <Product id = "schneider" name = "Schneider" link = "https://www.productinfo.schneider-electric.com/nadigest/pages/landingPages/digest178" />
                <Product id = "philips" name = "Philips" link = "https://www.lighting.philips.com/main/prof" />
                <Product id = "cetinkaya" name = "Cetinkaya" link = "http://www.vid-el.cz/ckfinder/userfiles/files/%C3%87etinkaya%20%C4%B0ngilizce%20Katalog%202018%20%20(1).pdf" />
                <Product id = "linkbasic" name = "Linkbasic" link = "https://www.linkbasic.us/linkbasic/2022/03/25/cablingproductscatalogue.pdf" />
                <Product id = "etelec" name = "Etelec" link = "https://www.etelec.com/ctl/2022/CAT-EN22.pdf" />
                <Product id = "jsl" name = "JSL" link = "https://jsl-online.com/catalogo.pdf" />
                <Product id = "varilight" name = "Varilight" link = "https://www.varilight.co.uk/ranges/decorative-finishes.php" />
                <div className = "flex flex-row items-center justify-center font-hb"><p className = "text-3xl px-16 text-center">Click on each brand to see their catalog</p></div>
                <Product id = "3m" name = "3M" link = "https://www.3m.com/3M/en_US/company-us/all-3m-products/~/All-3M-Products/?N=5002385+8711017+3294857497&rt=r3" />
                <div className = "flex flex-row items-center justify-center font-hb"><p className = "text-3xl px-16 text-center">Email the list of products needed at jar.lau@intnet.mu*</p></div>
            </div>
        </div>
    </div>
)

export default Products