<?php 
   include '../koneksi.php';

if(isset($_POST["attrr"])){
    $judul=$_POST["judul"];
    $penerbit=$_POST["penerbit"];
    $pengarang=$_POST["pengarang"];
    $ringkasa=$_POST["ringkasan"];
    $stok=$_POST["stok"];
    $katagori=$_POST["katagori"];
    $id=$_POST["id"];
     
    $pecah=explode("/",$_POST["attrr"]);
    
$nama=end($pecah);
    $folder="foto/".$nama;
    if(isset($folder) == "foto/buku.png"){
       
        $quer=mysqli_query($connect,"UPDATE buku SET cover='$nama',judul='$penerbit',pengarang='$pengarang',ringkasan='$ringkasa',stok='$stok',id_kategori='$katagori' where id_buku='$id' ");
        var_dump($quer);
        echo"tersimpan";
}
    else{ 
        unlink($_POST["hapus"]);
        $eks=pathinfo($nama,PATHINFO_EXTENSION);
        $namabaru=uniqid().".".$eks;
        $url="foto/".$namabaru;
    $tmp=$_POST["attrr"];
    $pindah=rename($tmp,$url);
    
    mysqli_query($connect,"UPDATE buku SET cover='$namabaru' where id_buku='$id'");
    echo "tersimpan";
    
      
}
 die;

}
elseif(isset($_POST["hp"])){
unlink($_POST["hp"]);
 
    echo "foto/buku.png";

}
elseif(isset($_FILES["file"]["name"])){
$nama=$_FILES["file"]["name"];
$type=$_FILES["file"]["type"];
$tmp_name=$_FILES["file"]["tmp_name"];
$er=$_FILES["file"]["error"];
$size=$_FILES["file"]["size"];


if($er==4){
echo false;
}
if($size>100000){
echo false;
}
$tempat="../asset/img/".$nama;
$ekstensi=array("jpg","jpeg","png");

$eksfot=strtolower(pathinfo($tempat,PATHINFO_EXTENSION));
if(!in_array($eksfot,$ekstensi)){
    echo false;
}

move_uploaded_file($tmp_name,$tempat);
    echo $tempat;
}
?>