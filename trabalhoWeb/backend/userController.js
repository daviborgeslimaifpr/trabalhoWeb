import db from "./db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET = "SEGREDO_SUPER_SEGURO"; // Troque depois

// CADASTRAR
export const register = async (req, res) => {
  const { name, email, password, phone } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  db.run(
    `INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)`,
    [name, email, hashed, phone],
    function (err) {
      if (err) return res.status(400).json({ error: "Email já cadastrado" });
      res.json({ message: "Usuário cadastrado com sucesso!" });
    }
  );
};

// LOGIN
export const login = (req, res) => {
  const { email, password } = req.body;

  db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, user) => {
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "Senha inválida" });

    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "2h" });

    res.json({ message: "Logado com sucesso!", token });
  });
};

// LISTAR TODOS
export const listUsers = (req, res) => {
  db.all(`SELECT id, name, email, phone, status FROM users`, [], (err, rows) => {
    res.json(rows);
  });
};

// DETALHAR
export const getUser = (req, res) => {
  db.get(`SELECT * FROM users WHERE id = ?`, [req.params.id], (err, row) => {
    if (!row) return res.status(404).json({ error: "Usuário não existe" });
    res.json(row);
  });
};

// ATUALIZAR
export const updateUser = (req, res) => {
  const { name, phone, status } = req.body;

  db.run(
    `UPDATE users SET name = ?, phone = ?, status = ? WHERE id = ?`,
    [name, phone, status, req.params.id],
    function (err) {
      if (this.changes === 0)
        return res.status(400).json({ error: "Usuário não encontrado" });

      res.json({ message: "Atualizado!" });
    }
  );
};

// EXCLUSÃO LÓGICA
export const deleteUser = (req, res) => {
  db.run(
    `UPDATE users SET status = 'deleted' WHERE id = ?`,
    [req.params.id],
    function () {
      res.json({ message: "Usuário marcado como deletado!" });
    }
  );
};
