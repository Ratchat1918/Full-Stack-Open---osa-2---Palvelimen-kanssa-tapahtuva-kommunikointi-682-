const PersonForm = ({ newName, setNewName, newNum, setNewNum, addPerson }) => {
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNum(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPerson(newName, newNum);
    setNewName("");
    setNewNum("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
          <br />
          number: <input onChange={handleNumberChange} value={newNum} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
