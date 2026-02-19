import PDFDocument from 'pdfkit';

export function createCompletionCertificate(name: string, completionDate: string) {
  const doc = new PDFDocument();
  doc.fontSize(24).text('Ramadan 30-Day Khatam Completion Certificate', { align: 'center' });
  doc.moveDown();
  doc.fontSize(16).text(`Awarded to: ${name}`, { align: 'center' });
  doc.text(`Completion Date: ${completionDate}`, { align: 'center' });
  doc.text('May Allah accept your recitation and efforts.', { align: 'center' });
  return doc;
}
