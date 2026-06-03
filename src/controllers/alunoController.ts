// ============================================================
// 🎯 TAREFA: Crie o Controller com try/catch + next(erro)!
// ============================================================
//
// import { Request, Response, NextFunction } from "express";
// import { AlunoModel } from "../models/alunoModel";
// import { ApiResponse, AlunoParams, FiltroQuery, CriarAlunoDTO } from "../interfaces";
// import { Aluno } from "../entities/Aluno";
//
// const model = new AlunoModel();
//
// 5 funções API (try/catch + next):
//   listar:      model.listarTodos() + filtro por plano e ativo
//   buscarPorId: model.buscarPorId(Number(req.params.id))
//   criar:       model.criar(req.body as CriarAlunoDTO) → 201
//   atualizar:   model.atualizarAluno(id, req.body)
//   remover:     model.remover(id)
//
// O Model usa Aluno.validar() → throw. Controller NÃO valida!
// ============================================================

