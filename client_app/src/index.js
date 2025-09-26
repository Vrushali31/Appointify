import { React, createContext, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Form from "./pages/form";
import Login from "./pages/login";
import Signup from "./pages/signup";
import UpdateForm from "./pages/updateForm";

const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState({
     username: '',
     password: '',
     organisation: '',
     id: ''
  })
    
  return (
    <BrowserRouter>
          <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="form" element={<Form />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="updateForm" element={<UpdateForm/> }/>
        </Route>
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export { UserContext };

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
