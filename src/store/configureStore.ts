import configureStoreDev from "./configureStore.dev";
import configureStoreProd from "./configureStore.prod";

const configure =
  console.log("Current Env: ", process.env.NODE_ENV) ||
  process.env.NODE_ENV === "production"
    ? configureStoreProd
    : configureStoreDev;

export default configure;
