
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
function Klikubah() {
	window.location.href = 'edit_perizinan.html';
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
				var nib = [];
				var npwp = [];
				var tgl = [];
				var alamat = [];
				var zona = [];
				var kode_sublok = [];
				var lat = [];
				var lon = [];
				/* data administrasi pemohon*/
				var nama = [];
				var jenis_pemohon = [];
				var jabatan = [];
				var nik = [];
				var nib = [];
				var npwp = [];
				var alamat_usaha = [];
				var no_hp = [];
				var email = [];
				/* data administrasi pemohon*/

				/* Data Umum Bangunan */
				var nopd = [];
				var luas_lahan = [];
				var status_bangunan = [];
				var luas_tapak = [];
				var jumlah_lantai = [];
				var luas_total_bangunan = [];
				var tinggi_bangunan = [];
				var peruntukan_bangunan = [];
				/* Data Umum Bangunan */

				/* Data Keseimbangan, Keserasian, Keselarasan Lingkungan */
				var id_kdh_minimum = [];
				var id_kondisi_kdh = [];
				var id_volume_sumur = [];
				var id_pertandaan_toko = [];
				var id_kondisi_sumur = [];
				var id_drainase = [];
				/* Data Keseimbangan, Keserasian, Keselarasan Lingkungan */

				/* Data Keselamatan dan Keamanan */
				var id_imb = [];
				var id_layak = [];
				var id_asuransi = [];
				var id_renovasi = [];
				/* Data Keselamatan dan Keamanan */

				/* Data Kesehatan */
				var id_bersih = [];
				var sumber_air = [];
				var id_limbah = [];
				var id_sampah = [];
				var id_listrik = [];
				/* Data Kesehatan */
				for(var coba in data.row){
					code.push(data.row[coba].code);
					alamat.push(data.row[coba].alamat);
					zona.push(data.row[coba].zona);
					kode_sublok.push(data.row[coba].kode_sublok);
					tgl.push(data.row[coba].created_at);
					lat.push(data.row[coba].lat);
					lon.push(data.row[coba].lon);
					/* data administrasi pemohon*/
					nama.push(data.row[coba].nama);
					jenis_pemohon.push(data.row[coba].jenis_pemohon);
					jabatan.push(data.row[coba].jabatan);
					nik.push(data.row[coba].nik);
					nib.push(data.row[coba].nib);
					npwp.push(data.row[coba].npwp);
					alamat_usaha.push(data.row[coba].alamat_usaha);
					no_hp.push(data.row[coba].no_hp);
					email.push(data.row[coba].email);
					/* data administrasi pemohon*/

					/* Data Umum Bangunan */
					nopd.push(data.row[coba].nopd);
					luas_lahan.push(data.row[coba].luas_lahan);
					status_bangunan.push(data.row[coba].status_bangunan);
					luas_tapak.push(data.row[coba].luas_tapak);
					jumlah_lantai.push(data.row[coba].jumlah_lantai);
					luas_total_bangunan.push(data.row[coba].luas_total_bangunan);
					tinggi_bangunan.push(data.row[coba].tinggi_bangunan);
					peruntukan_bangunan.push(data.row[coba].peruntukan_bangunan);
					/* Data Umum Bangunan */

					/* Data Keseimbangan, Keserasian, Keselarasan Lingkungan */
					id_kdh_minimum.push(data.row[coba].id_kdh_minimum);
					id_kondisi_kdh.push(data.row[coba].id_kondisi_kdh);
					id_volume_sumur.push(data.row[coba].id_volume_sumur);
					id_pertandaan_toko.push(data.row[coba].id_pertandaan_toko);
					id_kondisi_sumur.push(data.row[coba].id_kondisi_sumur);
					id_drainase.push(data.row[coba].id_drainase);
					/* Data Keseimbangan, Keserasian, Keselarasan Lingkungan */

					/* Data Keselamatan dan Keamanan */
					id_imb.push(data.row[coba].id_imb);
					id_layak.push(data.row[coba].id_layak);
					id_asuransi.push(data.row[coba].id_asuransi);
					id_renovasi.push(data.row[coba].id_renovasi);
					/* Data Keselamatan dan Keamanan */

					/* Data Kesehatan */
					id_bersih.push(data.row[coba].id_bersih);
					sumber_air.push(data.row[coba].sumber_air);
					id_limbah.push(data.row[coba].id_limbah);
					id_sampah.push(data.row[coba].id_sampah);
					id_listrik.push(data.row[coba].id_listrik);
					/* Data Kesehatan */
				}
				if (data.rowCount > 0) {
					$('#idbangunan').val(id);
					$('#lat').val(lat);
					$('#long').val(lon);
					/* data administrasi pemohon*/
					$('#nama_pj').text(nama);
					$('#status_pemohon').text(jenis_pemohon);
					$('#jabatan').text(jabatan);
					$('#nik').text(nik);
					$('#nib').text(nib);
					$('#npwp').text(npwp);
					$('#alamat_p').text(alamat_usaha);
					$('#nomor_telp').text(no_hp);
					$('#email').text(email);
					/* data administrasi pemohon*/

					/* Data Umum Bangunan */
					$('#nopd_b').text(nopd);
					$('#luas_lahan').text(luas_lahan);
					$('#status_lahan').text(status_bangunan);
					$('#luas_tapak').text(luas_tapak);
					$('#jumlah_lantai').text(jumlah_lantai);
					$('#luas_total').text(luas_total_bangunan);
					$('#tinggi_bangunan').text(tinggi_bangunan);
					$('#peruntukan_bangunan').text(peruntukan_bangunan);
					/* Data Umum Bangunan */

					/* Data Keseimbangan, Keserasian, Keselarasan Lingkungan */
					$('#luas_daerah_h').text(id_kdh_minimum);
					$('#kondisi_kdh').text(id_kondisi_kdh);
					$('#volume_sumur').text(id_volume_sumur);
					$('#kondisi_pertandaan_t').text(id_pertandaan_toko);
					$('#kondisi_sumur').text(id_kondisi_sumur);
					$('#drainase').text(id_drainase);
					/* Data Keseimbangan, Keserasian, Keselarasan Lingkungan */

					/* Data Keselamatan dan Keamanan */
					$('#imb').text(id_imb);
					$('#slf').text(id_layak);
					$('#asuransi').text(id_asuransi);
					$('#layak_gedung').text(id_renovasi);
					/* Data Keselamatan dan Keamanan */

					/* Data Keselamatan dan Keamanan */
					$('#imb').text(id_imb);
					$('#slf').text(id_layak);
					$('#asuransi').text(id_asuransi);
					$('#layak_gedung').text(id_renovasi);
					/* Data Keselamatan dan Keamanan */

					/* Data Keselamatan dan Keamanan */
					$('#air_bersih').text(id_bersih);
					$('#sumber_air').text(sumber_air);
					$('#limbah').text(id_limbah);
					$('#sampah').text(id_sampah);
					$('#listrik').text(id_listrik);
					/* Data Keselamatan dan Keamanan */

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
				var id_admin = [];
				var id_izin = [];
				var fotoktp = [];
				var fotonpwp = [];
				var fotoakta = [];
				var fotoluar = [];
				var fotodalam = [];
				var fotoimb = [];
				var fotoslf = [];
				var fotodamkar = [];
				var fototkt = [];
				var fotoasuransi = [];
				var fotopbb = [];
				var fotoperw = [];
				var fotorekumkm = [];
				var fotokajian = [];
				var keterangan = [];
				for(var coba in data.row){
					id_admin.push(data.row[coba].id_admin);
					id_izin.push(data.row[coba].id_izin);
					fotoktp.push(data.row[coba].fotoktp);
					fotonpwp.push(data.row[coba].fotonpwp);
					fotoakta.push(data.row[coba].fotoakta);
					fotoluar.push(data.row[coba].fotoluar);
					fotodalam.push(data.row[coba].fotodalam);
					fotoimb.push(data.row[coba].fotoimb);
					fotoslf.push(data.row[coba].fotoslf);
					fotodamkar.push(data.row[coba].fotodamkar);
					fototkt.push(data.row[coba].fototkt);
					fotoasuransi.push(data.row[coba].fotoasuransi);
					fotopbb.push(data.row[coba].fotopbb);
					fotoperw.push(data.row[coba].fotoperw);
					fotorekumkm.push(data.row[coba].fotorekumkm);
					fotokajian.push(data.row[coba].fotokajian);
					keterangan.push(data.row[coba].keterangan);
				}
				if (data.rowCount > 0) {
					$('#ket_pemohon').removeAttr('style');
					$('#ket_pemohon').removeAttr('style');
					for(var coba in data.row){
						if (data.row[coba].fotoktp == '1') {
							var statusktp = 'Berkas di Terima';
						}else if (data.row[coba].fotoktp == '2') {
							var statusktp = 'Silakan Bawa Berkas Ke DPMPTSP';
						}else{
							var statusktp = 'Tidak ada Berkas';
						} 

						if (data.row[coba].fotonpwp == '1') {
							var statusnpwp = 'Berkas di Terima';
						}else if (data.row[coba].fotonpwp == '2') {
							var statusnpwp = 'Silakan Bawa Berkas Ke DPMPTSP';
						}else {
							var statusnpwp = 'Tidak ada Berkas';
						}

						if (data.row[coba].fotoakta == '1') {
							var statusakta = 'Berkas di Terima';
						}else if (data.row[coba].fotoakta == '2') {
							var statusakta = 'Silakan Bawa Berkas Ke DPMPTSP';
						}else{
							var statusakta = 'Tidak ada Berkas';
						} 

						if (data.row[coba].fotoluar == '1') {
							var statusluar = 'Berkas di Terima';
						}else if (data.row[coba].fotoluar == '2') {
							var statusluar = 'Silakan Bawa Berkas Ke DPMPTSP';
						}else {
							var statusluar = 'Tidak ada Berkas';
						}
						if (data.row[coba].fotodalam == '1') {
							var statusdalam = 'Berkas di Terima';
						}else if (data.row[coba].fotodalam == '2') {
							var statusdalam = 'Silakan Bawa Berkas Ke DPMPTSP';
						}else{
							var statusdalam = 'Tidak ada Berkas';
						} 

						if (data.row[coba].fotoimb == '1') {
							var statusimb = 'Berkas di Terima';
						}else if (data.row[coba].fotoimb == '2') {
							var statusimb = 'Silakan Bawa Berkas Ke DPMPTSP';
						}else {
							var statusimb = 'Tidak ada Berkas';
						}
						if (data.row[coba].fotoslf == '1') {
							var statusslf = 'Berkas di Terima';
						}else if (data.row[coba].fotoslf == '2') {
							var statusslf = 'Silakan Bawa Berkas Ke DPMPTSP';
						}else{
							var statusslf = 'Tidak ada Berkas';
						} 

						if (data.row[coba].fotodamkar == '1') {
							var statusdamkar = 'Berkas di Terima';
						}else if (data.row[coba].fotodamkar == '2') {
							var statusdamkar = 'Silakan Bawa Berkas Ke DPMPTSP';
						}else{
							var statusdamkar = 'Tidak ada Berkas';
						} 

						if (data.row[coba].fototkt == '1') {
							var statustkt = 'Berkas di Terima';
						}else if (data.row[coba].fototkt == '2') {
							var statustkt = 'Silakan Bawa Berkas Ke DPMPTSP';
						}else{
							var statustkt = 'Tidak ada Berkas';
						} 

						if (data.row[coba].fotoasuransi == '1') {
							var statusasu = 'Berkas di Terima';
						}else if (data.row[coba].fotoasuransi == '2') {
							var statusasu = 'Silakan Bawa Berkas Ke DPMPTSP';
						}else {
							var statusasu = 'Tidak ada Berkas';
						}
						if (data.row[coba].fotopbb == '1') {
							var statuspbb = 'Berkas di Terima';
						}else if (data.row[coba].fotopbb == '2') {
							var statuspbb = 'Silakan Bawa Berkas Ke DPMPTSP';
						}else {
						}
						if (data.row[coba].fotoperw == '1') {
							var statusperw = 'Berkas di Terima';
						}else if (data.row[coba].fotoperw == '2') {
							var statusperw = 'Silakan Bawa Berkas Ke DPMPTSP';
						}else{
							var statusperw = 'Tidak ada Berkas';
						} 

						if (data.row[coba].fotorekumkm == '1') {
							var statusumkm = 'Berkas di Terima';
						}else if (data.row[coba].fotorekumkm == '2') {
							var statusumkm = 'Silakan Bawa Berkas Ke DPMPTSP';
						}else{
							var statusumkm = 'Tidak ada Berkas';
						} 
						if (data.row[coba].fotokajian == '1') {
							var statuskajian = 'Berkas di Terima';
						}else if (data.row[coba].fotokajian == '2') {
							var statuskajian = 'Silakan Bawa Berkas Ke DPMPTSP';
						}else{
							var statuskajian = 'Tidak ada Berkas';
						}

						$('#ket_pemohon').html('<p>Berkas yang sudah di verifikasi</p><p class="m-0">Berikut ini adalah rincian nilai teknis Anda:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Foto KTP Anda: <span class="badge badge-default">'+statusktp+'</span></li><li class="list-group-item p-1">- Foto NPWP Anda: <span class="badge badge-default">'+statusnpwp+'</span></li><li class="list-group-item p-1">- Foto Akta Anda: <span class="badge badge-default">'+statusakta+'</span></li><li class="list-group-item p-1">- Foto Luar Bangunan Anda : <span class="badge badge-default">'+statusluar+'</span></li><li class="list-group-item p-1">- Foto Dalam Bangunan Anda: <span class="badge badge-default">'+statusdalam+'</span></li><li class="list-group-item p-1">- Berkas Izin Mendirikan Bangunan Anda: <span class="badge badge-default">'+statusimb+'</span></li><li class="list-group-item p-1">- Berkas Sertifikat Layak Fungsi: <span class="badge badge-default">'+statusslf+'</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Berkas Rekomendasi dari Dinas Penanggunlangan Kebakaran dan Penyelamatan: <span class="badge badge-default">'+statusdamkar+'</span></li><li class="list-group-item p-1">- Berkas Rekomendasi dari Dinas Tenaga Kerja dan Transmigrasi: <span class="badge badge-default">'+statustkt+'</span></li><li class="list-group-item p-1">- Berkas Asuransi Toko: <span class="badge badge-default">'+statusasu+'</span></li><li class="list-group-item p-1">- Bukti Pemutahiran PBB: <span class="badge badge-default">'+statuspbb+'</span></li><li class="list-group-item p-1">- Persetujuan Warga Sekitar: <span class="badge badge-default">'+statusperw+'</span></li><li class="list-group-item p-1">- Berkas Rekomendasi UMKM: <span class="badge badge-default">'+statusumkm+'</span></li><li class="list-group-item p-1">- Berkas Kajian Sosial Ekonomi: <span class="badge badge-default">'+statuskajian+'</span></li></ul></div></div><label>Ulasan Petugas</label><p>'+keterangan[0]+'</p>'); 
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
				var skorpenglahan = [];
				var skormanfaat = [];
				var skorjarakusaha = [];
				for(var coba in data.row){
					skorjarakpasar.push(data.row[coba].skorjarakpasar);
					skorjarakusaha.push(data.row[coba].skorjarakusaha);
					skorpenglahan.push(data.row[coba].skorpenglahan);
					skormanfaat.push(data.row[coba].skormanfaat);
				}
				var skor = parseFloat(skorjarakpasar)+parseFloat(skorjarakusaha)+parseFloat(skorpenglahan);
				var skorakumulasi = parseFloat(skor)/3;
				if (data.rowCount > 0) {
					$('#ket_pemohon').removeAttr('style');
					$('#ket_teknis').html('<p>Nilai permohonan Anda pada tahap Admin Teknis sebesar <span class="badge badge-default">'+skormanfaat[0]+'</span> (Akumulasi Nilai Teknis)</p><p class="m-0">Berikut ini adalah rincian nilai teknis Anda:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Jarak terhadap Pasar Tradisional: <span class="badge badge-default">'+skorjarakpasar[0]+'</span></li><li class="list-group-item p-1">- Penggunaan lahan sekitar: <span class="badge badge-default">'+skorpenglahan[0]+'</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Jarak ke Usaha Sejenis: <span class="badge badge-default">'+skorjarakusaha[0]+'</span></li></ul></div></div>');
					$('#ket_pemohon').html('<p>Nilai permohonan Anda pada tahap Admin Teknis sebesar <span class="badge badge-default">'+skormanfaat[0]+'</span> (Akumulasi Nilai Teknis)</p><p class="m-0">Berikut ini adalah rincian nilai teknis Anda:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Jarak terhadap Pasar Tradisional: <span class="badge badge-default">'+skorjarakpasar[0]+'</span></li><li class="list-group-item p-1">- Penggunaan lahan sekitar: <span class="badge badge-default">'+skorpenglahan[0]+'</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Jarak ke Usaha Sejenis: <span class="badge badge-default">'+skorjarakusaha[0]+'</span></li></ul></div></div>');
					
				}
			}
		}
	})
}
function AdministrasiPemohon() {
	$.ajax({
		url: BASE_URL + 'OfficeController/detailBangunanDinas',
		type: 'POST',
		dataType: 'json',
		data: {id:localStorage.getItem('idbangunanuser')},
		success:function(data) {
			if (data.success) {
				var skorpbb = [];
				var skornpwp = [];
				var skorjalaneksis = [];
				var skortataruang = [];
				var skorjarakusaha = [];
				var skorpenglahan = [];
				var skorkondisieksis = [];
				var skorpempbb = [];
				var skorketumkm = [];
				var skorsewa = [];
				var skorwarga = [];
				var skorrekumkm = [];
				var skorslf = [];
				var skorimb = [];
				var skorkajian = [];
				var skorvolsumur = [];
				var skordrainase = [];
				var skorkondisisumur = [];
				var skorkdhmini = [];
				var skorkondisikdh = [];
				var skorpetandaan = [];
				var skordamkar = [];
				var skorfdamkar = [];
				var skortkt = [];
				var skorasuransi = [];								
				var skorlayak = [];
				var skorketersediaan = [];				
				var skorlimbah = [];				
				var skorsampah = [];				
				var skorlistrik = [];
				var skortoilet = [];								
				var skorparkir = [];								
				var code = [];
				var nama = [];
				var nib = [];
				var npwp = [];
				var status = [];
				var tgl = [];
				var alamat = [];
				var ketadmin = [];
				var ketteknis = [];
				var ketdinas = [];
				var zona = [];
				var kode_sublok = [];
				var skoradministrasi = [];
				var skormanfaat = [];
				var skordampak = [];
				var skortax = [];
				var lat = [];
				var lon = [];
				var skorjarakpasar = [];
				var asalkaryawan = [];
				for(var coba in data.row){
					skorpbb.push(data.row[coba].skorpbb);
					skornpwp.push(data.row[coba].skornpwp);
					skorjalaneksis.push(data.row[coba].skorjalaneksis);
					skortataruang.push(data.row[coba].skortataruang);
					skorjarakusaha.push(data.row[coba].skorjarakusaha);
					skorpenglahan.push(data.row[coba].skorpenglahan);
					skorkondisieksis.push(data.row[coba].skorkondisieksis);
					skorpempbb.push(data.row[coba].skorpempbb);
					skorketumkm.push(data.row[coba].skorketumkm);
					skorsewa.push(data.row[coba].skorsewa);
					skorwarga.push(data.row[coba].skorwarga);
					asalkaryawan.push(data.row[coba].asalkaryawan);
					skorrekumkm.push(data.row[coba].skorrekumkm);
					skorslf.push(data.row[coba].skorslf);
					skorimb.push(data.row[coba].skorimb);
					skorkajian.push(data.row[coba].skorkajian);
					skorvolsumur.push(data.row[coba].skorvolsumur);
					skordrainase.push(data.row[coba].skordrainase);
					skorkondisisumur.push(data.row[coba].skorkondisisumur);
					skorkdhmini.push(data.row[coba].skorkdhmini);
					skorkondisikdh.push(data.row[coba].skorkondisikdh);
					skorpetandaan.push(data.row[coba].skorpetandaan);
					skordamkar.push(data.row[coba].skordamkar);
					skorfdamkar.push(data.row[coba].skorfdamkar);
					skortkt.push(data.row[coba].skortkt);
					skorasuransi.push(data.row[coba].skorasuransi);
					skorlayak.push(data.row[coba].skorlayak);
					skorketersediaan.push(data.row[coba].skorketersediaan);
					skorlimbah.push(data.row[coba].skorlimbah);
					skorlistrik.push(data.row[coba].skorlistrik);
					skorsampah.push(data.row[coba].skorsampah);
					skortoilet.push(data.row[coba].skortoilet);
					skorparkir.push(data.row[coba].skorparkir);
					skorjarakpasar.push(data.row[coba].skorjarakpasar);
					code.push(data.row[coba].code);
					nama.push(data.row[coba].nama);
					nib.push(data.row[coba].nib);
					npwp.push(data.row[coba].npwp);
					tgl.push(data.row[coba].tgl);
					alamat.push(data.row[coba].alamat_usaha);
					ketadmin.push(data.row[coba].ketadmin);
					ketteknis.push(data.row[coba].ketteknis);
					ketdinas.push(data.row[coba].ketdinas);
					zona.push(data.row[coba].zona);
					kode_sublok.push(data.row[coba].kode_sublok);

					skoradministrasi.push(data.row[coba].skoradministrasi);
					skormanfaat.push(data.row[coba].skormanfaat);
					skordampak.push(data.row[coba].skordampak);
					skortax.push(data.row[coba].skortax);

					lat.push(data.row[coba].lat);
					lon.push(data.row[coba].lon);

				}

				if (data.rowCount > 0) {
					$('#ket_pemohon').removeAttr('style');
					var totaladmin = parseFloat(skorkondisieksis);
				var totalmanfaat = parseFloat(skorpempbb)+parseFloat(skorketumkm)+parseFloat(skorpenglahan)+parseFloat(asalkaryawan);
				var totaldampak = parseFloat(skorjarakpasar)+parseFloat(skorjarakusaha)+parseFloat(skorrekumkm)+parseFloat(skorkajian);
				/*iuts*/
				
				/*slf*/
				var totalkeseimbangan = parseFloat(skorkondisikdh)+parseFloat(skorvolsumur)+parseFloat(skorpetandaan)+parseFloat(skorkondisisumur)+parseFloat(skordrainase)+parseFloat(skorjalaneksis);
				var totalkeamanan = parseFloat(skorimb)+parseFloat(skorslf)+parseFloat(skordamkar)+parseFloat(skortkt)+parseFloat(skorfdamkar)+parseFloat(skorasuransi)+parseFloat(skorlayak);
				var totalkesehatan = parseFloat(skorketersediaan)+parseFloat(skorlimbah)+parseFloat(skorsampah)+parseFloat(skorlistrik);
				var totalkemudahan = parseFloat(skortoilet)+parseFloat(skorparkir);
				/*slf*/

				/*iuts*/
				var hasiladmin = parseFloat(totaladmin/1);
				var hasilmanfaat = parseFloat(totalmanfaat/4);
				var hasildampak = parseFloat(totaldampak/4);
				/*iuts*/
				
				var totaltax = parseFloat(skorpbb)*parseFloat(skornpwp);

				/*slf*/
				var hasilkeseimbangan = parseFloat(totalkeseimbangan/6);
				var hasilkeamanan = parseFloat(totalkeamanan/7);
				var hasilkesehatan = parseFloat(totalkesehatan/4);
				var hasilkemudahan = parseFloat(totalkemudahan/2);
				/*slf*/

				/*iuts*/
				$('#totaladminis').text(String(hasiladmin).substr(0, 4));
				/*iuts*/

				$('#totaltax').text(totaltax);

				/*iuts*/
				var total = parseFloat(String(hasilmanfaat).substr(0, 4))+parseFloat(String(hasildampak).substr(0, 4));
				var akumulasi = parseFloat(total/2)
				var totalasli = 1 * parseFloat(akumulasi);
				/*iuts*/

				var totalslf = parseFloat(String(hasilkeseimbangan).substr(0, 4))+parseFloat(String(hasilkeamanan).substr(0, 4))+parseFloat(String(hasilkesehatan).substr(0, 4))+parseFloat(String(hasilkemudahan).substr(0, 4));
				var akumulasislf = parseFloat(totalslf/4)
				var totalaslislf = 1 * parseFloat(akumulasislf);

				if (parseFloat(totalasli) < 1.5) {
					var statuswebsite = 'Di Tolak';
				}else if (parseFloat(totalasli) < 2.5) {
					var statuswebsite = 'Di Terima Dengan Catatan';
				}else if(parseFloat(totalasli) > 2.5) {
					var statuswebsite = 'Di Terima';
				}

				if (parseFloat(totalaslislf) < 1.5) {
					var statuswebsiteslf = 'Di Tolak';
				}else if (parseFloat(totalaslislf) < 2.5) {
					var statuswebsiteslf = 'Di Terima Dengan Catatan';
				}else if(parseFloat(totalaslislf) > 2.5) {
					var statuswebsiteslf = 'Di Terima';
				}
					if (tgl[0] == '0000-00-00' || tgl[0] == null) {
						var tanggal = 'Belum ada Tanggal';
					}else{
						var tanggal = tgl[0];
					}
				$('#ket_pemohon').html('<ul class="accordion accordion-resume"><li class="accordion-li"><a class="toggle" href="javascript:void(0);">SLF</a><ul class="inner show" style="display: block;"><div id=""><p class="m-0">Nilai permohonan ini pada kategori Data Keseimbangan, Keserasian, Keselarasan Lingkungan sebesar<span class="badge badge-default" id="totalkeseimbangan">'+String(hasilkeseimbangan).substr(0, 4)+'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Kondisi KDH: <span class="badge badge-default" id="konkdh">'+skorkondisikdh[0] +'</span></li><li class="list-group-item p-1">- Volume Sumur Resapan: <span class="badge badge-default" id="sumurserap">'+skorvolsumur[0] +'</span></li><li class="list-group-item p-1">- Kondisi Pertandaan Toko: <span class="badge badge-default" id="konpertoko">'+skorpetandaan[0]+'</span></li><li class="list-group-item p-1">- Jalan Eksisting Memadai: <span class="badge badge-default" id="eksismadai">'+skorjalaneksis[0]+'</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Kondisi Sumur Resapan: <span class="badge badge-default" id="kondisisumur">'+skorkondisisumur[0]+'</span></li><li class="list-group-item p-1">- Drainase Disekeliling Tapak: <span class="badge badge-default" id="drainasesek">'+skordrainase[0]+'</span></li></ul></div></div><p class="m-0">Nilai permohonan ini pada kategori Keselamatan dan Keamanan sebesar <span class="badge badge-default" id="totalkeamanan">'+String(hasilkeamanan).substr(0, 4)+'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Izin Mendirikan Bangunan : <span class="badge badge-default" id="imbeksis">'+skorimb[0]+'</span></li><li class="list-group-item p-1">- Sertifikat Layak Fungsi: <span class="badge badge-default" id="slfeksis">'+skorslf[0]+'</span></li><li class="list-group-item p-1">- Rekomendasi dari Dinas Penanggunlangan Kebakaran dan Penyelamatan: <span class="badge badge-default" id="damkar">'+skordamkar[0]+'</span></li><li class="list-group-item p-1">- Rekomendasi dari Dinas Tenaga Kerja dan Transmigrasi: <span class="badge badge-default" id="tkt">'+skortkt[0]+'</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Fasilitas Penanggulangan Kebakaran: <span class="badge badge-default" id="fdamkar">'+skorfdamkar[0]+'</span></li><li class="list-group-item p-1">- Ketersediaan Asuransi Toko: <span class="badge badge-default" id="asuransi">'+skorasuransi[0] +'</span></li><li class="list-group-item p-1">- Waktu Pembaharuan Terakhir Kelayakan Gedung: <span class="badge badge-default" id="layak">'+skorlayak[0]+'</span></li></ul></div></div><p class="m-0">Nilai permohonan ini pada kategori Kesehatan sebesar <span class="badge badge-default" id="totalkesehatan">'+String(hasilkesehatan).substr(0, 4)+'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Ketersediaan Air Bersih: <span class="badge badge-default" id="ketair">'+skorketersediaan[0]+'</span></li><li class="list-group-item p-1">- Pengelolaan Air Kotor/Limbah: <span class="badge badge-default" id="limbah">'+skorketersediaan[0]+'</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Pengelolaan Sampah: <span class="badge badge-default" id="sampah">'+ skorsampah[0]+'</span></li><li class="list-group-item p-1">- Ketersediaan Listrik: <span class="badge badge-default" id="listrik">'+skorlistrik[0] +'</span></li></ul></div></div><p class="m-0">Nilai permohonan ini pada kategori Kemudahan sebesar <span class="badge badge-default" id="totalkemudahan">'+String(hasilkemudahan).substr(0, 4)+'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Ketersediaan Toilet: <span class="badge badge-default" id="toilet">'+skortoilet[0]+'</span></li><li class="list-group-item p-1">- Ketersediaan Parkir: <span class="badge badge-default" id="parkir">'+skorparkir[0]+'</span></li></ul><p class="m-0 text-center">Nilai akhir permohonan ini sebesar <span class="badge badge-default" id="totalakhir3">'+String(totalaslislf).substr(0, 4)+'</span></p><p class="m-0 text-center">Perizinan SLF ini <span class="badge badge-success" id="statuswebslf">'+statuswebsiteslf+'</span></p></div></ul></li><li class="accordion-li"><a class="toggle" href="javascript:void(0);">IUTS</a><ul class="inner"><div id=""><p class="m-0">Nilai permohonan ini pada kategori Kebermanfaatan Usaha <span class="badge badge-default" id="totalmanfaat">'+String(hasilmanfaat).substr(0, 4)+'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Pemutakhiran PBB: <span class="badge badge-default" id="pempbb">'+skorpempbb[0]+'</span></li><li class="list-group-item p-1">- Keterlibatan UMKM: <span class="badge badge-default" id="ketumkm">'+skorketumkm[0]+'</span></li><li class="list-group-item p-1">- Persetujuan Warga Sekitar: <span class="badge badge-default" id="setwarga">'+skorwarga[0]+'</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Penggunaan lahan sekitar: <span class="badge badge-default" id="penglahan">'+skorpenglahan[0]+'</span></li></ul></div></div><p class="m-0">Nilai permohonan ini pada kategori Antisipasi Dampak/Resiko sebesar <span class="badge badge-default" id="totaldampak">'+String(hasildampak).substr(0, 4) +'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Jarak rencana terhadap Pasar Tradisional: <span class="badge badge-default" id="jarakpasar">'+skorjarakpasar[0]+'</span></li><li class="list-group-item p-1">- Jarak ke usaha sejenis: <span class="badge badge-default" id="jarakusaha">'+skorjarakusaha[0] +'</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Ada rekomendasi UMKM: <span class="badge badge-default" id="rekumkm">'+skorrekumkm[0]+'</span></li><li class="list-group-item p-1">- Kajian sostek: <span class="badge badge-default" id="kajiansostek">'+skorkajian[0]+'</span></li></ul></div></div><p class="m-0 text-center">Nilai akhir permohonan IUTS ini sebesar <span class="badge badge-default" id="totalakhir">'+String(totalasli).substr(0, 4)+'</span></p><p class="m-0 text-center">Perizinan IUTS ini <span class="badge badge-success" id="statusweb">'+statuswebsite+'</span></p></div></ul></li><li class="accordion-li"><a class="toggle" href="javascript:void(0);">Catatan Kepala Dinas</a><ul class="inner show" style="display: block;"><div id=""><p>'+ketadmin[0]+'</p></div></ul></li></ul>'); 
				} 
			} 
		}
	});
}
function kepaladinas() {
	$.ajax({
		url: BASE_URL + 'UserController/detailPemohonDinas',
		type: 'POST',
		dataType: 'json',
		data: {idbangunan:localStorage.getItem('idbangunanuser'),id:localStorage.getItem('iduser')},
		success:function(data) {
			if (data.success) {
				var skorakhirslf = [];
				var skorakhiriuts = [];
				var status = [];
				var tgl = [];
				var keterangan = [];
				for(var coba in data.row){
					skorakhirslf.push(data.row[coba].skorakhirslf);
					skorakhiriuts.push(data.row[coba].skorakhiriuts);
					status.push(data.row[coba].status);
					tgl.push(data.row[coba].tanggal);
					keterangan.push(data.row[coba].keterangan);
				}
				if (data.rowCount > 0) {
					$('#ket_pemohon').removeAttr('style');
					if (status[0] == '3') {
						var statuskepaladinas = 'Di Terima';
					}else if (status[0] == '5') {
						var statuskepaladinas = 'Izin IUTS anda Di tolak';
					}else if (status[0] == '6') {
						var statuskepaladinas = 'Izin SLF anda di tolak';
					}else{
						var statuskepaladinas = 'Di Tolak';
					}

					if (parseFloat(skorakhirslf[0]) < 1.5) {
						var statusslf = 'Di Tolak';
					}else if (parseFloat(skorakhirslf[0]) < 2.5) {
						var statusslf = 'Di Terima Dengan Catatan';
					}else if(parseFloat(skorakhirslf[0]) > 2.5) {
						var statusslf = 'Di Terima';
					}

					if (parseFloat(skorakhiriuts[0]) < 1.5) {
						var statusiuts = 'Di Tolak';
					}else if (parseFloat(skorakhiriuts[0]) < 2.5) {
						var statusiuts = 'Di Terima Dengan Catatan';
					}else if(parseFloat(skorakhiriuts[0]) > 2.5) {
						var statusiuts = 'Di Terima';
					}

					$('#catatan').html(keterangan);
					$('#ket_dinas').html('<p class="m-0">Nilai akhir permohonan Sertifikat Layak Fungsi Anda sebesar<span class="badge badge-default">'+skorakhirslf[0]+'</span>(Nilai Akhir)</p><p>Perizinan Anda<span class="badge badge-success">'+statusslf+'</span></p><p class="m-0">Nilai akhir permohonan Izin Usaha Toko Swalayan Anda sebesar<span class="badge badge-default">'+skorakhiriuts[0]+'</span>(Nilai Akhir)</p><p>Perizinan Anda<span class="badge badge-success">'+statusiuts+'</span></p><p>Permohonan Anda<span class="badge badge-success">'+statuskepaladinas+'</span>oleh Kepala Dinas PMPTSP</p><label>Catatan Keterangan Kepala Dinas :</label><p>'+keterangan[0]+'</p>');  
					$('#ket_pemohon').html('<p class="m-0">Nilai akhir permohonan Sertifikat Layak Fungsi Anda sebesar<span class="badge badge-default">'+skorakhirslf[0]+'</span>(Nilai Akhir)</p><p>Perizinan Anda<span class="badge badge-success">'+statusslf+'</span></p><p class="m-0">Nilai akhir permohonan Izin Usaha Toko Swalayan Anda sebesar<span class="badge badge-default">'+skorakhiriuts[0]+'</span>(Nilai Akhir)</p><p>Perizinan Anda<span class="badge badge-success">'+statusiuts+'</span></p><p>Permohonan Anda<span class="badge badge-success">'+statuskepaladinas+'</span>oleh Kepala Dinas PMPTSP</p><label>Catatan Keterangan Kepala Dinas :</label><p>'+keterangan[0]+'</p>');  
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
									var id_admin = [];
									var id_izin = [];
									var fotoktp = [];
									var fotonpwp = [];
									var fotoakta = [];
									var fotoluar = [];
									var fotodalam = [];
									var fotoimb = [];
									var fotoslf = [];
									var fotodamkar = [];
									var fototkt = [];
									var fotoasuransi = [];
									var fotopbb = [];
									var fotoperw = [];
									var fotorekumkm = [];
									var fotokajian = [];
									var keterangan = [];
									for(var coba in data.row){
										id_admin.push(data.row[coba].id_admin);
										id_izin.push(data.row[coba].id_izin);
										fotoktp.push(data.row[coba].fotoktp);
										fotonpwp.push(data.row[coba].fotonpwp);
										fotoakta.push(data.row[coba].fotoakta);
										fotoluar.push(data.row[coba].fotoluar);
										fotodalam.push(data.row[coba].fotodalam);
										fotoimb.push(data.row[coba].fotoimb);
										fotoslf.push(data.row[coba].fotoslf);
										fotodamkar.push(data.row[coba].fotodamkar);
										fototkt.push(data.row[coba].fototkt);
										fotoasuransi.push(data.row[coba].fotoasuransi);
										fotopbb.push(data.row[coba].fotopbb);
										fotoperw.push(data.row[coba].fotoperw);
										fotorekumkm.push(data.row[coba].fotorekumkm);
										fotokajian.push(data.row[coba].fotokajian);
										keterangan.push(data.row[coba].keterangan);
									}
									if (data.rowCount > 0) {
										$('#ket_pemohon').removeAttr('style');
										for(var coba in data.row){
											if (data.row[coba].fotoktp == '1') {
												var statusktp = 'Berkas di Terima';
											}else if (data.row[coba].fotoktp == '2') {
												var statusktp = 'Silakan Bawa Berkas Ke DPMPTSP';
											}else{
												var statusktp = 'Tidak ada Berkas';
											} 

											if (data.row[coba].fotonpwp == '1') {
												var statusnpwp = 'Berkas di Terima';
											}else if (data.row[coba].fotonpwp == '2') {
												var statusnpwp = 'Silakan Bawa Berkas Ke DPMPTSP';
											}else {
												var statusnpwp = 'Tidak ada Berkas';
											}

											if (data.row[coba].fotoakta == '1') {
												var statusakta = 'Berkas di Terima';
											}else if (data.row[coba].fotoakta == '2') {
												var statusakta = 'Silakan Bawa Berkas Ke DPMPTSP';
											}else{
												var statusakta = 'Tidak ada Berkas';
											} 

											if (data.row[coba].fotoluar == '1') {
												var statusluar = 'Berkas di Terima';
											}else if (data.row[coba].fotoluar == '2') {
												var statusluar = 'Silakan Bawa Berkas Ke DPMPTSP';
											}else {
												var statusluar = 'Tidak ada Berkas';
											}
											if (data.row[coba].fotodalam == '1') {
												var statusdalam = 'Berkas di Terima';
											}else if (data.row[coba].fotodalam == '2') {
												var statusdalam = 'Silakan Bawa Berkas Ke DPMPTSP';
											}else{
												var statusdalam = 'Tidak ada Berkas';
											} 

											if (data.row[coba].fotoimb == '1') {
												var statusimb = 'Berkas di Terima';
											}else if (data.row[coba].fotoimb == '2') {
												var statusimb = 'Silakan Bawa Berkas Ke DPMPTSP';
											}else {
												var statusimb = 'Tidak ada Berkas';
											}
											if (data.row[coba].fotoslf == '1') {
												var statusslf = 'Berkas di Terima';
											}else if (data.row[coba].fotoslf == '2') {
												var statusslf = 'Silakan Bawa Berkas Ke DPMPTSP';
											}else{
												var statusslf = 'Tidak ada Berkas';
											} 

											if (data.row[coba].fotodamkar == '1') {
												var statusdamkar = 'Berkas di Terima';
											}else if (data.row[coba].fotodamkar == '2') {
												var statusdamkar = 'Silakan Bawa Berkas Ke DPMPTSP';
											}else{
												var statusdamkar = 'Tidak ada Berkas';
											} 

											if (data.row[coba].fototkt == '1') {
												var statustkt = 'Berkas di Terima';
											}else if (data.row[coba].fototkt == '2') {
												var statustkt = 'Silakan Bawa Berkas Ke DPMPTSP';
											}else{
												var statustkt = 'Tidak ada Berkas';
											} 

											if (data.row[coba].fotoasuransi == '1') {
												var statusasu = 'Berkas di Terima';
											}else if (data.row[coba].fotoasuransi == '2') {
												var statusasu = 'Silakan Bawa Berkas Ke DPMPTSP';
											}else {
												var statusasu = 'Tidak ada Berkas';
											}
											if (data.row[coba].fotopbb == '1') {
												var statuspbb = 'Berkas di Terima';
											}else if (data.row[coba].fotopbb == '2') {
												var statuspbb = 'Silakan Bawa Berkas Ke DPMPTSP';
											}else {
											}
											if (data.row[coba].fotoperw == '1') {
												var statusperw = 'Berkas di Terima';
											}else if (data.row[coba].fotoperw == '2') {
												var statusperw = 'Silakan Bawa Berkas Ke DPMPTSP';
											}else{
												var statusperw = 'Tidak ada Berkas';
											} 

											if (data.row[coba].fotorekumkm == '1') {
												var statusumkm = 'Berkas di Terima';
											}else if (data.row[coba].fotorekumkm == '2') {
												var statusumkm = 'Silakan Bawa Berkas Ke DPMPTSP';
											}else{
												var statusumkm = 'Tidak ada Berkas';
											} 
											if (data.row[coba].fotokajian == '1') {
												var statuskajian = 'Berkas di Terima';
											}else if (data.row[coba].fotokajian == '2') {
												var statuskajian = 'Silakan Bawa Berkas Ke DPMPTSP';
											}else{
												var statuskajian = 'Tidak ada Berkas';
											}
											$('#ket_pemohon').html('<p>Berkas yang sudah di verifikasi</p><p class="m-0">Berikut ini adalah rincian nilai teknis Anda:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Foto KTP Anda: <span class="badge badge-default">'+statusktp+'</span></li><li class="list-group-item p-1">- Foto NPWP Anda: <span class="badge badge-default">'+statusnpwp+'</span></li><li class="list-group-item p-1">- Foto Akta Anda: <span class="badge badge-default">'+statusakta+'</span></li><li class="list-group-item p-1">- Foto Luar Bangunan Anda : <span class="badge badge-default">'+statusluar+'</span></li><li class="list-group-item p-1">- Foto Dalam Bangunan Anda: <span class="badge badge-default">'+statusdalam+'</span></li><li class="list-group-item p-1">- Berkas Izin Mendirikan Bangunan Anda: <span class="badge badge-default">'+statusimb+'</span></li><li class="list-group-item p-1">- Berkas Sertifikat Layak Fungsi: <span class="badge badge-default">'+statusslf+'</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Berkas Rekomendasi dari Dinas Penanggunlangan Kebakaran dan Penyelamatan: <span class="badge badge-default">'+statusdamkar+'</span></li><li class="list-group-item p-1">- Berkas Rekomendasi dari Dinas Tenaga Kerja dan Transmigrasi: <span class="badge badge-default">'+statustkt+'</span></li><li class="list-group-item p-1">- Berkas Asuransi Toko: <span class="badge badge-default">'+statusasu+'</span></li><li class="list-group-item p-1">- Bukti Pemutahiran PBB: <span class="badge badge-default">'+statuspbb+'</span></li><li class="list-group-item p-1">- Persetujuan Warga Sekitar: <span class="badge badge-default">'+statusperw+'</span></li><li class="list-group-item p-1">- Berkas Rekomendasi UMKM: <span class="badge badge-default">'+statusumkm+'</span></li><li class="list-group-item p-1">- Berkas Kajian Sosial Ekonomi: <span class="badge badge-default">'+statuskajian+'</span></li></ul></div></div><label>Ulasan Petugas</label><p>'+keterangan[0]+'</p>'); 
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
				var skorpenglahan = [];
				var skormanfaat = [];
				var skorjarakusaha = [];
				for(var coba in data.row){
					skorjarakpasar.push(data.row[coba].skorjarakpasar);
					skorjarakusaha.push(data.row[coba].skorjarakusaha);
					skorpenglahan.push(data.row[coba].skorpenglahan);
					skormanfaat.push(data.row[coba].skormanfaat);
				}
				var skor = parseFloat(skorjarakpasar)+parseFloat(skorjarakusaha)+parseFloat(skorpenglahan);
				var skorakumulasi = parseFloat(skor)/3;
				if (data.rowCount > 0) {
					$('#ket_pemohon').removeAttr('style');
					$('#ket_pemohon').html('<p>Nilai permohonan Anda pada tahap Admin Teknis sebesar <span class="badge badge-default">'+String(skorakumulasi).substr(0, 4)+'</span> (Akumulasi Nilai Teknis)</p><p class="m-0">Berikut ini adalah rincian nilai teknis Anda:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Jarak terhadap Pasar Tradisional: <span class="badge badge-default">'+skorjarakpasar[0]+'</span></li><li class="list-group-item p-1">- Penggunaan lahan sekitar: <span class="badge badge-default">'+skorpenglahan[0]+'</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Jarak ke Usaha Sejenis: <span class="badge badge-default">'+skorjarakusaha[0]+'</span></li></ul></div></div>'); 
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
				var skorakhirslf = [];
				var skorakhiriuts = [];
				var status = [];
				var tgl = [];
				var keterangan = [];
				for(var coba in data.row){
					skorakhirslf.push(data.row[coba].skorakhirslf);
					skorakhiriuts.push(data.row[coba].skorakhiriuts);
					status.push(data.row[coba].status);
					tgl.push(data.row[coba].tanggal);
					keterangan.push(data.row[coba].keterangan);
				}

				if (data.rowCount > 0) {
					$('#ket_pemohon').removeAttr('style');
					if (status[0] == '3') {
						var statuskepaladinas = 'Di Terima';
					}else if (status[0] == '5') {
						var statuskepaladinas = 'Izin IUTS anda Di tolak';
					}else if (status[0] == '6') {
						var statuskepaladinas = 'Izin SLF anda di tolak';
					}else{
						var statuskepaladinas = 'Di Tolak';
					}

					if (parseFloat(skorakhirslf[0]) < 1.5) {
						var statusslf = 'Di Tolak';
					}else if (parseFloat(skorakhirslf[0]) < 2.5) {
						var statusslf = 'Di Terima Dengan Catatan';
					}else if(parseFloat(skorakhirslf[0]) > 2.5) {
						var statusslf = 'Di Terima';
					}

					if (parseFloat(skorakhiriuts[0]) < 1.5) {
						var statusiuts = 'Di Tolak';
					}else if (parseFloat(skorakhiriuts[0]) < 2.5) {
						var statusiuts = 'Di Terima Dengan Catatan';
					}else if(parseFloat(skorakhiriuts[0]) > 2.5) {
						var statusiuts = 'Di Terima';
					}
					if (tgl[0] == '0000-00-00' || tgl[0] == null) {
						var tanggal = 'Belum ada Tanggal';
					}else{
						var tanggal = tgl[0];
					}
					$('#ket_pemohon').html('<p class="m-0">Nilai akhir permohonan Sertifikat Layak Fungsi Anda sebesar<span class="badge badge-default">'+skorakhirslf[0]+'</span>(Nilai Akhir)</p><p>Perizinan Anda<span class="badge badge-success">'+statusslf+'</span></p><p class="m-0">Nilai akhiIzin Usaha Toko Swalayan Layak Fungsi Anda sebesar<span class="badge badge-default">'+skorakhiriuts[0]+'</span>(Nilai Akhir)</p><p>Perizinan Anda<span class="badge badge-success">'+statusiuts+'</span></p><p>Permohonan Anda<span class="badge badge-success">'+statuskepaladinas+'</span>oleh Kepala Dinas PMPTSP</p><label>Catatan Keterangan Kepala Dinas :</label><p>'+keterangan[0]+'</p>'); 
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
		url: BASE_URL + 'OfficeController/detailBangunanDinas',
		type: 'POST',
		dataType: 'json',
		data: {id:localStorage.getItem('idbangunanuser')},
		success:function(data) {
			if (data.success) {
				var skorpbb = [];
				var skornpwp = [];
				var skorjalaneksis = [];
				var skortataruang = [];
				var skorjarakusaha = [];
				var skorpenglahan = [];
				var skorkondisieksis = [];
				var skorpempbb = [];
				var skorketumkm = [];
				var skorsewa = [];
				var skorwarga = [];
				var skorrekumkm = [];
				var skorslf = [];
				var skorimb = [];
				var skorkajian = [];
				var skorvolsumur = [];
				var skordrainase = [];
				var skorkondisisumur = [];
				var skorkdhmini = [];
				var skorkondisikdh = [];
				var skorpetandaan = [];
				var skordamkar = [];
				var skorfdamkar = [];
				var skortkt = [];
				var skorasuransi = [];								
				var skorlayak = [];
				var skorketersediaan = [];				
				var skorlimbah = [];				
				var skorsampah = [];				
				var skorlistrik = [];
				var skortoilet = [];								
				var skorparkir = [];								
				var code = [];
				var nama = [];
				var nib = [];
				var npwp = [];
				var status = [];
				var tgl = [];
				var alamat = [];
				var ketadmin = [];
				var ketteknis = [];
				var ketdinas = [];
				var zona = [];
				var kode_sublok = [];
				var skoradministrasi = [];
				var skormanfaat = [];
				var skordampak = [];
				var skortax = [];
				var lat = [];
				var lon = [];
				var skorjarakpasar = [];
				var asalkaryawan = [];
				for(var coba in data.row){
					skorpbb.push(data.row[coba].skorpbb);
					skornpwp.push(data.row[coba].skornpwp);
					skorjalaneksis.push(data.row[coba].skorjalaneksis);
					skortataruang.push(data.row[coba].skortataruang);
					skorjarakusaha.push(data.row[coba].skorjarakusaha);
					skorpenglahan.push(data.row[coba].skorpenglahan);
					skorkondisieksis.push(data.row[coba].skorkondisieksis);
					skorpempbb.push(data.row[coba].skorpempbb);
					skorketumkm.push(data.row[coba].skorketumkm);
					skorsewa.push(data.row[coba].skorsewa);
					skorwarga.push(data.row[coba].skorwarga);
					asalkaryawan.push(data.row[coba].asalkaryawan);
					skorrekumkm.push(data.row[coba].skorrekumkm);
					skorslf.push(data.row[coba].skorslf);
					skorimb.push(data.row[coba].skorimb);
					skorkajian.push(data.row[coba].skorkajian);
					skorvolsumur.push(data.row[coba].skorvolsumur);
					skordrainase.push(data.row[coba].skordrainase);
					skorkondisisumur.push(data.row[coba].skorkondisisumur);
					skorkdhmini.push(data.row[coba].skorkdhmini);
					skorkondisikdh.push(data.row[coba].skorkondisikdh);
					skorpetandaan.push(data.row[coba].skorpetandaan);
					skordamkar.push(data.row[coba].skordamkar);
					skorfdamkar.push(data.row[coba].skorfdamkar);
					skortkt.push(data.row[coba].skortkt);
					skorasuransi.push(data.row[coba].skorasuransi);
					skorlayak.push(data.row[coba].skorlayak);
					skorketersediaan.push(data.row[coba].skorketersediaan);
					skorlimbah.push(data.row[coba].skorlimbah);
					skorlistrik.push(data.row[coba].skorlistrik);
					skorsampah.push(data.row[coba].skorsampah);
					skortoilet.push(data.row[coba].skortoilet);
					skorparkir.push(data.row[coba].skorparkir);
					skorjarakpasar.push(data.row[coba].skorjarakpasar);
					code.push(data.row[coba].code);
					nama.push(data.row[coba].nama);
					nib.push(data.row[coba].nib);
					npwp.push(data.row[coba].npwp);
					tgl.push(data.row[coba].tgl);
					alamat.push(data.row[coba].alamat_usaha);
					ketadmin.push(data.row[coba].ketadmin);
					ketteknis.push(data.row[coba].ketteknis);
					ketdinas.push(data.row[coba].ketdinas);
					zona.push(data.row[coba].zona);
					kode_sublok.push(data.row[coba].kode_sublok);

					skoradministrasi.push(data.row[coba].skoradministrasi);
					skormanfaat.push(data.row[coba].skormanfaat);
					skordampak.push(data.row[coba].skordampak);
					skortax.push(data.row[coba].skortax);

					lat.push(data.row[coba].lat);
					lon.push(data.row[coba].lon);

				}

				if (data.rowCount > 0) {
					$('#ket_pemohon').removeAttr('style');
					var totaladmin = parseFloat(skorkondisieksis);
				var totalmanfaat = parseFloat(skorpempbb)+parseFloat(skorketumkm)+parseFloat(skorpenglahan)+parseFloat(asalkaryawan);
				var totaldampak = parseFloat(skorjarakpasar)+parseFloat(skorjarakusaha)+parseFloat(skorrekumkm)+parseFloat(skorkajian);
				/*iuts*/
				
				/*slf*/
				var totalkeseimbangan = parseFloat(skorkondisikdh)+parseFloat(skorvolsumur)+parseFloat(skorpetandaan)+parseFloat(skorkondisisumur)+parseFloat(skordrainase)+parseFloat(skorjalaneksis);
				var totalkeamanan = parseFloat(skorimb)+parseFloat(skorslf)+parseFloat(skordamkar)+parseFloat(skortkt)+parseFloat(skorfdamkar)+parseFloat(skorasuransi)+parseFloat(skorlayak);
				var totalkesehatan = parseFloat(skorketersediaan)+parseFloat(skorlimbah)+parseFloat(skorsampah)+parseFloat(skorlistrik);
				var totalkemudahan = parseFloat(skortoilet)+parseFloat(skorparkir);
				/*slf*/

				/*iuts*/
				var hasiladmin = parseFloat(totaladmin/1);
				var hasilmanfaat = parseFloat(totalmanfaat/4);
				var hasildampak = parseFloat(totaldampak/4);
				/*iuts*/
				
				var totaltax = parseFloat(skorpbb)*parseFloat(skornpwp);

				/*slf*/
				var hasilkeseimbangan = parseFloat(totalkeseimbangan/6);
				var hasilkeamanan = parseFloat(totalkeamanan/7);
				var hasilkesehatan = parseFloat(totalkesehatan/4);
				var hasilkemudahan = parseFloat(totalkemudahan/2);
				/*slf*/

				/*iuts*/
				$('#totaladminis').text(String(hasiladmin).substr(0, 4));
				/*iuts*/

				$('#totaltax').text(totaltax);

				/*iuts*/
				var total = parseFloat(String(hasilmanfaat).substr(0, 4))+parseFloat(String(hasildampak).substr(0, 4));
				var akumulasi = parseFloat(total/2)
				var totalasli = 1 * parseFloat(akumulasi);
				/*iuts*/

				var totalslf = parseFloat(String(hasilkeseimbangan).substr(0, 4))+parseFloat(String(hasilkeamanan).substr(0, 4))+parseFloat(String(hasilkesehatan).substr(0, 4))+parseFloat(String(hasilkemudahan).substr(0, 4));
				var akumulasislf = parseFloat(totalslf/4)
				var totalaslislf = 1 * parseFloat(akumulasislf);

				if (parseFloat(totalasli) < 1.5) {
					var statuswebsite = 'Di Tolak';
				}else if (parseFloat(totalasli) < 2.5) {
					var statuswebsite = 'Di Terima Dengan Catatan';
				}else if(parseFloat(totalasli) > 2.5) {
					var statuswebsite = 'Di Terima';
				}

				if (parseFloat(totalaslislf) < 1.5) {
					var statuswebsiteslf = 'Di Tolak';
				}else if (parseFloat(totalaslislf) < 2.5) {
					var statuswebsiteslf = 'Di Terima Dengan Catatan';
				}else if(parseFloat(totalaslislf) > 2.5) {
					var statuswebsiteslf = 'Di Terima';
				}
					if (tgl[0] == '0000-00-00' || tgl[0] == null) {
						var tanggal = 'Belum ada Tanggal';
					}else{
						var tanggal = tgl[0];
					}
				$('#ket_pemohon').html('<ul class="accordion accordion-resume"><li class="accordion-li"><a class="toggle" href="javascript:void(0);">SLF</a><ul class="inner show" style="display: block;"><div id=""><p class="m-0">Nilai permohonan ini pada kategori Data Keseimbangan, Keserasian, Keselarasan Lingkungan sebesar<span class="badge badge-default" id="totalkeseimbangan">'+String(hasilkeseimbangan).substr(0, 4)+'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Kondisi KDH: <span class="badge badge-default" id="konkdh">'+skorkondisikdh[0] +'</span></li><li class="list-group-item p-1">- Volume Sumur Resapan: <span class="badge badge-default" id="sumurserap">'+skorvolsumur[0] +'</span></li><li class="list-group-item p-1">- Kondisi Pertandaan Toko: <span class="badge badge-default" id="konpertoko">'+skorpetandaan[0]+'</span></li><li class="list-group-item p-1">- Jalan Eksisting Memadai: <span class="badge badge-default" id="eksismadai">'+skorjalaneksis[0]+'</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Kondisi Sumur Resapan: <span class="badge badge-default" id="kondisisumur">'+skorkondisisumur[0]+'</span></li><li class="list-group-item p-1">- Drainase Disekeliling Tapak: <span class="badge badge-default" id="drainasesek">'+skordrainase[0]+'</span></li></ul></div></div><p class="m-0">Nilai permohonan ini pada kategori Keselamatan dan Keamanan sebesar <span class="badge badge-default" id="totalkeamanan">'+String(hasilkeamanan).substr(0, 4)+'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Izin Mendirikan Bangunan : <span class="badge badge-default" id="imbeksis">'+skorimb[0]+'</span></li><li class="list-group-item p-1">- Sertifikat Layak Fungsi: <span class="badge badge-default" id="slfeksis">'+skorslf[0]+'</span></li><li class="list-group-item p-1">- Rekomendasi dari Dinas Penanggunlangan Kebakaran dan Penyelamatan: <span class="badge badge-default" id="damkar">'+skordamkar[0]+'</span></li><li class="list-group-item p-1">- Rekomendasi dari Dinas Tenaga Kerja dan Transmigrasi: <span class="badge badge-default" id="tkt">'+skortkt[0] +'</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Fasilitas Penanggulangan Kebakaran: <span class="badge badge-default" id="fdamkar">'+skorfdamkar[0]+'</span></li><li class="list-group-item p-1">- Ketersediaan Asuransi Toko: <span class="badge badge-default" id="asuransi">'+ skorasuransi[0]+'</span></li><li class="list-group-item p-1">- Waktu Pembaharuan Terakhir Kelayakan Gedung: <span class="badge badge-default" id="layak">'+skorlayak[0]+'</span></li></ul></div></div><p class="m-0">Nilai permohonan ini pada kategori Kesehatan sebesar <span class="badge badge-default" id="totalkesehatan">'+String(hasilkesehatan).substr(0, 4)+'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Ketersediaan Air Bersih: <span class="badge badge-default" id="ketair">'+skorketersediaan[0]+'</span></li><li class="list-group-item p-1">- Pengelolaan Air Kotor/Limbah: <span class="badge badge-default" id="limbah">'+skorketersediaan[0]+'</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Pengelolaan Sampah: <span class="badge badge-default" id="sampah">'+ skorsampah[0]+'</span></li><li class="list-group-item p-1">- Ketersediaan Listrik: <span class="badge badge-default" id="listrik">'+skorlistrik[0] +'</span></li></ul></div></div><p class="m-0">Nilai permohonan ini pada kategori Kemudahan sebesar <span class="badge badge-default" id="totalkemudahan">'+String(hasilkemudahan).substr(0, 4)+'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Ketersediaan Toilet: <span class="badge badge-default" id="toilet">'+skortoilet[0]+'</span></li><li class="list-group-item p-1">- Ketersediaan Parkir: <span class="badge badge-default" id="parkir">'+skorparkir[0]+'</span></li></ul><p class="m-0 text-center">Nilai akhir permohonan ini sebesar <span class="badge badge-default" id="totalakhir3">'+String(totalaslislf).substr(0, 4)+'</span></p><p class="m-0 text-center">Perizinan SLF ini <span class="badge badge-success" id="statuswebslf">'+statuswebsiteslf+'</span></p></div></ul></li><li class="accordion-li"><a class="toggle" href="javascript:void(0);">IUTS</a><ul class="inner  show" style="display: block;"><div id=""><p class="m-0">Nilai permohonan ini pada kategori Kebermanfaatan Usaha <span class="badge badge-default" id="totalmanfaat">'+String(hasilmanfaat).substr(0, 4)+'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Pemutakhiran PBB: <span class="badge badge-default" id="pempbb">'+skorpempbb[0]+'</span></li><li class="list-group-item p-1">- Keterlibatan UMKM: <span class="badge badge-default" id="ketumkm">'+skorketumkm[0]+'</span></li><li class="list-group-item p-1">- Persetujuan Warga Sekitar: <span class="badge badge-default" id="setwarga">'+skorwarga[0]+'</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Penggunaan lahan sekitar: <span class="badge badge-default" id="penglahan">'+skorpenglahan[0]+'</span></li></ul></div></div><p class="m-0">Nilai permohonan ini pada kategori Antisipasi Dampak/Resiko sebesar <span class="badge badge-default" id="totaldampak">'+String(hasildampak).substr(0, 4) +'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Jarak rencana terhadap Pasar Tradisional: <span class="badge badge-default" id="jarakpasar">'+skorjarakpasar[0]+'</span></li><li class="list-group-item p-1">- Jarak ke usaha sejenis: <span class="badge badge-default" id="jarakusaha">'+skorjarakusaha[0] +'</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Ada rekomendasi UMKM: <span class="badge badge-default" id="rekumkm">'+skorrekumkm[0]+'</span></li><li class="list-group-item p-1">- Kajian sostek: <span class="badge badge-default" id="kajiansostek">'+skorkajian[0]+'</span></li></ul></div></div><p class="m-0 text-center">Nilai akhir permohonan IUTS ini sebesar <span class="badge badge-default" id="totalakhir">'+String(totalasli).substr(0, 4)+'</span></p><p class="m-0 text-center">Perizinan IUTS ini <span class="badge badge-success" id="statusweb">'+statuswebsite+'</span></p></div></ul></li><li class="accordion-li"><a class="toggle" href="javascript:void(0);">Catatan Kepala Dinas</a><ul class="inner show" style="display: block;"><div id=""><p>'+ketdinas[0]+'</p></div></ul></li></ul>'); 
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
		data: {id:localStorage.getItem('idbangunanuser'),pesan:$('#pesan').val()},
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
				$('#detailPerizinan').modal('hide');
				$('#modalfeedback').modal('show');
				$("#serahForm")[0].reset();
			}

		},
		error: function () {
			Swal.fire(
				'Hubungi Tim Terkait',
				);
		}
	});
});
$("#kirimfeedback").submit(function (event) {
	var data = new FormData($(this)[0]);
	$.ajax({
		url: BASE_URL + 'UserController/KirimFeedBack',
		type: "POST",
		dataType:'json',
		data: {id:localStorage.getItem('idbangunanuser'),pesan:$('#feedbacknya').val()},
		beforeSend:function(argument) {
			$(".loader-overlay").removeAttr('style');
		},
		success: function (response) {
			if (response.success == false) {
				Swal.fire(
					''+response.msg+'',
					);
			}else{
				$('#modalfeedback').modal('show');
				Swal.fire(
					'Trima Kasih Sudah memberikan Ulasan',
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
$(".logout").click(function(event) {
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