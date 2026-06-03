# 🏋️ API Academia — Prática Aula 30

API MVC com OOP: Repository<T> genérico + herança + erros customizados.

## Como executar
```bash
npm install
npm run dev
```

## Tarefas (em ordem)
1. src/errors/index.ts — 3 classes de erro
2. src/repositories/JsonRepository.ts — CRUD genérico <T>
3. src/models/alunoModel.ts — extends Repository + validação
4. src/controllers/alunoController.ts — try/catch + next(erro)
5. src/middlewares/errorHandler.ts — middleware global
6. src/app.ts — registrar errorHandler

## Entidade Aluno
nome, email, plano (Básico/Premium/VIP), mensalidade, ativo
