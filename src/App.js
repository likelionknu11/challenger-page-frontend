import "../src/styles/Global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserNav from "./components/navigation/UserNav";
import Test from "./pages/Test";
import AdminNav from "./components/navigation/AdminNav";
import Testpage from './pages/userDetailPage/userDetailPage';
import Testpage2 from './pages/adminDetailPage/adminDetailPage';
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
      <Testpage/>
      <Testpage2/>
    </div>
  );
}

export default App;
