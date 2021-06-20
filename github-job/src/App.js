import './App.css';
import React from 'react'
import useFetchJobs from './useFetchJobs';
import {Container} from 'react-bootstrap'

function App() {
  const {loading, jobs, error} = useFetchJobs()
  return (
    <Container>
      <h1>Job seeking</h1>
      {/* {loading && <h1>Loading...</h1>}
      {error && <h1>Error...try refreshing</h1>} */}
    </Container>
  );
}

export default App;
