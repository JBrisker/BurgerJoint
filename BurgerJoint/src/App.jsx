import './App.css'
import burgerLogo from './assets/logo.jpg';
import {useState} from 'react';

function App(){
  const [page, setPage] = useState("signIn");
  const currentPage =()=>{
    switch(page){
       case "signIn":
        return <SignIn />;
      case "signUp":
        return <SignUp />;
      case "menu":
        return <Menu />;
      case "aboutUs":
        return <AboutUs />; 
      case "contact":
        return <Contact />;
      default:
       return <SignIn />;
    }
  };
  return(
    <div>
      <h1 onClick={()=> window.location.assign("/")}>Welcome to Jay's Burger Joint</h1>
      <nav>
      
      <a href ="#" onClick={() => setPage("signIn")}>Sign In</a>  
      <a href ="#" onClick ={() => setPage("menu")}>Menu</a>
      <a href="#" onClick={() => setPage("aboutUs")}>About Us</a>
      <a href="#" onClick={() => setPage("contact")}>Contact</a>
</nav>

      {currentPage()}
      <Footer/>
    </div>
  );
}
function AboutUs(){
    return(
    <div className='aboutUs'> 
      <img className ="logo" src ={burgerLogo} alt ="logo" />
      <section className='origin'>
        <h2>About Us</h2>
        <p>Founded in 1976, Jay&apos;s Burger Joint has spent nearly five decades perfecting the art of the
           classic American burger. From day one, we&apos;ve believed that great food starts with great
           ingredients like our fresh, never-frozen beef, hand‑crafted buns, and toppings prepared in house
           every morning. Our signature flame‑grilled flavor and made‑to‑order approach have earned 
           us a loyal community of customers who return for the taste they can&apos;t find anywhere else.
          After all these years, we&apos;re still driven by the same mission: serve honest,
          unforgettable burgers that bring people together.
        </p>
      </section> 
        </div>);
}
// sign in page
function SignIn(){


    return(
    <div>
      
        <form className ="LoginForm">
            <label htmlFor ='username' placeholder='email' required>Email: </label>
            <input type ="email"></input>
            <label htmlFor="password" placeholder = "password" required>Password: </label>
            <input type = "password"></input> 
           
            <button type ="submit" onClick={()=>window.location.href ="/menu"}>Log In</button>
            <button type ="button"onClick={() => window.location.href="/signUp"}>Sign Up</button>
            <button type ="button" onClick ={()=> window.location.href="menu"}>Continue as guest</button>
         </form> 
  
        </div>

        
        );

}


function SignUp(){

  return(<form className ="SignUpForm">
        <label for ='fname' >First Name: </label>
            <input type ="text" id ="fname" name ="fname" required></input>
            <label for="password" >Last Name: </label>
            <input type = "text" name ="lname" id ="lname"></input>
            <label for ="email">Email: </label> 
            <input type ="email" id="email" name='email' required></input>
             <label htmlFor="password" placeholder = "password">Password: </label>
            <input type = "password" name ="password" required></input>
            <label for="phone">Phone Number: </label>
            <input type ='tel' id ="phone" name ="phone"></input>
            <button type ="submit" onClick= {() => location.href = "/menu"}>Submit</button>
            <button type ="reset" onClick ={() => location.href ="/"}>Cancel</button>
      </form>);
}
function Menu (){ 
  const [burgerPage, setPage] = useState("menu");
  const menuPage =()=>{
    switch(burgerPage){
      case "cancel":
        return <AboutUs />;
      case "burgers":
        return <Burgers />;
      case "drinks":
        return <Drinks/>;
        case "desserts":
          return <Desserts />;
      case "other":
        return <Other />;
    }
  };
  return(
    <div>
      <h2>Hello, {localStorage.getItem("user")}! </h2>
      <menubar>
      <a href ="#" onClick={() => setPage("burgers")}>Burgers</a>
      <a href ="#" onClick={() => setPage("drinks")}>Drinks</a>
      <a href ="#" onClick={() => setPage("desserts")}>Desserts</a>
      <a href ="#" onClick ={() => setPage("other")}>Other</a>   
</menubar>
    {menuPage()}

    </div>
  );
  
}
function Burgers(){
return (
  <div className ="cards">
    
  <div id ="single">
    <div className = "cardInfo">
  <img className="cardImage" src='#' alt="single patty burger"/>
  <h4 className ="cardTitle">Single Burger</h4>
  </div>
  <p className ="cardText">Classic hamburger</p>
  </div>

    <div id ="cheese">
      <div className = "cardInfo">
  <img className="cardImage" src='#' alt="single patty burger w/ cheese"/>
  <h4 className ="cardTitle">Cheese Burger</h4>
   </div>
  <p className ="cardText">Classic hamburger with a delicious melted slice of smoked cheddar</p>
  </div>

    <div id ="double">
        <div className ="cardInfo">
  <img className="cardImage" src='#' alt="double patty burger"/>
  <h4 className ="cardTitle">Double Burger</h4>
  </div>
  <p className ="cardText">Double the hunger&#63; Double the BEEF! hamburger with 2 all beef patties</p>
  </div>

    <div id ="triple">
        <div className ="cardInfo">
  <img className="cardImage" src='#' alt="Triple patty burger"/>
  <h4 className ="cardTitle">Behemoth Burger</h4>
  </div>
  <p className ="cardText">triple burger patty weighing 1lb. Hungry&#63; Up for a challenge&#63; Then try our Behemoth hamburger</p>
  </div>
  </div>
);
}
function Drinks(){
return (
  <div className='cards'>
     <div id ="fountain">
      <div className ="cardInfo">
  <img className="cardImage" src='#' alt="cup"/>
  <h4 className ="cardTitle">Fountain Soda</h4>
  </div>
  <p className ="cardText">Try our selection of real sugar fountain drinks.</p>
  </div>


 <div id ="shake">
    <div className ="cardInfo">
  <img className ="cardImage"src='#' alt="milkshake"/>
  <h4 className ="cardTitle">Milk Shake</h4>
  </div>
  <p className ="cardText">triple thick, shake made with real ice cream</p>
  </div>


   <div id ="lemon">
      <div className ="cardInfo">
  <img className ="cardImage" src='#' alt="cup of lemonade"/>
  <h4 className ="cardTitle">Lemonade</h4>
    </div>
  <p className ="cardText">Fresh squeezed in-house lemondade</p>
  </div>

   <div id ="juice">
    <div className ="cardInfo">
  <img className ="cardImage" src='#' alt="bottle of juice"/>
  <h4 className ="cardTitle">Juice</h4>
  </div>
  <p className ="cardText">Assortment of delicious juices in a bottle</p>
  </div>

   <div id ="water">
      <div className ="cardInfo">
  <img src='#' alt="bottle of water"/>

  <h4 className ="cardTitle">Water</h4>
  </div>
  <p className ="cardText">Ice cold water</p>
  </div>
  </div>
);
}

