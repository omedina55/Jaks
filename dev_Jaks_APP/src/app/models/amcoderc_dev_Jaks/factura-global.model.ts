export class FacturaGlobalModel {

  constructor(
    public id?: number,
    public descripcion?: string,
    public empresaId?: number,
    public periodoId?: number,
    public fechaInicio?: Date,
    public fechaFin?: Date,
    public completadaSandbox?: number,
    public completada?: number,
    public currency?: string,
    public expeditionPlace?: number,
    public paymentConditions?: string,
    public orderNumber?: string,
    public folio?: string,
    public cfdiType?: string,
    public paymentForm?: string,
    public paymentMethod?: string,
    public receiver__Rfc?: string,
    public receiver__Name?: string,
    public receiver__CfdiUse?: string,
    public cancelada?: number,
    public intento?: number,
    public usuarioCreacionId?: number,
    public expeditionPlaceSandbox?: string,
    public xmlInternalId?: string,
    public pdfInternalId?: string,
    public nombreArchivoSandbox?: string,
    public nombreArchivo?: string,
    public usuarioAprobadorId?: number,

  ) { }
}

