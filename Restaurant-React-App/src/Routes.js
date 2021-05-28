import { useEffect, useState } from "react";

import { Route, Switch } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Template from "./pages/Template";

const Routes = () => {
    const [pages, setPages] = useState([]);
    useEffect(() => {
        const getPages = async () => {
            const response = await fetch(
                "https://raw.githubusercontent.com/jfsscsclub/workshops/main/budget_api_v2.json"
            );

            const pagesResponse = await response.json();
            setPages(pagesResponse.pages);
        };

        getPages();
    }, []);
    return (
        <App pages={pages}>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route path="/about">
        <Template heading="test heading" body="body" />
      </Route> */}
                {pages.map((page) => {
                    return (
                        <Route path={page.path}>
                            <Template heading={page.heading} body={page.body} />
                        </Route>
                    );
                })}
            </Switch>
        </App>
    );
};

export default Routes;
