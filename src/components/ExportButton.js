// src/components/ExportButton.js
import React from 'react';
import { generatePDF } from '../utils/pdfGenerator';

const ExportButton = ({ sections }) => {
  const handleExportPDF = () => {
    generatePDF(sections);
  };

  return (
    <div>
      <button className="btn btn-success" onClick={handleExportPDF}>
        Exporter en PDF
      </button>
    </div>
  );
};

export default ExportButton;
