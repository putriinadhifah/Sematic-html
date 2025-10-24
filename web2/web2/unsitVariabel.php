<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unset Variabel</title>
</head>
<body>
    <?php 
    $nama = "putrii";
    unset($nama);
    var_dump(isset($nama));
    ?>
</body>
</html>