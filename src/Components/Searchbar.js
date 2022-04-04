const Searchbar = (props) => {
  const {
    searchTitle,
    setSearchTitle,
    isSearching,
    setFilteredList,
    locations,
  } = props;

  const filter = (list) => {
    setFilteredList(list);
  };

  const checkSearchTitle = (searchWord) => {
    if (searchWord === "") {
      isSearching.current = false;
      setSearchTitle(searchWord);
    } else {
      isSearching.current = true;
      setSearchTitle(searchWord);
    }
    const filteredList = locations.filter((loc) => {
      return loc.title.toLowerCase().includes(searchWord);
    });
    filter(filteredList);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const searchTitle = event.target.value.trim().toLowerCase();
    checkSearchTitle(searchTitle);
  };

  return (
    <div className="d-flex justify-content-center" style={{ margin: "2%" }}>
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
