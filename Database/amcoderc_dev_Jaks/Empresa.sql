USE amcoderc_dev_Jaks;

/*
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Empresa_READ;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Empresa_LIST;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Empresa_CREATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Empresa_UPDATE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Empresa_ENABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Empresa_DISABLE;
	DROP PROCEDURE IF EXISTS amcoderc_dev_Jaks.Empresa_DELETE;
*/

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Empresa_READ(
	IN _Option                 TINYINT,
	IN _Id                     INT,
	IN _Descripcion            VARCHAR(200),
	IN _RFC                    VARCHAR(20),
	IN _RazonSocial            VARCHAR(200),
	IN _ConstrasenaVUCEM       VARCHAR(200),
	IN _TokenWEBVUCEM          VARCHAR(200),
	IN _Correo                 VARCHAR(100),
	IN _ExpeditionPlaceSandbox VARCHAR(50)
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id, a.Descripcion, a.RFC, a.RazonSocial, a.ConstrasenaVUCEM, 
			a.TokenWEBVUCEM, a.Vigencia, a.Correo, a.UsuarioCreacionId, a.FechaCreacion, 
			a.UsuarioModificacionId, a.FechaModificacion, a.UsuarioBajaId, a.FechaBaja, a.Baja, 
			a.ExpeditionPlace, a.ExpeditionPlaceSandbox
		FROM 	Empresa a
		WHERE 	(_Id                     IS NULL OR a.Id = _Id)
		  AND 	(_Descripcion            IS NULL OR a.Descripcion LIKE CONCAT('%', _Descripcion, '%'))
		  AND 	(_RFC                    IS NULL OR a.RFC LIKE CONCAT('%', _RFC, '%'))
		  AND 	(_RazonSocial            IS NULL OR a.RazonSocial LIKE CONCAT('%', _RazonSocial, '%'))
		  AND 	(_ConstrasenaVUCEM       IS NULL OR a.ConstrasenaVUCEM LIKE CONCAT('%', _ConstrasenaVUCEM, '%'))
		  AND 	(_TokenWEBVUCEM          IS NULL OR a.TokenWEBVUCEM LIKE CONCAT('%', _TokenWEBVUCEM, '%'))
		  AND 	(_Correo                 IS NULL OR a.Correo LIKE CONCAT('%', _Correo, '%'))
		  AND 	(_ExpeditionPlaceSandbox IS NULL OR a.ExpeditionPlaceSandbox LIKE CONCAT('%', _ExpeditionPlaceSandbox, '%'));
	END IF;

	-- CALL amcoderc_dev_Jaks.Empresa_READ(null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Empresa_LIST(
	IN _Option                 TINYINT,
	IN _Id                     INT,
	IN _Descripcion            VARCHAR(200),
	IN _RFC                    VARCHAR(20),
	IN _RazonSocial            VARCHAR(200),
	IN _ConstrasenaVUCEM       VARCHAR(200),
	IN _TokenWEBVUCEM          VARCHAR(200),
	IN _Correo                 VARCHAR(100),
	IN _ExpeditionPlaceSandbox VARCHAR(50)
)
BEGIN

	IF _Option = 1
	THEN
		SELECT 	a.Id EmpresaId, a.Id EmpresaName
		FROM 	Empresa a
		WHERE 	(_Id                     IS NULL OR a.Id = _Id)
		  AND 	(_Descripcion            IS NULL OR a.Descripcion LIKE CONCAT('%', _Descripcion, '%'))
		  AND 	(_RFC                    IS NULL OR a.RFC LIKE CONCAT('%', _RFC, '%'))
		  AND 	(_RazonSocial            IS NULL OR a.RazonSocial LIKE CONCAT('%', _RazonSocial, '%'))
		  AND 	(_ConstrasenaVUCEM       IS NULL OR a.ConstrasenaVUCEM LIKE CONCAT('%', _ConstrasenaVUCEM, '%'))
		  AND 	(_TokenWEBVUCEM          IS NULL OR a.TokenWEBVUCEM LIKE CONCAT('%', _TokenWEBVUCEM, '%'))
		  AND 	(_Correo                 IS NULL OR a.Correo LIKE CONCAT('%', _Correo, '%'))
		  AND 	(_ExpeditionPlaceSandbox IS NULL OR a.ExpeditionPlaceSandbox LIKE CONCAT('%', _ExpeditionPlaceSandbox, '%'));
	END IF;

	-- CALL amcoderc_dev_Jaks.Empresa_LIST(null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Empresa_CREATE(
	IN _Option                 TINYINT,
	IN _Descripcion            VARCHAR(200),
	IN _RFC                    VARCHAR(20),
	IN _RazonSocial            VARCHAR(200),
	IN _ConstrasenaVUCEM       VARCHAR(200),
	IN _TokenWEBVUCEM          VARCHAR(200),
	IN _Vigencia               DATE,
	IN _Correo                 VARCHAR(100),
	IN _UsuarioCreacionId      INT,
	IN _FechaCreacion          DATETIME,
	IN _UsuarioModificacionId  INT,
	IN _FechaModificacion      DATETIME,
	IN _UsuarioBajaId          INT,
	IN _FechaBaja              DATETIME,
	IN _Baja                   TINYINT,
	IN _ExpeditionPlace        INT,
	IN _ExpeditionPlaceSandbox VARCHAR(50)
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
			INSERT INTO Empresa (Descripcion, RFC, RazonSocial, ConstrasenaVUCEM, TokenWEBVUCEM,
								Vigencia, Correo, UsuarioCreacionId, FechaCreacion, UsuarioModificacionId,
								FechaModificacion, UsuarioBajaId, FechaBaja, Baja, ExpeditionPlace,
								ExpeditionPlaceSandbox)
							VALUES (_Descripcion, _RFC, _RazonSocial, _ConstrasenaVUCEM, _TokenWEBVUCEM,
								_Vigencia, _Correo, _UsuarioCreacionId, _FechaCreacion, _UsuarioModificacionId,
								_FechaModificacion, _UsuarioBajaId, _FechaBaja, _Baja, _ExpeditionPlace,
								_ExpeditionPlaceSandbox);

			SET _Message = CONCAT(ROW_COUNT(), ' record inserted');
		SET _InsertedId = LAST_INSERT_ID();
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, @InsertedId Id;
	-- CALL amcoderc_dev_Jaks.Empresa_CREATE(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Empresa_UPDATE(
	IN _Option                 TINYINT,
	IN _Id                     INT,
	IN _Descripcion            VARCHAR(200),
	IN _RFC                    VARCHAR(20),
	IN _RazonSocial            VARCHAR(200),
	IN _ConstrasenaVUCEM       VARCHAR(200),
	IN _TokenWEBVUCEM          VARCHAR(200),
	IN _Vigencia               DATE,
	IN _Correo                 VARCHAR(100),
	IN _UsuarioCreacionId      INT,
	IN _FechaCreacion          DATETIME,
	IN _UsuarioModificacionId  INT,
	IN _FechaModificacion      DATETIME,
	IN _UsuarioBajaId          INT,
	IN _FechaBaja              DATETIME,
	IN _Baja                   TINYINT,
	IN _ExpeditionPlace        INT,
	IN _ExpeditionPlaceSandbox VARCHAR(50)
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
			IF NOT EXISTS(SELECT 1 FROM Empresa WHERE Id = _Id)
			THEN
				SET _ErrorId = 10;
				SET _Message = 'Record not found';
			END IF;
		END IF;

		IF _ErrorId = 0
		THEN
			UPDATE  Empresa
			SET 	Descripcion            = _Descripcion,
					RFC                    = _RFC,
					RazonSocial            = _RazonSocial,
					ConstrasenaVUCEM       = _ConstrasenaVUCEM,
					TokenWEBVUCEM          = _TokenWEBVUCEM,
					Vigencia               = _Vigencia,
					Correo                 = _Correo,
					UsuarioCreacionId      = _UsuarioCreacionId,
					FechaCreacion          = _FechaCreacion,
					UsuarioModificacionId  = _UsuarioModificacionId,
					FechaModificacion      = _FechaModificacion,
					UsuarioBajaId          = _UsuarioBajaId,
					FechaBaja              = _FechaBaja,
					Baja                   = _Baja,
					ExpeditionPlace        = _ExpeditionPlace,
					ExpeditionPlaceSandbox = _ExpeditionPlaceSandbox
			WHERE 	Id = _Id;

			SET _Message = CONCAT(ROW_COUNT(), ' record updated');
		END IF;
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.Empresa_UPDATE(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Empresa_ENABLE(
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
		IF NOT EXISTS(SELECT 1 FROM Empresa WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM Empresa WHERE Id = _Id AND Active = 1)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already enabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	Empresa
		SET		
		WHERE	Active = 0
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record enabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.Empresa_ENABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Empresa_DISABLE(
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
		IF NOT EXISTS(SELECT 1 FROM Empresa WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM Empresa WHERE Id = _Id AND Active = 0)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already disabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	Empresa
		SET		
		WHERE	Active = 1
		  AND 	Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record disabled');
	END IF;
	*/
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.Empresa_DISABLE(null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE amcoderc_dev_Jaks.Empresa_DELETE(
	IN _Id INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM Empresa WHERE Id = _Id)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		DELETE
		FROM   Empresa
		WHERE  Id = _Id;

		SET _Message = CONCAT(ROW_COUNT(), ' record deleted');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _Id Id;
	-- CALL amcoderc_dev_Jaks.Empresa_DELETE(null);
END$$
DELIMITER ;


