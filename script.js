function hasil(){
  document.getElementById("resi_status").innerHTML="";
  var type= document.getElementById("courier_input");
  var hasil= type[type.selectedIndex].value;
  var awb = document.getElementById("awb_input").value;
  fetch("https://api.binderbyte.com/v1/track?api_key=bc714fd4676dc5b929343a2fb846b69375d1e220c9f7af89b2b760000d1262b3&courier="+hasil+"&awb="+awb)
  .then(response => response.json())
  .then(data => {
      console.log(data);
      document.getElementById("resi_status").innerHTML=
      "<div class='card' style='width: 37rem;'>"+
      "<div class='card-body'>"+
        "<h3 class='card-title'>HASIL RESI</h3>"+
        "<h6 class='card-title'>Tujuan :</h6> "+data.data.detail.destination+
        "<h6 class='card-title'>Asal :</h6> <p>"+data.data.detail.origin+"</p>"+
        "<h6 class='card-title'>Penerima :</h6> <p>"+data.data.detail.receiver+"</p>"+
        "<h6 class='card-title'>Pengirim :</h6> <p>"+data.data.detail.shipper+"</p>"+
        "<h6 class='card-title'>Jumlah :</h6> <p>"+data.data.summary.amount+"</p>"+
        "<h6 class='card-title'>Nomor Resi :</h6> <p>"+data.data.summary.awb+"</p>"+
        "<h6 class='card-title'>Kurir :</h6> <p>"+data.data.summary.courier+"</p>"+
        "<h6 class='card-title'>Tanggal :</h6> <p>"+data.data.summary.date+"</p>"+
        "<h6 class='card-title'>Deskripsi :</h6> <p>"+data.data.summary.desc+"</p>"+
        "<h6 class='card-title'>Layanan :</h6> <p>"+data.data.summary.service+"</p>"+
        "<h6 class='card-title'>Status :</h6> <p>"+data.data.summary.status+"</p>"+
        "<h6 class='card-title'>Berat (kg) :</h6> <p>"+data.data.summary.weight+"</p>"+
      "</div>"+
    "</div>"
  })
}