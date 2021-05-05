import Banner from "./components/Banner";
import Header from "./components/Header";
import Signup from "./components/Signup";
import "./styles.css";

// this could come from a database
const menuItems = [
    {
        name: "Our  Menu",
        link: "/",
        type: "link",
    },
    {
        name: "Special Offers",
        link: "/",
        type: "link",
    },
    {
        name: "About",
        link: "/about",
        type: "link",
    },
    {
        name: "Order",
        link: "/order",
        type: "button",
    },
];

export default function App({ children }) {
    return (
        <div className="App">
            <Header menuItems={menuItems} logo="Restaurant Title" />
            {children}
        </div>
    );
}
