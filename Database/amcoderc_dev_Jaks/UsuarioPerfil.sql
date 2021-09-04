USE amcoderc_dev_Jaks;

/*
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.UsuarioPerfil_READ;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.UsuarioPerfil_LIST;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.UsuarioPerfil_CREATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.UsuarioPerfil_UPDATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.UsuarioPerfil_ENABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.UsuarioPerfil_DISABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.UsuarioPerfil_DELETE;
*/

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.UsuarioPerfil_READ(
	IN _Option TINYINT,
	IN _Id INT
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id, a.UsuarioId, a.PerfilId, a.UsuarioCreacionId, a.FechaCreacion, 
			a.UsuarioModificacionId, a.FechaModificacion, a.UsuarioBajaId, a.FechaBaja, a.Baja
		FROM 	UsuarioPerfil a
		WHERE 	(_Id IS NULL OR a.Id = _Id);
	END IF;

	-- CALL amcoderc_dev_Jaks.UsuarioPerfil_READ(null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.UsuarioPerfil_LIST(
	IN _Option TINYINT,
	IN _Id INT
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id UsuarioPerfilId, a.Id UsuarioPerfilName
		FROM 	UsuarioPerfil a
		WHERE 	(_Id IS NULL OR a.Id = _Id);
	END IF;

	-- CALL amcoderc_dev_Jaks.UsuarioPerfil_LIST(null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.UsuarioPerfil_CREATE(
	IN _Option                TINYINT,
	IN _UsuarioId             INT,
	IN _PerfilId              INT,
	IN _UsuarioCreacionId     INT,
	IN _FechaCreacion         DATETIME,
	IN _UsuarioModificacionId INT,
	IN _FechaModificacion     DATETIME,
	IN _UsuarioBajaId         INT,
	IN _FechaBaja             DATETIME,
	IN _Baja                  TINYINT
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
			INSERT INTO UsuarioPerfil (UsuarioId, PerfilId, UsuarioCreacionId, FechaCreacion, UsuarioModificacionId,
								FechaModificacion, UsuarioBajaId, FechaBaja, Baja)
							VALUES (_UsuarioId, _PerfilId, _UsuarioCreacionId, _FechaCreacion, _UsuarioModificacionId,
								_FechaModificacion, _UsuarioBajaId, _FechaBaja, _Baja);

			SET _Message = CONCAT(ROW_COUNT(), ' record inserted');
		SET _InsertedId = LAST_INSERT_ID();
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, @InsertedId Id;
	-- CALL amcoderc_dev_Jaks.UsuarioPerfil_CREATE(null, null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.UsuarioPerfil_UPDATE(
	IN _Option                TINYINT,
	IN _Id                    INT,
	IN _UsuarioId             INT,
	IN _PerfilId              INT,
	IN _UsuarioCreacionId     INT,
	IN _FechaCreacion         DATETIME,
	IN _UsuarioModificacionId INT,
	IN _FechaModificacion     DATETIME,
	IN _UsuarioBajaId         INT,
	IN _FechaBaja             DATETIME,
	IN _Baja                  TINYINT
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
			IF NOT EXISTS(SELECT 1 FROM UsuarioPerfil WHERE Id = _Id)
			THEN
				SET _ErrorId = 10;
				SET _Message = 'Record not found';
			END IF;
		END IF;

		IF _ErrorId = 0
		THEN
			UPDATE  UsuarioPerfil
			SET 	UsuarioId             = _UsuarioId,
					PerfilId              = _PerfilId,
					UsuarioCreacionId     = _UsuarioCreacionId,
					FechaCreacion         = _FechaCreacion,
					UsuarioModificacionId = _UsuarioModificacionId,
					FechaModificacion     = _FechaModificacion,
					UsuarioBajaId         = _UsuarioBajaId,
					FechaBaja             = _FechaBaja,
					Baja                  = _Baja
			WHERE 	Id = _Id;

			SET _Message = CONCAT(ROW_COUNT(), ' record updated');
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.UsuarioPerfil_UPDATE(null, null, null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.UsuarioPerfil_ENABLE(
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
		IF NOT EXISTS(SELECT 1 FROM UsuarioPerfil WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM UsuarioPerfil WHERE Id = _Id AND Active = 1)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already enabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	UsuarioPerfil
		SET		
		WHERE	Active = 0
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record enabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.UsuarioPerfil_ENABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.UsuarioPerfil_DISABLE(
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
		IF NOT EXISTS(SELECT 1 FROM UsuarioPerfil WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM UsuarioPerfil WHERE Id = _Id AND Active = 0)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already disabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	UsuarioPerfil
		SET		
		WHERE	Active = 1
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record disabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.UsuarioPerfil_DISABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.UsuarioPerfil_DELETE(
	IN _Id INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM UsuarioPerfil WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		DELETE
		FROM   UsuarioPerfil
		WHERE  Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record deleted');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.UsuarioPerfil_DELETE(null);
END$$
DELIMITER ;


