import React from "react";
import { App } from "../../app/containers/App";
import { StaticRouter } from "react-router-dom/server";
import { renderToString } from "react-dom/server";
import { template } from "./template";
import { ServerStyleSheet } from "styled-components";

export const render = (url: string, initialProps: object = {}) => {
  const sheet = new ServerStyleSheet();
  try {
    const stringReactComponent = renderToString(
      sheet.collectStyles(
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      )
    );
    const stylesTags = sheet.getStyleTags()
    const stringHTML = template(stringReactComponent, initialProps, stylesTags);
    return stringHTML;
  } catch (err) {
    console.log(err);
  }
};
