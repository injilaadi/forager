import React from "react";

function Account(){
    
        return(

            <section> 
            <h1 className = "homeTitle">Account</h1>
        
            <nav className = "navBar">
                <h3 className = "For you"><a className="anchorHover" href="/" style={{color: 'black'}} onMouseOver={"black"}>Home</a></h3>
                <h3 className = "Find your best fit"><a href="/Fit" style={{color: 'black'}}>Fit</a></h3>
                <h3 className = "Sign-in"><a href="/Account" style={{color: 'black'}}>Account</a></h3>
            </nav>
            <section class = "account">
                <div class="account-container">
                <h2 class ="sign-in2">Log-In</h2>
                <input type="email" placeholder="Enter Email"/>
                <input type="password" placeholder="Enter Password"/>
                <input class = "submit" type="submit"/>
      
                </div>
                 <div class="account-container">
     
                    <h2 class ="sign-in2">Sign-Up</h2>
                    <input type="email" placeholder="Enter Email"/>
                    <input type="password" placeholder="Enter Password"/>
                    <input type="password" placeholder="Confirm Password"/>
                    <input class = "submit" type="submit"/>
                </div>

          


            </section>
            <footer class = "footer">
                <h1 class = "footerTitle">Forager © 2025</h1>
    
            </footer>
        </section>
        
        )
    
}

export default Account;