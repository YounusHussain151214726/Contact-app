import "./search.component.css";

const Search = ({ type, placeholder, classname, onChange }) => {
  return (
    <div className="input-container">
      <input
        type={type}
        placeholder={placeholder}
        className={classname}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
