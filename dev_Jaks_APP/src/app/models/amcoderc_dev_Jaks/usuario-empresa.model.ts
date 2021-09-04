export class UsuarioEmpresaModel {

  constructor(
    public id?: number,
    public usuarioId?: number,
    public empresaId?: number,
    public usuarioCreacionId?: number,
    public fechaCreacion?: Date,
    public usuarioModificacionId?: number,
    public fechaModificacion?: Date,
    public usuarioBajaId?: number,
    public fechaBaja?: Date,
    public baja?: number,

  ) { }
}

