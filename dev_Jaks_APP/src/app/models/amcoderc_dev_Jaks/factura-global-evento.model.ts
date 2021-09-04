export class FacturaGlobalEventoModel {

  constructor(
    public id?: number,
    public descripcion?: string,
    public facturaGlobalId?: number,
    public eventoTipoId?: number,
    public usuarioId?: number,
    public fecha?: Date,

  ) { }
}

