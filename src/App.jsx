import "./App.css";
import { Navbar, Footer } from "./components/component";
import Routespath from "./routes/Routespath";

function App() {
  return (
    <div className="pagewrap">
      <Navbar />
      <Routespath />
      <Footer />
    </div>
  );
}

export default App;
