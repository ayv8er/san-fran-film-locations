const Searchbar = (props) => {
  const { searchTitle, setSearchTitle } = props;

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTitle(e.target.value);
  };

  return (
    <div
      className="d-flex justify-content-center"
      style={{ border: "1px solid red" }}
    >
      <label>
        Search by Movie Title:
        <input
          type="text"
          id="title"
          name="search"
          placeholder="Search by Film Title"
          onChange={handleChange}
          value={searchTitle}
        />
      </label>
    </div>
  );
};

export default Searchbar;
