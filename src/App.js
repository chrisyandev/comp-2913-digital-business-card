import "./styles.css";
import { Router, Outlet, ReactLocation } from "@tanstack/react-location";
import CreateCard from "./CreateCard";
import { createContext, useContext, useState } from "react";
import CardShowcase from "./CardShowcase";

const FormDataContext = createContext();
const UsersContext = createContext();

export const useFormData = () => {
  const context = useContext(FormDataContext);
  return context;
};

export const useUsers = () => {
  const context = useContext(UsersContext);
  return context;
}

const location = new ReactLocation();

export default function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    aboutMe: "",
    githubURL: "",
    twitterURL: "",
    favouriteBooks: "",
    HTML: false,
    CSS: false,
    JS: false,
    Git: false,
    React: false,
    NodeJS: false
  });

  const [users, setUsers] = useState([]);

  const routes = [
    {
      path: "/",
      element: <CreateCard />
    },
    {
      path: "showcase",
      element: <CardShowcase />
    }
  ];

  return (
    <Router routes={routes} location={location}>
      <UsersContext.Provider value={{ users, setUsers }}>
        <FormDataContext.Provider value={{ formData, setFormData }}>
          <Outlet />
        </FormDataContext.Provider>
      </UsersContext.Provider>
    </Router>
  );
}
