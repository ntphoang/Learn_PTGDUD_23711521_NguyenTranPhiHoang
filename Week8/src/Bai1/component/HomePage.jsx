import React, { useState } from 'react';
import './HomePage.css';
import DiscoverModal from './DiscoverModal'; // File modal đã làm ở bước trước
import Register from './Register';

const HomePage = () => {

  // Quản lý xem modal nào đang mở. Mặc định là null (không mở gì cả)
  const [currentModal, setCurrentModal] = useState(null);

  // Hàm chuyển từ Discover sang Register
  const handleNextFromDiscover = () => {
    setCurrentModal('register');
  };

  return (
    <div className="home-container">
      
      {/* 1. THANH ĐIỀU HƯỚNG (HEADER) */}
      <header className="header">
        <div className="logo-section">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#F14188">
            {/* Icon minh hoạ cho logo Chefify */}
            <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm0 13h-2v-1h2v1zm0-3c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
          </svg>
          <span className="logo-text">Chefify</span>
        </div>

        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="What would you like to cook?" />
        </div>

        <nav className="nav-links">
          <a href="#what-to-cook">What to cook</a>
          <a href="#recipes">Recipes</a>
          <a href="#ingredients">Ingredients</a>
          <a href="#occasions">Occasions</a>
          <a href="#about-us">About Us</a>
        </nav>

        <div className="auth-buttons">
          <button className="btn-login">Login</button>
          <button 
            className="btn-subscribe" 
            onClick={() => setCurrentModal('discover')}
          >
            Subscribe
          </button>
        </div>
      </header>

      {/* 2. NỘI DUNG CHÍNH (NẰM PHÍA SAU MODAL) */}
      <main className="hero-section">
        {/* Card chứa thông tin công thức bên trái */}
        <div className="recipe-card">
          <div className="recipe-badge">Recipe</div>
          <h2 className="recipe-title">Salad Caprese</h2>
          <p className="recipe-desc">
            Classic Italian Salad Caprese: fresh mozzarella, herbs, olive oil, and balsamic vinegar 
            create a refreshing dish.
          </p>
          <button className="btn-view-more">View more</button>
        </div>
      </main>

      {/* 1. Modal Discover */}
      {/* Lưu ý: Bạn cần update file DiscoverModal.jsx thêm props onNext vào nút "Next" */}
      <DiscoverModal 
        isOpen={currentModal === 'discover'} 
        onClose={() => setCurrentModal(null)}
        onNext={handleNextFromDiscover} 
      />

      {/* 2. Modal Register */}
      <Register 
        isOpen={currentModal === 'register'} 
        onClose={() => setCurrentModal(null)} 
      />
      
    </div>
  );
};

export default HomePage;