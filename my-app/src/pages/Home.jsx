import React from "react";

class Home extends React.Component{
    render(){
        return(
        <body>
      
      
        <h4 class ="summerDrop">Sustainable Recommendations</h4>
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
        
      </body>
        );
    }
}

export default Home;