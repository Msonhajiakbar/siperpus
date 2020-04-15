<?php 
include '../koneksi.php';
$id=$_GET["id_pinjam"];
$query1=mysqli_query($connect,"DELETE FROM detail_pinjam where id_pinjam='$id'");
$query2=mysqli_query($connect,"DELETE FROM peminjaman where id_pinjam='$id'");


// var_dump($query1&&$query2);

if(($query1&&$query2)==1){
    echo
            "
            <script>
                alert('Data Berhasil Dihapus!');
                document.location.href = 'index.php';
            </script>
            ";
}
// else{
//     header("location : index.php");
//     exit;
// }
?>