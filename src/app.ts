import express from "express";
import { logger } from "./middlewares/logger";
import { alunoRoutes } from "./routes/alunoRoutes";
// 🎯 TODO: importar errorHandler de "./middlewares/errorHandler"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(logger);

app.use(alunoRoutes);

// 🎯 TODO: app.use(errorHandler) — DEPOIS das rotas!

app.listen(3000, () => {
  console.log("✅ API Academia rodando em http://localhost:3000");
  console.log("📡 Rotas: GET/POST /alunos, GET/PUT/DELETE /alunos/:id");
});
