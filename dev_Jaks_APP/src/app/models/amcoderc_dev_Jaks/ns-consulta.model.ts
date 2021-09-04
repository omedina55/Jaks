export class NsConsultaModel {

  constructor(
    public id?: number,
    public facturaGlobalId?: number,
    public tranDate?: Date,
    public tranId?: string,
    public entityId?: number,
    public cfdiTimbrada?: string,
    public transactionType?: string,
    public ticketCaja?: string,
    public relatedTranId?: string,
    public name?: string,
    public transactionId?: number,
    public status?: string,
    public transactionOrder?: number,
    public amountForeign?: number,
    public subtotalFormato?: string,
    public accounId?: number,
    public accountNumber?: string,
    public typeName?: string,
    public amountTaxable?: string,
    public taxItemId?: number,
    public itemTypeName?: string,
    public rate?: string,
    public entityName?: string,
    public entityFullName?: string,
    public descuentoPorAplicar?: string,
    public otherRefNum?: string,

  ) { }
}

