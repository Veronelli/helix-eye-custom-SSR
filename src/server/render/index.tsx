import React from "react";
import {App} from "../../app/containers/App";
import {StaticRouter} from "react-router-dom/server";
import {renderToString} from "react-dom/server";
import { template } from "./template";

export const render = (url: string)=>{
    const stringReactComponent = renderToString(
        <StaticRouter location={url}>
            <App/>
        </StaticRouter>
    );
    const stringHTML = template(stringReactComponent);
    return stringHTML;
}