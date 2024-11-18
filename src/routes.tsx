import { createBrowserRouter } from "react-router-dom";

// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";
import App from "./App";
import Destroy from "./components/pages/Destroy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "destroy",
    element: <Destroy />,
  },
]);

export default router;
