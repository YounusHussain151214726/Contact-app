import { useEffect, useState } from "react";
import "./addpage.component.css";


const INITIAL_FORM_DATA  = {
  fname: "",
  lname: "",
  phone: "",
  email: "",
}    

const Addpage = () => {
  const [form, setForm] = useState(INITIAL_FORM_DATA);
  // const [saveFormData, setSaveFormData] = useState(form);
  const [saveInLOcal, setSaveInLocal] = useState([]);

  //get form data
  const formData = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value.trim() });
  };

  //Save form Data
  const savedFormData = (e) => {
    e.preventDefault();
    console.log(form)
    console.log("saveInLOcal", saveInLOcal)
setSaveInLocal([...saveInLOcal, form])
    localStorage.setItem("addToContact", JSON.stringify([...saveInLOcal, form])); 
    };


  return (
    <div className="addpage-container">
      <div className="add-container">
        <form >
          {/* firstname */}
          <div className="fname">
            <input
              type="text"
              placeholder="Firstname"
              name="fname"
              value={form.fname}
              onChange={formData}
            />
          </div>

          {/* lastname */}
          <div className="lname">
            <input
              type="text"
              placeholder="Lastname"
              name="lname"
              value={form.lname}
              onChange={formData}
            />
          </div>

          {/* phone */}
          <div className="phone">
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={form.phone}
              onChange={formData}
            />
          </div>

          {/* email */}
          <div className="email">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={formData}
            />
          </div>

          <button type="submit" onClick={savedFormData}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addpage;
