// src/components/TableRow.js
import React from 'react';

const TableRow = ({ cells, rowIndex, onCellChange }) => {
  
  return (
    <tr className="row mb-3">
      {cells.map((cell, cellIndex) => (
        <td key={cell.id} className={`col-md-${12 / cell.colspan}`}>
          {cell.content}
          <div className="border p-2">
            {cell.editable ? (
              <input
                type="text"
                className="form-control"
                value={cell.content}
                onChange={(e) => onCellChange(rowIndex, cellIndex, e.target.value)}
              />
            ) : (
              <span>{cell.content}</span>
            )}
          </div>
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
