import React from 'react';
import logo from './MainLogo.jpg'; // Убедитесь, что путь к изображению правильный
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { File } from "./pages/File";
import { Auth } from "./pages/Auth";
import { CategoryEdit } from "./pages/CategoryEdit.js";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-title">Информационная система кластеризации текстовых данных (ИС КТД)</h1>
      </header>
      <main className="app-main">
        <Routes>
          <Route path='/' element={<File />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/category-edit' element={<CategoryEdit />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;