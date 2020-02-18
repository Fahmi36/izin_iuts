
// var BASE_URL = 'http://localhost/rest_api_iuts/';
var BASE_URL = 'https://rest-iuts.pkkmart.com/';
$("#namapemohon").html(localStorage.getItem("nama"));
$("#namapemohonnav").html(localStorage.getItem("nama"));
$.ajax({
	url: BASE_URL + 'UserController/countside',
	type: 'POST',
	dataType: 'json',
	data: {id: localStorage.getItem("iduser")},
	success:function(data) {
		$("#countproses").html(data.pending);
		$("#countselesai").html(data.selesai);
		$("#countexpired").html(data.expired);
	}
});
function filterizin(id) {
	localStorage.setItem("typestatus",id);
	window.location.href = 'perizinan_saya_s.html';
}
function pemohon() {
	$.ajax({ 
		url: BASE_URL + 'UserController/getTimelinePemohon',
		type: 'POST',
		dataType: 'json',
		data: {code:localStorage.getItem('idbangunanuser')},
		success:function(data) {
			if (data.success) {
				var status = [];
				var tgl = [];
				for(var coba in data.row){
					status.push(data.row[coba].status_jalan);
					tgl.push(data.row[coba].created_at);
				}
				if (data.rowCount > 0) {
					$('#ket_pemohon').removeAttr('style');
					$('#ket_pemohon').html('<p>Anda mengajukan izin '+datePHPJS("d-F-Y", new Date(data.row[0].created_at))+'</p>');
				}
			}
		}
	});
}
function Detailpemohon(id) {
	var datas = {code:id};
	$('#detailPerizinan').modal('show');
	$.ajax({
		url: BASE_URL + 'OfficeController/getBangunanDetail',
		type: 'POST',
		dataType: 'json',
		data: datas,
		success:function(data) {
			if (data.success) {
				var code = [];
				var nama = [];
				var nib = [];
				var npwp = [];
				var tgl = [];
				var alamat = [];
				var zona = [];
				var kode_sublok = [];
				var lat = [];
				var lon = [];
				for(var coba in data.row){
					code.push(data.row[coba].code);
					nama.push(data.row[coba].nama);
					nib.push(data.row[coba].nib);
					npwp.push(data.row[coba].npwp);
					alamat.push(data.row[coba].alamat);
					zona.push(data.row[coba].zona);
					kode_sublok.push(data.row[coba].kode_sublok);
					tgl.push(data.row[coba].created_at);
					lat.push(data.row[coba].lat);
					lon.push(data.row[coba].lon);
				}
				if (data.rowCount > 0) {
					$('#idbangunan').val(id);
					$('#lat').val(lat);
					$('#long').val(lon);
					// $('#cardReview').html('<div class="row"> <label class="col-md-6 col-form-label">Nomor Token :</label> <label class="col-md-6 col-form-label">'+code[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Nama Pemohon :</label> <label class="col-md-6 col-form-label">'+nama[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">NIB :</label> <label class="col-md-6 col-form-label">'+nib[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">NPWP :</label> <label class="col-md-6 col-form-label">'+npwp[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Tanggal Permohonan :</label> <label class="col-md-6 col-form-label">'+tgl[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Status Zonasi :</label> <label class="col-md-6 col-form-label">'+zona[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Kode Sub Blok :</label> <label class="col-md-6 col-form-label">'+kode_sublok[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Alamat :</label> <label class="col-md-6 col-form-label">'+alamat[0]+'</label> </div>');
					$.getScript("https://iuts.pkkmart.com/admin/assets/js/mapsadmin.js", function() {
					});	
					localStorage.setItem('idbangunanuser',id);
					adminteknis();
					kepaladinas();
				}
				
			} 
		}
	});				
}
function adminitrasi() {
	$.ajax({
		url: BASE_URL + 'UserController/detailPemohonAdministrasi',
		type: 'POST',
		dataType: 'json',
		data: {idizin:localStorage.getItem('idbangunanuser')},
		success:function(data) {
			if (data.success) {
				var statusiuts = [];
				var fotoiuts = [];
				var statusslf = [];
				var fotoiuts = [];
				var jenisslf = [];
				var jenisiuts = [];
				for(var coba in data.row){
					statusiuts.push(data.row[coba].statusiuts);
					fotoiuts.push(data.row[coba].fotoiuts);
					statusslf.push(data.row[coba].statusslf);
					fotoiuts.push(data.row[coba].fotoiuts);
					jenisslf.push(data.row[coba].jenisslf);
					jenisiuts.push(data.row[coba].jenisiuts);
				}
				if (data.rowCount > 0) {
					$('#ket_pemohon').removeAttr('style');
					$('#ket_pemohon').removeAttr('style');
					for(var coba in data.row){
						$('#ket_pemohon').html('<p>'+data.row[coba].jenisslf+' <span class="badge badge-default">'+data.row[coba].statusslf+'</span></p><p>'+data.row[coba].jenisiuts+' <span class="badge badge-default">'+data.row[coba].statusiuts+'</span></p>'); 
					}
				}
			}
		}
	})
}
function adminteknis() {
	$.ajax({
		url: BASE_URL + 'UserController/detailPemohonteknis',
		type: 'POST',
		dataType: 'json',
		data: {idbangunan:localStorage.getItem('idbangunanuser'),id:localStorage.getItem('iduser')},
		success:function(data) {
			if (data.success) {
				var skorjarakpasar = [];
				var skorrenjalan = [];
				var skorjalaneksis = [];
				var skorpenglahan = [];
				var skormanfaat = [];
				var skorjarakusaha = [];
				for(var coba in data.row){
					skorjarakpasar.push(data.row[coba].skorjarakpasar);
					skorrenjalan.push(data.row[coba].skorrenjalan);
					skorjalaneksis.push(data.row[coba].skorjalaneksis);
					skorjarakusaha.push(data.row[coba].skorjarakusaha);
					skorpenglahan.push(data.row[coba].skorpenglahan);
					skormanfaat.push(data.row[coba].skormanfaat);
				}
				var skor = parseFloat(skorjarakpasar)+parseFloat(skorrenjalan)+parseFloat(skorjalaneksis)+parseFloat(skorjarakusaha)+parseFloat(skorpenglahan);
				var skorakumulasi = parseFloat(skor)/5;
				if (data.rowCount > 0) {
					$('#ket_pemohon').removeAttr('style');
					$('#ket_teknis').html('<p>Nilai permohonan Anda pada tahap Admin Teknis sebesar <span class="badge badge-default">'+skormanfaat[0]+'</span> (Akumulasi Nilai Teknis)</p><p class="m-0">Berikut ini adalah rincian nilai teknis Anda:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Jarak terhadap Pasar Tradisional: <span class="badge badge-default">'+skorjarakpasar[0]+'</span></li><li class="list-group-item p-1">- Rencana jalan memadai: <span class="badge badge-default">'+skorrenjalan[0]+'</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Penggunaan lahan sekitar: <span class="badge badge-default">'+skorpenglahan[0]+'</span></li><li class="list-group-item p-1">- Jarak ke Usaha Sejenis: <span class="badge badge-default">'+skorjarakusaha[0]+'</span></li><li class="list-group-item p-1">- Jalan eksisting memadai: <span class="badge badge-default">'+skorjalaneksis[0]+'</span></li></ul></div></div>');
					$('#ket_pemohon').html('<p>Nilai permohonan Anda pada tahap Admin Teknis sebesar <span class="badge badge-default">'+skormanfaat[0]+'</span> (Akumulasi Nilai Teknis)</p><p class="m-0">Berikut ini adalah rincian nilai teknis Anda:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Jarak terhadap Pasar Tradisional: <span class="badge badge-default">'+skorjarakpasar[0]+'</span></li><li class="list-group-item p-1">- Rencana jalan memadai: <span class="badge badge-default">'+skorrenjalan[0]+'</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Penggunaan lahan sekitar: <span class="badge badge-default">'+skorpenglahan[0]+'</span></li><li class="list-group-item p-1">- Jarak ke Usaha Sejenis: <span class="badge badge-default">'+skorjarakusaha[0]+'</span></li><li class="list-group-item p-1">- Jalan eksisting memadai: <span class="badge badge-default">'+skorjalaneksis[0]+'</span></li></ul></div></div>');
					
				}
			}
		}
	})
}
function kepaladinas() {
	$.ajax({
		url: BASE_URL + 'UserController/detailPemohonDinas',
		type: 'POST',
		dataType: 'json',
		data: {idbangunan:localStorage.getItem('idbangunanuser'),id:localStorage.getItem('iduser')},
		success:function(data) {
			if (data.success) {
				var skor_akhir = [];
				var status = [];
				var tgl = [];
				var keterangan = [];
				for(var coba in data.row){
					skor_akhir.push(data.row[coba].skor_akhir);
					status.push(data.row[coba].status);
					tgl.push(data.row[coba].tanggal);
					keterangan.push(data.row[coba].keterangan);
				}
				if (data.rowCount > 0) {
					$('#ket_pemohon').removeAttr('style');
					if (status[0] == '1') {
						var statuskepaladinas = 'Di Terima';
					}else{
						var statuskepaladinas = 'Di Tolak';
					}
					if (tgl[0] == '0000-00-00' || tgl[0] == null) {
						var tanggal = 'Belum ada Tanggal';
					}else{
						var tanggal = tgl[0];
					}
					if (parseFloat(skor_akhir[0]) < 1.5) {
						var statuswebsite = 'Di Tolak';
					}else if (parseFloat(skor_akhir[0]) < 2.5) {
						var statuswebsite = 'Di Terima Dengan Catatan';
					}else if(parseFloat(skor_akhir[0]) > 2.5) {
						var statuswebsite = 'Di Terima';
					}
					$('#catatan').html(keterangan);
					$('#ket_dinas').html('<p class="m-0">Nilai akhir permohonan Anda sebesar<span class="badge badge-default">'+skor_akhir[0]+'</span>(Nilai Akhir)</p><p>Perizinan Anda<span class="badge badge-success">'+statuswebsite+'</span></p><p>Permohonan Anda<span class="badge badge-success">'+statuskepaladinas+'</span>oleh Kepala Dinas PMPTSP<br>Silakan temui Admin Administrasi di Kantor PMPTSP Provinsi, Gedung Mal Pelayanan Publik<br><label><b>Pada '+tanggal+'.</b></label></p>'); 
					$('#ket_pemohon').html('<p class="m-0">Nilai akhir permohonan Anda sebesar<span class="badge badge-default">'+skor_akhir[0]+'</span>(Nilai Akhir)</p><p>Perizinan Anda<span class="badge badge-success">'+statuskepaladinas+'</span></p><p>Permohonan Anda<span class="badge badge-success">'+statuskepaladinas+'</span>oleh Kepala Dinas PMPTSP<br>Silakan temui Admin Administrasi di Kantor PMPTSP Provinsi, Gedung Mal Pelayanan Publik<br><label><b>Pada '+tanggal+'.</b></label></p>'); 
				}
			}
		}
	})
}
function pemohonselajutnya() {
	$.ajax({
		url: BASE_URL + 'UserController/detailPemohonAmbil',
		type: 'POST',
		dataType: 'json',
		data: {idbangunan:localStorage.getItem('idbangunanuser'),id:localStorage.getItem('iduser')},
		success:function(data) {
			if (data.success) {
				var tgl_ambil = [];
				for(var coba in data.row){
					tgl_ambil.push(data.row[coba].tgl_ambil);
				}
				if (data.rowCount > 0) {
					$('#ket_pemohon').removeAttr('style');
					if (tgl_ambil[0] == '0000-00-00' || tgl_ambil[0] == null) {
						var tgl = 'Silakan Selesai Kan Permohonan Anda';
					}else{
						var tgl = tgl_ambil[0];
					}
					$('#ket_pemohon').html('<p class="m-0">Anda telah mengambil izin pada '+datePHPJS("d-F-Y", new Date(tgl))+'</p>'); 
				}
			}
		}
	});
}


