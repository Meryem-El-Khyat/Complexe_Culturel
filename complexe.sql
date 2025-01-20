-- drop database Complexe;
create database Complexe;
use Complexe;

create table Administrateur(
	idAdmin int primary key auto_increment,
    nom varchar(50),
    prenom varchar(50),
    email varchar(255) unique,
    MotDePass varchar(50)
);

create table Utilisateur (
	idUser int primary key auto_increment,
    nom varchar(50),
    prenom varchar(50),
    email varchar(255) unique,
    MotDePass varchar(50)
);



create table Reservations(
	idReserve int primary key auto_increment,
    titre varchar(100),
    Description text,
    dateDebut date,
    dateFin date,
    statut varchar(50),
    flyer varchar(100),
    idUser int,
    foreign key (idUser) references Utilisateur (idUser)
    
);

create table Evenements (
	idEvent int primary key auto_increment,
    idReserve int,
    idUser int,
    foreign key (idReserve) references Reservations (idReserve),
    foreign key (idUser) references Utilisateur (idUser)
);

----------------------------------------------------------------------- 
INSERT INTO Administrateur (nom, prenom, email, MotDePass)
VALUES 
    ('Admin', 'Principal', 'admin@complexe.com', 'admin123'),
    ('Manager', 'Site', 'manager@complexe.com', 'manager456');

--------------------------------------------------------- 
INSERT INTO Utilisateur (nom, prenom, email, MotDePass)
VALUES 
    ('Ali', 'Bennani', 'ali.bennani@complexe.com', 'password123'),
    ('Sara', 'El Mansouri', 'sara.mansouri@complexe.com', 'sara2023'),
    ('Youssef', 'Ouazzani', 'youssef.ouazzani@complexe.com', 'youyou!456'),
    ('Meryem', 'Nassiri', 'meryem.nassiri@complexe.com', 'mery2023');
select * from Utilisateur;
select * from Administrateur;
------------------------------------------------- 
INSERT INTO Reservations (titre, Description, dateDebut, dateFin, statut, flyer, idUser)
VALUES 
    ('Conférence IA', 'Conférence sur les tendances de l intelligence artificielle en 2025.', '2025-02-10', '2025-02-12', 'Confirmée', 'ia2025.jpg', 1),
    ('Salon Startups', 'Un salon dédié aux startups marocaines innovantes.', '2025-03-05', '2025-03-07', 'Confirmée', 'startups.jpg', 2),
    ('Foire Artisanale', 'Une foire pour promouvoir l artisanat local.', '2025-04-15', '2025-04-17', 'En attente', 'artisanat.jpg', 3),
    ('Atelier Développement Web', 'Atelier pratique sur les technologies web modernes.', '2025-05-20', '2025-05-20', 'Confirmée', 'devweb.jpg', 4);
select * from Reservations;
select * from Evenements;
------------------------------------------------- 
INSERT INTO Evenements (idReserve, idUser)
VALUES 
    (1, 1), -- Ali Bennani a réservé pour organiser l'événement "Conférence IA".
    (2, 2), -- Sara El Mansouri a réservé pour organiser "Salon Startups".
    (3, 3), -- Youssef Ouazzani a réservé pour organiser "Foire Artisanale".
    (4, 4); -- Meryem Nassiri a réservé pour organiser "Atelier Développement Web".

------------------------------------------------- 
-- Requete de test

SELECT u.nom AS utilisateur, r.titre AS reservation, r.dateDebut, r.dateFin, r.statut
FROM Utilisateur u
JOIN Reservations r ON u.idUser = r.idUser;


SELECT e.idEvent, r.titre AS evenement, u.nom AS createur, r.dateDebut, r.dateFin, r.statut
FROM Evenements e
JOIN Reservations r ON e.idReserve = r.idReserve
JOIN Utilisateur u ON e.idUser = u.idUser
where r.statut = "Confirmée";


