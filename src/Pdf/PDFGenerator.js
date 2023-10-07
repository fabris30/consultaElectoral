import React from 'react';
import { Document, Page } from 'react-pdf';
const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

function PDFGenerator() {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <div style={{ margin: 10, padding: 10 }}>
             <span>Contenido del PDF</span>
          </div>
        </Page>
      </Document>
    );
  }
  
  export default PDFGenerator;