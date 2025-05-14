//tehtävä 2.1-2.5
/** 
import Course from "./Course";
const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <Course course={courses} />
    </div>
  );
};

export default App;
*/
//tehtävä 2.6-2.10
/**
import { useState } from "react";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Filter from "./Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);

  const handleFilter = (filterValue) => {
    const filtered = persons.filter(newFiltred);
    function newFiltred(person) {
      return person.name.toLowerCase().includes(filterValue.toLowerCase());
    }
    setFilteredPersons(filtered);
  };

  const addPerson = (name, number) => {
    if (persons.some((person) => person.name === name)) {
      alert(`${name} is already added to phonebook`);
      return;
    }
    const newPerson = { name, number, id: persons.length + 1 };
    setPersons([...persons, newPerson]);
    setFilteredPersons([...persons, newPerson]);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onFilter={handleFilter} />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNum={newNum}
        setNewNum={setNewNum}
        addPerson={addPerson}
      />
      <h3>Numbers</h3>
      <Persons personslist={filteredPersons} />
    </div>
  );
};

export default App;
*/
//tehtävä 2.16.-2.17.
import { useState, useEffect } from "react";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Filter from "./Filter";
import noteService from "./noteService";
import Notification from "./Notification";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    noteService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  useEffect(() => {
    setFilteredPersons(persons);
  }, [persons]);

  const handleFilter = (filterValue) => {
    const filtered = persons.filter(newFiltred);
    function newFiltred(person) {
      return person.name.toLowerCase().includes(filterValue.toLowerCase());
    }
    setFilteredPersons(filtered);
  };

  const addPerson = (name, number) => {
    if (persons.some((person) => person.name === name)) {
      const existingPerson = persons.find((person) => person.name === name);
      const id = existingPerson.id;
      let viesti = `${name} is already added to phonebook, replace the old number with a new one?`;
      confirm(viesti);
      if (confirm(viesti) === true) {
        console.log("true");
        noteService.update(id, { name: name, number: number, id: id });
        setPersons(persons);
      }
      return;
    }
    const newPerson = { name, number, id: Math.random };
    setPersons([...persons, newPerson]);
    setFilteredPersons([...persons, newPerson]);
    setErrorMessage(`Added ${name}`);
    noteService.create(newPerson).then((response) => {
      setPersons(persons.concat(response.data));
    });
  };
  const deletePerson = (deleteId) => {
    console.log(deleteId);
    noteService.deletePerson(deleteId).catch((error) => {
      setErrorMessage(
        `Information of ${
          persons[deleteId - 1].name
        } has already been removed from server`
      );
    });
    const newPersons = persons.filter(deletePersonInList);
    function deletePersonInList(person) {
      return person.id !== deleteId;
    }
    setPersons(newPersons);
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={errorMessage} />
      <Filter onFilter={handleFilter} />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNum={newNum}
        setNewNum={setNewNum}
        addPerson={addPerson}
      />
      <h3>Numbers</h3>
      <Persons personslist={filteredPersons} onDelete={deletePerson} />
    </div>
  );
};

export default App;
