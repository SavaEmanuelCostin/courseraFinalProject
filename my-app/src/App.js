import Header from "./components/Header";
import Banner from "./components/Banner";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="container-main-wrapper">
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
