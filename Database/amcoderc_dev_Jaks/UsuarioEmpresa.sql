USE amcoderc_dev_Jaks;

/*
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.UsuarioEmpresa_READ;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.UsuarioEmpresa_LIST;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.UsuarioEmpresa_CREATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.UsuarioEmpresa_UPDATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.UsuarioEmpresa_ENABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.UsuarioEmpresa_DISABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.UsuarioEmpresa_DELETE;
*/

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.UsuarioEmpresa_READ(
	IN _Option TINYINT,
	IN _Id INT
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id, a.UsuarioId, a.EmpresaId, a.UsuarioCreacionId, a.FechaCreacion, 
			a.UsuarioModificacionId, a.FechaModificacion, a.UsuarioBajaId, a.FechaBaja, a.Baja
		FROM 	UsuarioEmpresa a
		WHERE 	(_Id IS NULL OR a.Id = _Id);
	END IF;

	-- CALL amcoderc_dev_Jaks.UsuarioEmpresa_READ(null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.UsuarioEmpresa_LIST(
	IN _Option TINYINT,
	IN _Id INT
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id UsuarioEmpresaId, a.Id UsuarioEmpresaName
		FROM 	UsuarioEmpresa a
		WHERE 	(_Id IS NULL OR a.Id = _Id);
	END IF;

	-- CALL amcoderc_dev_Jaks.UsuarioEmpresa_LIST(null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.UsuarioEmpresa_CREATE(
	IN _Option                TINYINT,
	IN _UsuarioId             INT,
	IN _EmpresaId             INT,
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
			INSERT INTO UsuarioEmpresa (UsuarioId, EmpresaId, UsuarioCreacionId, FechaCreacion, UsuarioModificacionId,
								FechaModificacion, UsuarioBajaId, FechaBaja, Baja)
							VALUES (_UsuarioId, _EmpresaId, _UsuarioCreacionId, _FechaCreacion, _UsuarioModificacionId,
								_FechaModificacion, _UsuarioBajaId, _FechaBaja, _Baja);

			SET _Message = CONCAT(ROW_COUNT(), ' record inserted');
		SET _InsertedId = LAST_INSERT_ID();
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, @InsertedId Id;
	-- CALL amcoderc_dev_Jaks.UsuarioEmpresa_CREATE(null, null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.UsuarioEmpresa_UPDATE(
	IN _Option                TINYINT,
	IN _Id                    INT,
	IN _UsuarioId             INT,
	IN _EmpresaId             INT,
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
			IF NOT EXISTS(SELECT 1 FROM UsuarioEmpresa WHERE Id = _Id)
			THEN
				SET _ErrorId = 10;
				SET _Message = 'Record not found';
			END IF;
		END IF;

		IF _ErrorId = 0
		THEN
			UPDATE  UsuarioEmpresa
			SET 	UsuarioId             = _UsuarioId,
					EmpresaId             = _EmpresaId,
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
	-- CALL amcoderc_dev_Jaks.UsuarioEmpresa_UPDATE(null, null, null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.UsuarioEmpresa_ENABLE(
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
		IF NOT EXISTS(SELECT 1 FROM UsuarioEmpresa WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM UsuarioEmpresa WHERE Id = _Id AND Active = 1)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already enabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	UsuarioEmpresa
		SET		
		WHERE	Active = 0
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record enabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.UsuarioEmpresa_ENABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.UsuarioEmpresa_DISABLE(
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
		IF NOT EXISTS(SELECT 1 FROM UsuarioEmpresa WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM UsuarioEmpresa WHERE Id = _Id AND Active = 0)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already disabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	UsuarioEmpresa
		SET		
		WHERE	Active = 1
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record disabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.UsuarioEmpresa_DISABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.UsuarioEmpresa_DELETE(
	IN _Id INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM UsuarioEmpresa WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		DELETE
		FROM   UsuarioEmpresa
		WHERE  Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record deleted');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.UsuarioEmpresa_DELETE(null);
END$$
DELIMITER ;


