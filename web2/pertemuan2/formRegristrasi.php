<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Registrasi</title>
</head>
<form action="regristrasi.php" method="post">
    <h2>Input Data Registrasi</h2>
    <label for="">Nama</label> <br>
    <input type="text" name="nama"> <br>
    <label for="">Email</label> <br>
    <input type="email" name="email"> <br>
    <label for="">jenis</label> <br>
    <select name="jenis_kelamin" id="">
        <option value="Laki-Laki">Laki-Laki</option>
        <option value="Perempuan">Perempuan</option>
    </select> <br>
    <label for="">Alamat</label> <br>
    <textarea name="alamat" id=""></textarea> <br>
    <button type="submit">Simpan</button>
    <button type="reset">Batal</button>

</form>
<body>
    
</body>
</html>