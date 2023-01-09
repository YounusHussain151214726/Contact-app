import "./editpage.component.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const INITIAL_FORM_DATA = {
  fname: "",
  lname: "",
  phone: "",
  email: "",
};

const EditPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const [form, setForm] = useState(INITIAL_FORM_DATA);
  const [saveInLOcal, setSaveInLocal] = useState([]);
  const [getFromlocal, setGetFromLocal] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("addToContact")) {
      setGetFromLocal(JSON.parse(localStorage.getItem("addToContact")));
    }
  }, []);

  //return to back
  const GOBACK = () => {
    navigate(-1);
  };

  const handleData = (e) => {
    const inp = e.target.value.trim();
    setForm({ ...form, [e.target.name]: inp });
  };

  //edit
  const SaveEdit = () => {
    if (form.fname && form.lname && form.phone && form.email !== "") {
    localStorage.setItem(
      "addToContact",
      JSON.stringify([...saveInLOcal, form])
    );
    }
  };
  
  return (
    <>
      {getFromlocal.map((data) => (
data.email === id ? (
<>
          <div className="detailcontainer" key={data.email}>
            <div className="buttons-container">
              <div className="action">
                {" "}
                <h3 className="edit" onClick={SaveEdit}>
                  Save Edit 
                </h3>
              </div>
            </div>
            <h2>Edit Contact</h2>

            {/* <div className="delogo"><h3 className="detlogo"></h3></div> */}
            <input
            
              onChange={handleData}
              name="fname"
              value={form.fname}
              placeholder="👤 Firstname"
              className='fname'
            />
            <div className="contact">
              <input
                            onChange={handleData}
                name="lname"
                value={form.lname}
                placeholder="👤 Lastname"
                className='lname'
              />
            </div>
            <div className="contact">
              <input
            
                onChange={handleData}
                name="email"
                value={form.email}
                placeholder="📧 Email"
                className='email'
              />
            </div>
            <div className="contact">
              <input
            
                onChange={handleData}
                name="phone"
                value={form.phone}
                placeholder="📞 Phone"
                className='phone'
              />
            </div>
          </div>
        </>):''
      ))}
      </>   
  );
};

export default EditPage;