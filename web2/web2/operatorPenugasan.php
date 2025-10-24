<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operator Penugasan</title>
</head>
<body>
    <?php 
        $total = 0;
        $buah = 20000;
        $ayam =30000;
        $sayuran = 10000;

        $total += $buah;
        $total += $ayam;
        $total += $sayuran;
        
        var_dump($total);
    ?>
</body>
</html>