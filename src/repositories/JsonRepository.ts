// ============================================================
// 🎯 TAREFA: Crie o Repository<T> genérico!
// ============================================================
// IGUAL ao do professor (Pet Shop), mas vocês escrevem!
//
// import { readFile, writeFile } from "fs/promises";
// import { IEntidade } from "../interfaces";
// import { NotFoundError } from "../errors";
//
// export class JsonRepository<T extends IEntidade> {
//   constructor(
//     private arquivo: string,
//     private fromJSON: (obj: any) => T  // ← função de conversão!
//   ) {}
//
//   Métodos PRIVATE:
//     carregar(): converte JSON → instâncias com this.fromJSON(obj)
//     salvar(): JSON.stringify chama toJSON() automaticamente
//
//   Métodos PUBLIC:
//     listarTodos, buscarPorId (throw NotFoundError),
//     adicionar, atualizar, remover
// }
// ============================================================

