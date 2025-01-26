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
            <img className ="product" src="https://media-photos.depop.com/b1/37925521/1972738922_6bf42f9519474398a2ccf43f1de321a2/P0.jpg"/>
            <button className ="product-label">H&M Women's White Shirt</button>
             <p className="price">$14.00</p>
             <a href = "https://www.depop.com/products/nobipenguin19-super-comfy-and-stretchy/?moduleOrigin=meganav"><button class = "purchase">Add To Bag</button></a>
          </div>
          <div className="product-container">
            <img className ="product" src="https://media-photos.depop.com/b1/15801073/1791126277_55e7666c0e1f41fcbcc443180154f63d/P0.jpg"/>
            <button className ="product-label">Brandy Melville's Women's Cream Shirt</button>
             <p className="price">$15.00</p>
             <a href = "https://media-photos.depop.com/b1/15801073/1791126277_55e7666c0e1f41fcbcc443180154f63d/P0.jpgv"><button class = "purchase">Add To Bag</button></a>
          </div>
          <div className="product-container">
            <img className ="product" src="https://media-photos.depop.com/b1/13538030/1985784832_3d1b8e45700f40cbb4951825aa7c2775/P0.jpg"/>
            <button className ="product-label">Gaps Women's Grey Sweatshirt</button>
             <p className="price">$15.00</p>
             <a href = "https://www.depop.com/products/onaomi-gap-dark-grey-knit-sweater/?moduleOrigin=meganav"><button class = "purchase">Add To Bag</button></a>
          </div>
          <div className="product-container">
            <img className ="product" src="https://media-photos.depop.com/b0/7042031/913087496_7846bddd119344a68fb08b7aa20f880a/P0.jpg"/>
            <button className ="product-label">Gap Women's Green T-shirt</button>
             <p className="price">$5.40</p>
             <a href = "https://www.depop.com/products/aepahl-gap-vintage-faded-army-green/"><button class = "purchase">Add To Bag</button></a>
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