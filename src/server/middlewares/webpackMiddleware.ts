import webpack from "webpack";
import whm from "webpack-hot-middleware";
import wdm from "webpack-dev-middleware";
import errorOverlay from "react-dev-utils/errorOverlayMiddleware";
import openBrowser from "react-dev-utils/openBrowser";
import { config } from "../config/index";
import webpaclClientConfig from "../../../webpack.config.client.js";

export const webpackMiddleware = () => {
  openBrowser(`http://localhost:${config.PORT}`);
  const compiler = webpack(webpaclClientConfig);

  return [
    whm(compiler, {
      log: console.log,
      path: "/__webpack_hmr",
      heartbeat: 200 }),
      wdm(compiler, {
        serverSideRender: true,
        writeToDisk: true
      }),
      errorOverlay()
  ];
};
