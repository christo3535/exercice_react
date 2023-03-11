import "./App.css";

// import Service from "@/pages/Service";
// import Contact from "@/pages/Contact";
import { BrowserRouter} from "react-router-dom";
// import Error from "./.utils/Error";
// import Layout from "@/pages/Layout";
import PublicRoute from "@/pages/Public/PublicRoute";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PublicRoute/>
      </BrowserRouter>
    </div>
  );
}

export default App;
