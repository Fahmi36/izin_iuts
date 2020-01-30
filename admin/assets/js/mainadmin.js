
// var BASE_URL = 'http://localhost/rest_api_iuts/';
var BASE_URL = 'https://rest-iuts.pkkmart.com/';
timeline = {
	// start view data
	dataview:function() {
		var datas = {id:localStorage.getItem("iduser"),start:0,offset:99};
		$.ajax({
			url: BASE_URL + 'UserController/listPermohonan',
			type: 'POST',
			data: datas,
			dataType : 'json',
			success:function(data) {
				var nama = [];
				var status = [];
				var email = [];
				var code = [];
				var tanggal = [];
				var tujuan = [];
				for(var coba in data.row){
					nama.push(data.row[coba].nama);
					status.push(data.row[coba].status);
					email.push(data.row[coba].email);
					code.push(data.row[coba].code);
					tanggal.push(data.row[coba].created_at);
				}
				// console.log(nama.length);
				if (nama.length == 0) {
					$("#izinnya").html('<p>Tidak ada Data</p>');
				}
				for (var i = 0; i < nama.length; i++) {
					
					if (status[i] == '0') {
						var status = 'Di Proses';
					}else if(status[i] == '1'){
						var status = 'Di Terima';
					}else if(status[i] == '2'){
						var status = 'Di Tolak';
					}else if (status[i] == '3') {
						var status = 'Expired';
					}
						$("#izinnya").html('<div class="col-xl-3 col-lg-6"><a href="timeline_pemohon" class="text-default"><div class="card card-stats mb-4 mb-xl-0"><div class="ribbon ribbon-top-right diterima"><span class="bg-success">'+status+'</span></div><div class="card-body"><div class="row"><div class="col"><h5 class="card-title text-uppercase text-darker mb-0">Nama Pemohon</h5><span class="font-weight-bold">'+nama[i]+'</span><label class="hr-card"></label><h5 class="card-title text-uppercase text-darker mb-0">Tanggal Pengajuan</h5><span class="font-weight-bold">'+tanggal[i]+'</span><label class="hr-card"></label><h5 class="card-title text-uppercase text-darker mb-0">Jenis Izin</h5><span class="font-weight-bold">Izin Usaha Toko Swalayan</span></div></div><p class="mt-3 mb-0 text-darker text-sm"><span class="text-danger mr-2 badge badge-primary" style="font-size: 18px;">#'+code[i]+'</span><span class="text-nowrap">Nomor Token</span></p></div></div></a></div>');
				}

			//	DATA COUNT MENU
			$('#processCount').html((data.dataCount[0]!=undefined)?data.dataCount[0].counting:0);
			$('#expiredCount').html((data.dataCount[1]!=undefined)?data.dataCount[1].counting:0);
			$('#doneCount').html((data.dataCount[2]!=undefined)?data.dataCount[2].counting:0);
		}
	})
	},
	// end view data
};
$("#logout").click(function(event) {
	localStorage.clear();
	window.location.href = '/';
});