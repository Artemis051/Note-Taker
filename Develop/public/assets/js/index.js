document.addEventListener('DOMContentLoaded', () => {
  const noteForm = document.querySelector('.note-form');
  const noteTitle = document.querySelector('.note-title');
  const noteText = document.querySelector('.note-textarea');
  const saveNoteBtn = document.querySelector('.save-note');
  const newNoteBtn = document.querySelector('.new-note');
  const noteList = document.querySelector('.list-container .list-group');
  const clearBtn = document.querySelector('.clear-btn');

  let activeNote = {};

  const show = (elem) => {
    elem.style.display = 'inline';
  };

  const hide = (elem) => {
    elem.style.display = 'none';
  };

  const getNotes = async () => {
    try {
      const response = await fetch('/api/notes');
      return await response.json();
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const saveNote = async (note) => {
    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
      return await response.json();
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return await response.json();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const renderActiveNote = () => {
    // Your logic to render the active note in the UI
  };

  const handleNoteSave = () => {
    const newNote = {
      title: noteTitle.value,
      text: noteText.value,
    };

    saveNote(newNote).then(() => {
      getAndRenderNotes();
      renderActiveNote();
    });
  };

  const handleNoteDelete = (e) => {
    // Your logic to handle note deletion
  };

  const handleNoteView = (e) => {
    // Your logic to handle viewing a note
  };

  const handleNewNoteView = () => {
    // Your logic to handle creating a new note
  };

  const handleRenderBtns = () => {
    // Your logic to handle button rendering
  };

  const renderNoteList = (notes) => {
    // Your logic to render the note list
  };

  const getAndRenderNotes = () => {
    getNotes().then(renderNoteList);
  };

  saveNoteBtn.addEventListener('click', handleNoteSave);
  newNoteBtn.addEventListener('click', handleNewNoteView);
  clearBtn.addEventListener('click', renderActiveNote);
  noteForm.addEventListener('input', handleRenderBtns);

  // Initial render
  getAndRenderNotes();
});
