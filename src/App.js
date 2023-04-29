import "../src/styles/Global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./pages/Test";
import AdminNav from "./components/navigation/AdminNav";
import UserNav from "./components/navigation/UserNav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<UserNav />}>
            <Route path="/" element={<Test />} />
          </Route>
        </Routes>

        <Routes>
          <Route element={<AdminNav />}>
            <Route path="/admin/main" element={<Test />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
