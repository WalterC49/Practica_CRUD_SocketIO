import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

export default sequelize.define("Note", {
  id: { type: DataTypes.UUID, primaryKey: true },
  title: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
});
