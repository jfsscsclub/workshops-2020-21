import { Link } from "react-router-dom";

const Header = ({ pages, logo }) => {
    return (
        <header>
            <Link to="/">
                <div class="logo">{logo}</div>
            </Link>
            <nav>
                <div class="menu">
                    {pages.map((page) => (
                        <p>
                            <Link
                                class={page.type === "button" && "order-button"}
                                to={page.path}
                            >
                                {page.name}
                            </Link>
                        </p>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
