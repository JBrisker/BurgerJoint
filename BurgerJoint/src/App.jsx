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
    <div>
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

//sign in page
function SignIn() {
  const currentUser = localStorage.getItem("user");
  const user = currentUser ? JSON.parse(currentUser) : {};
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (email !== user.Email) {
      alert("User not found!");
      return;
    }
    if (password !== user.Password) {
      alert("Incorrect password");
      return;
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="LoginForm">
        <label htmlFor="username" placeholder="email" required>
          Email:{""}
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="password" placeholder="password" required>
          Password:{""}
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button type="button" onClick={() => (window.location.href = "menu")}>
          Log In
        </button>
        <a href onClick={() => (window.location.href = "/signUp")}>
          Sign Up
        </a>
        <a href onClick={() => (window.location.href = "/menu")}>
          Continue as guest
        </a>
      </form>
    </div>
  );
}

//sign up page
function SignUp() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const user = {
      FirstName: formData.get("firstName"),
      LastName: formData.get("lastName"),
      Email: formData.get("email"),
      Password: formData.get("password"),
      Phone: formData.get("phone"),
    };
    //Error Checking

    if (!user.FirstName || !user.Email || !user.Password) {
      alert("Please fill out required fields");
      return;
    }
    if (!user.Email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }
    if (user.Password.length < 8) {
      alert("Password needs 8 characters minimum");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
  };
  return (
    <form onSubmit={handleSubmit} className="SignUpForm">
      <label for="firstName">First Name: </label>
      <input type="text" id="firstName" name="firstName" required></input>
      <label for="password">Last Name: </label>
      <input type="text" name="lastName" id="lastName"></input>
      <label for="email">Email: </label>
      <input type="email" id="email" name="email" required></input>
      <label htmlFor="password" placeholder="password">
        Password:
      </label>
      <input type="password" name="password" required></input>
      <label for="phone">Phone Number: </label>
      <input type="tel" id="phone" name="phone"></input>
      <button type="submit">Submit</button>
      <button type="reset" onClick={() => (location.href = "/")}>
        Cancel
      </button>
    </form>
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
  const user = JSON.parse(localStorage.getItem("user"));
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
//Burger menu
function Burgers() {
  return (
    <div className="menuCards">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="cardImage"
            image={classic}
            alt="single patty hamburger with fries"
          />
          <CardContent>
            <Typography variant="h4" className="cardTitle">
              Classic Hamburger
            </Typography>
            <Typography variant="body2" className="cardText">
              Classic single patty hamburger, grilled toasted buns, lettuce, and
              tomato.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="cardImage"
            image={cheese}
            alt="single patty burger w/ cheese"
          />
          <CardContent>
            <Typography variant="h4" className="cardTitle">
              Cheese Burger
            </Typography>
            <Typography variant="body2" className="cardText">
              Classic hamburger with a delicious melted slice of smoked cheddar
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="cardImage"
            image={double}
            alt="double patty burger"
          />
          <CardContent>
            <Typography variant="h4" className="cardTitle">
              Double Burger
            </Typography>
            <Typography variant="body2" className="cardText">
              Double the hunger&#63; Double the BEEF! Delicious cheeseburger
              with 2 all beef patties
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="cardImage"
            image={triple}
            alt="triple patty burger"
          />
          <CardContent>
            <Typography variant="h4" className="cardTitle">
              Behemoth Burger
            </Typography>
            <Typography variant="body2" className="cardText">
              triple patty cheeseburger weighing 1lb. Hungry&#63; Up for a
              challenge&#63; Then try our Behemoth hamburger!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
// //Drinks menu
function Drinks() {
  return (
    <div className="menuCards">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="cardImage"
            image={soda}
            alt="cup"
          />
          <CardContent>
            <h4 className="cardTitle">Fountain Soda</h4>
            <p className="cardText">
              Try our selection of real sugar fountain drinks.
            </p>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="cardImage"
            image={soda}
            alt="milkshake"
          />
          <CardContent>
            <h4 className="cardTitle">Milk Shake</h4>
            <p className="cardText">
              triple thick, shake made with real ice cream
            </p>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="cardImage"
            image={lemonade}
            alt="cup of lemonade"
          />
          <CardContent>
            <h4 className="cardTitle">Lemonade</h4>
            <p className="cardText">Fresh squeezed in-house lemondade</p>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="cardImage"
            image={tea}
            alt="bottle of juice"
          />
          <CardContent>
            <h4 className="cardTitle">Tea</h4>
            <p className="cardText">Assortment of amazing whole leaf tea.</p>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="cardImage"
            image={water}
            alt="clear glass of water"
          />
          <CardContent>
            <h4 className="cardTitle">Water</h4>
            <p className="cardText">Ice cold water</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
//Desserts menu
function Desserts() {
  return (
    <div className="cards">
      <Card sx={{ maxWdith: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="cardImage"
            image={pie}
            alt="slice of pie"
          />
          <CardContent>
            <h4 className="cardTitle">Pie</h4>
            <p className="cardText">
              Try our pie with a great selection from apple to sweet potato
            </p>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="cardImage"
            image={cake}
            alt="slice of cake"
          />
          <CardContent>
            <h4 className="cardTitle">Cake</h4>
            <p className="cardText">Try our delicious selection of cakes</p>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="cardImage"
            image={icecream}
            alt="scoop of ice cream in a bowl"
          />
          <CardContent>
            <h4 className="cardTitle">Ice Cream</h4>
            <p className="cardText">
              Try our delicious ice cream in a bowl or our delicious in-house
              made waffle cone
            </p>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="cardImage"
            image={bar}
            alt="Chocolate chip cake bar"
          />
          <CardContent>
            <h4 className="cardTitle">Bars</h4>
            <p className="cardText">Try our delicious bars</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
//other options menu
function Other() {
  return (
    <div className="menuCards">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="cardImage"
            image={fries}
            alt="bed of fries with cheese sauce"
          />
          <CardContent>
            <Typography variant="h4" className="cardTitle">
              Pulled Pork Cheesy Fries
            </Typography>
            <Typography variant="body2" className="cardText">
              Our special cut fries layered our juicy 13 hour smoked pulled
              pork, topped with a gooey layer of cheese and a drizzel of our
              home made "Sweet Baby BBQ sauce".
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="cardImage"
            image={chicken}
            alt="Three chicken sandwiches stacked on top of a table"
          />
          <CardContent>
            <Typography variant="h4" className="cardTitle">
              Chicken Sandwich
            </Typography>
            <Typography variant="body2" className="cardText">
              Sink your teeth into our deliciously juicy chicken sandwich. A
              tender chicken breast served on a soft bun. Try our classic! Or
              kick it up a knotch with one of our delicious sauces:Buffalo, BBQ
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="cardImage"
            image={hotDog}
            alt="hotdog with ketchup and mustard swirled
            on top being held by a hand in an unfocused background"
          />
          <CardContent>
            <Typography variant="h4" className="cardTitle">
              Hot Dogs
            </Typography>
            <Typography variant="body2" className="cardText">
              Plump sausage cradled in a soft bun
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="cardImage"
            image={melt}
            alt=""
          />
          <CardContent>
            <Typography variant="h4" className="cardTitle">
              Melts
            </Typography>
            <Typography className="cardText">
              Try our delicious melts! Your choice of protein, cheese, and
              toppings between slices of fresh sourdough bread
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

//contact page
function Contact() {
  const userContact = {
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    Phone: "",
    Message: "",
  };
  localStorage.setItem("client", JSON.stringify(userContact));
  return (
    <div>
      <h2>Contact Us!</h2>
      <form className="ContactForm">
        <label for="fname">First Name: </label>
        <input type="text" id="fname" name="fname" required></input>
        <label for="password">Last Name: </label>
        <input type="text" name="lname" id="lname"></input>
        <label for="email">Email: </label>
        <input type="email" id="email" name="email" required></input>
        <label for="phone" placeholder="optional">
          Phone Number:{""}
        </label>
        <input type="tel" id="phone" name="phone"></input>
        <label for="message">Send us a message!</label>
        <textarea
          type="textarea"
          id="message"
          name="message"
          rows={10}
          cols={100}
          required
        ></textarea>
        <button type="submit">Submit</button>
        <button type="reset">Cancel</button>
      </form>
    </div>
  );
}
//customization page
// function Customize(){
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

function Footer() {
  const year = new Date().getFullYear();
  return <p>Jay&apos;s Burger Joint &copy;{year}</p>;
}
export default App;
