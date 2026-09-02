type ReportHandler = (metric: unknown) => void

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(
      ({ onCLS, onFCP, onFID, onINP, onLCP, onTTFB }) => {
        onCLS(onPerfEntry)
        onFCP(onPerfEntry)
        onFID(onPerfEntry)
        onINP(onPerfEntry)
        onLCP(onPerfEntry)
        onTTFB(onPerfEntry)
      },
    )
  }
}

export default reportWebVitals
