import { json, useNavigate } from "react-router-dom";
import Search from "../search/Search.component";
import ContactList from "../contactlist/Contactlist.component";
import AddButton from "../addbutton/Addbutton.component";
import "./home.component.css";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [preventLocalValue, setPreventLocalValue] = useState([]);
const [searchField , setSearchField] = useState('')
const [filteredValue , setFilteredValue] = useState(preventLocalValue) 

  //get data from local
  useEffect(() => {
    if (localStorage.getItem("addToContact")) {
      setPreventLocalValue(JSON.parse(localStorage.getItem("addToContact")));
    }
  }, []);


//filter by name
useEffect(()=>{
const filterd = preventLocalValue.filter((data)=>{
  return (data.fname.toLocaleLowerCase().includes(searchField)  || data.phone.includes(searchField)) 

})

setFilteredValue(filterd)

},[searchField,preventLocalValue])
console.log(filteredValue)


//get Search value 
const onHandle =(e)=>{
  const searchValue = e.target.value.toLocaleLowerCase()
  setSearchField(searchValue)
  }

  //go to add page
  const gotoAddPage = () => {
    navigate("/addContact");
  };
  

  return (
    <>
      <Search
        type="search"
        placeholder="🔍 Search contacts"
        classname="search"
onChange = {onHandle}
  />
      <ContactList localValue={filteredValue} />
      <AddButton
        title="+"
        classname="add-round-button"
        onhandle={gotoAddPage}
      />
    </>
  );
};

export default Home;
