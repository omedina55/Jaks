USE amcoderc_dev_Jaks;

/*
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalEvento_READ;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalEvento_LIST;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalEvento_CREATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalEvento_UPDATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalEvento_ENABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalEvento_DISABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalEvento_DELETE;
*/

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalEvento_READ(
	IN _Option      TINYINT,
	IN _Id          INT,
	IN _Descripcion VARCHAR(5000)
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id, a.Descripcion, a.FacturaGlobalId, a.EventoTipoId, a.UsuarioId, 
			a.Fecha
		FROM 	FacturaGlobalEvento a
		WHERE 	(_Id          IS NULL OR a.Id = _Id)
		  AND 	(_Descripcion IS NULL OR a.Descripcion LIKE CONCAT('%', _Descripcion, '%'));
	END IF;

	-- CALL amcoderc_dev_Jaks.FacturaGlobalEvento_READ(null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalEvento_LIST(
	IN _Option      TINYINT,
	IN _Id          INT,
	IN _Descripcion VARCHAR(5000)
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id FacturaGlobalEventoId, a.Id FacturaGlobalEventoName
		FROM 	FacturaGlobalEvento a
		WHERE 	(_Id          IS NULL OR a.Id = _Id)
		  AND 	(_Descripcion IS NULL OR a.Descripcion LIKE CONCAT('%', _Descripcion, '%'));
	END IF;

	-- CALL amcoderc_dev_Jaks.FacturaGlobalEvento_LIST(null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalEvento_CREATE(
	IN _Option          TINYINT,
	IN _Descripcion     VARCHAR(5000),
	IN _FacturaGlobalId INT,
	IN _EventoTipoId    INT,
	IN _UsuarioId       INT,
	IN _Fecha           DATETIME
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
			INSERT INTO FacturaGlobalEvento (Descripcion, FacturaGlobalId, EventoTipoId, UsuarioId, Fecha)
							VALUES (_Descripcion, _FacturaGlobalId, _EventoTipoId, _UsuarioId, _Fecha);

			SET _Message = CONCAT(ROW_COUNT(), ' record inserted');
		SET _InsertedId = LAST_INSERT_ID();
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, @InsertedId Id;
	-- CALL amcoderc_dev_Jaks.FacturaGlobalEvento_CREATE(null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalEvento_UPDATE(
	IN _Option          TINYINT,
	IN _Id              INT,
	IN _Descripcion     VARCHAR(5000),
	IN _FacturaGlobalId INT,
	IN _EventoTipoId    INT,
	IN _UsuarioId       INT,
	IN _Fecha           DATETIME
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
			IF NOT EXISTS(SELECT 1 FROM FacturaGlobalEvento WHERE Id = _Id)
			THEN
				SET _ErrorId = 10;
				SET _Message = 'Record not found';
			END IF;
		END IF;

		IF _ErrorId = 0
		THEN
			UPDATE  FacturaGlobalEvento
			SET 	Descripcion     = _Descripcion,
					FacturaGlobalId = _FacturaGlobalId,
					EventoTipoId    = _EventoTipoId,
					UsuarioId       = _UsuarioId,
					Fecha           = _Fecha
			WHERE 	Id = _Id;

			SET _Message = CONCAT(ROW_COUNT(), ' record updated');
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.FacturaGlobalEvento_UPDATE(null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalEvento_ENABLE(
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
		IF NOT EXISTS(SELECT 1 FROM FacturaGlobalEvento WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM FacturaGlobalEvento WHERE Id = _Id AND Active = 1)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already enabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	FacturaGlobalEvento
		SET		
		WHERE	Active = 0
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record enabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.FacturaGlobalEvento_ENABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalEvento_DISABLE(
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
		IF NOT EXISTS(SELECT 1 FROM FacturaGlobalEvento WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM FacturaGlobalEvento WHERE Id = _Id AND Active = 0)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already disabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	FacturaGlobalEvento
		SET		
		WHERE	Active = 1
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record disabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.FacturaGlobalEvento_DISABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalEvento_DELETE(
	IN _Id INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM FacturaGlobalEvento WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		DELETE
		FROM   FacturaGlobalEvento
		WHERE  Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record deleted');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.FacturaGlobalEvento_DELETE(null);
END$$
DELIMITER ;


