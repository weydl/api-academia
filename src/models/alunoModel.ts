import { JsonRepository } from "../repositories/JsonRepository";
import { Aluno } from "../entities/Aluno";
import { CriarAlunoDTO, AtualizarAlunoDTO } from "../interfaces";

export class AlunoModel extends JsonRepository<Aluno> {
  constructor() {
    super("dados/alunos.json", Aluno.fromJSON);
  }

  async criar(dados: CriarAlunoDTO): Promise<Aluno> {
    Aluno.validar(dados);

    const aluno = new Aluno(
      0,
      dados.nome,
      dados.email,
      dados.plano,
      dados.mensalidade
    );

    await this.adicionar(aluno);

    return aluno;
  }

  async atualizarAluno(
    id: number,
    dados: AtualizarAlunoDTO
  ): Promise<Aluno> {
    const aluno = await this.buscarPorId(id);

    Object.assign(aluno, dados);

    await this.atualizar(id, aluno);

    return aluno;
  }
}