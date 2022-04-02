const Searchbar = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
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
        />
      </label>
    </div>
  );
};

export default Searchbar;
