<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Is Null</title>
</head>
<body>
    <?php 
        $nama = "putrin";
        $nama = null;
        $isNull  = is_null($nama);
        var_dump($isNull);  
    ?>
</body>
</html>