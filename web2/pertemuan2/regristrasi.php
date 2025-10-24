<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data regristrasi</title>
</head>
<body>
    <?php 
        $kembali = "<a href= 'formRegristrasi.php'> Kembali </a>";
        if ($_POST['nama' ]== "" || $_POST['email']== ""|| $_POST['alamat']==""){
            echo "maaf....nama, email dan alamat tidak boleh kosong" . "<br>". $kembali;
        } else {
    ?>



    <h2>Registrasi Berhasil</h2>
    <table border="1">
       <tr>
            <td>Nama</td>
            <td><?php echo $_POST['nama']?></td>
       </tr>
       <tr>
            <td>Email</td>
            <td><?php echo $_POST['email']?></td>
       </tr>
       <tr>
            <td>Jenis Kelamin</td>
            <td><?php echo $_POST['jenis_kelamin']?></td>
       </tr>
       <tr>
            <td>Alamat</td>
            <td><?php echo $_POST['alamat']?></td>
       </tr>
       <tr>
        <td></td>
        <td><a href="formRegristrasi.php"></a></td>
       </tr>
    </table>
    <?php 
    } ?>
</body>
</html>