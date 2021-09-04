USE amcoderc_dev_Jaks;

/*
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobal_READ;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobal_LIST;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobal_CREATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobal_UPDATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobal_ENABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobal_DISABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.FacturaGlobal_DELETE;
*/

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobal_READ(
	IN _Option                 TINYINT,
	IN _Id                     INT,
	IN _Descripcion            VARCHAR(50),
	IN _Currency               VARCHAR(50),
	IN _PaymentConditions      VARCHAR(50),
	IN _OrderNumber            VARCHAR(50),
	IN _Folio                  VARCHAR(50),
	IN _CfdiType               VARCHAR(50),
	IN _PaymentForm            VARCHAR(50),
	IN _PaymentMethod          VARCHAR(50),
	IN _Receiver__Rfc          VARCHAR(50),
	IN _Receiver__Name         VARCHAR(50),
	IN _Receiver__CfdiUse      VARCHAR(50),
	IN _ExpeditionPlaceSandbox VARCHAR(50),
	IN _XmlInternalId          VARCHAR(50),
	IN _PdfInternalId          VARCHAR(50),
	IN _NombreArchivoSandbox   VARCHAR(200),
	IN _NombreArchivo          VARCHAR(200)
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id, a.Descripcion, a.EmpresaId, a.PeriodoId, a.FechaInicio, 
			a.FechaFin, a.CompletadaSandbox, a.Completada, a.Currency, a.ExpeditionPlace, 
			a.PaymentConditions, a.OrderNumber, a.Folio, a.CfdiType, a.PaymentForm, 
			a.PaymentMethod, a.Receiver__Rfc, a.Receiver__Name, a.Receiver__CfdiUse, a.Cancelada, 
			a.Intento, a.UsuarioCreacionId, a.ExpeditionPlaceSandbox, a.XmlInternalId, a.PdfInternalId, 
			a.NombreArchivoSandbox, a.NombreArchivo, a.UsuarioAprobadorId
		FROM 	FacturaGlobal a
		WHERE 	(_Id                     IS NULL OR a.Id = _Id)
		  AND 	(_Descripcion            IS NULL OR a.Descripcion LIKE CONCAT('%', _Descripcion, '%'))
		  AND 	(_Currency               IS NULL OR a.Currency LIKE CONCAT('%', _Currency, '%'))
		  AND 	(_PaymentConditions      IS NULL OR a.PaymentConditions LIKE CONCAT('%', _PaymentConditions, '%'))
		  AND 	(_OrderNumber            IS NULL OR a.OrderNumber LIKE CONCAT('%', _OrderNumber, '%'))
		  AND 	(_Folio                  IS NULL OR a.Folio LIKE CONCAT('%', _Folio, '%'))
		  AND 	(_CfdiType               IS NULL OR a.CfdiType LIKE CONCAT('%', _CfdiType, '%'))
		  AND 	(_PaymentForm            IS NULL OR a.PaymentForm LIKE CONCAT('%', _PaymentForm, '%'))
		  AND 	(_PaymentMethod          IS NULL OR a.PaymentMethod LIKE CONCAT('%', _PaymentMethod, '%'))
		  AND 	(_Receiver__Rfc          IS NULL OR a.Receiver__Rfc LIKE CONCAT('%', _Receiver__Rfc, '%'))
		  AND 	(_Receiver__Name         IS NULL OR a.Receiver__Name LIKE CONCAT('%', _Receiver__Name, '%'))
		  AND 	(_Receiver__CfdiUse      IS NULL OR a.Receiver__CfdiUse LIKE CONCAT('%', _Receiver__CfdiUse, '%'))
		  AND 	(_ExpeditionPlaceSandbox IS NULL OR a.ExpeditionPlaceSandbox LIKE CONCAT('%', _ExpeditionPlaceSandbox, '%'))
		  AND 	(_XmlInternalId          IS NULL OR a.XmlInternalId LIKE CONCAT('%', _XmlInternalId, '%'))
		  AND 	(_PdfInternalId          IS NULL OR a.PdfInternalId LIKE CONCAT('%', _PdfInternalId, '%'))
		  AND 	(_NombreArchivoSandbox   IS NULL OR a.NombreArchivoSandbox LIKE CONCAT('%', _NombreArchivoSandbox, '%'))
		  AND 	(_NombreArchivo          IS NULL OR a.NombreArchivo LIKE CONCAT('%', _NombreArchivo, '%'));
	END IF;

	-- CALL amcoderc_dev_Jaks.FacturaGlobal_READ(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobal_LIST(
	IN _Option                 TINYINT,
	IN _Id                     INT,
	IN _Descripcion            VARCHAR(50),
	IN _Currency               VARCHAR(50),
	IN _PaymentConditions      VARCHAR(50),
	IN _OrderNumber            VARCHAR(50),
	IN _Folio                  VARCHAR(50),
	IN _CfdiType               VARCHAR(50),
	IN _PaymentForm            VARCHAR(50),
	IN _PaymentMethod          VARCHAR(50),
	IN _Receiver__Rfc          VARCHAR(50),
	IN _Receiver__Name         VARCHAR(50),
	IN _Receiver__CfdiUse      VARCHAR(50),
	IN _ExpeditionPlaceSandbox VARCHAR(50),
	IN _XmlInternalId          VARCHAR(50),
	IN _PdfInternalId          VARCHAR(50),
	IN _NombreArchivoSandbox   VARCHAR(200),
	IN _NombreArchivo          VARCHAR(200)
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id FacturaGlobalId, a.Id FacturaGlobalName
		FROM 	FacturaGlobal a
		WHERE 	(_Id                     IS NULL OR a.Id = _Id)
		  AND 	(_Descripcion            IS NULL OR a.Descripcion LIKE CONCAT('%', _Descripcion, '%'))
		  AND 	(_Currency               IS NULL OR a.Currency LIKE CONCAT('%', _Currency, '%'))
		  AND 	(_PaymentConditions      IS NULL OR a.PaymentConditions LIKE CONCAT('%', _PaymentConditions, '%'))
		  AND 	(_OrderNumber            IS NULL OR a.OrderNumber LIKE CONCAT('%', _OrderNumber, '%'))
		  AND 	(_Folio                  IS NULL OR a.Folio LIKE CONCAT('%', _Folio, '%'))
		  AND 	(_CfdiType               IS NULL OR a.CfdiType LIKE CONCAT('%', _CfdiType, '%'))
		  AND 	(_PaymentForm            IS NULL OR a.PaymentForm LIKE CONCAT('%', _PaymentForm, '%'))
		  AND 	(_PaymentMethod          IS NULL OR a.PaymentMethod LIKE CONCAT('%', _PaymentMethod, '%'))
		  AND 	(_Receiver__Rfc          IS NULL OR a.Receiver__Rfc LIKE CONCAT('%', _Receiver__Rfc, '%'))
		  AND 	(_Receiver__Name         IS NULL OR a.Receiver__Name LIKE CONCAT('%', _Receiver__Name, '%'))
		  AND 	(_Receiver__CfdiUse      IS NULL OR a.Receiver__CfdiUse LIKE CONCAT('%', _Receiver__CfdiUse, '%'))
		  AND 	(_ExpeditionPlaceSandbox IS NULL OR a.ExpeditionPlaceSandbox LIKE CONCAT('%', _ExpeditionPlaceSandbox, '%'))
		  AND 	(_XmlInternalId          IS NULL OR a.XmlInternalId LIKE CONCAT('%', _XmlInternalId, '%'))
		  AND 	(_PdfInternalId          IS NULL OR a.PdfInternalId LIKE CONCAT('%', _PdfInternalId, '%'))
		  AND 	(_NombreArchivoSandbox   IS NULL OR a.NombreArchivoSandbox LIKE CONCAT('%', _NombreArchivoSandbox, '%'))
		  AND 	(_NombreArchivo          IS NULL OR a.NombreArchivo LIKE CONCAT('%', _NombreArchivo, '%'));
	END IF;

	-- CALL amcoderc_dev_Jaks.FacturaGlobal_LIST(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobal_CREATE(
	IN _Option                 TINYINT,
	IN _Descripcion            VARCHAR(50),
	IN _EmpresaId              INT,
	IN _PeriodoId              INT,
	IN _FechaInicio            DATE,
	IN _FechaFin               DATE,
	IN _CompletadaSandbox      TINYINT,
	IN _Completada             TINYINT,
	IN _Currency               VARCHAR(50),
	IN _ExpeditionPlace        INT,
	IN _PaymentConditions      VARCHAR(50),
	IN _OrderNumber            VARCHAR(50),
	IN _Folio                  VARCHAR(50),
	IN _CfdiType               VARCHAR(50),
	IN _PaymentForm            VARCHAR(50),
	IN _PaymentMethod          VARCHAR(50),
	IN _Receiver__Rfc          VARCHAR(50),
	IN _Receiver__Name         VARCHAR(50),
	IN _Receiver__CfdiUse      VARCHAR(50),
	IN _Cancelada              TINYINT,
	IN _Intento                INT,
	IN _UsuarioCreacionId      INT,
	IN _ExpeditionPlaceSandbox VARCHAR(50),
	IN _XmlInternalId          VARCHAR(50),
	IN _PdfInternalId          VARCHAR(50),
	IN _NombreArchivoSandbox   VARCHAR(200),
	IN _NombreArchivo          VARCHAR(200),
	IN _UsuarioAprobadorId     INT
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
			INSERT INTO FacturaGlobal (Descripcion, EmpresaId, PeriodoId, FechaInicio, FechaFin,
								CompletadaSandbox, Completada, Currency, ExpeditionPlace, PaymentConditions,
								OrderNumber, Folio, CfdiType, PaymentForm, PaymentMethod,
								Receiver__Rfc, Receiver__Name, Receiver__CfdiUse, Cancelada, Intento,
								UsuarioCreacionId, ExpeditionPlaceSandbox, XmlInternalId, PdfInternalId, NombreArchivoSandbox,
								NombreArchivo, UsuarioAprobadorId)
							VALUES (_Descripcion, _EmpresaId, _PeriodoId, _FechaInicio, _FechaFin,
								_CompletadaSandbox, _Completada, _Currency, _ExpeditionPlace, _PaymentConditions,
								_OrderNumber, _Folio, _CfdiType, _PaymentForm, _PaymentMethod,
								_Receiver__Rfc, _Receiver__Name, _Receiver__CfdiUse, _Cancelada, _Intento,
								_UsuarioCreacionId, _ExpeditionPlaceSandbox, _XmlInternalId, _PdfInternalId, _NombreArchivoSandbox,
								_NombreArchivo, _UsuarioAprobadorId);

			SET _Message = CONCAT(ROW_COUNT(), ' record inserted');
		SET _InsertedId = LAST_INSERT_ID();
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, @InsertedId Id;
	-- CALL amcoderc_dev_Jaks.FacturaGlobal_CREATE(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobal_UPDATE(
	IN _Option                 TINYINT,
	IN _Id                     INT,
	IN _Descripcion            VARCHAR(50),
	IN _EmpresaId              INT,
	IN _PeriodoId              INT,
	IN _FechaInicio            DATE,
	IN _FechaFin               DATE,
	IN _CompletadaSandbox      TINYINT,
	IN _Completada             TINYINT,
	IN _Currency               VARCHAR(50),
	IN _ExpeditionPlace        INT,
	IN _PaymentConditions      VARCHAR(50),
	IN _OrderNumber            VARCHAR(50),
	IN _Folio                  VARCHAR(50),
	IN _CfdiType               VARCHAR(50),
	IN _PaymentForm            VARCHAR(50),
	IN _PaymentMethod          VARCHAR(50),
	IN _Receiver__Rfc          VARCHAR(50),
	IN _Receiver__Name         VARCHAR(50),
	IN _Receiver__CfdiUse      VARCHAR(50),
	IN _Cancelada              TINYINT,
	IN _Intento                INT,
	IN _UsuarioCreacionId      INT,
	IN _ExpeditionPlaceSandbox VARCHAR(50),
	IN _XmlInternalId          VARCHAR(50),
	IN _PdfInternalId          VARCHAR(50),
	IN _NombreArchivoSandbox   VARCHAR(200),
	IN _NombreArchivo          VARCHAR(200),
	IN _UsuarioAprobadorId     INT
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
			IF NOT EXISTS(SELECT 1 FROM FacturaGlobal WHERE Id = _Id)
			THEN
				SET _ErrorId = 10;
				SET _Message = 'Record not found';
			END IF;
		END IF;

		IF _ErrorId = 0
		THEN
			UPDATE  FacturaGlobal
			SET 	Descripcion            = _Descripcion,
					EmpresaId              = _EmpresaId,
					PeriodoId              = _PeriodoId,
					FechaInicio            = _FechaInicio,
					FechaFin               = _FechaFin,
					CompletadaSandbox      = _CompletadaSandbox,
					Completada             = _Completada,
					Currency               = _Currency,
					ExpeditionPlace        = _ExpeditionPlace,
					PaymentConditions      = _PaymentConditions,
					OrderNumber            = _OrderNumber,
					Folio                  = _Folio,
					CfdiType               = _CfdiType,
					PaymentForm            = _PaymentForm,
					PaymentMethod          = _PaymentMethod,
					Receiver__Rfc          = _Receiver__Rfc,
					Receiver__Name         = _Receiver__Name,
					Receiver__CfdiUse      = _Receiver__CfdiUse,
					Cancelada              = _Cancelada,
					Intento                = _Intento,
					UsuarioCreacionId      = _UsuarioCreacionId,
					ExpeditionPlaceSandbox = _ExpeditionPlaceSandbox,
					XmlInternalId          = _XmlInternalId,
					PdfInternalId          = _PdfInternalId,
					NombreArchivoSandbox   = _NombreArchivoSandbox,
					NombreArchivo          = _NombreArchivo,
					UsuarioAprobadorId     = _UsuarioAprobadorId
			WHERE 	Id = _Id;

			SET _Message = CONCAT(ROW_COUNT(), ' record updated');
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.FacturaGlobal_UPDATE(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobal_ENABLE(
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
		IF NOT EXISTS(SELECT 1 FROM FacturaGlobal WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM FacturaGlobal WHERE Id = _Id AND Active = 1)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already enabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	FacturaGlobal
		SET		
		WHERE	Active = 0
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record enabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.FacturaGlobal_ENABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobal_DISABLE(
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
		IF NOT EXISTS(SELECT 1 FROM FacturaGlobal WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM FacturaGlobal WHERE Id = _Id AND Active = 0)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already disabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	FacturaGlobal
		SET		
		WHERE	Active = 1
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record disabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.FacturaGlobal_DISABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.FacturaGlobal_DELETE(
	IN _Id INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM FacturaGlobal WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		DELETE
		FROM   FacturaGlobal
		WHERE  Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record deleted');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.FacturaGlobal_DELETE(null);
END$$
DELIMITER ;


