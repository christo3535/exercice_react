import "./App.css";

// import Service from "@/pages/Service";
// import Contact from "@/pages/Contact";
import { BrowserRouter} from "react-router-dom";
// import Error from "./.utils/Error";
// import Layout from "@/pages/Layout";
import PublicRouter from "@/pages/Public/PublicRouter";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PublicRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
