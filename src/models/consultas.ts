export interface Pacientes {
  numProntuario: number;
  nome: string;
  sexo: string;
  religiao: string;
  localAtend: string;
  statusAtend: string;
  dataAtend: Date;
  dataProxAtend?: Date;
  hipoteseDiag?: string;
  observacao?: string;
  }
