USE amcoderc_dev_Jaks;

/*
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.NsConsulta_READ;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.NsConsulta_LIST;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.NsConsulta_CREATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.NsConsulta_UPDATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.NsConsulta_ENABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.NsConsulta_DISABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.NsConsulta_DELETE;
*/

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.NsConsulta_READ(
	IN _Option              TINYINT,
	IN _Id                  INT,
	IN _TranId              VARCHAR(50),
	IN _CfdiTimbrada        VARCHAR(50),
	IN _TransactionType     VARCHAR(50),
	IN _TicketCaja          VARCHAR(50),
	IN _RelatedTranId       VARCHAR(50),
	IN _Name                VARCHAR(500),
	IN _Status              VARCHAR(100),
	IN _SubtotalFormato     VARCHAR(200),
	IN _AccountNumber       VARCHAR(50),
	IN _TypeName            VARCHAR(500),
	IN _AmountTaxable       VARCHAR(500),
	IN _ItemTypeName        VARCHAR(500),
	IN _Rate                VARCHAR(50),
	IN _EntityName          VARCHAR(500),
	IN _EntityFullName      VARCHAR(500),
	IN _DescuentoPorAplicar VARCHAR(500),
	IN _OtherRefNum         VARCHAR(50)
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id, a.FacturaGlobalId, a.TranDate, a.TranId, a.EntityId, 
			a.CfdiTimbrada, a.TransactionType, a.TicketCaja, a.RelatedTranId, a.Name, 
			a.TransactionId, a.Status, a.TransactionOrder, a.AmountForeign, a.SubtotalFormato, 
			a.AccounId, a.AccountNumber, a.TypeName, a.AmountTaxable, a.TaxItemId, 
			a.ItemTypeName, a.Rate, a.EntityName, a.EntityFullName, a.DescuentoPorAplicar, 
			a.OtherRefNum
		FROM 	NsConsulta a
		WHERE 	(_Id                  IS NULL OR a.Id = _Id)
		  AND 	(_TranId              IS NULL OR a.TranId LIKE CONCAT('%', _TranId, '%'))
		  AND 	(_CfdiTimbrada        IS NULL OR a.CfdiTimbrada LIKE CONCAT('%', _CfdiTimbrada, '%'))
		  AND 	(_TransactionType     IS NULL OR a.TransactionType LIKE CONCAT('%', _TransactionType, '%'))
		  AND 	(_TicketCaja          IS NULL OR a.TicketCaja LIKE CONCAT('%', _TicketCaja, '%'))
		  AND 	(_RelatedTranId       IS NULL OR a.RelatedTranId LIKE CONCAT('%', _RelatedTranId, '%'))
		  AND 	(_Name                IS NULL OR a.Name LIKE CONCAT('%', _Name, '%'))
		  AND 	(_Status              IS NULL OR a.Status LIKE CONCAT('%', _Status, '%'))
		  AND 	(_SubtotalFormato     IS NULL OR a.SubtotalFormato LIKE CONCAT('%', _SubtotalFormato, '%'))
		  AND 	(_AccountNumber       IS NULL OR a.AccountNumber LIKE CONCAT('%', _AccountNumber, '%'))
		  AND 	(_TypeName            IS NULL OR a.TypeName LIKE CONCAT('%', _TypeName, '%'))
		  AND 	(_AmountTaxable       IS NULL OR a.AmountTaxable LIKE CONCAT('%', _AmountTaxable, '%'))
		  AND 	(_ItemTypeName        IS NULL OR a.ItemTypeName LIKE CONCAT('%', _ItemTypeName, '%'))
		  AND 	(_Rate                IS NULL OR a.Rate LIKE CONCAT('%', _Rate, '%'))
		  AND 	(_EntityName          IS NULL OR a.EntityName LIKE CONCAT('%', _EntityName, '%'))
		  AND 	(_EntityFullName      IS NULL OR a.EntityFullName LIKE CONCAT('%', _EntityFullName, '%'))
		  AND 	(_DescuentoPorAplicar IS NULL OR a.DescuentoPorAplicar LIKE CONCAT('%', _DescuentoPorAplicar, '%'))
		  AND 	(_OtherRefNum         IS NULL OR a.OtherRefNum LIKE CONCAT('%', _OtherRefNum, '%'));
	END IF;

	-- CALL amcoderc_dev_Jaks.NsConsulta_READ(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.NsConsulta_LIST(
	IN _Option              TINYINT,
	IN _Id                  INT,
	IN _TranId              VARCHAR(50),
	IN _CfdiTimbrada        VARCHAR(50),
	IN _TransactionType     VARCHAR(50),
	IN _TicketCaja          VARCHAR(50),
	IN _RelatedTranId       VARCHAR(50),
	IN _Name                VARCHAR(500),
	IN _Status              VARCHAR(100),
	IN _SubtotalFormato     VARCHAR(200),
	IN _AccountNumber       VARCHAR(50),
	IN _TypeName            VARCHAR(500),
	IN _AmountTaxable       VARCHAR(500),
	IN _ItemTypeName        VARCHAR(500),
	IN _Rate                VARCHAR(50),
	IN _EntityName          VARCHAR(500),
	IN _EntityFullName      VARCHAR(500),
	IN _DescuentoPorAplicar VARCHAR(500),
	IN _OtherRefNum         VARCHAR(50)
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id NsConsultaId, a.Name NsConsultaName
		FROM 	NsConsulta a
		WHERE 	(_Id                  IS NULL OR a.Id = _Id)
		  AND 	(_TranId              IS NULL OR a.TranId LIKE CONCAT('%', _TranId, '%'))
		  AND 	(_CfdiTimbrada        IS NULL OR a.CfdiTimbrada LIKE CONCAT('%', _CfdiTimbrada, '%'))
		  AND 	(_TransactionType     IS NULL OR a.TransactionType LIKE CONCAT('%', _TransactionType, '%'))
		  AND 	(_TicketCaja          IS NULL OR a.TicketCaja LIKE CONCAT('%', _TicketCaja, '%'))
		  AND 	(_RelatedTranId       IS NULL OR a.RelatedTranId LIKE CONCAT('%', _RelatedTranId, '%'))
		  AND 	(_Name                IS NULL OR a.Name LIKE CONCAT('%', _Name, '%'))
		  AND 	(_Status              IS NULL OR a.Status LIKE CONCAT('%', _Status, '%'))
		  AND 	(_SubtotalFormato     IS NULL OR a.SubtotalFormato LIKE CONCAT('%', _SubtotalFormato, '%'))
		  AND 	(_AccountNumber       IS NULL OR a.AccountNumber LIKE CONCAT('%', _AccountNumber, '%'))
		  AND 	(_TypeName            IS NULL OR a.TypeName LIKE CONCAT('%', _TypeName, '%'))
		  AND 	(_AmountTaxable       IS NULL OR a.AmountTaxable LIKE CONCAT('%', _AmountTaxable, '%'))
		  AND 	(_ItemTypeName        IS NULL OR a.ItemTypeName LIKE CONCAT('%', _ItemTypeName, '%'))
		  AND 	(_Rate                IS NULL OR a.Rate LIKE CONCAT('%', _Rate, '%'))
		  AND 	(_EntityName          IS NULL OR a.EntityName LIKE CONCAT('%', _EntityName, '%'))
		  AND 	(_EntityFullName      IS NULL OR a.EntityFullName LIKE CONCAT('%', _EntityFullName, '%'))
		  AND 	(_DescuentoPorAplicar IS NULL OR a.DescuentoPorAplicar LIKE CONCAT('%', _DescuentoPorAplicar, '%'))
		  AND 	(_OtherRefNum         IS NULL OR a.OtherRefNum LIKE CONCAT('%', _OtherRefNum, '%'));
	END IF;

	-- CALL amcoderc_dev_Jaks.NsConsulta_LIST(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.NsConsulta_CREATE(
	IN _Option              TINYINT,
	IN _FacturaGlobalId     INT,
	IN _TranDate            DATETIME,
	IN _TranId              VARCHAR(50),
	IN _EntityId            INT,
	IN _CfdiTimbrada        VARCHAR(50),
	IN _TransactionType     VARCHAR(50),
	IN _TicketCaja          VARCHAR(50),
	IN _RelatedTranId       VARCHAR(50),
	IN _Name                VARCHAR(500),
	IN _TransactionId       INT,
	IN _Status              VARCHAR(100),
	IN _TransactionOrder    INT,
	IN _AmountForeign       FLOAT,
	IN _SubtotalFormato     VARCHAR(200),
	IN _AccounId            INT,
	IN _AccountNumber       VARCHAR(50),
	IN _TypeName            VARCHAR(500),
	IN _AmountTaxable       VARCHAR(500),
	IN _TaxItemId           INT,
	IN _ItemTypeName        VARCHAR(500),
	IN _Rate                VARCHAR(50),
	IN _EntityName          VARCHAR(500),
	IN _EntityFullName      VARCHAR(500),
	IN _DescuentoPorAplicar VARCHAR(500),
	IN _OtherRefNum         VARCHAR(50)
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
			INSERT INTO NsConsulta (FacturaGlobalId, TranDate, TranId, EntityId, CfdiTimbrada,
								TransactionType, TicketCaja, RelatedTranId, Name, TransactionId,
								Status, TransactionOrder, AmountForeign, SubtotalFormato, AccounId,
								AccountNumber, TypeName, AmountTaxable, TaxItemId, ItemTypeName,
								Rate, EntityName, EntityFullName, DescuentoPorAplicar, OtherRefNum)
							VALUES (_FacturaGlobalId, _TranDate, _TranId, _EntityId, _CfdiTimbrada,
								_TransactionType, _TicketCaja, _RelatedTranId, _Name, _TransactionId,
								_Status, _TransactionOrder, _AmountForeign, _SubtotalFormato, _AccounId,
								_AccountNumber, _TypeName, _AmountTaxable, _TaxItemId, _ItemTypeName,
								_Rate, _EntityName, _EntityFullName, _DescuentoPorAplicar, _OtherRefNum);

			SET _Message = CONCAT(ROW_COUNT(), ' record inserted');
		SET _InsertedId = LAST_INSERT_ID();
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, @InsertedId Id;
	-- CALL amcoderc_dev_Jaks.NsConsulta_CREATE(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.NsConsulta_UPDATE(
	IN _Option              TINYINT,
	IN _Id                  INT,
	IN _FacturaGlobalId     INT,
	IN _TranDate            DATETIME,
	IN _TranId              VARCHAR(50),
	IN _EntityId            INT,
	IN _CfdiTimbrada        VARCHAR(50),
	IN _TransactionType     VARCHAR(50),
	IN _TicketCaja          VARCHAR(50),
	IN _RelatedTranId       VARCHAR(50),
	IN _Name                VARCHAR(500),
	IN _TransactionId       INT,
	IN _Status              VARCHAR(100),
	IN _TransactionOrder    INT,
	IN _AmountForeign       FLOAT,
	IN _SubtotalFormato     VARCHAR(200),
	IN _AccounId            INT,
	IN _AccountNumber       VARCHAR(50),
	IN _TypeName            VARCHAR(500),
	IN _AmountTaxable       VARCHAR(500),
	IN _TaxItemId           INT,
	IN _ItemTypeName        VARCHAR(500),
	IN _Rate                VARCHAR(50),
	IN _EntityName          VARCHAR(500),
	IN _EntityFullName      VARCHAR(500),
	IN _DescuentoPorAplicar VARCHAR(500),
	IN _OtherRefNum         VARCHAR(50)
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
			IF NOT EXISTS(SELECT 1 FROM NsConsulta WHERE Id = _Id)
			THEN
				SET _ErrorId = 10;
				SET _Message = 'Record not found';
			END IF;
		END IF;

		IF _ErrorId = 0
		THEN
			UPDATE  NsConsulta
			SET 	FacturaGlobalId     = _FacturaGlobalId,
					TranDate            = _TranDate,
					TranId              = _TranId,
					EntityId            = _EntityId,
					CfdiTimbrada        = _CfdiTimbrada,
					TransactionType     = _TransactionType,
					TicketCaja          = _TicketCaja,
					RelatedTranId       = _RelatedTranId,
					Name                = _Name,
					TransactionId       = _TransactionId,
					Status              = _Status,
					TransactionOrder    = _TransactionOrder,
					AmountForeign       = _AmountForeign,
					SubtotalFormato     = _SubtotalFormato,
					AccounId            = _AccounId,
					AccountNumber       = _AccountNumber,
					TypeName            = _TypeName,
					AmountTaxable       = _AmountTaxable,
					TaxItemId           = _TaxItemId,
					ItemTypeName        = _ItemTypeName,
					Rate                = _Rate,
					EntityName          = _EntityName,
					EntityFullName      = _EntityFullName,
					DescuentoPorAplicar = _DescuentoPorAplicar,
					OtherRefNum         = _OtherRefNum
			WHERE 	Id = _Id;

			SET _Message = CONCAT(ROW_COUNT(), ' record updated');
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.NsConsulta_UPDATE(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.NsConsulta_ENABLE(
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
		IF NOT EXISTS(SELECT 1 FROM NsConsulta WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM NsConsulta WHERE Id = _Id AND Active = 1)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already enabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	NsConsulta
		SET		
		WHERE	Active = 0
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record enabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.NsConsulta_ENABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.NsConsulta_DISABLE(
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
		IF NOT EXISTS(SELECT 1 FROM NsConsulta WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM NsConsulta WHERE Id = _Id AND Active = 0)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already disabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	NsConsulta
		SET		
		WHERE	Active = 1
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record disabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.NsConsulta_DISABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.NsConsulta_DELETE(
	IN _Id INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM NsConsulta WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		DELETE
		FROM   NsConsulta
		WHERE  Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record deleted');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.NsConsulta_DELETE(null);
END$$
DELIMITER ;


