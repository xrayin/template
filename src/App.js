import './App.css';
import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";
import Blog from "./components/Blog";
import Footer from "./components/common/Footer";
import Script from "./components/common/Script";


function App() {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Blog/>
            <Footer/>
            <Script/>
        </div>
    );
}

export default App;
