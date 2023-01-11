import React from 'react'
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <nav style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}>
        <Link to="/peyman"> peyman </Link> | {" "}
        <Link to="/"> Home </Link> | {" "}
      </nav>
    </>
  );
}

export default App;
