export class FacturaGlobalDetalleTaxesModel {

  constructor(
    public id?: number,
    public descripcion?: string,
    public facturaGlobalDetalleId?: number,
    public name?: string,
    public base?: number,
    public rate?: number,
    public isRetention?: number,
    public total?: number,

  ) { }
}

