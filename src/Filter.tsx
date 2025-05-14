const Filter = ({ onFilter }) => {
  const handleFilterChange = (event) => {
    onFilter(event.target.value);
  };

  return (
    <>
      <input onChange={handleFilterChange} placeholder="Filter by name" />
    </>
  );
};

export default Filter;
