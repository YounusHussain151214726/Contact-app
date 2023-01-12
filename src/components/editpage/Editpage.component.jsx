import "./editpage.component.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


//define initial value
const INITIAL_FORM_DATA = {
  fname: "",
  lname: "",
  phone: "",
  email: "",
};

const EditPage = ({ data }) => {
  
  //router method
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;

  //state declaration
  const [getFromlocal, setGetFromLocal] = useState([]);
  const [form, setForm] = useState({
    fname: data.fname,
    lname: data.lname,
    email: data.email,
    phone: data.phone,
  });

  useEffect(() => {
    if (localStorage.getItem("addToContact")) {
      setGetFromLocal(JSON.parse(localStorage.getItem("addToContact")));
    }
  }, []);

  //return to back
  const GOBACK = () => {
    navigate(-1);
  };

  //user input
  const handleData = (e) => {
    const inp = e.target.value.trim();
    setForm({ ...form, [e.target.name]: inp });
  };

  //edit
  const SaveEdit = () => {
    const forDel = getFromlocal.filter((a) => {
      return a.email !== id;
    });
    localStorage.setItem("addToContact", JSON.stringify([...forDel, form]));
    navigate(-1);
  };


  return (
    <>
      {getFromlocal.map((data) =>
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

              <input
                onChange={handleData}
                name="fname"
                value={form.fname}
                placeholder="👤 Firstname"
                className="fname"
              />
              <div className="contact">
                <input
                  onChange={handleData}
                  name="lname"
                  value={form.lname}
                  placeholder="👤 Lastname"
                  className="lname"
                />
              </div>
              <div className="contact">
                <input
                  onChange={handleData}
                  name="email"
                  value={form.email}
                  placeholder="📧 Email"
                  className="email"
                />
              </div>
              <div className="contact">
                <input
                  onChange={handleData}
                  name="phone"
                  value={form.phone}
                  placeholder="📞 Phone"
                  className="phone"
                />
              </div>
            </div>
          </>
        ) : (
          ""
        )
      )}
    </>
  );
};

export default EditPage;
