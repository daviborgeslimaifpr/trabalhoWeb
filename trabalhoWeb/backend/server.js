import express from "express";
import {
  register,
  login,
  listUsers,
  getUser,
  updateUser,
  deleteUser
} from "./userController.js";

const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());

// ROTAS
app.post("/register", register);
app.post("/login", login);
app.get("/users", listUsers);
app.get("/users/:id", getUser);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);

// INICIAR SERVIDOR
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
