import { PDFDownloadLink, Document, Page, StyleSheet, View, Text } from '@react-pdf/renderer'
import { useEffect, useState } from 'react'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
})

const MyDocument = () => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Hell Yeah</Text>
      </View>
    </Page>
  </Document>
)

const Download = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (isClient) {
    return (
      <div>
        <PDFDownloadLink document={<MyDocument />} fileName='somename.pdf'>
          {({ blob, url, loading, error }) => {
            return loading ? 'Loading document...' : 'Download now!'
          }}
        </PDFDownloadLink>
      </div>
    )
  } else {
    return null
  }
}

export default Download
