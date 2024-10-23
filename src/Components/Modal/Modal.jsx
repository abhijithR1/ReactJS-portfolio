// Modal.js
import React from "react";
import "./Modal.scss";
import { motion } from "framer-motion";

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <motion.div className="modal-backdrop" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div className="modal-content" onClick={(e) => e.stopPropagation()} initial={{ y: -100 }} animate={{ y: 0 }}>
        <button className="close-button" onClick={onClose}>x</button>
        <h2>{title}</h2>
        <div>
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
