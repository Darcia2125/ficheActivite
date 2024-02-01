// src/components/DeleteSectionButton.js
import React, { useState } from 'react';

const DeleteSectionButton = ({ onDeleteSections, sections }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleToggleDeleteMode = () => {
    setIsDeleting(!isDeleting);
    setSelectedIds([]);
  };

  const handleToggleId = (id) => {
    const isSelected = selectedIds.includes(id);
    if (isSelected) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleDeleteSelectedIds = () => {
    onDeleteSections(selectedIds);
    handleToggleDeleteMode();
  };

  return (
    <div>
      <button className="btn btn-danger" onClick={handleToggleDeleteMode}>
        {isDeleting ? 'Annuler Suppression' : 'Supprimer Sections'}
      </button>

      {isDeleting && (
        <div className="mt-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="selectAll"
              checked={selectedIds.length === sections.flat().length}
              onChange={() => {
                if (selectedIds.length === sections.flat().length) {
                  setSelectedIds([]);
                } else {
                  setSelectedIds(sections.flat().map((cell) => cell.id));
                }
              }}
            />
            <label className="form-check-label" htmlFor="selectAll">
              Tout sélectionner
            </label>
          </div>
          {sections.flat().map((cell) => (
            <div key={cell.id} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`selectId${cell.id}`}
                checked={selectedIds.includes(cell.id)}
                onChange={() => handleToggleId(cell.id)}
              />
              <label className="form-check-label" htmlFor={`selectId${cell.id}`}>
                ID {cell.id}
              </label>
            </div>
          ))}
          <button className="btn btn-primary mt-2" onClick={handleDeleteSelectedIds}>
            Valider Suppression
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteSectionButton;
