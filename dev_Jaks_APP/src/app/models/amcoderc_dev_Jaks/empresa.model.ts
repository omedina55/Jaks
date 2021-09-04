export class EmpresaModel {

  constructor(
    public id?: number,
    public descripcion?: string,
    public rFC?: string,
    public razonSocial?: string,
    public constrasenaVUCEM?: string,
    public tokenWEBVUCEM?: string,
    public vigencia?: Date,
    public correo?: string,
    public usuarioCreacionId?: number,
    public fechaCreacion?: Date,
    public usuarioModificacionId?: number,
    public fechaModificacion?: Date,
    public usuarioBajaId?: number,
    public fechaBaja?: Date,
    public baja?: number,
    public expeditionPlace?: number,
    public expeditionPlaceSandbox?: string,

  ) { }
}

