import React from 'react';
import './DiscoverModal.css';

const DiscoverModal = ({ isOpen, onClose,onNext }) => {
  // Nếu modal không mở, không render gì cả
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Nút đóng */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {/* Tiêu đề và Mô tả */}
        <h2 className="modal-title">Discover Chefify</h2>
        <p className="modal-subtitle">
          Easy and delicious cooking instructions right here. Start exploring now!
        </p>

        {/* Hình ảnh */}
        <div className="modal-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80" 
            alt="Delicious food examples" 
          />
        </div>

        {/* Cụm dấu chấm chuyển trang */}
        <div className="modal-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        {/* Khu vực nút bấm */}
        <div className="modal-actions">
          <button className="btn-next" onClick={onNext}>Next</button>
          <button className="btn-skip" onClick={onClose}>Skip</button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverModal;