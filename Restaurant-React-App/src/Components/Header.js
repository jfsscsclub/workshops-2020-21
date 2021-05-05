import { Link } from "react-router-dom";

const Header = ({ menuItems, logo }) => {
    return (
        <header>
            <Link to="/">
                <div class="logo">{logo}</div>
            </Link>
            <nav>
                <div class="menu">
                    {menuItems.map((menuItem) => (
                        <p>
                            <Link
                                class={
                                    menuItem.type === "button" && "order-button"
                                }
                                to={menuItem.link}
                            >
                                {menuItem.name}
                            </Link>
                        </p>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