timeline = {
	datapesan:function() {
		var datas = {id:localStorage.getItem("iduser")};
		$.ajax({
			url: BASE_URL + 'UserController/detailPesan',
			type: 'POST',
			data: datas,
			dataType : 'json',
			success:function(data) {
				var pengirim = [];
				var penerima = [];
				var pesan = [];
				var tanggal = [];
				var id = [];
				for(var coba in data.row){
					pengirim.push(data.row[coba].id_pengirim);
					penerima.push(data.row[coba].id_penerima);
					pesan.push(data.row[coba].pesan);
					tanggal.push(data.row[coba].created_at);
					id.push(data.row[coba].id_pesan);
				}
				// console.log(nama.length);
				if (pesan.length == 0) {
					$("#pesanrow").html('<p>Belum ada pesan</p>');
				}
				for (var i = 0; i < pesan.length; i++) {
					if (pengirim[i]===localStorage.getItem("iduser")) {
						$("#detailpesan").append("<div class='chat-message chat-message-sender'><div class='chat-message-wrapper'><div class='chat-message-content'><p>"+pesan[i]+"</p></div><div class='chat-details'><span class='chat-message-localisation font-size-small'>Time</span><span class='chat-message-read-status font-size-small'>- Date</span></div></div></div>");
					}else if(penerima[i]===localStorage.getItem("iduser")){
						$("#detailpesan").append("<div class='chat-message chat-message-recipient'><img class='chat-image chat-image-default img-thumbnail' src='assets/images/profile-picture.png'/><div class='chat-message-wrapper'><div class='chat-message-content'><p>"+pesan[i]+"</p></div><div class='chat-details'><span class='chat-message-localization font-size-small'>Time</span><span class='chat-message-read-status font-size-small'>- Date</span></div></div></div>");
					}
				}
			}
		})
	},
	dataizin:function() {
		var datas = {id:localStorage.getItem("iduser"),status:localStorage.getItem("typestatus"),start:0,offset:99};
		$.ajax({
			url: BASE_URL + 'UserController/listPermohonan',
			type: 'POST',
			data: datas,
			dataType : 'json',
			success:function(data) {
				var nama = [];
				var status = [];
				var jenis = [];
				var code = [];
				var tanggal = [];
				var tujuan = [];
				var id_slf = [];
				var id_izin = [];
				var id_iuts = [];
				for(var coba in data.row){
					id_izin.push(data.row[coba].id_izin);
					id_slf.push(data.row[coba].id_slf);
					id_iuts.push(data.row[coba].id_iuts);
					nama.push(data.row[coba].nama);
					status.push(data.row[coba].status);
					jenis.push(data.row[coba].jenis);
					code.push(data.row[coba].code);
					tanggal.push(data.row[coba].created_at);
				}
				// console.log(nama.length);
				if (nama.length == 0) {
					$("#izinnya").html('<div class="col-md-12"><div class="card card-stats mb-4 mb-xl-0"><div class="card-body"><p class="m-0">Tidak ada Data</p></div></div></div>');
				}
				for (var i = 0; i < nama.length; i++) {
					// console.log(status[i]);
					if (status[i] == '0') {
						var statuscard = 'Di Proses';
						var warna = 'yellow';
						var css = 'proses';
					}else if(status[i] == '1'){
						var statuscard = 'Di Terima';
						var warna = 'success';
						var css = 'diterima';
					}else if(status[i] == '2'){
						var statuscard = 'Di Tolak';
						var warna = 'danger';
						var css = 'ditolak';
					}else if (status[i] == '3') {
						var statuscard = 'Expired';
						var css = 'expired';
						var warna = 'primary';
					}
					if (id_slf[i] == '') {
						var idnya = id_iuts[i];
					}else{
						var idnya = id_slf[i];
					}
					$("#izinnya").append('<div class="col-xl-3 col-lg-6"><a href="javascript:void(0);" onclick="Detailpemohon('+"'"+id_izin[i]+"'"+')" class="text-default"><div class="card card-stats mb-4 mb-xl-0"><div class="ribbon ribbon-top-right '+css+'"><span class="bg-'+warna+'">'+statuscard+'</span></div><div class="card-body"><div class="row"><div class="col"><h5 class="card-title text-uppercase text-darker mb-0">Nama Pemohon</h5><span class="font-weight-bold">'+nama[i]+'</span><label class="hr-card"></label><h5 class="card-title text-uppercase text-darker mb-0">Tanggal Pengajuan</h5><span class="font-weight-bold">'+datePHPJS("d/F/Y", new Date(data.row[i].created_at))+'</span><label class="hr-card"></label><h5 class="card-title text-uppercase text-darker mb-0">Jenis Izin</h5><span class="font-weight-bold">'+jenis[i]+'</span></div></div><p class="mt-3 mb-0 text-darker text-sm"><span class="text-danger mr-2 badge badge-primary" style="font-size: 18px;">#'+code[i]+'</span><span class="text-nowrap">Nomor Token</span></p></div></div></a></div>');
				}
			}
		})
	},
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
				var jenis = [];
				var code = [];
				var tanggal = [];
				var id_slf = [];
				var id_iuts = [];
				var id_izin = [];
				for(var coba in data.row){
					id_izin.push(data.row[coba].id_izin);
					id_slf.push(data.row[coba].id_slf);
					id_iuts.push(data.row[coba].id_iuts);
					nama.push(data.row[coba].nama);
					status.push(data.row[coba].status);
					jenis.push(data.row[coba].jenis);
					code.push(data.row[coba].code);
					tanggal.push(data.row[coba].created_at);
				}

				if (nama.length == 0) {
				// console.log(nama.length);
				$("#izinnya").html('<div class="col-md-12"><div class="card card-stats mb-4 mb-xl-0"><div class="card-body"><p class="m-0">Tidak ada Data</p></div></div></div>');
			}
			for (var i = 0; i < nama.length; i++) {
				// console.log(email[i]);
				if (status[i] == '0') {
					var statuscard = 'Di Proses';
					var warna = 'yellow';
					var css = 'proses';
				}else if(status[i] == '1'){
					var statuscard = 'Di Terima';
					var warna = 'success';
					var css = 'diterima';
				}else if(status[i] == '2'){
					var statuscard = 'Di Tolak';
					var warna = 'danger';
					var css = 'ditolak';
				}else if (status[i] == '3') {
					var statuscard = 'Expired';
					var css = 'expired';
					var warna = 'primary';
				}
				if (id_slf[i] == '') {
					var idnya = id_iuts[i];
				}else{
					var idnya = id_slf[i];
				}
				$("#izinnya").append('<div class="col-xl-3 col-lg-6"><a href="javascript:void(0);" onclick="lihatpemohon('+"'"+id_izin[i]+"'"+')" class="text-default"><div class="card card-stats mb-4 mb-xl-0"><div class="ribbon ribbon-top-right '+css+'"><span class="bg-'+warna+'">'+statuscard+'</span></div><div class="card-body"><div class="row"><div class="col"><h5 class="card-title text-uppercase text-darker mb-0">Nama Pemohon</h5><span class="font-weight-bold">'+nama[i]+'</span><label class="hr-card"></label><h5 class="card-title text-uppercase text-darker mb-0">Tanggal Pengajuan</h5><span class="font-weight-bold">'+datePHPJS("d/F/Y", new Date(data.row[i].created_at))+'</span><label class="hr-card"></label><h5 class="card-title text-uppercase text-darker mb-0">Jenis Izin</h5><span class="font-weight-bold">'+jenis[i]+'</span></div></div><p class="mt-3 mb-0 text-darker text-sm"><span class="text-danger mr-2 badge badge-primary" style="font-size: 18px;">#'+code[i]+'</span><span class="text-nowrap">Nomor Token</span></p></div></div></a></div>');
			}
		}
	})
	},
	datatimeline:function() {
		var datas = {code:localStorage.getItem("idbangunanuser")};
		$.ajax({
			url: BASE_URL + 'UserController/getTimelinePemohon',
			type: 'POST',
			data: datas,
			dataType : 'json',
			success:function(data) {
				var status = [];
				var tgl = [];
				for(var coba in data.row){
					status.push(data.row[coba].status_jalan);
					tgl.push(data.row[coba].created_at);
				}
				for (var i = 0; i < status.length; i++) {
					if (status[i] == '0') {
						$('#pemohon').addClass('active');
						$('#ket_pemohon').removeAttr('style');
						$('#ket_pemohon').html('<p>Anda mengajukan izin '+datePHPJS("d-F-Y", new Date(tgl[i]))+'</p>');
					}else if (status[i] == '1') {
						$.ajax({
							url: BASE_URL + 'UserController/detailPemohonAdministrasi',
							type: 'POST',
							dataType: 'json',
							data: {idbangunan:localStorage.getItem('idbangunanuser'),id:localStorage.getItem('iduser')},
							success:function(data) {
								if (data.success) {
									var statusiuts = [];
									var fotoiuts = [];
									var statusslf = [];
									var fotoiuts = [];
									var jenisslf = [];
									var jenisiuts = [];
									for(var coba in data.row){
										statusiuts.push(data.row[coba].statusiuts);
										fotoiuts.push(data.row[coba].fotoiuts);
										statusslf.push(data.row[coba].statusslf);
										fotoiuts.push(data.row[coba].fotoiuts);
										jenisslf.push(data.row[coba].jenisslf);
										jenisiuts.push(data.row[coba].jenisiuts);
									}
									if (data.rowCount > 0) {
										$('#ket_pemohon').removeAttr('style');
										for(var coba in data.row){
											$('#ket_pemohon').html('<p>'+data.row[coba].jenisslf+' <span class="badge badge-default">'+data.row[coba].statusslf+'</span></p><p>'+data.row[coba].jenisiuts+' <span class="badge badge-default">'+data.row[coba].statusiuts+'</span></p>'); 
										}
									}
								}
							}
						})
					}else if(status[i] == '2'){
						$('#pemohon').addClass('active');
						$('#adminitrasi').addClass('active');
						$('#adminteknis').addClass('active');
						$.ajax({
							url: BASE_URL + 'UserController/detailPemohonteknis',
							type: 'POST',
							dataType: 'json',
							data: {idizin:localStorage.getItem('idbangunanuser')},
							success:function(data) {
								if (data.success) {
									var skorjarakpasar = [];
									var skorrenjalan = [];
									var skorjalaneksis = [];
									var skorpenglahan = [];
									var skormanfaat = [];
									var skorjarakusaha = [];
									for(var coba in data.row){
										skorjarakpasar.push(data.row[coba].skorjarakpasar);
										skorrenjalan.push(data.row[coba].skorrenjalan);
										skorjalaneksis.push(data.row[coba].skorjalaneksis);
										skorjarakusaha.push(data.row[coba].skorjarakusaha);
										skorpenglahan.push(data.row[coba].skorpenglahan);
										skormanfaat.push(data.row[coba].skormanfaat);
									}
									var skor = parseFloat(skorjarakpasar)+parseFloat(skorrenjalan)+parseFloat(skorjalaneksis)+parseFloat(skorjarakusaha)+parseFloat(skorpenglahan);
									var skorakumulasi = parseFloat(skor)/5;
									if (data.rowCount > 0) {
										$('#ket_pemohon').removeAttr('style');
										$('#ket_pemohon').html('<p>Nilai permohonan Anda pada tahap Admin Teknis sebesar <span class="badge badge-default">'+String(skorakumulasi).substr(0, 4)+'</span> (Akumulasi Nilai Teknis)</p><p class="m-0">Berikut ini adalah rincian nilai teknis Anda:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Jarak terhadap Pasar Tradisional: <span class="badge badge-default">'+skorjarakpasar[0]+'</span></li><li class="list-group-item p-1">- Rencana jalan memadai: <span class="badge badge-default">'+skorrenjalan[0]+'</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Penggunaan lahan sekitar: <span class="badge badge-default">'+skorpenglahan[0]+'</span></li><li class="list-group-item p-1">- Jarak ke Usaha Sejenis: <span class="badge badge-default">'+skorjarakusaha[0]+'</span></li><li class="list-group-item p-1">- Jalan eksisting memadai: <span class="badge badge-default">'+skorjalaneksis[0]+'</span></li></ul></div></div>'); 
									}
								}
							}
						});
					}else if (status[i] == '3') {
						$('#pemohon').addClass('active');
						$('#adminitrasi').addClass('active');
						$('#adminteknis').addClass('active');
						$('#kepaladinas').addClass('active');
						$.ajax({
							url: BASE_URL + 'UserController/detailPemohonDinas',
							type: 'POST',
							dataType: 'json',
							data: {idbangunan:localStorage.getItem('idbangunanuser'),id:localStorage.getItem('iduser')},
							success:function(data) {
								if (data.success) {
									var skor_akhir = [];
									var status = [];
									var tgl = [];
									for(var coba in data.row){
										skor_akhir.push(data.row[coba].skor_akhir);
										status.push(data.row[coba].status);
										tgl.push(data.row[coba].tanggal);
									}

									if (data.rowCount > 0) {
										$('#ket_pemohon').removeAttr('style');
										if (status[0] == '1') {
											var statuskepaladinas = 'Di Terima';
										}else{
											var statuskepaladinas = 'Di Tolak';
										}
										if (tgl[0] == '0000-00-00' || tgl[0] == null) {
											var tanggal = 'Belum ada Tanggal';
										}else{
											var tanggal = tgl[0];
										}
										$('#ket_pemohon').html('<p class="m-0">Nilai akhir permohonan Anda sebesar<span class="badge badge-default">'+skor_akhir[0]+'</span>(Nilai Akhir)</p><p>Perizinan Anda<span class="badge badge-success">'+statuskepaladinas+'</span></p><p>Permohonan Anda<span class="badge badge-success">'+statuskepaladinas+'</span>oleh Kepala Dinas PMPTSP<br>Silakan temui Admin Administrasi di Kantor PMPTSP Provinsi, Gedung Mal Pelayanan Publik<br><label><b>Pada '+tanggal+'.</b></label></p>'); 
									}
								}
							}
						});
					}else if (status[i] == '4'){
						$('#pemohon').addClass('active');
						$('#adminitrasi').addClass('active');
						$('#adminteknis').addClass('active');
						$('#kepaladinas').addClass('active');
						$('#adminstrasiselanjutnya').addClass('active');
						$.ajax({
							url: BASE_URL + 'UserController/detailPemohonDinas',
							type: 'POST',
							dataType: 'json',
							data: {idbangunan:localStorage.getItem('idbangunanuser'),id:localStorage.getItem('iduser')},
							success:function(data) {
								if (data.success) {
									var skor_akhir = [];
									var status = [];
									var tgl = [];
									for(var coba in data.row){
										skor_akhir.push(data.row[coba].skor_akhir);
										status.push(data.row[coba].status);
										tgl.push(data.row[coba].tanggal);
									}

									if (data.rowCount > 0) {
										$('#ket_pemohon').removeAttr('style');
										if (status[0] == '1') {
											var statuskepaladinas = 'Di Terima';
										}else{
											var statuskepaladinas = 'Di Tolak';
										}
										if (tgl[0] == '0000-00-00' || tgl[0] == null) {
											var tanggal = 'Belum ada Tanggal';
										}else{
											var tanggal = tgl[0];
										}
										$('#ket_pemohon').html('<p class="m-0">Nilai akhir permohonan Anda sebesar<span class="badge badge-default">'+skor_akhir[0]+'</span>(Nilai Akhir)</p><p>Perizinan Anda<span class="badge badge-success">'+statuskepaladinas+'</span></p><p>Permohonan Anda<span class="badge badge-success">'+statuskepaladinas+'</span>oleh Kepala Dinas PMPTSP<br>Silakan temui Admin Administrasi di Kantor PMPTSP Provinsi, Gedung Mal Pelayanan Publik<br><label><b>Pada '+tanggal+'.</b></label></p>'); 
									}
								}
							}
						});

					}else if (status[i] == '5'){
						$('#pemohon').addClass('active');
						$('#adminitrasi').addClass('active');
						$('#adminteknis').addClass('active');
						$('#kepaladinas').addClass('active');
						$('#adminstrasiselanjutnya').addClass('active');
						$('#pemohonselajutnya').addClass('active');
						$.ajax({
							url: BASE_URL + 'UserController/detailPemohonAmbil',
							type: 'POST',
							dataType: 'json',
							data: {idbangunan:localStorage.getItem('idbangunanuser'),id:localStorage.getItem('iduser')},
							success:function(data) {
								if (data.success) {
									var tgl_ambil = [];
									for(var coba in data.row){
										tgl_ambil.push(data.row[coba].tgl_ambil);
									}

									if (data.rowCount > 0) {
										$('#ket_pemohon').removeAttr('style');
										if (tgl_ambil[0] == '0000-00-00' || tgl_ambil[0] == null) {
											var tgl = 'Silakan Selesai Kan Permohonan Anda';
										}else{
											var tgl = tgl_ambil[0];
										}
										$('#ket_pemohon').html('<p class="m-0">Anda telah mengambil izin pada '+datePHPJS("d-F-Y", new Date(tgl))+'</p>'); 
									}
								}
							}
						});
					}

				}
			}
		})
},
};
$("#serahForm").submit(function (event) {
	var data = new FormData($(this)[0]);
	$.ajax({
		url: BASE_URL + 'UserController/KonfirmasiIzin',
		type: "POST",
		dataType:'json',
		data: {id:localStorage.getItem('iduser'),pesan:$('#pesan').val()},
		contentType: false,
		cache: false,
		processData: false,
		beforeSend:function(argument) {
			$(".loader-overlay").removeAttr('style');
		},
		success: function (response) {
			if (response.success == false) {
				Swal.fire(
					''+response.msg+'',
					);
			}else{
				Swal.fire(
					'Silakan Menunggu Balasan dari petugas',
					);

				$("#serahForm")[0].reset();
			}

		},
		error: function () {
			Swal.fire(
				'"'+response.msg+'"',
				'Hubungi Tim Terkait',
				);
		}
	});
});
$("#kirimpesan").submit(function (event) {
	var data = new FormData($(this)[0]);
	$.ajax({
		url: BASE_URL + 'UserController/SendMessage',
		type: "POST",
		dataType:'json',
		data: {id:localStorage.getItem('iduser'),pesan:$('#pesan').val()},
		beforeSend:function(argument) {
			$(".loader-overlay").removeAttr('style');
		},
		success: function (response) {
			if (response.success == false) {
				Swal.fire(
					''+response.msg+'',
					);
			}else{
				Swal.fire(
					'Silakan Menunggu Balasan dari petugas',
					);

				$("#kirimpesan")[0].reset();
			}

		},
		error: function () {
			Swal.fire(
				'"'+response.msg+'"',
				'Hubungi Tim Terkait',
				);
		}
	});
});
function lihatpemohon(code) {
	$.ajax({
		url: BASE_URL + 'UserController/getTimelinePemohon',
		type: 'POST',
		dataType: 'json',
		data: {code: code},
		success:function(data) {
			if (data.success) {
				// console.log(data);
				localStorage.setItem("idbangunanuser",code);
				window.location.href = 'timeline_pemohon.html';
			}
		}
	})
}
$("#logout").click(function(event) {
	localStorage.clear();
	window.location.href = 'login.html';
});
if (typeof(Storage) !== "undefined") {
	if (localStorage.getItem('iduser') === null) {
		window.location.href = 'login.html';
	}
}else{
	navigator.sayswho= (function(){
		var ua= navigator.userAgent, tem, 
		M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
		if(/trident/i.test(M[1])){
			tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
			return 'IE '+(tem[1] || '');
		}
		if(M[1]=== 'Chrome'){
			tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
			if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
		}
		M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
		if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
		return M.join(' ');
	})();
	alert(navigator.sayswho + "Tidak Mendukung, Silakan Perbaharui Browser anda");
}
function datePHPJS(format, timestamp) {

	var that = this;
	var jsdate, f;
	// Keep this here (works, but for code commented-out below for file size reasons)
	// var tal= [];
	var txt_words = [
	'Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur',
	'January', 'February', 'March', 'April', 'May', 'June',
	'July', 'August', 'September', 'October', 'November', 'December'
	];
	// trailing backslash -> (dropped)
	// a backslash followed by any character (including backslash) -> the character
	// empty string -> empty string
	var formatChr = /\\?(.?)/gi;
	var formatChrCb = function (t, s) {
		return f[t] ? f[t]() : s;
	};
	var _pad = function (n, c) {
		n = String(n);
		while (n.length < c) {
			n = '0' + n;
		}
		return n;
	};
	f = {
		// Day
		d: function () { // Day of month w/leading 0; 01..31
			return _pad(f.j(), 2);
		},
		D: function () { // Shorthand day name; Mon...Sun
			return f.l()
			.slice(0, 3);
		},
		j: function () { // Day of month; 1..31
			return jsdate.getDate();
		},
		l: function () { // Full day name; Monday...Sunday
			return txt_words[f.w()] + 'day';
		},
		N: function () { // ISO-8601 day of week; 1[Mon]..7[Sun]
			return f.w() || 7;
		},
		S: function () { // Ordinal suffix for day of month; st, nd, rd, th
			var j = f.j();
			var i = j % 10;
			if (i <= 3 && parseInt((j % 100) / 10, 10) == 1) {
				i = 0;
			}
			return ['st', 'nd', 'rd'][i - 1] || 'th';
		},
		w: function () { // Day of week; 0[Sun]..6[Sat]
			return jsdate.getDay();
		},
		z: function () { // Day of year; 0..365
			var a = new Date(f.Y(), f.n() - 1, f.j());
			var b = new Date(f.Y(), 0, 1);
			return Math.round((a - b) / 864e5);
		},
		// Week
		W: function () { // ISO-8601 week number
			var a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3);
			var b = new Date(a.getFullYear(), 0, 4);
			return _pad(1 + Math.round((a - b) / 864e5 / 7), 2);
		},
		// Month
		F: function () { // Full month name; January...December
			return txt_words[6 + f.n()];
		},
		m: function () { // Month w/leading 0; 01...12
			return _pad(f.n(), 2);
		},
		M: function () { // Shorthand month name; Jan...Dec
			return f.F()
			.slice(0, 3);
		},
		n: function () { // Month; 1...12
			return jsdate.getMonth() + 1;
		},
		t: function () { // Days in month; 28...31
			return (new Date(f.Y(), f.n(), 0))
			.getDate();
		},
		// Year
		L: function () { // Is leap year?; 0 or 1
			var j = f.Y();
			return j % 4 === 0 & j % 100 !== 0 | j % 400 === 0;
		},
		o: function () { // ISO-8601 year
			var n = f.n();
			var W = f.W();
			var Y = f.Y();
			return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
		},
		Y: function () { // Full year; e.g. 1980...2010
			return jsdate.getFullYear();
		},
		y: function () { // Last two digits of year; 00...99
			return f.Y()
			.toString()
			.slice(-2);
		},
		// Time
		a: function () { // am or pm
			return jsdate.getHours() > 11 ? 'pm' : 'am';
		},
		A: function () { // AM or PM
			return f.a()
			.toUpperCase();
		},
		B: function () { // Swatch Internet time; 000..999
			var H = jsdate.getUTCHours() * 36e2;
			// Hours
			var i = jsdate.getUTCMinutes() * 60;
			// Minutes
			var s = jsdate.getUTCSeconds(); // Seconds
			return _pad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3);
		},
		g: function () { // 12-Hours; 1..12
			return f.G() % 12 || 12;
		},
		G: function () { // 24-Hours; 0..23
			return jsdate.getHours();
		},
		h: function () { // 12-Hours w/leading 0; 01..12
			return _pad(f.g(), 2);
		},
		H: function () { // 24-Hours w/leading 0; 00..23
			return _pad(f.G(), 2);
		},
		i: function () { // Minutes w/leading 0; 00..59
			return _pad(jsdate.getMinutes(), 2);
		},
		s: function () { // Seconds w/leading 0; 00..59
			return _pad(jsdate.getSeconds(), 2);
		},
		u: function () { // Microseconds; 000000-999000
			return _pad(jsdate.getMilliseconds() * 1000, 6);
		},
		// Timezone
		e: function () { // Timezone identifier; e.g. Atlantic/Azores, ...
			// The following works, but requires inclusion of the very large
			// timezone_abbreviations_list() function.
			/*              return that.date_default_timezone_get();
			*/
			throw 'Not supported (see source code of date() for timezone on how to add support)';
		},
		I: function () { // DST observed?; 0 or 1
			// Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
			// If they are not equal, then DST is observed.
			var a = new Date(f.Y(), 0);
			// Jan 1
			var c = Date.UTC(f.Y(), 0);
			// Jan 1 UTC
			var b = new Date(f.Y(), 6);
			// Jul 1
			var d = Date.UTC(f.Y(), 6); // Jul 1 UTC
			return ((a - c) !== (b - d)) ? 1 : 0;
		},
		O: function () { // Difference to GMT in hour format; e.g. +0200
			var tzo = jsdate.getTimezoneOffset();
			var a = Math.abs(tzo);
			return (tzo > 0 ? '-' : '+') + _pad(Math.floor(a / 60) * 100 + a % 60, 4);
		},
		P: function () { // Difference to GMT w/colon; e.g. +02:00
			var O = f.O();
			return (O.substr(0, 3) + ':' + O.substr(3, 2));
		},
		T: function () { // Timezone abbreviation; e.g. EST, MDT, ...
			return 'UTC';
		},
		Z: function () { // Timezone offset in seconds (-43200...50400)
			return -jsdate.getTimezoneOffset() * 60;
		},
		// Full Date/Time
		c: function () { // ISO-8601 date.
			return 'Y-m-d\\TH:i:sP'.replace(formatChr, formatChrCb);
		},
		r: function () { // RFC 2822
			return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb);
		},
		U: function () { // Seconds since UNIX epoch
			return jsdate / 1000 | 0;
		}
	};
	this.date = function (format, timestamp) {
		that = this;
		jsdate = (timestamp === undefined ? new Date() : // Not provided
				(timestamp instanceof Date) ? new Date(timestamp) : // JS Date()
					new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
					);
		return format.replace(formatChr, formatChrCb);
	};
	return this.date(format, timestamp);
}

$('.toggle').click(function(e) {
	e.preventDefault();

	var $this = $(this);

	if ($this.next().hasClass('show')) {
		$this.next().removeClass('show');
		$this.next().slideUp(350);
	} else {
		$this.parent().parent().find('li .inner').removeClass('show');
		$this.parent().parent().find('li .inner').slideUp(350);
		$this.next().toggleClass('show');
		$this.next().slideToggle(350);
	}
});