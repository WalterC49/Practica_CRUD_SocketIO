const socket = io();

const saveNote = (title, description) => {
  if (title && description) {
    socket.emit("client:newNote", {
      title,
      description,
    });
  }
};

const deleteNote = id => {
  socket.emit("client:deleteNote", id);
};

const getNote = id => {
  socket.emit("client:getNote", id);
};

const updateNote = (id, title, description) => {
  if (id && title && description) {
    socket.emit("client:updateNote", { id, title, description });
    savedId = "";
  }
};

socket.on("server:newNote", appendNote);

socket.on("server:loadNotes", renderNotes);

socket.on("server:selectedNote", note => {
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");

  title.value = note.title;
  description.value = note.description;
  savedId = note.id;
});
