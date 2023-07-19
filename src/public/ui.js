const notesList = document.querySelector("#notes");
let savedId = "";

const noteUI = note => {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="card card-body rounded-0 animate__animated animate__fadeInUp mb-2">
        <div class="d-flex justify-content-between">
            <h1 class="h3 card-title">${note.title}</h1>
            <div>
                <button class="btn btn-secondary update" data-id="${note.id}">Update</button>
                <button class="btn btn-danger delete" data-id="${note.id}">Delete</button>
            </div>
        </div>
        <p>${note.description}</p>
    </div>
  `;

  const btnDelete = div.querySelector(".delete");

  btnDelete.addEventListener("click", () => {
    deleteNote(btnDelete.dataset.id);
  });

  const btnUpdate = div.querySelector(".update");

  btnUpdate.addEventListener("click", () => {
    getNote(btnUpdate.dataset.id);
  });

  return div;
};
const renderNotes = notes => {
  notesList.innerHTML = "";
  notes.forEach(note => notesList.append(noteUI(note)));
};

const appendNote = note => notesList.append(noteUI(note));
