import React from "react";

function Home(){
        return(
        
        <>
        <section>
        <h1 className = "homeTitle">Forager</h1>
        
        <nav className = "navBar">
            <h3 className = "For you"><a className="anchorHover" href="/" style={{color: 'black'}} onMouseOver={"black"}>Home</a></h3>
            <h3 className = "Find your best fit"><a href="/Fit" style={{color: 'black'}}>Find your best fit</a></h3>
            <h3 className = "Sign-in"><a href="/Account" style={{color: 'black'}}>Account</a></h3>
        </nav>

        <h4 className ="recs">Sustainable Recommendations</h4>
        <section className = "recs-container">
           <div className="product-container">
            <img className ="product" src="https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_PG5C01_640x640_0.jpg"/>
            <button className ="product-label">Advanced Night Repair Serum Duo</button>
            <button className = "product-desc">Synchronized Multi-Recovery Complex</button>
             <p className="price">$193.00</p>
            <button className = "purchase">Add To Bag</button>
          </div>
          <div className="product-container">
            <img className ="product" src="https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_YA6FCT_640x640_0.jpg"/>
            <button className ="product-label">Double Wear
      Stay-in-Place Foundation</button>
            <button className = "product-desc">24-hour wear. Flawless, natural, matte foundation.</button>
            <p className="price">$48.00</p>
            <button className = "purchase">Add To Bag</button>
          </div>
          <div className="product-container">
            <img className ="product" src="https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_PMXX01_640x640_0.jpg"/>
            <button className ="product-label">Moisturizer
      Youth Power Creme </button>
            <button className = "product-desc">Rich multi-action creme: Firming, lifting, radiance</button>
            <p className="price">$64.00 - $120.00</p>
            <button className = "purchase">Add To Bag</button>
          </div>
           <div className="product-container">
            <img className ="product" src="https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_PPPX01_640x640_0.jpg"/>
            <button className ="product-label">Advanced Night Repair Eye Concentrate</button>
            <button className = "product-desc">Reduces the look of lines. Skin feels firmer, nourished</button>
             <p className="price">$78.00</p>
            <button className = "purchase">Add To Bag</button>
          </div>
        </section>
        <footer class = "footer">
            <h1 class = "footerTitle">Forager © 2025</h1>
    
        </footer>
      </section>
      
      </>
        );

}

export default Home;