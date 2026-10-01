import "./App.css";
import burgerLogo from "./assets/logo.jpg";
import classic from "./assets/classicBurger.jpg";
import cheese from "./assets/cheeseBurger.jpg";
import double from "./assets/doublePatty.jpg";
import triple from "./assets/TriplePatty.jpg";
import lemonade from "./assets/lemonade.jpg";
import soda from "./assets/soda.jpg";
import tea from "./assets/cuppatea.jpg";
import chicken from "./assets/chickenStack.png";
import hotDog from "./assets/hotDog.jpg";
import melt from "./assets/melts.jpg";
import fries from "./assets/fries.jpg";
import pie from "./assets/pieSlice.jpg";
import cake from "./assets/cake.jpg";
import bar from "./assets/bar.jpg";
import water from "./assets/water.jpg";
import icecream from "./assets/icecream.jpg";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";

//Main application function that renders the entire application
function App() {
  const [page, setPage] = useState("home");
  //switch cases for pages
  const currentPage = () => {
    switch (page) {
      case "home":
        return <Home />;
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
        return <AboutUs />;
    }
  };

  return (
    <body>
      <div>
        <h1 onClick={() => window.location.assign("/")}>Jay's Burger Joint</h1>
        <nav id="navBar">
          <a onClick={() => setPage("menu")}>Menu</a>
          <a onClick={() => setPage("aboutUs")}>About Us</a>
          <a onClick={() => setPage("contact")}>Contact</a>
          <button type="button" onClick={() => setPage("signIn")}>
            Sign In
          </button>
          <button type="button" onClick={() => setPage("signUp")}>
            Sign Up
          </button>
        </nav>

        {currentPage()}
        <Footer />
      </div>
    </body>
  );
}

function Home() {
  //create text
  const text = "Jay's Burger Joint";
  return (
    
    <div className="home">
      <h2>Welcome To</h2>
      <h1 className="letter">
        {text.split("").map((char, index) => (
          <span key={index} data-index={index} style={{ "--i": index }}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}
//About us page
function AboutUs() {
  return (
    <div className="aboutUs">
      <img className="logo" src={burgerLogo} alt="logo" />
      <section className="origin">
        <h2>About Us</h2>
        <p id="originStory">
          Founded in 1976, Jay&apos;s Burger Joint has spent nearly five decades
          perfecting the art of the classic American burger. From day one,
          we&apos;ve believed that great food starts with great ingredients like
          our fresh, never-frozen beef, hand‑crafted buns, and toppings prepared
          in house every morning. Our signature flame‑grilled flavor and
          made‑to‑order approach have earned us a loyal community of customers
          who return for the taste they can&apos;t find anywhere else. After all
          these years, we&apos;re still driven by the same mission: serve
          honest, unforgettable burgers that bring people together.
        </p>
      </section>
    </div>
  );
}

//sign up page
function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Error Checking
    try{
      if(loginStatus){
        alert("Already logged in!");
        return <Redirect to ="menu" />;
      }
    if (!firstName || !email || !password) {
      alert("Please fill out required fields");
      return;
    }
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }
    if (password.length < 8) {
      alert("Password needs 8 characters minimum");
      return;
    }
  }
  catch (error){
    alert("An error occured during Sign up. Please try again.");
  }

    const user = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Password: password,
      Phone: phone,
      loginStatus: true,
    };
    setLoginStatus(true);
    //save user to local storage
    localStorage.setItem("user", JSON.stringify(user));
  };
  return (
    <form onSubmit={handleSubmit} className="SignUpForm">
      <label htmlFor="firstName">First Name: </label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <label htmlFor="lastName">Last Name: </label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor="username" placeholder="email">
          Email:{""}
        </label>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      <label htmlFor="password" placeholder="password">
        Password:
      </label>
      <input
        type="password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      ></input>

      <label htmlFor="phone">Phone Number: </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      ></input>
      <button type="submit">Submit</button>
      <button type="reset" onClick={() => (location.href = "/")}>
        Cancel
      </button>
    </form>
   

  );
}


