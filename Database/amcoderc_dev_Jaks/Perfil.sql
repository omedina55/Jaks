USE amcoderc_dev_Jaks;

/*
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Perfil_READ;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Perfil_LIST;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Perfil_CREATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Perfil_UPDATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Perfil_ENABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Perfil_DISABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Perfil_DELETE;
*/

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Perfil_READ(
	IN _Option      TINYINT,
	IN _Id          INT,
	IN _Descripcion VARCHAR(100)
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id, a.Descripcion, a.FechaCreacion, a.UsuarioModificacionId, a.FechaModificacion, 
			a.UsuarioBajaId, a.FechaBaja, a.Baja
		FROM 	Perfil a
		WHERE 	(_Id          IS NULL OR a.Id = _Id)
		  AND 	(_Descripcion IS NULL OR a.Descripcion LIKE CONCAT('%', _Descripcion, '%'));
	END IF;

	-- CALL amcoderc_dev_Jaks.Perfil_READ(null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Perfil_LIST(
	IN _Option      TINYINT,
	IN _Id          INT,
	IN _Descripcion VARCHAR(100)
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id PerfilId, a.Id PerfilName
		FROM 	Perfil a
		WHERE 	(_Id          IS NULL OR a.Id = _Id)
		  AND 	(_Descripcion IS NULL OR a.Descripcion LIKE CONCAT('%', _Descripcion, '%'));
	END IF;

	-- CALL amcoderc_dev_Jaks.Perfil_LIST(null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Perfil_CREATE(
	IN _Option                TINYINT,
	IN _Id                    INT,
	IN _Descripcion           VARCHAR(100),
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
			IF EXISTS(SELECT 1 FROM Perfil WHERE Id = @Id)
			THEN
				SET _ErrorId = 10;
				SET _Message = 'Record already exists';
			END IF;
		END IF;

		IF _ErrorId = 0
		THEN
			INSERT INTO Perfil (Id, Descripcion, FechaCreacion, UsuarioModificacionId, FechaModificacion,
								UsuarioBajaId, FechaBaja, Baja)
							VALUES (_Id, _Descripcion, _FechaCreacion, _UsuarioModificacionId, _FechaModificacion,
								_UsuarioBajaId, _FechaBaja, _Baja);

			SET _Message = CONCAT(ROW_COUNT(), ' record inserted');
		SET _InsertedId = _Id;
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, @InsertedId Id;
	-- CALL amcoderc_dev_Jaks.Perfil_CREATE(null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Perfil_UPDATE(
	IN _Option                TINYINT,
	IN _Id                    INT,
	IN _Descripcion           VARCHAR(100),
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
			IF NOT EXISTS(SELECT 1 FROM Perfil WHERE Id = _Id)
			THEN
				SET _ErrorId = 10;
				SET _Message = 'Record not found';
			END IF;
		END IF;

		IF _ErrorId = 0
		THEN
			UPDATE  Perfil
			SET 	Descripcion           = _Descripcion,
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
	-- CALL amcoderc_dev_Jaks.Perfil_UPDATE(null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Perfil_ENABLE(
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
		IF NOT EXISTS(SELECT 1 FROM Perfil WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM Perfil WHERE Id = _Id AND Active = 1)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already enabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	Perfil
		SET		
		WHERE	Active = 0
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record enabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.Perfil_ENABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Perfil_DISABLE(
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
		IF NOT EXISTS(SELECT 1 FROM Perfil WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM Perfil WHERE Id = _Id AND Active = 0)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already disabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	Perfil
		SET		
		WHERE	Active = 1
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record disabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.Perfil_DISABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Perfil_DELETE(
	IN _Id INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM Perfil WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		DELETE
		FROM   Perfil
		WHERE  Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record deleted');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.Perfil_DELETE(null);
END$$
DELIMITER ;


