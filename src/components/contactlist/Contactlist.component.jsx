import "./contactlist.component.css";
import { useParams , NavLink} from "react-router-dom";

const ContactList = ({ localValue }) => {
  return (
    <div className="contact-container">
      {localValue.map((data) => {
        return (
          <NavLink to={`/detailPage/${data.email}`} key={data.email}>          
            <section className="contactcard-container">
            <h3 className="logo">{data.fname.slice(0, 1)}</h3>
            <h3 className="name">{`${data.fname} ${data.lname} `}</h3>
          </section>
          </NavLink>

        );
      })}
    </div>
  );
};

export default ContactList;
