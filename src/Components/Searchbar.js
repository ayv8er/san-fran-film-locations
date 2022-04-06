const Searchbar = (props) => {
  const { searchTitle, setSearchTitle } = props;

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTitle(event.target.value);
  };

  return (
    <div
      className="d-flex justify-content-center"
      style={{ margin: "1% 0 1% 0" }}
    >
      <input
        style={{ width: "80%" }}
        type="text"
        id="title"
        name="search"
        placeholder="Search films and drag into map"
        onChange={handleChange}
        value={searchTitle}
      />
    </div>
  );
};

export default Searchbar;
