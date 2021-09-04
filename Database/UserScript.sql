USE amcoderc_dev_Jaks;

/*

	DROP PROCEDURE IF EXISTS `CodeMono_User_AUTHENTICATION`;
	DROP PROCEDURE IF EXISTS `CodeMono_User_READ`;
	DROP PROCEDURE IF EXISTS `CodeMono_User_LIST`;
	DROP PROCEDURE IF EXISTS `CodeMono_User_CREATE`;
	DROP PROCEDURE IF EXISTS `CodeMono_User_UPDATE`;
	DROP PROCEDURE IF EXISTS `CodeMono_User_ENABLE`;
	DROP PROCEDURE IF EXISTS `CodeMono_User_DISABLE`;
	DROP PROCEDURE IF EXISTS `CodeMono_User_DELETE`;

	DROP PROCEDURE IF EXISTS CodeMono_UserType_READ;
	DROP PROCEDURE IF EXISTS CodeMono_UserType_LIST;
	DROP PROCEDURE IF EXISTS CodeMono_UserType_CREATE;
	DROP PROCEDURE IF EXISTS CodeMono_UserType_UPDATE;
	DROP PROCEDURE IF EXISTS CodeMono_UserType_ENABLE;
	DROP PROCEDURE IF EXISTS CodeMono_UserType_DISABLE;
	DROP PROCEDURE IF EXISTS CodeMono_UserType_DELETE;
    
	DROP TABLE IF EXISTS CodeMono_User;
	DROP TABLE IF EXISTS CodeMono_UserType;

*/

CREATE TABLE `CodeMono_UserType` (
  `UserTypeId`   smallint NOT NULL,
  `UserTypeName` varchar(50) NOT NULL,
  `CreatedBy`    int NOT NULL DEFAULT '0',
  `CreatedAt`    datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedBy`    int DEFAULT NULL,
  `UpdatedAt`    datetime DEFAULT NULL,
  `DisabledBy`   int DEFAULT NULL,
  `DisabledAt`   datetime DEFAULT NULL,
  `Active`       bit NOT NULL DEFAULT b'1',
  PRIMARY KEY (`UserTypeId`)
);

CREATE TABLE `CodeMono_User` (
  `UserId`     int NOT NULL AUTO_INCREMENT,
  `FirstName`  varchar(45) NOT NULL,
  `LastName`   varchar(45) NOT NULL,
  `UserTypeId` smallint(6) NOT NULL,
  `Username`   varchar(45) NOT NULL,
  `Password`   varchar(45) NOT NULL,
  `Avatar`     varchar(45) NULL,
  `CreatedBy`  int NOT NULL DEFAULT '0',
  `CreatedAt`  datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedBy`  int NULL,
  `UpdatedAt`  datetime NULL,
  `DisabledBy` int DEFAULT NULL,
  `DisabledAt` datetime DEFAULT NULL,
  `Active`     bit NOT NULL DEFAULT b'1',
  PRIMARY KEY (`UserId`)
);

ALTER TABLE CodeMono_User ADD CONSTRAINT FK_CodeMono_User_UserTypeId FOREIGN KEY (UserTypeId) REFERENCES CodeMono_UserType(UserTypeId);


INSERT INTO `CodeMono_UserType`(UserTypeId, UserTypeName)
				VALUES(1, 'UserTypeDemo');

INSERT INTO `CodeMono_User`(UserId, FirstName, LastName, UserTypeId, Username, Password, Avatar)
				VALUES(1, 'Demo', 'User', 1, 'DemoUser', '12345', '');



