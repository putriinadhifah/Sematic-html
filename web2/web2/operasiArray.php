<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operasi Array</title>
</head>
<body>
    <?php 
    $prodi = [ "Teknik Informasi", "Sistem Informasi", "Bisnis Digital"];
    var_dump($prodi[0]);
    echo "<br>";
    $prodi[0] = "TI";
    var_dump($prodi);
    echo "<br>";
    unset ($prodi[1]);
    var_dump($prodi);
    echo "<br>";
    $prodi[0] = "SI";
    var_dump($prodi);
    echo "<br>";
    var_dump(count($prodi));
    ?>
</body>
</html>