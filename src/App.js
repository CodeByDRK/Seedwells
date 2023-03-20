import './App.css';
import './Fonts.css';
import { Header, Landing, Footer, Contact, Vacancies, Publications, Blogs, Economicsandmacro, Aboutus, Pressreleases } from "./components";
import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <AnimatePresence>
      <div className="App">
        <Header />
        <main className="mainComponentHolder">
          <Routes>
            <Route path="/*" element={<Landing />}  />
            <Route path="/Aboutus" element={<Aboutus />}  />
            <Route path="/Contactus" element={<Contact />}  />

            <Route path="/Economicsandmacro" element={<Economicsandmacro />}  />
            <Route path="/Blogs" element={<Blogs />}  />
            <Route path="/Pressreleases" element={<Pressreleases />}  />
            <Route path="/Vacancies" element={<Vacancies />}  />
            <Route path="/Publications" element={<Publications />}  />

          </Routes>
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
