<?php
include 'db.php';

header('Content-Type: application/json');

// GET: Retrieve all reservations
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = $pdo->query("SELECT * FROM Reservations");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}

// POST: Add a new reservation
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("INSERT INTO Reservations (titre, Description, dateDebut, dateFin, statut, flyer, idUser) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([$data['titre'], $data['Description'], $data['dateDebut'], $data['dateFin'], $data['statut'], $data['flyer'], $data['idUser']]);
    echo json_encode(['id' => $pdo->lastInsertId()]);
}

// PUT: Update a reservation
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("UPDATE Reservations SET titre = ?, Description = ?, dateDebut = ?, dateFin = ?, statut = ?, flyer = ? WHERE idReserve = ?");
    $stmt->execute([$data['titre'], $data['Description'], $data['dateDebut'], $data['dateFin'], $data['statut'], $data['flyer'], $data['idReserve']]);
    echo json_encode(['status' => 'updated']);
}

// DELETE: Delete a reservation
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("DELETE FROM Reservations WHERE idReserve = ?");
    $stmt->execute([$data['idReserve']]);
    echo json_encode(['status' => 'deleted']);
}
?>
