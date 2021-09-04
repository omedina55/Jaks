USE amcoderc_dev_Jaks;

/*
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Configuracion_READ;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Configuracion_LIST;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Configuracion_CREATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Configuracion_UPDATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Configuracion_ENABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Configuracion_DISABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Configuracion_DELETE;
*/

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Configuracion_READ(
	IN _Option      TINYINT,
	IN _Id          INT,
	IN _Descripcion VARCHAR(500),
	IN _Valor       VARCHAR(5000)
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id, a.Descripcion, a.Valor
		FROM 	Configuracion a
		WHERE 	(_Id          IS NULL OR a.Id = _Id)
		  AND 	(_Descripcion IS NULL OR a.Descripcion LIKE CONCAT('%', _Descripcion, '%'))
		  AND 	(_Valor       IS NULL OR a.Valor LIKE CONCAT('%', _Valor, '%'));
	END IF;

	-- CALL amcoderc_dev_Jaks.Configuracion_READ(null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Configuracion_LIST(
	IN _Option      TINYINT,
	IN _Id          INT,
	IN _Descripcion VARCHAR(500),
	IN _Valor       VARCHAR(5000)
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id ConfiguracionId, a.Id ConfiguracionName
		FROM 	Configuracion a
		WHERE 	(_Id          IS NULL OR a.Id = _Id)
		  AND 	(_Descripcion IS NULL OR a.Descripcion LIKE CONCAT('%', _Descripcion, '%'))
		  AND 	(_Valor       IS NULL OR a.Valor LIKE CONCAT('%', _Valor, '%'));
	END IF;

	-- CALL amcoderc_dev_Jaks.Configuracion_LIST(null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Configuracion_CREATE(
	IN _Option      TINYINT,
	IN _Id          INT,
	IN _Descripcion VARCHAR(500),
	IN _Valor       VARCHAR(5000)
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
			IF EXISTS(SELECT 1 FROM Configuracion WHERE Id = @Id)
			THEN
				SET _ErrorId = 10;
				SET _Message = 'Record already exists';
			END IF;
		END IF;

		IF _ErrorId = 0
		THEN
			INSERT INTO Configuracion (Id, Descripcion, Valor)
							VALUES (_Id, _Descripcion, _Valor);

			SET _Message = CONCAT(ROW_COUNT(), ' record inserted');
		SET _InsertedId = _Id;
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, @InsertedId Id;
	-- CALL amcoderc_dev_Jaks.Configuracion_CREATE(null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Configuracion_UPDATE(
	IN _Option      TINYINT,
	IN _Id          INT,
	IN _Descripcion VARCHAR(500),
	IN _Valor       VARCHAR(5000)
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
			IF NOT EXISTS(SELECT 1 FROM Configuracion WHERE Id = _Id)
			THEN
				SET _ErrorId = 10;
				SET _Message = 'Record not found';
			END IF;
		END IF;

		IF _ErrorId = 0
		THEN
			UPDATE  Configuracion
			SET 	Descripcion = _Descripcion,
					Valor       = _Valor
			WHERE 	Id = _Id;

			SET _Message = CONCAT(ROW_COUNT(), ' record updated');
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.Configuracion_UPDATE(null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Configuracion_ENABLE(
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
		IF NOT EXISTS(SELECT 1 FROM Configuracion WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM Configuracion WHERE Id = _Id AND Active = 1)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already enabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	Configuracion
		SET		
		WHERE	Active = 0
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record enabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.Configuracion_ENABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Configuracion_DISABLE(
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
		IF NOT EXISTS(SELECT 1 FROM Configuracion WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM Configuracion WHERE Id = _Id AND Active = 0)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already disabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	Configuracion
		SET		
		WHERE	Active = 1
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record disabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.Configuracion_DISABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Configuracion_DELETE(
	IN _Id INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM Configuracion WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		DELETE
		FROM   Configuracion
		WHERE  Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record deleted');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.Configuracion_DELETE(null);
END$$
DELIMITER ;


