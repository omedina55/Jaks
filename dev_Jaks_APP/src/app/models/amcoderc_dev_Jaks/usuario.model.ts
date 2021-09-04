export class UsuarioModel {

  constructor(
    public id?: number,
    public usuario?: string,
    public correo?: string,
    public contrasena?: string,
    public nombre?: string,
    public apellidoPaterno?: string,
    public apellidoMaterno?: string,
    public usuarioCreacionId?: number,
    public fechaCreacion?: Date,
    public usuarioModificacionId?: number,
    public fechaModificacion?: Date,
    public usuarioBajaId?: number,
    public fechaBaja?: Date,
    public baja?: number,
    public usuarioTipoId?: number,

  ) { }
}

