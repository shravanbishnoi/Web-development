import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { UserProvider, useUser } from "./lib/context/user";

function App() {
  return (
    <div>
      <UserProvider>
        <Router>
          <main>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