function Desserts(){
return(  
<div className='cards'>
  <div id ="pie">
      <div className ="cardInfo">
  <img className="cardImage" src='#' alt="slice of pie"/>
  <h4 className ="cardTitle">Pie</h4>
  </div>
  <p className ="cardText">Try our pie with a great selection from apple to sweet potato</p>
  </div>

   <div id ="cake">
      <div className ="cardInfo">
  <img className="cardImage" src='#' alt="slice of cake"/>
  <h4 className ="cardTitle">Cake</h4>
  </div>
  <p className ="cardText">Try our delicious selection of cakes</p>
  </div>

   <div id ="ice cream">
    <div className ="cardInfo">
  <img className="cardImage" src='#' alt="scoop of ice cream in a bowl"/>
  <h4 className ="cardTitle">Ice Cream</h4>
  </div>
  <p className ="cardText">Try our delicious ice cream in a bowl or our delicious in-house made waffle cone</p>
  </div>

   <div id ="Bars">
      <div className ="cardInfo">
  <img className="cardImage" src='#' alt="Chocolate peanut butter bar"/>
  <h4 className ="cardTitle">Bars</h4>
    </div>
  <p className ="cardText">Try our delicious bars</p>
  </div>
  </div>);
}
function Other(){
return (  <div className='cards'>
     <div id ="Cheese Fries">
       <div className ="cardInfo">
  <img className="cardImage" src='#' alt="bed of fries with cheese sauce"/>
  <h4 className ="cardTitle">Cheesy Fries</h4>
  </div>
  <p className ="cardText">Our special cut fries layered with a gooey layer of cheese</p>
  </div>

     <div id ="chicken">
      <div className ="cardInfo">
  <img className="cardImage" src='#' alt=""/>
  <h4 className ="cardTitle">Chicken Sandwich</h4>
  </div>
  <p className ="cardText">Juicy chicken breast served on a soft bun</p>
  </div>

     <div id ="hotdog">
      <div className ="cardInfo">
  <img className="cardImage" src='#' alt="hotdog"/>
  <h4 className ="cardTitle">Hot Dogs</h4>
  </div>
  <p className ="cardText">Plump sausage cradled in a soft bun</p>
  </div>

     <div id ="melts">
      <div className ="cardInfo">
  <img className="cardImage" src='#' alt=""/>
  <h4 className ="cardTitle">Melts</h4>
  </div>
  <p className ="cardText">Delicious melts made with fresh sourdough bread</p>
  </div>
    
  </div>);
}
function Contact(){
  return(
    <div>
      <form className ="ContactForm">
        <label for ='fname' >First Name: </label>
            <input type ="text" id ="fname" name ="fname" required></input>
            <label for="password" >Last Name: </label>
            <input type = "text" name ="lname" id ="lname"></input>
            <label for ="email">Email: </label> 
            <input type ="email" id="email" name='email' required></input>
            <label for="phone" placeholder="optional">Phone Number: </label>
            <input type ='tel' id ="phone" name ="phone"></input>
            <button type ="button">Submit</button>
            <button type ="reset">Cancel</button>
      </form>
    </div>
  );
}
// function Customize to customize
//   return(
// <div>
//   <ul>
//     <li>Extra Cheese</li>
//     <li>Extra Meat</li>
//     <li>Onions</li>
//     <li>pickles</li>
//     <li>Bacon</li>
//     <li>Avocado</li>
//     <li>Jalapenos</li>
//     <li>Extra Sauce</li>
//     <li>Grilled Onions</li>
//   </ul>
// </div>
//   );
//

function Footer(){
  
  const year = new Date().getFullYear();
 return(
 <p>
  Jay&apos;s Burger Joint &copy;{year}
 </p>
 );
}
export default App;
