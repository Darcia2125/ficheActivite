// src/components/AddSectionButton.js
import React from 'react';

const AddSectionButton = ({ onAddSection }) => {
  return (
    <div className="mb-3">
      <button className="btn btn-primary" onClick={onAddSection}>
        Ajouter Section
      </button>
    </div>
  );
};

export default AddSectionButton;
