import React from "react";
import FileUpload from "../components/FileUpload";

function Fit(){
   
        return(
            <section> 
            <h1 className = "homeTitle">Forager</h1>
            
            <nav className = "navBar">
                <h3 className = "For you"><a className="anchorHover" href="/" style={{color: 'black'}} onMouseOver={"black"}>Home</a></h3>
                <h3 className = "Find your best fit"><a href="/Fit" style={{color: 'black'}}>Find your best fit</a></h3>
                <h3 className = "Sign-in"><a href="/Account" style={{color: 'black'}}>Account</a></h3>
            </nav>
            
            <section class = "home-container">

            {/* <img class = "bottleimg fade" src="6.jpg"/> */}
            
            <div class="filedrop">
                
            <FileUpload/>
            </div>
            
            
            <div class="homepg-txt">
              <h2 class="serumText">Find your best fit</h2>
              <h3 class = "serumDesc">A way to find sustainable dupes to your favorites. But better.</h3>
              <button class = "shop">Add the fit</button>
              
              </div>
       
               
            </section>
        
          <h4 class ="summerDrop">Here's Your Best Fit Matches</h4>
          <section class = "summer-container">
             <div class="product-container">
              <img class ="product" src="https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_PG5C01_640x640_0.jpg"/>
              <button class ="product-label">Advanced Night Repair Serum Duo</button>
              <button class = "product-desc">Synchronized Multi-Recovery Complex</button>
               <p class="price">$193.00</p>
              <button class = "purchase">Add To Bag</button>
            </div>
            <div class="product-container">
              <img class ="product" src="https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_YA6FCT_640x640_0.jpg"/>
              <button class ="product-label">Double Wear
        Stay-in-Place Foundation</button>
              <button class = "product-desc">24-hour wear. Flawless, natural, matte foundation.</button>
              <p class="price">$48.00</p>
              <button class = "purchase">Add To Bag</button>
            </div>
            <div class="product-container">
              <img class ="product" src="https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_PMXX01_640x640_0.jpg"/>
              <button class ="product-label">Moisturizer
        Youth Power Creme </button>
              <button class = "product-desc">Rich multi-action creme: Firming, lifting, radiance</button>
              <p class="price">$64.00 - $120.00</p>
              <button class = "purchase">Add To Bag</button>
            </div>
             <div class="product-container">
              <img class ="product" src="https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_PPPX01_640x640_0.jpg"/>
              <button class ="product-label">Advanced Night Repair Eye Concentrate</button>
              <button class = "product-desc">Reduces the look of lines. Skin feels firmer, nourished</button>
               <p class="price">$78.00</p>
              <button class = "purchase">Add To Bag</button>
            </div>
          </section>
          <footer class = "footer">
            <h1 class = "footerTitle">Forager © 2025</h1>
    
        </footer>
          </section>

        );
    
}
export default Fit;