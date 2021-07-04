--CREATE USER
CREATE USER online_tool_user WITH PASSWORD '123123';

--CREATE DATABASE
CREATE DATABASE online_tool;

--CREATE PRIVILEGES
REVOKE CONNECT ON DATABASE online_tool FROM PUBLIC;
 
GRANT CONNECT
ON DATABASE online_tool 
TO online_tool_user;

REVOKE ALL
ON ALL TABLES IN SCHEMA public 
FROM PUBLIC;

GRANT SELECT,INSERT,DELETE
ON ALL TABLES IN SCHEMA public 
TO online_tool_user;

ALTER DEFAULT PRIVILEGES 
    FOR ROLE online_tool_user
    IN SCHEMA public
    GRANT SELECT,INSERT,DELETE ON TABLES TO online_tool_user;

\c online_tool online_tool_user

--CREATE TABLE
CREATE TABLE users(
  userid VARCHAR(100) NOT NULL PRIMARY KEY,
  name VARCHAR(100),
  user_pwd VARCHAR(200) NOT NULL,
  createdon TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE operation_log(
  operation_logid VARCHAR(100) NOT NULL PRIMARY KEY,
  request_ip VARCHAR(100),
  object_code VARCHAR(100) NOT NULL,
  operation_type VARCHAR(100) NOT NULL,
  createdon TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
);