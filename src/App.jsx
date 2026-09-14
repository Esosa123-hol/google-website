import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./static/header/Header";
import Footer from "./static/footer/Footer";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import CompanyInfo from "./pages/companyinfo/CompanyInfo";
import News from "./pages/news/News";

const App = () => {
  return(
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element = { <About/> } />
          <Route path="/products" element = { <Products/> } />
          <Route path="/company-info" element = { <CompanyInfo/> } />
          <Route path="/news" element = { <News/> } />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
