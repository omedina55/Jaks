export class FacturaGlobalDetalleModel {

  constructor(
    public id?: number,
    public descripcion?: string,
    public facturaGlobalId?: number,
    public productCode?: string,
    public identificationNumber?: string,
    public description?: string,
    public unitCode?: string,
    public unitPrice?: number,
    public unit?: string,
    public quantity?: number,
    public subtotal?: number,
    public total?: number,
    public discount?: number,
    public discountVal?: number,

  ) { }
}