DELIMITER $$
CREATE PROCEDURE `CodeMono_User_AUTHENTICATION`(
	IN _Username  VARCHAR(45),
	IN _Password  VARCHAR(45)
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	-- Code 10: INVALID PARAMETERS
	IF _ErrorId = 0
	THEN
		IF (_Username = '' OR _Password = '')
		THEN
			-- SET _ErrorId = 10;
			-- SET _Message = 'Invalid parameters';
			SET _ErrorId = 10;
			SET _Message = 'Username or invalid password';
		END IF;
	END IF;

	-- Code 10: EXISTING USER
	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM CodeMono_User WHERE Username = _Username)
		THEN
			-- SET _ErrorId = 20;
			-- SET _Message = 'Username not found';
			SET _ErrorId = 10;
			SET _Message = 'Username or invalid password';
		END IF;
	END IF;

	-- Code 10: ENABLED USER
	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM CodeMono_User WHERE Username = _Username AND Active = 1)
		THEN
			-- SET _ErrorId = 30;
			-- SET _Message = 'Username disabled';
			SET _ErrorId = 10;
			SET _Message = 'Username or invalid password';
		END IF;
	END IF;

	-- Code 10: INCORRECT PASSWORD
	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM CodeMono_User WHERE Username = _Username AND Password = _Password AND Active = 1)
		THEN
			-- SET _ErrorId = 40;
			-- SET _Message = 'Invalid password';
			SET _ErrorId = 10;
			SET _Message = 'Username or invalid password';
		END IF;
	END IF;


	IF _ErrorId = 0
	THEN
		SELECT 	true Authenticated, 'Success' Message, a.UserId, a.FirstName, a.LastName, a.UserTypeId, a.Username, a.Avatar
		FROM 	CodeMono_User a
		WHERE 	a.Username = _Username
		  AND 	a.Password = _Password
		  AND 	a.Active = 1;
	ELSE
		SELECT 	false Authenticated, _Message Message;
	END IF;


	-- CALL CodeMono_User_AUTHENTICATION(null, null);
END$$
DELIMITER ;



DELIMITER $$
CREATE PROCEDURE `CodeMono_User_READ`(
	IN _UserId     INT,
	IN _FirstName  VARCHAR(45),
	IN _LastName   VARCHAR(45),
	IN _UserTypeId SMALLINT,
	IN _Username   VARCHAR(45),
	IN _Active     BIT
)
BEGIN

	SELECT 	a.UserId, a.FirstName, a.LastName, a.UserTypeId, b.UserTypeName,
			a.Username, a.Password, a.Avatar, a.CreatedBy, a.CreatedAt,
            a.UpdatedBy, a.UpdatedAt, a.DisabledBy, a.DisabledAt, a.Active
	FROM 	CodeMono_User a
			INNER JOIN CodeMono_UserType b ON a.UserTypeId = b.UserTypeId
	WHERE 	(_UserId     IS NULL OR a.UserId = _UserId)
	  AND 	(_FirstName  IS NULL OR a.FirstName LIKE CONCAT('%', _FirstName, '%'))
	  AND 	(_LastName   IS NULL OR a.LastName LIKE CONCAT('%', _LastName, '%'))
	  AND 	(_UserTypeId IS NULL OR a.UserTypeId = _UserTypeId)
	  AND 	(_Username   IS NULL OR a.Username LIKE CONCAT('%', _Username, '%'))
	  AND 	(_Active     IS NULL OR a.Active = _Active);

	-- CALL CodeMono_User_READ(null, null, null, null, null, null);
END$$
DELIMITER ;


DELIMITER $$
CREATE PROCEDURE `CodeMono_User_LIST`(
	IN _UserId     INT,
	IN _FirstName  VARCHAR(45),
	IN _LastName   VARCHAR(45),
	IN _UserTypeId SMALLINT,
	IN _Username   VARCHAR(45),
	IN _Active     BIT
)
BEGIN

	SELECT 	a.UserId UserId, CONCAT(a.LastName, ', ', a.FirstName, ' (', a.Username, ')') UserName
	FROM 	CodeMono_User a
	WHERE 	(_UserId     IS NULL OR a.UserId = _UserId)
	  AND 	(_FirstName  IS NULL OR a.FirstName LIKE CONCAT('%', _FirstName, '%'))
	  AND 	(_LastName   IS NULL OR a.LastName LIKE CONCAT('%', _LastName, '%'))
	  AND 	(_UserTypeId IS NULL OR a.UserTypeId = _UserTypeId)
	  AND 	(_Username   IS NULL OR a.Username LIKE CONCAT('%', _Username, '%'))
	  AND 	(_Active     IS NULL OR a.Active = _Active);

	-- CALL CodeMono_User_LIST(null, null, null, null, null, null);
END$$
DELIMITER ;


DELIMITER $$
CREATE PROCEDURE `CodeMono_User_CREATE`(
	IN _FirstName  VARCHAR(45),
	IN _LastName   VARCHAR(45),
	IN _UserTypeId SMALLINT,
	IN _Username   VARCHAR(45),
	IN _Password   VARCHAR(45),
	IN _Avatar     VARCHAR(45),
	IN _CreatedBy  INT
)
BEGIN

