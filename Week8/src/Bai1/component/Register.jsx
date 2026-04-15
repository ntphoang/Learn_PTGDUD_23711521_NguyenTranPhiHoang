import React from 'react';
import './Register.css';

const Register = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="register-overlay">
      <div className="register-container">
        
        {/* Nút đóng Form */}
        <button className="register-close" onClick={onClose}>✕</button>

        {/* NỬA TRÁI: Form điền thông tin */}
        <div className="register-left">
          <h2 className="register-title">Create an account</h2>

          {/* Ô nhập Full Name (viền hồng) */}
          <div className="input-group active">
            <span className="input-label">Full name</span>
            <input type="text" className="input-field" placeholder="" />
          </div>

          {/* Ô nhập Email */}
          <div className="input-group">
            <span className="input-label">Email</span>
            <input type="email" className="input-field" placeholder="example.email@gmail.com" />
          </div>

          {/* Ô nhập Password */}
          <div className="input-group">
            <span className="input-label">Password</span>
            <input type="password" className="input-field" placeholder="Enter at least 8+ characters" />
            <span className="password-icon">👁️</span>
          </div>

          <button className="btn-submit">Sign in</button>

          <div className="social-divider">Or sign in with</div>
          
          <div className="social-buttons">
            <button className="btn-social google">G</button>
            <button className="btn-social facebook">f</button>
            <button className="btn-social apple"></button>
          </div>
        </div>

        {/* NỬA PHẢI: Hình minh hoạ */}
        <div className="register-right">
           {/* Thay src bằng đường dẫn ảnh minh hoạ thật của bạn */}
          <img 
            src="https://plus.unsplash.com/premium_photo-1664302152996-3211516f1947?q=80&w=800&auto=format&fit=crop" 
            alt="Illustration" 
          />
        </div>

      </div>
    </div>
  );
};

export default Register;