// ✅ PRONTO — não precisa alterar
import { Router } from "express";
import * as AC from "../controllers/alunoController";
export const alunoRoutes = Router();
alunoRoutes.get("/alunos", AC.listar);
alunoRoutes.get("/alunos/:id", AC.buscarPorId);
alunoRoutes.post("/alunos", AC.criar);
alunoRoutes.put("/alunos/:id", AC.atualizar);
alunoRoutes.delete("/alunos/:id", AC.remover);
