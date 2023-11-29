import { useState, useEffect } from 'react';
import NoteService from './NoteServise.jsx';


const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState([]);

  useEffect(() => {
    NoteService
      .getAll()
       .then(initialNotes => {
       setNotes(initialNotes)
     })
  }, []);
  
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5
    }
  
    NoteService
      .create(noteObject)
       .then(returnedNote => {
       setNotes(notes.concat(returnedNote))
       setNewNote('')
      })
  }
    
  const toggleImportance = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
    NoteService
      .update(id, changedNote)
       .then(returnedNote => {
       setNotes(
  notes.map(note => note.id !== id ? note : returnedNote))
     })
  }
  
  
  return (
    <div>
      <ul>{notes.map(noteObj => (
        <li key={noteObj.id}>{noteObj.content}</li>
        ))}
        <button onClick={addNote}>
          Send a note!
        </button>
      </ul>
      <ul>{notes.map(noteObj => (
        <li key={noteObj.id}>{noteObj.content}
        <button onClick={() => toggleImportance(noteObj.id)}>
          Toggle!
        </button>
        </li>
        ))}
      </ul>

    </div>
  )
}
export default Notes