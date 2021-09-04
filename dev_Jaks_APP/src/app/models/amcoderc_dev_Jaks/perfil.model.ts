export class PerfilModel {

  constructor(
    public id?: number,
    public descripcion?: string,
    public fechaCreacion?: Date,
    public usuarioModificacionId?: number,
    public fechaModificacion?: Date,
    public usuarioBajaId?: number,
    public fechaBaja?: Date,
    public baja?: number,

  ) { }
}