DECLARE _ErrorId    TINYINT;
DECLARE _Message    VARCHAR(100);
DECLARE _InsertedId INT;

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM CodeMono_User WHERE Username = _Username)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Username already exists';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		INSERT INTO CodeMono_User (FirstName, LastName, UserTypeId, Username, Password, 
									Avatar, CreatedBy, CreatedAt, Active)
							VALUES (_FirstName, _LastName, _UserTypeId, _Username, _Password, 
									_Avatar, _CreatedBy, CURRENT_TIMESTAMP, 1);
		
        SET _Message = CONCAT(ROW_COUNT(), ' record inserted');
        SET _InsertedId = LAST_INSERT_ID();
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _InsertedId UserId;
	-- CALL CodeMono_User_CREATE(null, null, null, null, null, null, null);
END$$
DELIMITER ;


DELIMITER $$
CREATE PROCEDURE `CodeMono_User_UPDATE`(
	IN _UserId     INT,
	IN _FirstName  VARCHAR(45),
	IN _LastName   VARCHAR(45),
	IN _UserTypeId SMALLINT,
	IN _Username   VARCHAR(45),
	IN _Password   VARCHAR(45),
	IN _Avatar     VARCHAR(45),
	IN _UpdatedBy  INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM CodeMono_User WHERE UserId = _UserId)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE  CodeMono_User
		SET 	FirstName  = _FirstName,
				LastName   = _LastName,
				UserTypeId = _UserTypeId,
				Username   = _Username,
				Password   = _Password,
				Avatar     = _Avatar,
				UpdatedBy  = _UpdatedBy,
				UpdatedAt  = CURRENT_TIMESTAMP
		WHERE 	UserId = _UserId;

		SET _Message = CONCAT(ROW_COUNT(), ' record updated');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _UserId UserId;
	-- CALL CodeMono_User_UPDATE(null, null, null, null, null, null, null, null);
END$$
DELIMITER ;


DELIMITER $$
CREATE PROCEDURE `CodeMono_User_ENABLE`(
	IN _UserId INT,
	IN _UpdatedBy INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM CodeMono_User WHERE UserId = _UserId)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM CodeMono_User WHERE UserId = _UserId AND Active = 1)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already enabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	CodeMono_User
		SET		Active = 1,
				UpdatedBy = _UpdatedBy,
				UpdatedAt = CURRENT_TIMESTAMP
		WHERE	Active = 0
		  AND 	UserId = _UserId;

		SET _Message = CONCAT(ROW_COUNT(), ' record enabled');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _UserId UserId;
	-- CALL CodeMono_User_ENABLE(null, null);
END$$
DELIMITER ;


DELIMITER $$
CREATE PROCEDURE `CodeMono_User_DISABLE`(
	IN _UserId INT,
	IN _DisabledBy INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM CodeMono_User WHERE UserId = _UserId)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM CodeMono_User WHERE UserId = _UserId AND Active = 0)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already disabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	CodeMono_User
		SET		Active = 0,
				DisabledBy = _DisabledBy,
				DisabledAt = CURRENT_TIMESTAMP
		WHERE	Active = 1
		  AND 	UserId = _UserId;

		SET _Message = CONCAT(ROW_COUNT(), ' record disabled');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _UserId UserId;
	-- CALL CodeMono_User_DISABLE(null, null);
END$$
DELIMITER ;


DELIMITER $$
CREATE PROCEDURE `CodeMono_User_DELETE`(
	IN _UserId INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM CodeMono_User WHERE UserId = _UserId)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		DELETE
		FROM   CodeMono_User
		WHERE  UserId = _UserId;

		SET _Message = CONCAT(ROW_COUNT(), ' record deleted');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _UserId UserId;
	-- CALL CodeMono_User_DELETE(null);
END$$
DELIMITER ;


/*
********************************************
	CodeMono_UserType SPs
********************************************
*/

