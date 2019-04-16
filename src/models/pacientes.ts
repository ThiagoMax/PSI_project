export interface Pacientes {
  numProntuario: number;
  nome: string;
  sexo: string;
  dataNasc: Date;
  estCivil: string;
  escolaridade: string;
  religiao: string;
  telEmergencia: string;
  localAtend: string;
  dataAtend: Date;
  dataProxAtend?: Date;
  hipoteseDiag?: string;
  riscos?: string;
  histpsiquiatrico?: string;
  medicacaoUso?: string;
  observacao?: string;
}
