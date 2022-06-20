import "./styles.css";
import { useState } from "react";
import { Router, Outlet, ReactLocation } from "react-location";

import CreateCard from "./CreateCard";
import CardShowCase from "./CardShowcase";

const location = new ReactLocation();

export default function App() {

  const [formData, setFormData] = useState({
    fullName: "",
    aboutMe: "",
    githubURL: "",
    twitterURL: "",
    favouriteBooks: "",
    favouriteArtists: "",
    HTML: false,
    CSS: false,
    JS: false,
    Git: false,
    React: false,
    NodeJS: false
  });

  console.log(formData);

  const routes = [
    {
      path: "/",
      element: <CreateCard formData={formData} setFormData={setFormData} />
    },
    {
      path: "/showcase",
      element: <CardShowCase formData={formData} />
    }
  ];

  return (
    <Router routes={routes} location={location}>
      <div>
        <Outlet />
      </div>
    </Router>
  );
}
