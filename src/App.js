import "../src/styles/Global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./pages/Test";
import AdminNav from "./components/navigation/AdminNav";
import UserNav from "./components/navigation/UserNav";
import { UserFormPage } from "./pages/userFormPage/UserFormPage";
import UserMainPage from "./pages/MainPage/UserMainPage";
import AdminMainPage from "./pages/MainPage/AdminMainPage"
import UserDetailPage from "./pages/DetailPage/userDetailPage"
import AdminDetailPage from "./pages/DetailPage/adminDetailPage"
import data from "./pages/MainPage/data.json";
import data2 from "./pages/MainPage/data2.json";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<UserNav />}>
            <Route path="/" element={<Test />} />
            <Route path="/userForm" element={<UserFormPage />} />
            <Route path="/admin" element={<AdminMainPage />} />
          </Route>
        </Routes>

        <Routes>
          <Route element={<AdminNav />}>

            {data.Project.map((project) => (
            <Route path={`/userDetail/${project.id}`} key={project.id}
              element={ <UserDetailPage project={project} />}>
            </Route>
            ))}

            {data2.Project.map((project) => (
            <Route path={`/adminDetail/${project.id}`} key={project.id}
              element={ <AdminDetailPage project={project} />}>
            </Route>
            ))}
          </Route>
        </Routes>

        <Routes>
          <Route path="/" element={<UserMainPage />} />
          <Route path="/userForm" element={<UserFormPage />} />
          <Route path="/admin" element={<AdminMainPage />} />
          {data.Project.map((project) => (
          <Route path={`/userDetail/${project.id}`} key={project.id}
            element={ <UserDetailPage project={project} />}>
          </Route>
          ))}

          {data2.Project.map((project) => (
            <Route path={`/adminDetail/${project.id}`} key={project.id}
              element={ <AdminDetailPage project={project} />}>
            </Route>
          ))}
        </Routes>


        <Routes>
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
