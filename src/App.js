import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Pages/HomePage/HomePage';
import Legal from './Components/Pages/Legal/Legal';
import Book from './Components/Pages/Book/Book';
import History from './Components/Pages/History/History';
import Nature from './Components/Pages/Nature/Nature';
import Pedagogique from './Components/Pages/Pedagogique/Pedagogique';
import Jeunesse from './Components/Pages/Jeunesse/Jeunesse';

// Importez les autres pages que vous souhaitez créer

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mentions-legales" element={<Legal />} />
          <Route path="/book" element={<Book />} />
          <Route path="/la-petite-histoire" element={<History />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/illustrations-pedagogiques" element={<Pedagogique />} />
          <Route path="/jeunesse" element={<Jeunesse />} />
      
          {/* Ajoutez d'autres routes pour vos pages supplémentaires */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;