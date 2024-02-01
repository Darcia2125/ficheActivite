// src/components/Table.js
import React, { useState } from 'react';
import TableRow from './TableRow';
import AddSectionButton from './AddSectionButton';
import ExportButton from './ExportButton';
import DeleteSectionButton from './DeleteSectionButton';

const Table = () => {
  const [sections, setSections] = useState([
    [
      { id: 1, content: 'Titre 1', colspan: 12, editable: true },
    ],
    [
      { id: 2, content: 'Section 1', colspan: 2, editable: true },
      { id: 3, content: 'Section 2', colspan: 4, editable: true },
      { id: 4, content: 'Section 3', colspan: 4, editable: true },
    ],
    [
      { id: 5, content: 'Section 4', colspan: 3, editable: true },
      { id: 6, content: 'Section 5', colspan: 6, editable: true },
    ],
    [
      { id: 7, content: 'Section 6', colspan: 12, editable: true },
    ],
    [
      { id: 8, content: 'Section 7', colspan: 12, editable: true },
    ],
    [
      { id: 9, content: 'Section 8', colspan: 3, editable: true },
      { id: 10, content: 'Section 9', colspan: 6, editable: true },
    ],
    [
      { id: 11, content: 'Section 10', colspan: 3, editable: true },
      { id: 12, content: 'Section 11', colspan: 6, editable: true },
    ],
  ]);

  const handleAddSection = () => {
    // Ajouter une nouvelle ligne au tableau avec des cellules éditables
    setSections([...sections, Array(sections[0].length).fill({ id: sections.length + 1, content: '', colspan: 12, editable: true })]);
  };
  

  const handleCellChange = (rowIndex, cellIndex, value) => {
    // Mettre à jour le contenu de la cellule
    const newSections = [...sections];
    newSections[rowIndex][cellIndex].content = value;
    setSections(newSections);
  };
  

  const handleDeleteSection = (id) => {
    const newSections = sections.filter((section) => section[0].id !== id);
    setSections(newSections);
  };

  const handleDeleteSelectedSections = (selectedIds) => {
    const newSections = sections.filter((section) => !selectedIds.includes(section[0].id));
    setSections(newSections);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-start mb-3">
        <DeleteSectionButton onDeleteSections={handleDeleteSelectedSections} sections={sections} />
        <AddSectionButton onAddSection={handleAddSection} />
        <ExportButton sections={sections} />
      </div>
      <h2>Fiche d'Activité</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            {sections[0].map((cell, cellIndex) => (
              <th key={cellIndex} colSpan={cell.colspan}>
                {cell.content}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sections.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cell.id} colSpan={cell.colspan}>
                  <input
                    type="text"
                    className="form-control"
                    value={cell.content}
                    onChange={(e) => handleCellChange(rowIndex, cellIndex, e.target.value)}
                    readOnly={!cell.editable}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;