import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const generatePDF = (sections) => {
  const pdf = new jsPDF();

  // Add the title
  pdf.text('Fiche d\'Activité', 20, 10);

  // Create a table in the PDF
  const data = [];
  const headerRow = ['ID', ...sections[0].map((cell) => cell.content)];
  data.push(headerRow);

  sections.slice(1).forEach((row) => {
    row.forEach((cell) => {
      const cellData = [cell.id, cell.content];
      data.push(cellData);
    });
  });

  pdf.autoTable({
    startY: 20, // Vertical position of the table
    head: [headerRow], // Headers
    body: data, // Table data
    theme: 'grid', // Using a theme with borders
    styles: {
      lineWidth: 0.5,
    },
  });

  pdf.save('fiche_activite.pdf');
};
