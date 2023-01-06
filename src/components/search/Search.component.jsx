import "./search.component.css";

const Search = ({ type, placeholder, classname }) => {
  return (
    <div className="input-container">
      <input type={type} placeholder={placeholder} className={classname} />
    </div>
  );
};

export default Search;
