import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Basics from "./components/Basics";
import App from "./App";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<App />} />
            <Route path="/basics" element={<Basics />} />
        </Route>
    )
);

export default router;
