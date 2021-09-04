USE amcoderc_dev_Jaks;

/*
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_READ;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_LIST;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_CREATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_UPDATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_ENABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_DISABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_DELETE;
*/

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_READ(
	IN _Option      TINYINT,
	IN _Id          INT,
	IN _Descripcion VARCHAR(50),
	IN _Name        VARCHAR(50)
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id, a.Descripcion, a.FacturaGlobalDetalleId, a.Name, a.Base, 
			a.Rate, a.IsRetention, a.Total
		FROM 	FacturaGlobalDetalleTaxes a
		WHERE 	(_Id          IS NULL OR a.Id = _Id)
		  AND 	(_Descripcion IS NULL OR a.Descripcion LIKE CONCAT('%', _Descripcion, '%'))
		  AND 	(_Name        IS NULL OR a.Name LIKE CONCAT('%', _Name, '%'));
	END IF;

	-- CALL amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_READ(null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_LIST(
	IN _Option      TINYINT,
	IN _Id          INT,
	IN _Descripcion VARCHAR(50),
	IN _Name        VARCHAR(50)
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id FacturaGlobalDetalleTaxesId, a.Name FacturaGlobalDetalleTaxesName
		FROM 	FacturaGlobalDetalleTaxes a
		WHERE 	(_Id          IS NULL OR a.Id = _Id)
		  AND 	(_Descripcion IS NULL OR a.Descripcion LIKE CONCAT('%', _Descripcion, '%'))
		  AND 	(_Name        IS NULL OR a.Name LIKE CONCAT('%', _Name, '%'));
	END IF;

	-- CALL amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_LIST(null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_CREATE(
	IN _Option                 TINYINT,
	IN _Descripcion            VARCHAR(50),
	IN _FacturaGlobalDetalleId INT,
	IN _Name                   VARCHAR(50),
	IN _Base                   FLOAT,
	IN _Rate                   FLOAT,
	IN _IsRetention            TINYINT,
	IN _Total                  FLOAT
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
			INSERT INTO FacturaGlobalDetalleTaxes (Descripcion, FacturaGlobalDetalleId, Name, Base, Rate,
								IsRetention, Total)
							VALUES (_Descripcion, _FacturaGlobalDetalleId, _Name, _Base, _Rate,
								_IsRetention, _Total);

			SET _Message = CONCAT(ROW_COUNT(), ' record inserted');
		SET _InsertedId = LAST_INSERT_ID();
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, @InsertedId Id;
	-- CALL amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_CREATE(null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_UPDATE(
	IN _Option                 TINYINT,
	IN _Id                     INT,
	IN _Descripcion            VARCHAR(50),
	IN _FacturaGlobalDetalleId INT,
	IN _Name                   VARCHAR(50),
	IN _Base                   FLOAT,
	IN _Rate                   FLOAT,
	IN _IsRetention            TINYINT,
	IN _Total                  FLOAT
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
			IF NOT EXISTS(SELECT 1 FROM FacturaGlobalDetalleTaxes WHERE Id = _Id)
			THEN
				SET _ErrorId = 10;
				SET _Message = 'Record not found';
			END IF;
		END IF;

		IF _ErrorId = 0
		THEN
			UPDATE  FacturaGlobalDetalleTaxes
			SET 	Descripcion            = _Descripcion,
					FacturaGlobalDetalleId = _FacturaGlobalDetalleId,
					Name                   = _Name,
					Base                   = _Base,
					Rate                   = _Rate,
					IsRetention            = _IsRetention,
					Total                  = _Total
			WHERE 	Id = _Id;

			SET _Message = CONCAT(ROW_COUNT(), ' record updated');
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_UPDATE(null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_ENABLE(
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
		IF NOT EXISTS(SELECT 1 FROM FacturaGlobalDetalleTaxes WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM FacturaGlobalDetalleTaxes WHERE Id = _Id AND Active = 1)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already enabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	FacturaGlobalDetalleTaxes
		SET		
		WHERE	Active = 0
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record enabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_ENABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_DISABLE(
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
		IF NOT EXISTS(SELECT 1 FROM FacturaGlobalDetalleTaxes WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM FacturaGlobalDetalleTaxes WHERE Id = _Id AND Active = 0)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already disabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	FacturaGlobalDetalleTaxes
		SET		
		WHERE	Active = 1
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record disabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_DISABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_DELETE(
	IN _Id INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM FacturaGlobalDetalleTaxes WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		DELETE
		FROM   FacturaGlobalDetalleTaxes
		WHERE  Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record deleted');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.FacturaGlobalDetalleTaxes_DELETE(null);
END$$
DELIMITER ;


