// var BASE_URL = 'http://localhost/rest_api_iuts/';
var BASE_URL = 'https://rest-iuts.pkkmart.com/';
$("#namapemohon").html(localStorage.getItem("nama"));
$("#namapemohonnav").html(localStorage.getItem("nama"));

$.ajax({
	url: BASE_URL + 'OfficeController/countsideoffice',
	type: 'POST',
	dataType: 'json',
	success:function(data) {
		$("#terima").html(data.selesai);
		$("#tolak").html(data.tolak);
		$("#expired").html(data.expired);
		$("#all").html(data.all);
	}
});
$.ajax({
	url: BASE_URL + 'OfficeController/countsidelevel',
	type: 'POST',
	dataType: 'json',
	data: {level: localStorage.getItem("level")},
	success:function(data) {
		$("#countproses").html(data.hitung);
	}
});
function detailtugas(id) {
	$.ajax({
		url: BASE_URL + 'OfficeController/getBangunan',
		type: 'POST',
		dataType: 'json',
		data: {code: id},
		success:function(data) {
			if (data.success) {
				if (localStorage.getItem("level") ==1 ) { // Kepala dinas
					localStorage.setItem("idbangunanadmin",id);
					localStorage.setItem("iduserbangunan",data.row[0].id_pemohon);
					window.location.href = 'verifikasi_perizinan_kadis.html';
				}else if(localStorage.getItem("level") ==2){// Admin Teknis
					localStorage.setItem("idbangunanadmin",id);
					localStorage.setItem("iduserbangunan",data.row[0].id_pemohon);
					if (data.row[0].id_jenis == '3' || data.row[0].id_jenis == '1') {
						window.location.href = 'verifikasi_perizinan_teknis.html';
					}else{
						window.location.href = 'dashboard_admin.html';
					}
				}else if(localStorage.getItem("level") ==3){ // Administrasi
					localStorage.setItem("idbangunanadmin",id);
					localStorage.setItem("iduserbangunan",data.row[0].id_pemohon);
					window.location.href = 'verifikasi_perizinan.html';
				}
			}
		}
	});
}
function datadetailPemohon(id) {
	var datas = {code:id};
	$('#detailPerizinan').modal('show');
	$.ajax({
		url: BASE_URL + 'OfficeController/getBangunanDetail',
		type: 'POST',
		dataType: 'json',
		data: datas,
		beforeSend:function(argument) {
			jQuery('#loader').fadeIn('slow');
		},
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
				var njop = [];
				var nama_toko = [];
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
				var nama_badan_usaha = [];
				var status_bangunan = [];
				var asal_karyawan = [];
				var id_kasostek = [];
				var id_umkm = [];
				var id_pem_pbb = [];
				var id_warga = [];
				var id_kasostek = [];
				var no_imb = [];
				var kelompok = [];
				var omset = [];
				var status_milik = [];
				var jml_karyawan = [];
				var jml_atm = [];
				var jml_pengunjung = [];
				var id_toilet = [];
				var id_parkir = [];

				var id_rek_umkm = [];
				var id_umkm = [];
				var id_izin_damkar= [];
				var id_tenaga_kerja = [];
				var id_penanggulangan_kebakaran = [];
				var id_jalan_eksis = [];
				var id_penglahan = [];
				var id_jarak_pasar = [];
				var id_jarak_usaha = [];
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
					nama_badan_usaha.push(data.row[coba].nama_badan_usaha);
					status_bangunan.push(data.row[coba].status_bangunan);
					asal_karyawan.push(data.row[coba].asal_karyawan);
					id_kasostek.push(data.row[coba].id_kasostek);
					id_umkm.push(data.row[coba].id_umkm);
					id_pem_pbb.push(data.row[coba].id_pem_pbb);
					id_warga.push(data.row[coba].id_warga);						
					no_imb.push(data.row[coba].no_imb);				
					kelompok.push(data.row[coba].kelompok);				
					omset.push(data.row[coba].omset);				
					status_milik.push(data.row[coba].status_milik);				
					jml_karyawan.push(data.row[coba].jml_karyawan);				
					jml_atm.push(data.row[coba].jml_atm);				
					jml_pengunjung.push(data.row[coba].jml_pengunjung);				
					id_toilet.push(data.row[coba].id_toilet);				
					id_parkir.push(data.row[coba].id_parkir);				
					njop.push(data.row[coba].njop);				
					nama_toko.push(data.row[coba].nama_toko);
									
					id_rek_umkm.push(data.row[coba].id_rek_umkm);				
					id_umkm.push(data.row[coba].id_umkm);				
					id_izin_damkar.push(data.row[coba].id_izin_damkar);				
					id_tenaga_kerja.push(data.row[coba].id_tenaga_kerja);				
					id_penanggulangan_kebakaran.push(data.row[coba].id_penanggulangan_kebakaran);				
					id_jalan_eksis.push(data.row[coba].id_jalan_eksis);				
					id_penglahan.push(data.row[coba].id_penglahan);				
					id_jarak_pasar.push(data.row[coba].id_jarak_pasar);				
					id_jarak_usaha.push(data.row[coba].id_jarak_usaha);				
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

					/* Data Kesehatan */
					$('#air_bersih').text(id_bersih);
					$('#sumber_air').text(sumber_air);
					$('#limbah').text(id_limbah);
					$('#sampah').text(id_sampah);
					$('#listrik').text(id_listrik);
					/* Data Kesehatan */

					/* Data Kemudahan */
					$('#ketertoilet').text(id_toilet);
					$('#keterparkir').text(id_parkir);
					/* Data Kemudahan */

					/* Data Keselamatan dan Keamanan */
					$('#nopdusaha').text(nopd);
					$('#njop').text(njop);
					$('#nama_toko').text(nama_toko);
					$('#namabadanusaha').text(nama_badan_usaha);
					$('#alamatusaha').text(alamat_usaha);
					$('#statusbangunan').text(status_bangunan);
					$('#asalkaryawan').text(asal_karyawan);
					$('#pempbb').text(id_pem_pbb);
					$('#ketumkm').text(id_umkm);
					$('#perwarga').text(id_warga);
					$('#rekumkm').text(id_layak);
					$('#kajsostek').text(id_kasostek);
					$('#imbtoko').text(no_imb);
					$('#namakelompok').text(kelompok);
					$('#omsetperbulan').text(omset);
					$('#statusmilik').text(status_milik);
					$('#jumlahkarya').text(jml_karyawan);
					$('#jmlmesin').text(jml_atm);
					$('#pengbulan').text(jml_pengunjung);

					$('#kategoriusaha').text();

					/* Data Keselamatan dan Keamanan */
					/* Data Keselamatan dan Keamanan */
					$('#tokenbangunan').text(code);
					$('#namabangunan').text(nama);
					$('#nibpemohon').text(nib);
					$('#npwppemohon').text(npwp);
					$('#tglpemohon').text(tgl);
					$('#zonasi').text(zona);
					$('#kodesublock').text(kode_sublok);
					$('#alamatpemohon').text(alamat);
					$('#cardReview').html('<div class="row"> <label class="col-md-6 col-form-label">Nomor Token :</label> <label class="col-md-6 col-form-label">'+code[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Nama Pemohon :</label> <label class="col-md-6 col-form-label">'+nama[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">NIB :</label> <label class="col-md-6 col-form-label">'+nib[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">NPWP :</label> <label class="col-md-6 col-form-label">'+npwp[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Tanggal Permohonan :</label> <label class="col-md-6 col-form-label">'+tgl[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Status Zonasi :</label> <label class="col-md-6 col-form-label">'+zona[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Kode Sub Blok :</label> <label class="col-md-6 col-form-label">'+kode_sublok[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Alamat :</label> <label class="col-md-6 col-form-label">'+alamat[0]+'</label> </div>');
					$.ajax({
						url: BASE_URL + 'OfficeController/detailBangunanDinas',
						type: 'POST',
						dataType: 'json',
						data: {id:id},
						success:function(data) {
							if (data.success) {
								jQuery('#loader').fadeOut('slow');
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
									$('#reviewpetugas').html('<label>Catatan Administrasi</label><p>'+ketadmin+'</p><label>Catatan Admin Teknis</label><p>'+ketteknis+'</p><label>Catatan Kepala Dinas</label><p>'+ketdinas+'</p>')
									$('#cardPenilaian').html('<ul class="accordion accordion-resume"><li class="accordion-li"><a class="toggle" href="javascript:void(0);">SLF</a><ul class="inner show" style="display: block;"><div id=""><p class="m-0">Nilai permohonan ini pada kategori Data Keseimbangan, Keserasian, Keselarasan Lingkungan sebesar<span class="badge badge-default" id="totalkeseimbangan">'+String(hasilkeseimbangan).substr(0, 4)+'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Kondisi KDH: <span class="badge badge-default" id="konkdh">'+skorkondisikdh[0] +'('+id_kondisi_kdh+')</span></li><li class="list-group-item p-1">- Volume Sumur Resapan: <span class="badge badge-default" id="sumurserap">'+skorvolsumur[0] +'('+id_volume_sumur+')</span></li><li class="list-group-item p-1">- Kondisi Pertandaan Toko: <span class="badge badge-default" id="konpertoko">'+skorpetandaan[0]+'('+id_pertandaan_toko+')</span></li><li class="list-group-item p-1">- Jalan Eksisting Memadai: <span class="badge badge-default" id="eksismadai">'+skorjalaneksis[0]+'('+id_jalan_eksis+')</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Kondisi Sumur Resapan: <span class="badge badge-default" id="kondisisumur">'+skorkondisisumur[0]+'('+id_kondisi_sumur+')</span></li><li class="list-group-item p-1">- Drainase Disekeliling Tapak: <span class="badge badge-default" id="drainasesek">'+skordrainase[0]+'('+id_drainase+')</span></li></ul></div></div><p class="m-0">Nilai permohonan ini pada kategori Keselamatan dan Keamanan sebesar <span class="badge badge-default" id="totalkeamanan">'+String(hasilkeamanan).substr(0, 4)+'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Izin Mendirikan Bangunan : <span class="badge badge-default" id="imbeksis">'+skorimb[0]+'('+id_imb+')</span></li><li class="list-group-item p-1">- Sertifikat Layak Fungsi: <span class="badge badge-default" id="slfeksis">'+skorslf[0]+'('+id_layak+')</span></li><li class="list-group-item p-1">- Rekomendasi dari Dinas Penanggunlangan Kebakaran dan Penyelamatan: <span class="badge badge-default" id="damkar">'+skordamkar[0]+'('+id_izin_damkar+')</span></li><li class="list-group-item p-1">- Rekomendasi dari Dinas Tenaga Kerja dan Transmigrasi: <span class="badge badge-default" id="tkt">'+skortkt[0]+'('+id_tenaga_kerja+')</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Fasilitas Penanggulangan Kebakaran: <span class="badge badge-default" id="fdamkar">'+skorfdamkar[0]+'('+id_penanggulangan_kebakaran+')</span></li><li class="list-group-item p-1">- Ketersediaan Asuransi Toko: <span class="badge badge-default" id="asuransi">'+skorasuransi[0] +'('+id_asuransi+')</span></li><li class="list-group-item p-1">- Waktu Pembaharuan Terakhir Kelayakan Gedung: <span class="badge badge-default" id="layak">'+skorlayak[0]+'('+id_renovasi+')</span></li></ul></div></div><p class="m-0">Nilai permohonan ini pada kategori Kesehatan sebesar <span class="badge badge-default" id="totalkesehatan">'+String(hasilkesehatan).substr(0, 4)+'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Ketersediaan Air Bersih: <span class="badge badge-default" id="ketair">'+skorketersediaan[0]+'('+id_bersih+')</span></li><li class="list-group-item p-1">- Pengelolaan Air Kotor/Limbah: <span class="badge badge-default" id="limbah">'+skorlimbah[0]+'('+id_limbah+')</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Pengelolaan Sampah: <span class="badge badge-default" id="sampah">'+ skorsampah[0]+'('+id_sampah+')</span></li><li class="list-group-item p-1">- Ketersediaan Listrik: <span class="badge badge-default" id="listrik">'+skorlistrik[0] +'('+id_listrik+')</span></li></ul></div></div><p class="m-0">Nilai permohonan ini pada kategori Kemudahan sebesar <span class="badge badge-default" id="totalkemudahan">'+String(hasilkemudahan).substr(0, 4)+'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Ketersediaan Toilet: <span class="badge badge-default" id="toilet">'+skortoilet[0]+'('+id_toilet+')</span></li><li class="list-group-item p-1">- Ketersediaan Parkir: <span class="badge badge-default" id="parkir">'+skorparkir[0]+'('+id_parkir+')</span></li></ul><p class="m-0 text-center">Nilai akhir permohonan ini sebesar <span class="badge badge-default" id="totalakhir3">'+String(totalaslislf).substr(0, 4)+'</span></p><p class="m-0 text-center">Perizinan SLF ini <span class="badge badge-success" id="statuswebslf">'+statuswebsiteslf+'</span></p></div></ul></li><li class="accordion-li"><a class="toggle" href="javascript:void(0);">IUTS</a><ul class="inner show" style="display: block;"><div id=""><p class="m-0">Nilai permohonan ini pada kategori Kebermanfaatan Usaha <span class="badge badge-default" id="totalmanfaat">'+String(hasilmanfaat).substr(0, 4)+'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Pemutakhiran PBB: <span class="badge badge-default" id="pempbb">'+skorpempbb[0]+'('+id_pem_pbb+')</span></li><li class="list-group-item p-1">- Keterlibatan UMKM: <span class="badge badge-default" id="ketumkm">'+skorketumkm[0]+'('+id_umkm+')</span></li><li class="list-group-item p-1">- Persetujuan Warga Sekitar: <span class="badge badge-default" id="setwarga">'+skorwarga[0]+'('+id_warga+')</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Penggunaan lahan sekitar: <span class="badge badge-default" id="penglahan">'+skorpenglahan[0]+'('+id_lahan+')</span></li></ul></div></div><p class="m-0">Nilai permohonan ini pada kategori Antisipasi Dampak/Resiko sebesar <span class="badge badge-default" id="totaldampak">'+String(hasildampak).substr(0, 4) +'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Jarak rencana terhadap Pasar Tradisional: <span class="badge badge-default" id="jarakpasar">'+skorjarakpasar[0]+'('+id_jarak_pasar+')</span></li><li class="list-group-item p-1">- Jarak ke usaha sejenis: <span class="badge badge-default" id="jarakusaha">'+skorjarakusaha[0] +'('+id_jarak_usaha+')</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Ada rekomendasi UMKM: <span class="badge badge-default" id="rekumkm">'+skorrekumkm[0]+'('+id_rek_umkm+')</span></li><li class="list-group-item p-1">- Kajian sostek: <span class="badge badge-default" id="kajiansostek">'+skorkajian[0]+'('+id_kasostek+')</span></li></ul></div></div><p class="m-0 text-center">Nilai akhir permohonan IUTS ini sebesar <span class="badge badge-default" id="totalakhir">'+String(totalasli).substr(0, 4)+'</span></p><p class="m-0 text-center">Perizinan IUTS ini <span class="badge badge-success" id="statusweb">'+statuswebsite+'</span></p></div></ul></li></ul>'); 
										$.getScript("https://iuts.pkkmart.com/admin/assets/js/mapsadmin.js", function() {});
								} 
							} 
						}
					});
				}
			}
		}
	});	
}
function detailSuratsk(id) {
	$.ajax({
		url: BASE_URL + 'OfficeController/getBangunan',
		type: 'POST',
		dataType: 'json',
		data: {code: id},
		success:function(data) {
			if (data.success) {
				if(localStorage.getItem("level") ==3){ // Administrasi
					localStorage.setItem("idbangunanadmin",id);
					localStorage.setItem("iduserbangunan",data.row[0].id_pemohon);
					window.location.href = 'surat_sk.html';
				}
			}
		}
	})
}
function KirimValidasi() {
	$.ajax({
		url: BASE_URL + 'ValidasiController/getallSelect?table=kondisi_sumur',
		type: 'GET',
		dataType: 'json',
		beforeSend: function () {
		},
		success: function (data) {
			if (data.success) {
				var options = "<option readonly='' value='-' selected>Pilih Salah Satu</option>";
				for (var i in data.row) {
					options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
				}
				$('#kondisi_sumur_r').html(options);

			}
		}
	});
}
function terimadinas() {
	$.ajax({
		url: BASE_URL + 'OfficeController/InsertAdminDinas',
		type: 'POST',
		data : {id_bangunan:localStorage.getItem("idbangunanadmin"),admin:localStorage.getItem("idadmin"),keterangan:$('#keterangan').val(),skoriuts:$('#totalakhir2').val(),skorslf:$('#totalakhir4').val(),status:$("input[name='status']:checked").val()},
		dataType: 'json',
		beforeSend: function () {
		},
		success: function (data) {
			Swal.fire(
				'Berhasil Verifikasi',
				);
		}
	});
}
function terbitsk() {
	$.ajax({
		url: BASE_URL + 'OfficeController/InsertSuratKuasa',
		type: 'POST',
		data : {id_bangunan:localStorage.getItem("idbangunanadmin"),admin:localStorage.getItem("idadmin"),tanggal:$('#tgl_janji').val()},
		dataType: 'json',
		beforeSend: function () {
		},
		success: function (data) {
			Swal.fire(
				'Berhasil Terbitkan sk',
				);
		}
	});
}
function tolakdinas() {
	$.ajax({
		url: BASE_URL + 'OfficeController/InsertAdminDinas',
		type: 'POST',
		data : {id_bangunan:localStorage.getItem("idbangunanadmin"),admin:localStorage.getItem("idadmin"),keterangan:$('#keterangan').val(),skor:$('#totalakhir2').val(),status:'0'},
		dataType: 'json',
		beforeSend: function () {
		},
		success: function (data) {
			Swal.fire(
				'Berhasil Tolak Data',
				);
		}
	});
}
function printsk() {
	$.ajax({
		url: BASE_URL + 'OfficeController/downloadpdf',
		type: 'POST',
		data : {id_bangunan:localStorage.getItem("idbangunanadmin"),admin:localStorage.getItem("idadmin"),keterangan:$('#keterangan').val(),skor:$('#totalakhir2').val(),status:'0'},
		dataType: 'json',
		beforeSend: function () {
			
			window.open(BASE_URL+'OfficeController/downloadpdf','_blank');
		},
		success: function (data) {
		}
	});
}
timeline = {
	editdataizin:function (argument) {
		var datas = {code:id};
		$('#detailPerizinan').modal('show');
		$.ajax({
			url: BASE_URL + 'OfficeController/getBangunanDetail',
			type: 'POST',
			dataType: 'json',
			data: datas,
			beforeSend:function(argument) {
				jQuery('#loader').fadeIn('slow');
			},
			success:function(data) {
				if (data.success) {
					jQuery('#loader').fadeOut('slow');
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
						lat.push(data.row[coba].lat);
						lon.push(data.row[coba].lon);
						tgl.push(data.row[coba].tanggal);

					}
					$('#tokenbangunan').text(code);
					$('#namabangunan').text(nama);
					$('#nibpemohon').text(nib);
					$('#npwppemohon').text(npwp);
					$('#tglpemohon').text(tgl);
					$('#zonasi').text(zona);
					$('#kodesublock').text(kode_sublok);
					$('#alamatpemohon').text(alamat);
					$('#lat').val(lat);
					$('#long').val(lon);
					$('#cardReview').html('<div class="row"> <label class="col-md-6 col-form-label">Nomor Token :</label> <label class="col-md-6 col-form-label">'+code[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Nama Pemohon :</label> <label class="col-md-6 col-form-label">'+nama[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">NIB :</label> <label class="col-md-6 col-form-label">'+nib[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">NPWP :</label> <label class="col-md-6 col-form-label">'+npwp[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Tanggal Permohonan :</label> <label class="col-md-6 col-form-label">'+tgl[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Status Zonasi :</label> <label class="col-md-6 col-form-label">'+zona[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Kode Sub Blok :</label> <label class="col-md-6 col-form-label">'+kode_sublok[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Alamat :</label> <label class="col-md-6 col-form-label">'+alamat[0]+'</label> </div>');
					$.getScript("https://iuts.pkkmart.com/admin/assets/js/mapsadmin.js", function() {
					});
				}
			}
		});
	},	
	// start view data
	datadetailadmin:function() {
		var datas = {id:localStorage.getItem("idbangunanadmin")};
		$.ajax({
		url: BASE_URL + 'OfficeController/getBangunanDetail',
		type: 'POST',
		dataType: 'json',
		data: datas,
		beforeSend:function(argument) {
			jQuery('#loader').fadeIn('slow');
		},
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
				var njop = [];
				var nama_toko = [];
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
				var nama_badan_usaha = [];
				var status_bangunan = [];
				var asal_karyawan = [];
				var id_kasostek = [];
				var id_umkm = [];
				var id_pem_pbb = [];
				var id_warga = [];
				var id_kasostek = [];
				var no_imb = [];
				var kelompok = [];
				var omset = [];
				var status_milik = [];
				var jml_karyawan = [];
				var jml_atm = [];
				var jml_pengunjung = [];
				var id_toilet = [];
				var id_parkir = [];

				var id_rek_umkm = [];
				var id_umkm = [];
				var id_izin_damkar= [];
				var id_tenaga_kerja = [];
				var id_penanggulangan_kebakaran = [];
				var id_jalan_eksis = [];
				var id_penglahan = [];
				var id_jarak_pasar = [];
				var id_jarak_usaha = [];
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
					nama_badan_usaha.push(data.row[coba].nama_badan_usaha);
					status_bangunan.push(data.row[coba].status_bangunan);
					asal_karyawan.push(data.row[coba].asal_karyawan);
					id_kasostek.push(data.row[coba].id_kasostek);
					id_umkm.push(data.row[coba].id_umkm);
					id_pem_pbb.push(data.row[coba].id_pem_pbb);
					id_warga.push(data.row[coba].id_warga);						
					no_imb.push(data.row[coba].no_imb);				
					kelompok.push(data.row[coba].kelompok);				
					omset.push(data.row[coba].omset);				
					status_milik.push(data.row[coba].status_milik);				
					jml_karyawan.push(data.row[coba].jml_karyawan);				
					jml_atm.push(data.row[coba].jml_atm);				
					jml_pengunjung.push(data.row[coba].jml_pengunjung);				
					id_toilet.push(data.row[coba].id_toilet);				
					id_parkir.push(data.row[coba].id_parkir);				
					njop.push(data.row[coba].njop);				
					nama_toko.push(data.row[coba].nama_toko);
									
					id_rek_umkm.push(data.row[coba].id_rek_umkm);				
					id_umkm.push(data.row[coba].id_umkm);				
					id_izin_damkar.push(data.row[coba].id_izin_damkar);				
					id_tenaga_kerja.push(data.row[coba].id_tenaga_kerja);				
					id_penanggulangan_kebakaran.push(data.row[coba].id_penanggulangan_kebakaran);				
					id_jalan_eksis.push(data.row[coba].id_jalan_eksis);				
					id_penglahan.push(data.row[coba].id_penglahan);				
					id_jarak_pasar.push(data.row[coba].id_jarak_pasar);				
					id_jarak_usaha.push(data.row[coba].id_jarak_usaha);				
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

					/* Data Kesehatan */
					$('#air_bersih').text(id_bersih);
					$('#sumber_air').text(sumber_air);
					$('#limbah').text(id_limbah);
					$('#sampah').text(id_sampah);
					$('#listrik').text(id_listrik);
					/* Data Kesehatan */

					/* Data Kemudahan */
					$('#ketertoilet').text(id_toilet);
					$('#keterparkir').text(id_parkir);
					/* Data Kemudahan */

					/* Data Keselamatan dan Keamanan */
					$('#nopdusaha').text(nopd);
					$('#njop').text(njop);
					$('#nama_toko').text(nama_toko);
					$('#namabadanusaha').text(nama_badan_usaha);
					$('#alamatusaha').text(alamat_usaha);
					$('#statusbangunan').text(status_bangunan);
					$('#asalkaryawan').text(asal_karyawan);
					$('#pempbb').text(id_pem_pbb);
					$('#ketumkm').text(id_umkm);
					$('#perwarga').text(id_warga);
					$('#rekumkm').text(id_layak);
					$('#kajsostek').text(id_kasostek);
					$('#imbtoko').text(no_imb);
					$('#namakelompok').text(kelompok);
					$('#omsetperbulan').text(omset);
					$('#statusmilik').text(status_milik);
					$('#jumlahkarya').text(jml_karyawan);
					$('#jmlmesin').text(jml_atm);
					$('#pengbulan').text(jml_pengunjung);

					$('#kategoriusaha').text();

					/* Data Keselamatan dan Keamanan */
					/* Data Keselamatan dan Keamanan */
					$('#tokenbangunan').text(code);
					$('#namabangunan').text(nama);
					$('#nibpemohon').text(nib);
					$('#npwppemohon').text(npwp);
					$('#tglpemohon').text(tgl);
					$('#zonasi').text(zona);
					$('#kodesublock').text(kode_sublok);
					$('#alamatpemohon').text(alamat);
					$('#cardReview').html('<div class="row"> <label class="col-md-6 col-form-label">Nomor Token :</label> <label class="col-md-6 col-form-label">'+code[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Nama Pemohon :</label> <label class="col-md-6 col-form-label">'+nama[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">NIB :</label> <label class="col-md-6 col-form-label">'+nib[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">NPWP :</label> <label class="col-md-6 col-form-label">'+npwp[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Tanggal Permohonan :</label> <label class="col-md-6 col-form-label">'+tgl[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Status Zonasi :</label> <label class="col-md-6 col-form-label">'+zona[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Kode Sub Blok :</label> <label class="col-md-6 col-form-label">'+kode_sublok[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Alamat :</label> <label class="col-md-6 col-form-label">'+alamat[0]+'</label> </div>');
					$.ajax({
						url: BASE_URL + 'OfficeController/detailBangunanDinas',
						type: 'POST',
						dataType: 'json',
						data: {id:id},
						success:function(data) {
							if (data.success) {
								jQuery('#loader').fadeOut('slow');
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
									$('#reviewpetugas').html('<label>Catatan Administrasi</label><p>'+ketadmin+'</p><label>Catatan Admin Teknis</label><p>'+ketteknis+'</p><label>Catatan Kepala Dinas</label><p>'+ketdinas+'</p>')
									$('#cardPenilaian').html('<ul class="accordion accordion-resume"><li class="accordion-li"><a class="toggle" href="javascript:void(0);">SLF</a><ul class="inner show" style="display: block;"><div id=""><p class="m-0">Nilai permohonan ini pada kategori Data Keseimbangan, Keserasian, Keselarasan Lingkungan sebesar<span class="badge badge-default" id="totalkeseimbangan">'+String(hasilkeseimbangan).substr(0, 4)+'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Kondisi KDH: <span class="badge badge-default" id="konkdh">'+skorkondisikdh[0] +'('+id_kondisi_kdh+')</span></li><li class="list-group-item p-1">- Volume Sumur Resapan: <span class="badge badge-default" id="sumurserap">'+skorvolsumur[0] +'('+id_volume_sumur+')</span></li><li class="list-group-item p-1">- Kondisi Pertandaan Toko: <span class="badge badge-default" id="konpertoko">'+skorpetandaan[0]+'('+id_pertandaan_toko+')</span></li><li class="list-group-item p-1">- Jalan Eksisting Memadai: <span class="badge badge-default" id="eksismadai">'+skorjalaneksis[0]+'('+id_jalan_eksis+')</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Kondisi Sumur Resapan: <span class="badge badge-default" id="kondisisumur">'+skorkondisisumur[0]+'('+id_kondisi_sumur+')</span></li><li class="list-group-item p-1">- Drainase Disekeliling Tapak: <span class="badge badge-default" id="drainasesek">'+skordrainase[0]+'('+id_drainase+')</span></li></ul></div></div><p class="m-0">Nilai permohonan ini pada kategori Keselamatan dan Keamanan sebesar <span class="badge badge-default" id="totalkeamanan">'+String(hasilkeamanan).substr(0, 4)+'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Izin Mendirikan Bangunan : <span class="badge badge-default" id="imbeksis">'+skorimb[0]+'('+id_imb+')</span></li><li class="list-group-item p-1">- Sertifikat Layak Fungsi: <span class="badge badge-default" id="slfeksis">'+skorslf[0]+'('+id_layak+')</span></li><li class="list-group-item p-1">- Rekomendasi dari Dinas Penanggunlangan Kebakaran dan Penyelamatan: <span class="badge badge-default" id="damkar">'+skordamkar[0]+'('+id_izin_damkar+')</span></li><li class="list-group-item p-1">- Rekomendasi dari Dinas Tenaga Kerja dan Transmigrasi: <span class="badge badge-default" id="tkt">'+skortkt[0]+'('+id_tenaga_kerja+')</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Fasilitas Penanggulangan Kebakaran: <span class="badge badge-default" id="fdamkar">'+skorfdamkar[0]+'('+id_penanggulangan_kebakaran+')</span></li><li class="list-group-item p-1">- Ketersediaan Asuransi Toko: <span class="badge badge-default" id="asuransi">'+skorasuransi[0] +'('+id_asuransi+')</span></li><li class="list-group-item p-1">- Waktu Pembaharuan Terakhir Kelayakan Gedung: <span class="badge badge-default" id="layak">'+skorlayak[0]+'('+id_renovasi+')</span></li></ul></div></div><p class="m-0">Nilai permohonan ini pada kategori Kesehatan sebesar <span class="badge badge-default" id="totalkesehatan">'+String(hasilkesehatan).substr(0, 4)+'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Ketersediaan Air Bersih: <span class="badge badge-default" id="ketair">'+skorketersediaan[0]+'('+id_bersih+')</span></li><li class="list-group-item p-1">- Pengelolaan Air Kotor/Limbah: <span class="badge badge-default" id="limbah">'+skorlimbah[0]+'('+id_limbah+')</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Pengelolaan Sampah: <span class="badge badge-default" id="sampah">'+ skorsampah[0]+'('+id_sampah+')</span></li><li class="list-group-item p-1">- Ketersediaan Listrik: <span class="badge badge-default" id="listrik">'+skorlistrik[0] +'('+id_listrik+')</span></li></ul></div></div><p class="m-0">Nilai permohonan ini pada kategori Kemudahan sebesar <span class="badge badge-default" id="totalkemudahan">'+String(hasilkemudahan).substr(0, 4)+'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Ketersediaan Toilet: <span class="badge badge-default" id="toilet">'+skortoilet[0]+'('+id_toilet+')</span></li><li class="list-group-item p-1">- Ketersediaan Parkir: <span class="badge badge-default" id="parkir">'+skorparkir[0]+'('+id_parkir+')</span></li></ul><p class="m-0 text-center">Nilai akhir permohonan ini sebesar <span class="badge badge-default" id="totalakhir3">'+String(totalaslislf).substr(0, 4)+'</span></p><p class="m-0 text-center">Perizinan SLF ini <span class="badge badge-success" id="statuswebslf">'+statuswebsiteslf+'</span></p></div></ul></li><li class="accordion-li"><a class="toggle" href="javascript:void(0);">IUTS</a><ul class="inner show" style="display: block;"><div id=""><p class="m-0">Nilai permohonan ini pada kategori Kebermanfaatan Usaha <span class="badge badge-default" id="totalmanfaat">'+String(hasilmanfaat).substr(0, 4)+'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Pemutakhiran PBB: <span class="badge badge-default" id="pempbb">'+skorpempbb[0]+'('+id_pem_pbb+')</span></li><li class="list-group-item p-1">- Keterlibatan UMKM: <span class="badge badge-default" id="ketumkm">'+skorketumkm[0]+'('+id_umkm+')</span></li><li class="list-group-item p-1">- Persetujuan Warga Sekitar: <span class="badge badge-default" id="setwarga">'+skorwarga[0]+'('+id_warga+')</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Penggunaan lahan sekitar: <span class="badge badge-default" id="penglahan">'+skorpenglahan[0]+'('+id_lahan+')</span></li></ul></div></div><p class="m-0">Nilai permohonan ini pada kategori Antisipasi Dampak/Resiko sebesar <span class="badge badge-default" id="totaldampak">'+String(hasildampak).substr(0, 4) +'</span></p><p class="m-0">Berikut ini adalah rincian nilai:</p><div class="row"><div class="col-md-6"><ul class="list-group list-group-flush mb-3"><li class="list-group-item p-1">- Jarak rencana terhadap Pasar Tradisional: <span class="badge badge-default" id="jarakpasar">'+skorjarakpasar[0]+'('+id_jarak_pasar+')</span></li><li class="list-group-item p-1">- Jarak ke usaha sejenis: <span class="badge badge-default" id="jarakusaha">'+skorjarakusaha[0] +'('+id_jarak_usaha+')</span></li></ul></div><div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item p-1">- Ada rekomendasi UMKM: <span class="badge badge-default" id="rekumkm">'+skorrekumkm[0]+'('+id_rek_umkm+')</span></li><li class="list-group-item p-1">- Kajian sostek: <span class="badge badge-default" id="kajiansostek">'+skorkajian[0]+'('+id_kasostek+')</span></li></ul></div></div><p class="m-0 text-center">Nilai akhir permohonan IUTS ini sebesar <span class="badge badge-default" id="totalakhir">'+String(totalasli).substr(0, 4)+'</span></p><p class="m-0 text-center">Perizinan IUTS ini <span class="badge badge-success" id="statusweb">'+statuswebsite+'</span></p></div></ul></li></ul>'); 
										$.getScript("https://iuts.pkkmart.com/admin/assets/js/mapsadmin.js", function() {});
								} 
							} 
						}
					});
				}
			}
		}
	});	
},
datadetailPemohon:function() {
	var datas = {code:localStorage.getItem("idbangunanadmin")};
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
				var foto_ktp = [];
				var foto_npwp = [];
				var akta_perusahaan = [];
				var foto_luar = [];

				for(var coba in data.row){
					code.push(data.row[coba].code);
					nama.push(data.row[coba].nama);
					nib.push(data.row[coba].nib);
					npwp.push(data.row[coba].npwp);
					alamat.push(data.row[coba].alamat_usaha);
					zona.push(data.row[coba].zona);
					kode_sublok.push(data.row[coba].kode_sublok);
					lat.push(data.row[coba].lat);
					lon.push(data.row[coba].lon);
					tgl.push(data.row[coba].created_at);
					foto_ktp.push(data.row[coba].foto_ktp);
					foto_npwp.push(data.row[coba].foto_npwp);
					akta_perusahaan.push(data.row[coba].akta_perusahaan);

				}
				$('#tokenbangunan').text(code);
				$('#namabangunan').text(nama);
				$('#nibpemohon').text(nib);
				$('#npwppemohon').text(npwp);
				$('#tglpemohon').text(tgl);
				$('#zonasi').text(zona);
				$('#kodesublock').text(kode_sublok);
				$('#alamatpemohon').text(alamat);
				$('#lat').val(lat);
				$('#long').val(lon);
				$('#idadmin').val(localStorage.getItem('idadmin'));
				$('#codebangunan').val(localStorage.getItem("idbangunanadmin"));
				$('#cardReview').html('<div class="row"> <label class="col-md-6 col-form-label">Nomor Token :</label> <label class="col-md-6 col-form-label">'+code[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Nama Pemohon :</label> <label class="col-md-6 col-form-label">'+nama[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">NIB :</label> <label class="col-md-6 col-form-label">'+nib[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">NPWP :</label> <label class="col-md-6 col-form-label">'+npwp[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Tanggal Permoohonan :</label> <label class="col-md-6 col-form-label">'+tgl[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Status Zonasi :</label> <label class="col-md-6 col-form-label">'+zona[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Kode Sub Blok :</label> <label class="col-md-6 col-form-label">'+kode_sublok[0]+'</label> </div> <div class="row"> <label class="col-md-6 col-form-label">Alamat :</label> <label class="col-md-6 col-form-label">'+alamat[0]+'</label> </div>');
				$.getScript("https://iuts.pkkmart.com/admin/assets/js/mapsadmin.js", function() {
				});
				$.ajax({
					url: BASE_URL + 'OfficeController/getAllFoto',
					type: 'POST',
					dataType: 'json',
					data: datas,
					beforeSend:function() {
						jQuery('#loader').fadeIn('slow');
					},
					success:function(data) {
						if (data.success) {
							jQuery('#loader').fadeOut('slow');
							$('#fotoktp').text(foto_ktp);
							$('#fotonpwp').text(foto_npwp);
							$('#fotoakta').text(akta_perusahaan);
							$('#fotoluar').text(akta_perusahaan);
							$('#fotodalam').text(akta_perusahaan);
							$('#fotoimb').text(akta_perusahaan);
							$('#fotoslf').text(akta_perusahaan);
							$('#fotodamkar').text(akta_perusahaan);
							$('#fototkt').text(akta_perusahaan);
							$('#fotoasransi').text(akta_perusahaan);
							$('#fotopbb').text(akta_perusahaan);
							$('#fotoperw').text(akta_perusahaan);
							$('#fotorekumkm').text(akta_perusahaan);
							$('#fotokajian').text(akta_perusahaan);
							$('#fotoakta').text(akta_perusahaan);
						}
					}
				})
			}
		}
	});
},
	// end view data
};
$("#inputadministrasi").submit(function (event) {
	var data = new FormData($(this)[0]);
	$.ajax({
		url: BASE_URL + 'ValidasiController/ValidasiFoto',
		type: "POST",
		dataType:'json',
		data: data,
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
					'Berhasil Verifikasi',
					);

				$("#inputadministrasi")[0].reset();
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

$("#inputadminteknis").submit(function (event) {
	var data = new FormData($(this)[0]);
	$.ajax({
		url: BASE_URL + 'OfficeController/InsertAdminTeknis',
		type: "POST",
		dataType:'json',
		data: {id_bangunan:localStorage.getItem('idbangunanadmin'),admin:localStorage.getItem('idadmin'),lahansekitar:$("#lahansekitar").val(),statususaha:$('#statususaha').val(),statuspasar:$('#statuspasar').val(),keterangan:$("#keterangan").val()},
		// contentType: false,
		// cache: false,
		// processData: false,
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
					'Berhasil Verifikasi',
					);

				$("#inputadminteknis")[0].reset();
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


				if (localStorage.getItem("level") ==1 ) { // Kepala dinas
					$('#tugas').html('<ul class="nav nav-sm flex-column"> <li class="nav-item"> <a class="nav-link" href="tugas_verifikasi.html"> Verifikasi </a> </li> <a class="nav-link" href="#"> Laporan </a> </li> </ul>'); 
					$.ajax({
						url: BASE_URL + 'ValidasiController/getallSelect?table=kelengkapan_admin',
						type: 'GET',
						dataType: 'json',
						beforeSend: function () {
						},
						success: function (data) {
							if (data.success) {
								var options = "<option readonly='' value='-' selected>Pilih Salah Satu</option>";
								for (var i in data.row) {
									options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
								}
								$('#kelengkapan_admin').html(options);

							}
						}
					});				

				}else if(localStorage.getItem("level") ==2){// Admin Teknis
					$('#tugas').html('<ul class="nav nav-sm flex-column"> <li class="nav-item"> <a class="nav-link" href="tugas_verifikasi.html"> Verifikasi </a> </li> <a class="nav-link" href="#"> Laporan </a> </li> </ul>');	
					$.ajax({
						url: BASE_URL + 'ValidasiController/getallSelect?table=penggunaan_lahan',
						type: 'GET', 
						dataType: 'json',
						beforeSend: function () {
						},
						success: function (data) {
							if (data.success) {
								var options = "<option readonly='' value='-' selected>Pilih Salah Satu</option>";
								for (var i in data.row) {
									options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
								}
								$('#lahansekitar').html(options);

							}
						}
					});				
					$.ajax({
						url: BASE_URL + 'ValidasiController/getallSelect?table=rencana_jalan',
						type: 'GET',
						dataType: 'json',
						beforeSend: function () {
						},
						success: function (data) {
							if (data.success) {
								var options = "<option readonly='' value='-' selected>Pilih Salah Satu</option>";
								for (var i in data.row) {
									options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
								}
								$('#rencanajalan').html(options);

							}
						}
					});				
					$.ajax({
						url: BASE_URL + 'ValidasiController/getallSelect?table=jalan_eksisting',
						type: 'GET',
						dataType: 'json',
						beforeSend: function () {
						},
						success: function (data) {
							if (data.success) {
								var options = "<option readonly='' value='-' selected>Pilih Salah Satu</option>";
								for (var i in data.row) {
									options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
								}
								$('#eksitingjalan').html(options);

							}
						}
					});
					$.ajax({
						url: BASE_URL + 'ValidasiController/getallSelect?table=tata_ruang',
						type: 'GET',
						dataType: 'json',
						beforeSend: function () {
						},
						success: function (data) {
							if (data.success) {
								var options = "<option readonly='' value='-' selected>Pilih Salah Satu</option>";
								for (var i in data.row) {
									options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
								}
								$('#tataruang').html(options);

							}
						}
					});
					$.ajax({
						url: BASE_URL + 'ValidasiController/getallSelect?table=jarak_usaha',
						type: 'GET',
						dataType: 'json',
						beforeSend: function () {
						},
						success: function (data) {
							if (data.success) {
								var options = "<option readonly='' value='-' selected>Pilih Salah Satu</option>";
								for (var i in data.row) {
									options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
								}
								$('#statususaha').html(options);

							}
						}
					});
					$.ajax({
						url: BASE_URL + 'ValidasiController/getallSelect?table=jarak_pasar',
						type: 'GET',
						dataType: 'json',
						beforeSend: function () {
						},
						success: function (data) {
							if (data.success) {
								var options = "<option readonly='' value='-' selected>Pilih Salah Satu</option>";
								for (var i in data.row) {
									options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
								}
								$('#statuspasar').html(options);

							}
						}
					});
					function ceklahan() {
						$.ajax({
							url: BASE_URL + 'ValidasiController/getNilai',
							type: 'GET',
							dataType: 'json',
							data:{id:$("#lahansekitar").val(),table:'penggunaan_lahan'},
							beforeSend: function () {
							},
							success: function (data) {
								if (data.success) {
									$('#nilailahan').html(data.row[0].skor);
								}
							}
						});
					}
					function cekrencanajalan() {
						$.ajax({
							url: BASE_URL + 'ValidasiController/getNilai',
							type: 'GET',
							dataType: 'json',
							data:{id:$("#rencanajalan").val(),table:'rencana_jalan'},
							beforeSend: function () {
							},
							success: function (data) {
								if (data.success) {
									$('#nilaijalan').html(data.row[0].skor);
								}
							}
						});
					}
					function cekjalan() {
						$.ajax({
							url: BASE_URL + 'ValidasiController/getNilai',
							type: 'GET',
							dataType: 'json',
							data:{id:$("#eksitingjalan").val(),table:'jalan_eksisting'},
							beforeSend: function () {
							},
							success: function (data) {
								if (data.success) {
									$('#nilaiekstingjalan').html(data.row[0].skor);
								}
							}
						});
					}
					function cektata() {
						$.ajax({
							url: BASE_URL + 'ValidasiController/getNilai',
							type: 'GET',
							dataType: 'json',
							data:{id:$("#tataruang").val(),table:'tata_ruang'},
							beforeSend: function () {
							},
							success: function (data) {
								if (data.success) {
									$('#nilaitata').html(data.row[0].skor);
								}
							}
						});
					}
					function cekusaha() {
						$.ajax({
							url: BASE_URL + 'ValidasiController/getNilai',
							type: 'GET',
							dataType: 'json',
							data:{id:$("#statususaha").val(),table:'jarak_usaha'},
							beforeSend: function () {
							},
							success: function (data) {
								if (data.success) {
									$('#nilaiusaha').html(data.row[0].skor);
								}
							}
						});
					}
					function cekpasar() {
						$.ajax({
							url: BASE_URL + 'ValidasiController/getNilai',
							type: 'GET',
							dataType: 'json',
							data:{id:$("#statuspasar").val(),table:'jarak_pasar'},
							beforeSend: function () {
							},
							success: function (data) {
								if (data.success) {
									$('#nilaipasar').html(data.row[0].skor);
								}
							}
						});
					}
				}else if(localStorage.getItem("level") ==3){ // Administrasi
					$('#tugas').html('<ul class="nav nav-sm flex-column"> <li class="nav-item"> <a class="nav-link" href="tugas_verifikasi.html"> Verifikasi </a> </li><li class="nav-item"> <a class="nav-link" href="tugas_sk.html"> Terbit SK </a> </li> <li class="nav-item"> <a class="nav-link" href="#"> Laporan </a> </li> <li class="nav-item"> <a class="nav-link" href="#"> Kontak Kami </a> </li> </ul>');
					$.ajax({
						url: BASE_URL + 'ValidasiController/getallSelect?table=kelengkapan_admin',
						type: 'GET',
						dataType: 'json',
						beforeSend: function () {
						},
						success: function (data) {
							if (data.success) {
								var options = "<option readonly='' value='-' selected>Pilih Salah Satu</option>";
								for (var i in data.row) {
									options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
								}
								$('#kelengkapan_admin').html(options);

							}
						}
					});				
					$.ajax({
						url: BASE_URL + 'ValidasiController/getallSelect?table=lama_izin',
						type: 'GET',
						dataType: 'json',
						beforeSend: function () {
						},
						success: function (data) {
							if (data.success) {
								var options = "<option readonly='' value='-' selected>Pilih Salah Satu</option>";
								for (var i in data.row) {
									options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
								}
								$('#lama_izin').html(options);

							}
						}
					});				
					$.ajax({
						url: BASE_URL + 'ValidasiController/getallSelect?table=status_npwp',
						type: 'GET',
						dataType: 'json',
						beforeSend: function () {
						},
						success: function (data) {
							if (data.success) {
								var options = "<option readonly='' value='-' selected>Pilih Salah Satu</option>";
								for (var i in data.row) {
									options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
								}
								$('#statusNPWP').html(options);

							}
						}
					});
					$.ajax({
						url: BASE_URL + 'ValidasiController/getallSelect?table=status_pbb',
						type: 'GET',
						dataType: 'json',
						beforeSend: function () {
						},
						success: function (data) {
							if (data.success) {
								var options = "<option readonly='' value='-' selected>Pilih Salah Satu</option>";
								for (var i in data.row) {
									options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
								}
								$('#statusPBB').html(options);

							}
						}
					});
					function cekKelengkapan() {
						$.ajax({
							url: BASE_URL + 'ValidasiController/getNilai',
							type: 'GET',
							dataType: 'json',
							data:{id:$("#kelengkapan_admin").val(),table:'kelengkapan_admin'},
							beforeSend: function () {
							},
							success: function (data) {
								if (data.success) {
									$('#nilaiadmin').html(data.row[0].skor);
								}
							}
						});
					}
					function cekLama() {
						$.ajax({
							url: BASE_URL + 'ValidasiController/getNilai',
							type: 'GET',
							dataType: 'json',
							data:{id:$("#lama_izin").val(),table:'lama_izin'},
							beforeSend: function () {
							},
							success: function (data) {
								if (data.success) {
									$('#nilaiizin').html(data.row[0].skor);
								}
							}
						});
					}
					function ceknpwp() {
						$.ajax({
							url: BASE_URL + 'ValidasiController/getNilai',
							type: 'GET',
							dataType: 'json',
							data:{id:$("#statusNPWP").val(),table:'status_npwp'},
							beforeSend: function () {
							},
							success: function (data) {
								if (data.success) {
									$('#nilainpwp').html(data.row[0].skor);
								}
							}
						});
					}
					function cekPbb() {
						$.ajax({
							url: BASE_URL + 'ValidasiController/getNilai',
							type: 'GET',
							dataType: 'json',
							data:{id:$("#statusPBB").val(),table:'status_pbb'},
							beforeSend: function () {
							},
							success: function (data) {
								if (data.success) {
									$('#nilaipbb').html(data.row[0].skor);
								}
							}
						});
					}
				}
				if (typeof(Storage) !== "undefined") {
					if (localStorage.getItem('idadmin') === null) {
						window.location.href = '../login.html';
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
				$(".logout").click(function(event) {
					localStorage.clear();
					window.location.href = '../login.html';
				});

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