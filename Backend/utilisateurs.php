<?php
include 'db.php';

header('Content-Type: application/json');

// GET: Retrieve all users
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // $stmt = $pdo->query("SELECT * FROM Utilisateur");
    // echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    if (isset($_GET['id'])) {
        $stmt = $pdo->prepare("SELECT * FROM Utilisateur WHERE idUser = ?");
        $stmt->execute([$_GET['id']]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($result) {
            echo json_encode($result);
        } else {
            echo json_encode(["error" => "Utilisateur non trouvé"]);
        }
    } else {
        $stmt = $pdo->query("SELECT * FROM Utilisateur");
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
    }
}

// POST: Add a new user
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("INSERT INTO Utilisateur (nom, prenom, email, MotDePass) VALUES (?, ?, ?, ?)");
    $stmt->execute([$data['nom'], $data['prenom'], $data['email'], $data['MotDePass']]);
    echo json_encode(['id' => $pdo->lastInsertId()]);
}

// PUT: Update a user
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("UPDATE Utilisateur SET nom = ?, prenom = ?, email = ?, MotDePass = ? WHERE idUser = ?");
    $stmt->execute([$data['nom'], $data['prenom'], $data['email'], $data['MotDePass'], $data['idUser']]);
    echo json_encode(['status' => 'updated']);
}

// DELETE: Delete a user
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("DELETE FROM Utilisateur WHERE idUser = ?");
    $stmt->execute([$data['idUser']]);
    echo json_encode(['status' => 'deleted']);
}
?>
