import "./Detailpage.component.css";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";


const DetailPage = () => {
    const params = useParams()
    const {id} = params
const [getFromlocal , setGetFromLocal] = useState([])
    console.log(id)

useEffect(()=>{
if(localStorage.getItem('addToContact')){
setGetFromLocal(JSON.parse(localStorage.getItem('addToContact')))
}
},[])

console.log(getFromlocal)

return (

    
<>
{getFromlocal.map((data)=>{
       const {email}=data
       console.log(email == id)
return (
    
        <div className="detailcontainer"> 
      <div className="buttons-container">
        <h1 className="back">⬅</h1>
        <div className="action">
          {" "}
          <h4 className="dlt">Delete</h4>
          <h4 className="edt">Edit</h4>
        </div>
      </div>

      <div className="delogo"></div>
      <h3>{`${data.fname} ${data.lname}`}</h3>
      <div className="contact">
        <h2>📞 +{data.phone} </h2>
      </div>
    </div>
    )
})}
    </>
  );
};

export default DetailPage;
