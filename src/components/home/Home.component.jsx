import { json, useNavigate } from "react-router-dom";
import Search from "../search/Search.component";
import ContactList from "../contactlist/Contactlist.component";
import AddButton from "../addbutton/Addbutton.component";
import "./home.component.css";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [preventLocalValue, setPreventLocalValue] = useState([]);

  //get data from local
  useEffect(() => {
    if (localStorage.getItem("addToContact")) {
      // const local = localStorage.getItem(("addTOContact"))
      setPreventLocalValue(JSON.parse(localStorage.getItem("addToContact")));
    }
  }, []);

  const gotoAddPage = () => {
    navigate("/addContact");
  };

  return (
    <>
      <Search
        type="search"
        placeholder="🔍 Search contacts"
        classname="search"
      />
      <ContactList localValue={preventLocalValue} />
      <AddButton
        title="+"
        classname="add-round-button"
        onhandle={gotoAddPage}
      />
    </>
  );
};

export default Home;
