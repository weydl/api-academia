// ✅ PRONTO — Contratos e DTOs
export interface IEntidade { id: number; }

export type Plano = "Básico" | "Premium" | "VIP";

// DTO: dados do POST (sem id, sem ativo — automáticos)
export interface CriarAlunoDTO {
  nome: string;
  email: string;
  plano: Plano;
  mensalidade: number;
}

// DTO: dados do PUT (tudo opcional)
export interface AtualizarAlunoDTO {
  nome?: string;
  email?: string;
  plano?: Plano;
  mensalidade?: number;
  ativo?: boolean;
}

export interface AlunoParams { id: string; }
export interface FiltroQuery { plano?: string; ativo?: string; }
export interface ApiResponse<T> { sucesso: boolean; dados?: T; erro?: string; erros?: string[]; }
