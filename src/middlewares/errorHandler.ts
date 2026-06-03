// ============================================================
// 🎯 TAREFA: Crie o middleware de erro com 4 parâmetros!
// ============================================================
//
// import { Request, Response, NextFunction } from "express";
// import { AppError, ValidationError } from "../errors";
//
// 1. Se err instanceof ValidationError → 400 + erros[]
// 2. Se err instanceof AppError → statusCode + mensagem
// 3. Senão → console.error + 500
//
// ⚠️ ValidationError ANTES de AppError nos instanceof!
// ⚠️ NUNCA enviar err.stack na resposta!
// ============================================================

