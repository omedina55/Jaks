USE amcoderc_dev_Jaks;

/*
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.PeriodoEmpresa_READ;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.PeriodoEmpresa_LIST;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.PeriodoEmpresa_CREATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.PeriodoEmpresa_UPDATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.PeriodoEmpresa_ENABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.PeriodoEmpresa_DISABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.PeriodoEmpresa_DELETE;
*/

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.PeriodoEmpresa_READ(
	IN _Option      TINYINT,
	IN _Id          INT,
	IN _Descripcion VARCHAR(100)
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id, a.Descripcion, a.Generada, a.Periodo, a.Mes, 
			a.FechaInicio, a.FechaFin, a.EmpresaId
		FROM 	PeriodoEmpresa a
		WHERE 	(_Id          IS NULL OR a.Id = _Id)
		  AND 	(_Descripcion IS NULL OR a.Descripcion LIKE CONCAT('%', _Descripcion, '%'));
	END IF;

	-- CALL amcoderc_dev_Jaks.PeriodoEmpresa_READ(null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.PeriodoEmpresa_LIST(
	IN _Option      TINYINT,
	IN _Id          INT,
	IN _Descripcion VARCHAR(100)
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id PeriodoEmpresaId, a.Id PeriodoEmpresaName
		FROM 	PeriodoEmpresa a
		WHERE 	(_Id          IS NULL OR a.Id = _Id)
		  AND 	(_Descripcion IS NULL OR a.Descripcion LIKE CONCAT('%', _Descripcion, '%'));
	END IF;

	-- CALL amcoderc_dev_Jaks.PeriodoEmpresa_LIST(null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.PeriodoEmpresa_CREATE(
	IN _Option      TINYINT,
	IN _Descripcion VARCHAR(100),
	IN _Generada    TINYINT,
	IN _Periodo     INT,
	IN _Mes         INT,
	IN _FechaInicio DATE,
	IN _FechaFin    DATE,
	IN _EmpresaId   INT
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
			INSERT INTO PeriodoEmpresa (Descripcion, Generada, Periodo, Mes, FechaInicio,
								FechaFin, EmpresaId)
							VALUES (_Descripcion, _Generada, _Periodo, _Mes, _FechaInicio,
								_FechaFin, _EmpresaId);

			SET _Message = CONCAT(ROW_COUNT(), ' record inserted');
		SET _InsertedId = LAST_INSERT_ID();
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, @InsertedId Id;
	-- CALL amcoderc_dev_Jaks.PeriodoEmpresa_CREATE(null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.PeriodoEmpresa_UPDATE(
	IN _Option      TINYINT,
	IN _Id          INT,
	IN _Descripcion VARCHAR(100),
	IN _Generada    TINYINT,
	IN _Periodo     INT,
	IN _Mes         INT,
	IN _FechaInicio DATE,
	IN _FechaFin    DATE,
	IN _EmpresaId   INT
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
			IF NOT EXISTS(SELECT 1 FROM PeriodoEmpresa WHERE Id = _Id)
			THEN
				SET _ErrorId = 10;
				SET _Message = 'Record not found';
			END IF;
		END IF;

		IF _ErrorId = 0
		THEN
			UPDATE  PeriodoEmpresa
			SET 	Descripcion = _Descripcion,
					Generada    = _Generada,
					Periodo     = _Periodo,
					Mes         = _Mes,
					FechaInicio = _FechaInicio,
					FechaFin    = _FechaFin,
					EmpresaId   = _EmpresaId
			WHERE 	Id = _Id;

			SET _Message = CONCAT(ROW_COUNT(), ' record updated');
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.PeriodoEmpresa_UPDATE(null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.PeriodoEmpresa_ENABLE(
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
		IF NOT EXISTS(SELECT 1 FROM PeriodoEmpresa WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM PeriodoEmpresa WHERE Id = _Id AND Active = 1)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already enabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	PeriodoEmpresa
		SET		
		WHERE	Active = 0
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record enabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.PeriodoEmpresa_ENABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.PeriodoEmpresa_DISABLE(
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
		IF NOT EXISTS(SELECT 1 FROM PeriodoEmpresa WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM PeriodoEmpresa WHERE Id = _Id AND Active = 0)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already disabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	PeriodoEmpresa
		SET		
		WHERE	Active = 1
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record disabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.PeriodoEmpresa_DISABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.PeriodoEmpresa_DELETE(
	IN _Id INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM PeriodoEmpresa WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		DELETE
		FROM   PeriodoEmpresa
		WHERE  Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record deleted');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.PeriodoEmpresa_DELETE(null);
END$$
DELIMITER ;


