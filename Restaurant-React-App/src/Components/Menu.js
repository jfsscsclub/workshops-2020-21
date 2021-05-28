import { useEffect, useState } from "react";

const Menu = () => {
    const [menuItems, setMenuItems] = useState();

    useEffect(() => {
        const getMenu = async () => {
            const response = await fetch(
                "https://jfsscsclub.github.io/workshops/budget_api.json"
            );

            const menuItemsResponse = await response.json();
            setMenuItems(menuItemsResponse.items);
        };

        getMenu();
    }, []);

    if (menuItems) {
        return (
            <div>
                <h1 className="menuHeading">Menu</h1>
                <div className="menuItems">
                    {menuItems.map((menuItem) => {
                        return (
                            <div className="menuItem">
                                <img
                                    className="menuImage"
                                    src={menuItem.imageURL}
                                />
                                <h2>{menuItem.name}</h2>
                                <h4>${menuItem.price}</h4>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
};

export default Menu;
