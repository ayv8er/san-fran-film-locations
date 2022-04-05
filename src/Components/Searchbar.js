const Searchbar = (props) => {
  const { searchTitle, setSearchTitle } = props;

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTitle(event.target.value);
  };

  return (
    <div className="d-flex justify-content-center" style={{ margin: "1%" }}>
      <label>
        Search by Movie Title:
        <input
          type="text"
          id="title"
          name="search"
          placeholder="enter title here"
          onChange={handleChange}
          value={searchTitle}
        />
      </label>
    </div>
  );
};

export default Searchbar;
