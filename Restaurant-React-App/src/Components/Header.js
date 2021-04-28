const Header = ({ menuItems, logo }) => {
    return (
        <header>
            <div class="logo">{logo}</div>
            <nav>
                <div class="menu">
                    {menuItems.map((menuItem) => (
                        <p>
                            <a
                                class={
                                    menuItem.type === "button" && "order-button"
                                }
                                href={menuItem.link}
                            >
                                {menuItem.name}
                            </a>
                        </p>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