DELIMITER $$
CREATE PROCEDURE CodeMono_UserType_READ(
	IN _UserTypeId   SMALLINT,
	IN _UserTypeName VARCHAR(50),
	IN _Active       BIT
)
BEGIN

	SELECT 	a.UserTypeId, a.UserTypeName, a.CreatedBy, a.CreatedAt, a.UpdatedBy, 
			a.UpdatedAt, a.DisabledBy, a.DisabledAt, a.Active
	FROM 	CodeMono_UserType a
	WHERE 	(_UserTypeId   IS NULL OR a.UserTypeId = _UserTypeId)
	  AND 	(_UserTypeName IS NULL OR a.UserTypeName LIKE CONCAT('%', _UserTypeName, '%'))
	  AND 	(_Active     IS NULL OR a.Active = _Active);

	-- CALL CodeMono_UserType_READ(null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE CodeMono_UserType_LIST(
	IN _UserTypeId   SMALLINT,
	IN _UserTypeName VARCHAR(50),
	IN _Active       BIT
)
BEGIN

	SELECT 	a.UserTypeId UserTypeId, a.UserTypeName UserTypeName
	FROM 	CodeMono_UserType a
	WHERE 	(_UserTypeId   IS NULL OR a.UserTypeId = _UserTypeId)
	  AND 	(_UserTypeName IS NULL OR a.UserTypeName LIKE CONCAT('%', _UserTypeName, '%'))
	  AND 	(_Active       IS NULL OR a.Active = _Active);

	-- CALL CodeMono_UserType_LIST(null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE CodeMono_UserType_CREATE(
	IN _UserTypeId   SMALLINT,
	IN _UserTypeName VARCHAR(50),
	IN _CreatedBy    INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		INSERT INTO CodeMono_UserType (UserTypeId, UserTypeName, CreatedBy, CreatedAt, Active)
						VALUES (_UserTypeId, _UserTypeName, _CreatedBy, CURRENT_TIMESTAMP, 1);
		SET _Message = CONCAT(ROW_COUNT(), ' record inserted');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _UserTypeId UserTypeId;
	-- CALL CodeMono_UserType_CREATE(null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE CodeMono_UserType_UPDATE(
	IN _UserTypeId   SMALLINT,
	IN _UserTypeName VARCHAR(50),
	IN _UpdatedBy    INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM CodeMono_UserType WHERE UserTypeId = _UserTypeId)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE  CodeMono_UserType
		SET 	UserTypeName = _UserTypeName,
				UpdatedBy    = _UpdatedBy,
				UpdatedAt    = CURRENT_TIMESTAMP
		WHERE 	UserTypeId   = _UserTypeId;

		SET _Message = CONCAT(ROW_COUNT(), ' record updated');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _UserTypeId UserTypeId;
	-- CALL CodeMono_UserType_UPDATE(null, null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE CodeMono_UserType_ENABLE(
	IN _UserTypeId SMALLINT,
	IN _UpdatedBy INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM CodeMono_UserType WHERE UserTypeId = _UserTypeId)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM CodeMono_UserType WHERE UserTypeId = _UserTypeId AND Active = 1)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already enabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	CodeMono_UserType
		SET		Active = 1,
				UpdatedBy = _UpdatedBy,
				UpdatedAt = CURRENT_TIMESTAMP
		WHERE	Active = 0
		  AND 	UserTypeId = _UserTypeId;

		SET _Message = CONCAT(ROW_COUNT(), ' record enabled');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _UserTypeId UserTypeId;
	-- CALL CodeMono_UserType_ENABLE(null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE CodeMono_UserType_DISABLE(
	IN _UserTypeId SMALLINT,
	IN _DisabledBy INT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM CodeMono_UserType WHERE UserTypeId = _UserTypeId)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		IF EXISTS(SELECT 1 FROM CodeMono_UserType WHERE UserTypeId = _UserTypeId AND Active = 0)
		THEN
			SET _ErrorId = 20;
			SET _Message = 'Record already disabled';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		UPDATE	CodeMono_UserType
		SET		Active = 0,
				DisabledBy = _DisabledBy,
				DisabledAt = CURRENT_TIMESTAMP
		WHERE	Active = 1
		  AND 	UserTypeId = _UserTypeId;

		SET _Message = CONCAT(ROW_COUNT(), ' record disabled');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _UserTypeId UserTypeId;
	-- CALL CodeMono_UserType_DISABLE(null, null);
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE CodeMono_UserType_DELETE(
	IN _UserTypeId SMALLINT
)
BEGIN

DECLARE _ErrorId TINYINT;
DECLARE _Message VARCHAR(100);

SET _ErrorId = 0;
SET _Message = '';

	IF _ErrorId = 0
	THEN
		IF NOT EXISTS(SELECT 1 FROM CodeMono_UserType WHERE UserTypeId = _UserTypeId)
		THEN
			SET _ErrorId = 10;
			SET _Message = 'Record not found';
		END IF;
	END IF;

	IF _ErrorId = 0
	THEN
		DELETE
		FROM   CodeMono_UserType
		WHERE  UserTypeId = _UserTypeId;

		SET _Message = CONCAT(ROW_COUNT(), ' record deleted');
	END IF;
	
	SELECT _ErrorId ErrorId, _Message Message, _UserTypeId UserTypeId;
	-- CALL CodeMono_UserType_DELETE(null);
END$$
DELIMITER ;

