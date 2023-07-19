import noteModel from "../models/noteModel.js";
import { v4 as uuidv4 } from "uuid";

const loadNotes = async client => {
  const notes = await noteModel.findAll({
    attributes: ["id", "title", "description"],
  });
  client.emit("server:loadNotes", notes);
};

export default (io, client) => {
  loadNotes(client);

  client.on("client:newNote", async newNote => {
    const id = uuidv4();

    const note = noteModel.build({ id, ...newNote });

    await note.save();
    io.emit("server:newNote", note);
  });

  client.on("client:deleteNote", async id => {
    const note = await noteModel.findByPk(id);

    await note.destroy();

    loadNotes(client);
  });

  client.on("client:getNote", async noteId => {
    const note = await noteModel.findByPk(noteId);

    io.emit("server:selectedNote", note);
  });

  client.on("client:updateNote", async updatedNote => {
    const note = await noteModel.findByPk(updatedNote.id);

    note.title = updatedNote.title;
    note.description = updatedNote.description;

    await note.save();
    loadNotes(client);
  });
};