//sign in page
function SignIn() {
  const currentUser = localStorage.getItem("user");
  const user = currentUser ? JSON.parse(currentUser) : {};
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    try{
      if(loginStatus) {
        alert("You are already logged in!");
        return < Redirect to="/menu" />;
      }
      if(!email || !password) {
        alert("Please fill out required fields");
        return;
      }
     if (email !== user.Email) {
      alert("User not found!");
      return;
      }
     if (password !== user.Password) {
      alert("Incorrect password");
      return;
     }
  }
  catch (error) {
    alert("An error occurred during Login. Please try again.");
    return;
  }
  setLoginStatus(true);
};

  return (
    <div>
      <form onSubmit={handleSubmit} className="LoginForm">
        <label htmlFor="username" 
        placeholder="email" 
        required>
          Email:{""}
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="password" 
        placeholder="password" 
        required>
          Password:{""}
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        
        <button type="button" onClick={() => (window.location.href = "/menu")}>
          Log In
        </button>
        <a href onClick={() => (window.location.href ="/signUp")}>
          Sign Up
        </a>
        <a href onClick={() => (window.location.href = "/menu")}>
          Continue as guest
        </a>
      </form>
    </div>
  );
}


//Menu page
function Menu() {
  const [menuPage, setMenuPage] = useState("");
  const openPage = () => {
    switch (menuPage) {
      case "burgers":
        return <Burgers />;
      case "drinks":
        return <Drinks />;
      case "desserts":
        return <Desserts />;
      case "other":
        return <Other />;
    }
  };
  const user = JSON.parse(localStorage.getItem("user"))||{};
  const userName = user.FirstName || "Guest";
  const userWelcome = userName.replace(/^./, (char) => char.toUpperCase());

  return (
    <div>
      <h2>Welcome, {userWelcome}!</h2>

      <nav className="menubar">
        <a onClick={() => setMenuPage("burgers")}>Burgers</a>
        <a onClick={() => setMenuPage("drinks")}>Drinks</a>
        <a onClick={() => setMenuPage("desserts")}>Desserts</a>
        <a onClick={() => setMenuPage("other")}>Other</a>
      </nav>

      {openPage()}
    </div>
  );
}
function MenuCard({ item }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          className="cardImage"
          image={item.image}
          alt={item.alt}
        />
        <CardContent>
          <Typography variant="h4" className="cardTitle">
            {item.name}
          </Typography>
          <Typography variant="body2" className="cardText">
            {item.description}
          </Typography>
          <Typography variant="h5" className="cardPrice">
            ${item.price.toFixed(2)}
          </Typography>
          
        </CardContent>
        
      </CardActionArea>
    </Card>
  );
}

function Burgers() {
  const items = [
    {
      name: "Classic Hamburger",
      description:
        "Classic single patty hamburger, grilled toasted buns, lettuce, and tomato.",
      image: classic,
      alt: "single patty hamburger with fries",
      price: 5.99,
    },
    {
      name: "Cheese Burger",
      description:
        "Classic hamburger with a delicious melted slice of smoked cheddar",
      image: cheese,
      alt: "single patty burger w/ cheese",
      price: 6.99,
    },
    {
      name: "Double Burger",
      description:
        "Double the hunger? Double the BEEF! Delicious cheeseburger with 2 all beef patties",
      image: double,
      alt: "double patty burger",
      price: 8.99,
    },
    {
      name: "Behemoth Burger",
      description:
        "triple patty cheeseburger weighing 1lb. Hungry? Up for a challenge? Then try our Behemoth hamburger!",
      image: triple,
      alt: "triple patty burger",
      price: 12.99,
    },
  ];

  return (
    <div className="menuCards">
      {items.map((item) => (
        <MenuCard key={item.name} item={item} />
      ))}
    </div>
  );
}

