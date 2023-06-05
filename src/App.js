import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./components/HomeScreen";
import Players from "./components/Players";
import Teams from "./components/Teams"

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen/>}></Route>
              <Route path="/players" element={<Players/>}></Route>
              <Route path="/teams" element={<Teams/>}></Route>
            </Routes>
          </Container>
        </main>
      </Router>
    </div>
  );
}

export default App;
