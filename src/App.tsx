import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AreasAtuacao from './pages/AreasAtuacao';
import Artigo from './pages/Artigo';
import Blog from './pages/Blog';
import Contato from './pages/Contato';
import Home from './pages/Home';
import Sobre from './pages/Sobre';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/areas-de-atuacao" element={<AreasAtuacao />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Artigo />} />
        <Route path="/contato" element={<Contato />} />
      </Route>
    </Routes>
  )
}

export default App