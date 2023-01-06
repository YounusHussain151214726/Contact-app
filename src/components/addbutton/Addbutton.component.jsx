import "./addbutton.component.css";

const AddButton = ({ title, classname, onhandle }) => {
  return (
    <>
      <section className="addbtn.conatiner">
        <button className={classname} onClick={onhandle}>
          {title}
        </button>
      </section>
    </>
  );
};

export default AddButton;
