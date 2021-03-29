CREATE DATABASE test;
USE test;

CREATE TABLE `c_entity` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(20) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
CREATE TABLE `p_entity` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(20) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;

INSERT INTO c_entity(name) VALUES('centity');
INSERT INTO p_entity(name) VALUES('pentity');
