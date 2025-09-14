let notes = [];
let nextId = 1;

// Ladda sparade anteckningar när sidan laddas
window.onload = () => {
  loadNotes();
  showNotes();
};

function loadNotes() {
  const saved = localStorage.getItem("notes");
  if (saved) {
    notes = JSON.parse(saved);
    nextId = notes.length + 1;
  }
}

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function showNotes() {
  const list = document.getElementById("notesList");
  list.innerHTML = "";

  notes.forEach((note) => {
    const div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.text}</p>
            <button onclick="deleteNote(${note.id})">Delete</button>
        `;
    list.appendChild(div);
  });

document.getElementById("notesList").style.display = "block";
}
function hideNotesList() {
  document.getElementById("notesList").style.display = "none";
}





function showStartPage() {
  document.getElementById("startInfo").style.display = "block";
    document.getElementById("createBtn").style.display = "block";
}


function hideStartPage() {
  document.getElementById("startInfo").style.display = "none";
  document.getElementById("createBtn").style.display = "none";
}



function showCreateForm() {
  document.getElementById("createForm").style.display = "block";
  hideStartPage();
  hideNotesList();
}


function hideCreateForm() {
  document.getElementById("createForm").style.display = "none";
  document.getElementById("titleInput").value = "";
  document.getElementById("textInput").value = "";
  showNotes();  
  showStartPage();
    
}


function saveNote() {
  const title = document.getElementById("titleInput").value;
  const text = document.getElementById("textInput").value;
  if (title && text) {
    const note = {
      id: nextId++,
      title: title,
      text: text,
    };

    notes.push(note);
    saveNotes();
    showNotes();
    hideCreateForm();
  }
}

function deleteNote(id) {
  if (confirm("Delete this note?")) {
    notes = notes.filter((note) => note.id !== id);
    saveNotes();
    showNotes();
  }
}