import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import EditPage from "../editpage/Editpage.component";
import "./Detailpage.component.css";

const DetailPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const [isEdit, setIsEdit] = useState(false);
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

  //delete
  const Delete = () => {
    const forDel = getFromlocal.filter((a) => {
      return a.email !== id;
    });
    if (forDel) {
      localStorage.setItem("addToContact", JSON.stringify(forDel));
      navigate(-1);
    }
  };

  //edit
  const Edit = () => {
    setIsEdit(true);
  };

  return (
    <>
      {getFromlocal.map((data) =>
        data.email === id ? (
          isEdit === true ? (
            <>
              <EditPage data={data} setGet={setGetFromLocal} />
            </>
          ) : (
            <>
              <div className="detailcontainer" key={data.email}>
                <div className="buttons-container">
                  <h1 className="back" onClick={GOBACK}>
                    Back
                  </h1>
                  <div className="action">
                    {" "}
                    <h4 className="dlt" onClick={Delete}>
                      Delete
                    </h4>
                    <h4 className="edt" onClick={Edit}>
                      Edit
                    </h4>
                  </div>
                </div>

                <div className="delogo">
                  <h3 className="detlogo">{data.fname.slice(0, 1)}</h3>
                </div>
                <h3>{`${data.fname} ${data.lname}`}</h3>
                <div className="contact">
                  <h2>📞 {data.phone} </h2>
                </div>
              </div>
            </>
          )
        ) : (
          ""
        )
      )}
    </>
  );
};

export default DetailPage;
