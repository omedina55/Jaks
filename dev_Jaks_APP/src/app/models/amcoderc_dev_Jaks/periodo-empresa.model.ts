export class PeriodoEmpresaModel {

  constructor(
    public id?: number,
    public descripcion?: string,
    public generada?: number,
    public periodo?: number,
    public mes?: number,
    public fechaInicio?: Date,
    public fechaFin?: Date,
    public empresaId?: number,

  ) { }
}

