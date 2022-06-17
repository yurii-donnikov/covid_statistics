import React from "react";
import Header from "./components/Header/Header";
import MainRoute from "./components/Route/MainRoute";
import Container from "./components/Container/Container";

function App() {
  return (
    <Container>
      <Header />
      <MainRoute />
    </Container>
  );
}

export default App;
