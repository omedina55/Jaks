USE amcoderc_dev_Jaks;

/*
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Usuario_READ;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Usuario_LIST;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Usuario_CREATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Usuario_UPDATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Usuario_ENABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Usuario_DISABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Usuario_DELETE;
*/

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Usuario_READ(
	IN _Option          TINYINT,
	IN _Id              INT,
	IN _Usuario         VARCHAR(50),
	IN _Correo          VARCHAR(100),
	IN _Contrasena      VARCHAR(50),
	IN _Nombre          VARCHAR(100),
	IN _ApellidoPaterno VARCHAR(100),
	IN _ApellidoMaterno VARCHAR(100)
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id, a.Usuario, a.Correo, a.Contrasena, a.Nombre, 
			a.ApellidoPaterno, a.ApellidoMaterno, a.UsuarioCreacionId, a.FechaCreacion, a.UsuarioModificacionId, 
			a.FechaModificacion, a.UsuarioBajaId, a.FechaBaja, a.Baja, a.UsuarioTipoId
		FROM 	Usuario a
		WHERE 	(_Id              IS NULL OR a.Id = _Id)
		  AND 	(_Usuario         IS NULL OR a.Usuario LIKE CONCAT('%', _Usuario, '%'))
		  AND 	(_Correo          IS NULL OR a.Correo LIKE CONCAT('%', _Correo, '%'))
		  AND 	(_Contrasena      IS NULL OR a.Contrasena LIKE CONCAT('%', _Contrasena, '%'))
		  AND 	(_Nombre          IS NULL OR a.Nombre LIKE CONCAT('%', _Nombre, '%'))
		  AND 	(_ApellidoPaterno IS NULL OR a.ApellidoPaterno LIKE CONCAT('%', _ApellidoPaterno, '%'))
		  AND 	(_ApellidoMaterno IS NULL OR a.ApellidoMaterno LIKE CONCAT('%', _ApellidoMaterno, '%'));
	END IF;

	-- CALL amcoderc_dev_Jaks.Usuario_READ(null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Usuario_LIST(
	IN _Option          TINYINT,
	IN _Id              INT,
	IN _Usuario         VARCHAR(50),
	IN _Correo          VARCHAR(100),
	IN _Contrasena      VARCHAR(50),
	IN _Nombre          VARCHAR(100),
	IN _ApellidoPaterno VARCHAR(100),
	IN _ApellidoMaterno VARCHAR(100)
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id UsuarioId, a.Usuario UsuarioName
		FROM 	Usuario a
		WHERE 	(_Id              IS NULL OR a.Id = _Id)
		  AND 	(_Usuario         IS NULL OR a.Usuario LIKE CONCAT('%', _Usuario, '%'))
		  AND 	(_Correo          IS NULL OR a.Correo LIKE CONCAT('%', _Correo, '%'))
		  AND 	(_Contrasena      IS NULL OR a.Contrasena LIKE CONCAT('%', _Contrasena, '%'))
		  AND 	(_Nombre          IS NULL OR a.Nombre LIKE CONCAT('%', _Nombre, '%'))
		  AND 	(_ApellidoPaterno IS NULL OR a.ApellidoPaterno LIKE CONCAT('%', _ApellidoPaterno, '%'))
		  AND 	(_ApellidoMaterno IS NULL OR a.ApellidoMaterno LIKE CONCAT('%', _ApellidoMaterno, '%'));
	END IF;

	-- CALL amcoderc_dev_Jaks.Usuario_LIST(null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Usuario_CREATE(
	IN _Option                TINYINT,
	IN _Usuario               VARCHAR(50),
	IN _Correo                VARCHAR(100),
	IN _Contrasena            VARCHAR(50),
	IN _Nombre                VARCHAR(100),
	IN _ApellidoPaterno       VARCHAR(100),
	IN _ApellidoMaterno       VARCHAR(100),
	IN _UsuarioCreacionId     INT,
	IN _FechaCreacion         DATETIME,
	IN _UsuarioModificacionId INT,
	IN _FechaModificacion     DATETIME,
	IN _UsuarioBajaId         INT,
	IN _FechaBaja             DATETIME,
	IN _Baja                  TINYINT,
	IN _UsuarioTipoId         INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);
DECLARE _InsertedId INT;

SET _ErrorId = 0;
SET _Message = '';

	IF _Option = 1
	THEN
		IF _ErrorId = 0
		THEN
			INSERT INTO Usuario (Usuario, Correo, Contrasena, Nombre, ApellidoPaterno,
								ApellidoMaterno, UsuarioCreacionId, FechaCreacion, UsuarioModificacionId, FechaModificacion,
								UsuarioBajaId, FechaBaja, Baja, UsuarioTipoId)
							VALUES (_Usuario, _Correo, _Contrasena, _Nombre, _ApellidoPaterno,
								_ApellidoMaterno, _UsuarioCreacionId, _FechaCreacion, _UsuarioModificacionId, _FechaModificacion,
								_UsuarioBajaId, _FechaBaja, _Baja, _UsuarioTipoId);

			SET _Message = CONCAT(ROW_COUNT(), ' record inserted');
		SET _InsertedId = LAST_INSERT_ID();
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, @InsertedId Id;
	-- CALL amcoderc_dev_Jaks.Usuario_CREATE(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Usuario_UPDATE(
	IN _Option                TINYINT,
	IN _Id                    INT,
	IN _Usuario               VARCHAR(50),
	IN _Correo                VARCHAR(100),
	IN _Contrasena            VARCHAR(50),
	IN _Nombre                VARCHAR(100),
	IN _ApellidoPaterno       VARCHAR(100),
	IN _ApellidoMaterno       VARCHAR(100),
	IN _UsuarioCreacionId     INT,
	IN _FechaCreacion         DATETIME,
	IN _UsuarioModificacionId INT,
	IN _FechaModificacion     DATETIME,
	IN _UsuarioBajaId         INT,
	IN _FechaBaja             DATETIME,
	IN _Baja                  TINYINT,
	IN _UsuarioTipoId         INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	
	IF _Option = 1
	THEN
		IF _ErrorId = 0
		THEN
			IF NOT EXISTS(SELECT 1 FROM Usuario WHERE Id = _Id)
			THEN
				SET _ErrorId = 10;
				SET _Message = 'Record not found';
			END IF;
		END IF;

		IF _ErrorId = 0
		THEN
			UPDATE  Usuario
			SET 	Usuario               = _Usuario,
					Correo                = _Correo,
					Contrasena            = _Contrasena,
					Nombre                = _Nombre,
					ApellidoPaterno       = _ApellidoPaterno,
					ApellidoMaterno       = _ApellidoMaterno,
					UsuarioCreacionId     = _UsuarioCreacionId,
					FechaCreacion         = _FechaCreacion,
					UsuarioModificacionId = _UsuarioModificacionId,
					FechaModificacion     = _FechaModificacion,
					UsuarioBajaId         = _UsuarioBajaId,
					FechaBaja             = _FechaBaja,
					Baja                  = _Baja,
					UsuarioTipoId         = _UsuarioTipoId
			WHERE 	Id = _Id;

			SET _Message = CONCAT(ROW_COUNT(), ' record updated');
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.Usuario_UPDATE(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Usuario_ENABLE(
	IN _Id INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	/*
	-- COMMENTED CODE: Not key column found in the table

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM Usuario WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM Usuario WHERE Id = _Id AND Active = 1)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already enabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	Usuario
		SET		
		WHERE	Active = 0
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record enabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.Usuario_ENABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Usuario_DISABLE(
	IN _Id INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	/*
	-- COMMENTED CODE: Not key column found in the table

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM Usuario WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM Usuario WHERE Id = _Id AND Active = 0)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already disabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	Usuario
		SET		
		WHERE	Active = 1
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record disabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.Usuario_DISABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Usuario_DELETE(
	IN _Id INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM Usuario WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		DELETE
		FROM   Usuario
		WHERE  Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record deleted');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.Usuario_DELETE(null);
END$$
DELIMITER ;


