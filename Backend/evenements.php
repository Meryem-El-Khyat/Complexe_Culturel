<?php
include 'db.php';

header('Content-Type: application/json');

// GET: Retrieve all events
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = $pdo->query("SELECT * FROM Evenements");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}

// POST: Add a new event
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("INSERT INTO Evenements (idReserve, idUser) VALUES (?, ?)");
    $stmt->execute([$data['idReserve'], $data['idUser']]);
    echo json_encode(['id' => $pdo->lastInsertId()]);
}

// DELETE: Delete an event
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("DELETE FROM Evenements WHERE idEvent = ?");
    $stmt->execute([$data['idEvent']]);
    echo json_encode(['status' => 'deleted']);
}
?>
