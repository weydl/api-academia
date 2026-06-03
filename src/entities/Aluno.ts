// ============================================================
// 🎯 TAREFA: Crie a CLASSE Aluno aqui!
// ============================================================
// Veja como o professor fez a classe Animal no Pet Shop.
// Sua classe Aluno deve seguir o MESMO padrão:
//
// import { IEntidade, Plano, CriarAlunoDTO } from "../interfaces";
// import { ValidationError } from "../errors";
//
// const PLANOS_VALIDOS: Plano[] = ["Básico", "Premium", "VIP"];
//
// export class Aluno implements IEntidade {
//
//   Propriedades PRIVADAS:
//     _id, _nome, _email, _plano, _mensalidade, _ativo
//
//   Constructor:
//     (id, nome, email, plano, mensalidade, ativo = true)
//
//   Getters: id, nome, email, plano, mensalidade, ativo
//
//   Setters com validação:
//     nome: não pode ser vazio
//     email: deve conter "@"
//     plano: deve estar na lista
//     mensalidade: deve ser > 0
//
//   Métodos de domínio:
//     desativar(): void — this._ativo = false
//     ativar(): void — this._ativo = true
//     descrever(): string — "Nome (Plano, R$ X, ativo/inativo)"
//
//   Método estático:
//     static validar(dados: CriarAlunoDTO): void — throw ValidationError
//
//   Serialização:
//     static fromJSON(obj: any): Aluno
//     toJSON(): Record<string, unknown>
// }
// ============================================================

