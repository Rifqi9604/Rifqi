function btn(){
    var Nama = document.getElementById("nama").innerHTML;
    var Email = document.getElementById("email").innerHTML;
    var Telp = document.getElementById("telp").innerHTML;
    var Pesan = document.getElementById("pesan").innerHTML;

    var hasil;
    if(Nama && Email && Telp && Pesan == 0){
        alert("Terima Kasih Banyak")
    }
}