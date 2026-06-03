// ============================================================
// 🎯 TAREFA: Crie o AlunoModel que HERDA do Repository!
// ============================================================
//
// import { JsonRepository } from "../repositories/JsonRepository";
// import { Aluno } from "../entities/Aluno";
// import { CriarAlunoDTO, AtualizarAlunoDTO } from "../interfaces";
//
// export class AlunoModel extends JsonRepository<Aluno> {
//   constructor() {
//     super("dados/alunos.json", Aluno.fromJSON);
//     // ↑ passa o caminho E a função de conversão!
//   }
//
//   async criar(dados: CriarAlunoDTO): Promise<Aluno> {
//     Aluno.validar(dados);  // validação na CLASSE!
//     const aluno = new Aluno(0, dados.nome, dados.email, dados.plano, dados.mensalidade);
//     return this.adicionar(aluno);
//   }
//
//   async atualizarAluno(id, dados: AtualizarAlunoDTO): Promise<Aluno> {
//     return this.atualizar(id, dados);
//   }
// }
// ============================================================

