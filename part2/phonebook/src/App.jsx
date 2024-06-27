import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)  
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }

    if (persons.find(e => e.name == personObject.name)){
    alert(`${newName} is already added to phonebook`)
    } else {
    setPersons(persons.concat(personObject))
    } 
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((persons)=> <p key={persons.name}>{persons.name}</p>)}
    </div>
  )
}

export default App