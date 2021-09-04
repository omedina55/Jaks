USE amcoderc_dev_Jaks;

/*
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalDetalle_READ;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalDetalle_LIST;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalDetalle_CREATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalDetalle_UPDATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalDetalle_ENABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalDetalle_DISABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobalDetalle_DELETE;
*/

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalDetalle_READ(
	IN _Option               TINYINT,
	IN _Id                   INT,
	IN _Descripcion          VARCHAR(500),
	IN _ProductCode          VARCHAR(50),
	IN _IdentificationNumber VARCHAR(50),
	IN _Description          VARCHAR(50),
	IN _UnitCode             VARCHAR(50),
	IN _Unit                 VARCHAR(500)
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id, a.Descripcion, a.FacturaGlobalId, a.ProductCode, a.IdentificationNumber, 
			a.Description, a.UnitCode, a.UnitPrice, a.Unit, a.Quantity, 
			a.Subtotal, a.Total, a.Discount, a.DiscountVal
		FROM 	FacturaGlobalDetalle a
		WHERE 	(_Id                   IS NULL OR a.Id = _Id)
		  AND 	(_Descripcion          IS NULL OR a.Descripcion LIKE CONCAT('%', _Descripcion, '%'))
		  AND 	(_ProductCode          IS NULL OR a.ProductCode LIKE CONCAT('%', _ProductCode, '%'))
		  AND 	(_IdentificationNumber IS NULL OR a.IdentificationNumber LIKE CONCAT('%', _IdentificationNumber, '%'))
		  AND 	(_Description          IS NULL OR a.Description LIKE CONCAT('%', _Description, '%'))
		  AND 	(_UnitCode             IS NULL OR a.UnitCode LIKE CONCAT('%', _UnitCode, '%'))
		  AND 	(_Unit                 IS NULL OR a.Unit LIKE CONCAT('%', _Unit, '%'));
	END IF;

	-- CALL amcoderc_dev_Jaks.FacturaGlobalDetalle_READ(null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalDetalle_LIST(
	IN _Option               TINYINT,
	IN _Id                   INT,
	IN _Descripcion          VARCHAR(500),
	IN _ProductCode          VARCHAR(50),
	IN _IdentificationNumber VARCHAR(50),
	IN _Description          VARCHAR(50),
	IN _UnitCode             VARCHAR(50),
	IN _Unit                 VARCHAR(500)
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id FacturaGlobalDetalleId, a.Id FacturaGlobalDetalleName
		FROM 	FacturaGlobalDetalle a
		WHERE 	(_Id                   IS NULL OR a.Id = _Id)
		  AND 	(_Descripcion          IS NULL OR a.Descripcion LIKE CONCAT('%', _Descripcion, '%'))
		  AND 	(_ProductCode          IS NULL OR a.ProductCode LIKE CONCAT('%', _ProductCode, '%'))
		  AND 	(_IdentificationNumber IS NULL OR a.IdentificationNumber LIKE CONCAT('%', _IdentificationNumber, '%'))
		  AND 	(_Description          IS NULL OR a.Description LIKE CONCAT('%', _Description, '%'))
		  AND 	(_UnitCode             IS NULL OR a.UnitCode LIKE CONCAT('%', _UnitCode, '%'))
		  AND 	(_Unit                 IS NULL OR a.Unit LIKE CONCAT('%', _Unit, '%'));
	END IF;

	-- CALL amcoderc_dev_Jaks.FacturaGlobalDetalle_LIST(null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalDetalle_CREATE(
	IN _Option               TINYINT,
	IN _Descripcion          VARCHAR(500),
	IN _FacturaGlobalId      INT,
	IN _ProductCode          VARCHAR(50),
	IN _IdentificationNumber VARCHAR(50),
	IN _Description          VARCHAR(50),
	IN _UnitCode             VARCHAR(50),
	IN _UnitPrice            FLOAT,
	IN _Unit                 VARCHAR(500),
	IN _Quantity             INT,
	IN _Subtotal             FLOAT,
	IN _Total                FLOAT,
	IN _Discount             FLOAT,
	IN _DiscountVal          FLOAT
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
			INSERT INTO FacturaGlobalDetalle (Descripcion, FacturaGlobalId, ProductCode, IdentificationNumber, Description,
								UnitCode, UnitPrice, Unit, Quantity, Subtotal,
								Total, Discount, DiscountVal)
							VALUES (_Descripcion, _FacturaGlobalId, _ProductCode, _IdentificationNumber, _Description,
								_UnitCode, _UnitPrice, _Unit, _Quantity, _Subtotal,
								_Total, _Discount, _DiscountVal);

			SET _Message = CONCAT(ROW_COUNT(), ' record inserted');
		SET _InsertedId = LAST_INSERT_ID();
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, @InsertedId Id;
	-- CALL amcoderc_dev_Jaks.FacturaGlobalDetalle_CREATE(null, null, null, null, null, null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalDetalle_UPDATE(
	IN _Option               TINYINT,
	IN _Id                   INT,
	IN _Descripcion          VARCHAR(500),
	IN _FacturaGlobalId      INT,
	IN _ProductCode          VARCHAR(50),
	IN _IdentificationNumber VARCHAR(50),
	IN _Description          VARCHAR(50),
	IN _UnitCode             VARCHAR(50),
	IN _UnitPrice            FLOAT,
	IN _Unit                 VARCHAR(500),
	IN _Quantity             INT,
	IN _Subtotal             FLOAT,
	IN _Total                FLOAT,
	IN _Discount             FLOAT,
	IN _DiscountVal          FLOAT
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
			IF NOT EXISTS(SELECT 1 FROM FacturaGlobalDetalle WHERE Id = _Id)
			THEN
				SET _ErrorId = 10;
				SET _Message = 'Record not found';
			END IF;
		END IF;

		IF _ErrorId = 0
		THEN
			UPDATE  FacturaGlobalDetalle
			SET 	Descripcion          = _Descripcion,
					FacturaGlobalId      = _FacturaGlobalId,
					ProductCode          = _ProductCode,
					IdentificationNumber = _IdentificationNumber,
					Description          = _Description,
					UnitCode             = _UnitCode,
					UnitPrice            = _UnitPrice,
					Unit                 = _Unit,
					Quantity             = _Quantity,
					Subtotal             = _Subtotal,
					Total                = _Total,
					Discount             = _Discount,
					DiscountVal          = _DiscountVal
			WHERE 	Id = _Id;

			SET _Message = CONCAT(ROW_COUNT(), ' record updated');
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.FacturaGlobalDetalle_UPDATE(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalDetalle_ENABLE(
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
		IF NOT EXISTS(SELECT 1 FROM FacturaGlobalDetalle WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM FacturaGlobalDetalle WHERE Id = _Id AND Active = 1)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already enabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	FacturaGlobalDetalle
		SET		
		WHERE	Active = 0
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record enabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.FacturaGlobalDetalle_ENABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalDetalle_DISABLE(
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
		IF NOT EXISTS(SELECT 1 FROM FacturaGlobalDetalle WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM FacturaGlobalDetalle WHERE Id = _Id AND Active = 0)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already disabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	FacturaGlobalDetalle
		SET		
		WHERE	Active = 1
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record disabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.FacturaGlobalDetalle_DISABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobalDetalle_DELETE(
	IN _Id INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM FacturaGlobalDetalle WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		DELETE
		FROM   FacturaGlobalDetalle
		WHERE  Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record deleted');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.FacturaGlobalDetalle_DELETE(null);
END$$
DELIMITER ;


