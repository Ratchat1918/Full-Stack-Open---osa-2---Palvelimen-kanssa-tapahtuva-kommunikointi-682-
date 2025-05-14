const Persons = ({ personslist, onDelete }) => {
  const deletePerson = (id) => {
    onDelete(id);
  };
  return (
    <ul>
      {personslist.map((henkilo) => (
        <li key={henkilo.id}>
          {henkilo.name} {henkilo.number}
          <button onClick={() => deletePerson(henkilo.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};
export default Persons;