function Drinks() {
  const items = [
    {
      name: "Fountain Soda",
      description: "Try our selection of real sugar fountain drinks.",
      image: soda,
      alt: "cup",
      price: 2.99,
    },
    {
      name: "Milk Shake",
      description: "triple thick, shake made with real ice cream",
      image: soda,
      alt: "milkshake",
      price: 4.99,
    },
    {
      name: "Lemonade",
      description: "Fresh squeezed in-house lemondade",
      image: lemonade,
      alt: "cup of lemonade",
      price: 2.99,
    },
    {
      name: "Tea",
      description: "Assortment of amazing whole leaf tea. Price per pot.",
      image: tea,
      alt: "teapot suspended over a cup of tea",
      price: 6.99,
    },
    {
      name: "Water",
      description: "Ice cold water",
      image: water,
      alt: "clear glass of water",
      price: 0,
    },
  ];

  return (
    <div className="menuCards">
      {items.map((item) => (
        <MenuCard key={item.name} item={item} />
      ))}
    </div>
  );
}

function Desserts() {
  const items = [
    {
      name: "Pie",
      description: "Try our pie with a great selection from apple to sweet potato",
      image: pie,
      alt: "slice of pie",
      price: 4.99,
    },
    {
      name: "Cake",
      description: "Try our delicious selection of cakes",
      image: cake,
      alt: "slice of cake",
      price:4.99,
    },
    {
      name: "Ice Cream",
      description:
        "Try our delicious ice cream in a bowl or our delicious in-house made waffle cone",
      image: icecream,
      alt: "scoop of ice cream in a bowl",
      price:1.50,
    },
    {
      name: "Bars",
      description: "Try our delicious bars",
      image: bar,
      alt: "Chocolate chip cake bar",
      price:4.60
    },
  ];

  return (
    <div className="cards">
      {items.map((item) => (
        <MenuCard key={item.name} item={item} />
      ))}
    </div>
  );
}

function Other() {
  const items = [
    {
      name: "Pulled Pork Cheesy Fries",
      description:
        'Our special cut fries layered our juicy 13 hour smoked pulled pork, topped with a gooey layer of cheese and a drizzel of our home made "Sweet Baby BBQ sauce".',
      image: fries,
      alt: "bed of fries topped with meat and cheese sauce",
      price: 7.99,
    },
    {
      name: "Chicken Sandwich",
      description:
        "Sink your teeth into our deliciously juicy chicken sandwich. A tender chicken breast served on a soft bun. Try our classic! Or kick it up a knotch with one of our delicious sauces:Buffalo, BBQ",
      image: chicken,
      alt: "Three chicken sandwiches stacked on top of a table",
      price: 6.99,
    },
    {
      name: "Hot Dogs",
      description: "Plump sausage cradled in a soft bun",
      image: hotDog,
      alt: "hotdog with ketchup and mustard on a bun",
      price: 4.99
    },
    {
      name: "Melts",
      description:
        "Try our delicious melts! Your choice of protein, cheese, and toppings between slices of fresh sourdough bread",
      image: melt,
      alt: "Grilled melt sandwiches on panini press with melted cheese, meat, and tomatoes",
      price: 7.99
    },
  ];

  return (
    <div className="menuCards">
      {items.map((item) => (
        <MenuCard key={item.name} item={item} />
      ))}
    </div>
  );
}

//contact page
function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

  const userContact = { 
    FirstName: firstName,
    LastName: lastName,
    Email: email,
    Phone: phone,
    Message: message,
  };

  localStorage.setItem("client", JSON.stringify(userContact));
};
  return (
    <div>
      <h2>Contact Us!</h2>
        <form onSubmit={handleSubmit} className="SignUpForm">
      <label htmlFor="firstName">First Name: </label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <label htmlFor="lastName">Last Name: </label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
        <label htmlFor="email">Email: </label>
        <input type="email"
        id="email" 
        name="email" 
        required 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}></input>

        <label htmlFor="phone" placeholder="optional">
          Phone Number:{""}
        </label>
        <input type="tel" id="phone"
         name="phone" 
         value={phone}
        onChange={(e) => setPhone(e.target.value)}></input>
        <label htmlFor="message">Send us a message!</label>
        <textarea
          type="textarea"
          id="message"
          name="message"
          rows={10}
          cols={100}
          required
          value ={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
        <button type="reset">Cancel</button>
      </form>
    </div>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return <p>Jay&apos;s Burger Joint &copy;{year}</p>;
}
export default App;
