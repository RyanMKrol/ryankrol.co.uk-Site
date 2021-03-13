function baseEndpoint() {
  if (process.env.REACT_APP_LOCAL_API !== undefined) {
    return 'http://localhost:8000/api'
  } else {
    return 'http://www.ryankrol.co.uk/api'
  }
}

export default baseEndpoint
