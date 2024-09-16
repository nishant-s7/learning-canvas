import { Link } from "react-router-dom";

const App = () => {
    return (
        <div className="bg-gray-950 min-h-screen text-white flex flex-col items-center justify-center gap-6">
            <h1 className="text-4xl font-bold">HTML Canvas</h1>
            <div className="text-xl font-medium underline hover:text-blue-400 duration-200">
                <Link to="/basics">Basics</Link>
            </div>
        </div>
    );
};

export default App;
