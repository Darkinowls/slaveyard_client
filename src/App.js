import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import TablePage from "./pages/TablePage.jsx";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/:tableName" element={<TablePage />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
