// var BASE_URL = 'http://localhost/rest_api_iuts/';
var BASE_URL = 'https://rest-iuts.pkkmart.com/';
$("#namapemohon").html(localStorage.getItem("nama"));
$("#namapemohonnav").html(localStorage.getItem("nama"));
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
					window.location.href = 'tugasdinas.html';
				}else if(localStorage.getItem("level") ==2){// Admin Teknis
					localStorage.setItem("idbangunanadmin",id);
					localStorage.setItem("iduserbangunan",data.row[0].id_pemohon);
					window.location.href = 'formtugasteknis.html';
				}else if(localStorage.getItem("level") ==3){ // Administrasi
					localStorage.setItem("idbangunanadmin",id);
					localStorage.setItem("iduserbangunan",data.row[0].id_pemohon);
					window.location.href = 'formtugas.html';
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
					window.location.href = 'suratsk.html';
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
		data : {id_bangunan:localStorage.getItem("idbangunanadmin"),admin:localStorage.getItem("idadmin"),keterangan:$('#keterangan').val(),skor:$('#totalakhir2').val(),status:'1'},
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
	window.open('printsk.html','_blank');
}
timeline = {
	datadetailprint:function() {
		var datas = {id:localStorage.getItem("idbangunanadmin")};
		$.ajax({
			url: BASE_URL + 'OfficeController/detailBangunanDinas',
			type: 'POST',
			data: datas,
			dataType : 'json',
			success:function(data) {
				var skorlengkap = [];
				var skorwaktu = [];
				var skorpbb = [];
				var skornpwp = [];
				var skorrenjalan = [];
				var skorjalaneksis = [];
				var skortataruang = [];
				var skorjarakusaha = [];
				var skorpenglahan = [];
				var skorkondisieksis = [];
				var skotpempbb = [];
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
				var code = [];
				var nama = [];
				var nib = [];
				var npwp = [];
				var tgl = [];
				var alamat = [];
				var ketadmin = [];
				var ketteknis = [];
				var skoradministrasi = [];
				var skormanfaat = [];
				var skordampak = [];
				var skortax = [];
				var skorjarakpasar = [];
				for(var coba in data.row){
					skorlengkap.push(data.row[coba].skorlengkap);
					skorwaktu.push(data.row[coba].skorwaktu);
					skorpbb.push(data.row[coba].skorpbb);
					skornpwp.push(data.row[coba].skornpwp);
					skorrenjalan.push(data.row[coba].skorrenjalan);
					skorjalaneksis.push(data.row[coba].skorjalaneksis);
					skortataruang.push(data.row[coba].skortataruang);
					skorjarakusaha.push(data.row[coba].skorjarakusaha);
					skorpenglahan.push(data.row[coba].skorpenglahan);
					skorkondisieksis.push(data.row[coba].skorkondisieksis);
					skotpempbb.push(data.row[coba].skotpempbb);
					skorketumkm.push(data.row[coba].skorketumkm);
					skorsewa.push(data.row[coba].skorsewa);
					skorwarga.push(data.row[coba].skorwarga);
					skorrekumkm.push(data.row[coba].skorrekumkm);
					skorslf.push(data.row[coba].skorslf);
					skorimb.push(data.row[coba].skorimb);
					skorkajian.push(data.row[coba].skorkajian);
					skorvolsumur.push(data.row[coba].skorvolsumur);
					skordrainase.push(data.row[coba].skordrainase);
					skorkondisisumur.push(data.row[coba].skorkondisisumur);
					skorkdhmini.push(data.row[coba].skorkdhmini);
					skorjarakpasar.push(data.row[coba].skorjarakpasar);
					code.push(data.row[coba].code);
					nama.push(data.row[coba].nama);
					nib.push(data.row[coba].nib);
					npwp.push(data.row[coba].npwp);
					tgl.push(data.row[coba].tgl);
					alamat.push(data.row[coba].alamat);
					ketadmin.push(data.row[coba].ketadmin);
					ketteknis.push(data.row[coba].ketteknis);

					skoradministrasi.push(data.row[coba].skoradministrasi);
					skormanfaat.push(data.row[coba].skormanfaat);
					skordampak.push(data.row[coba].skordampak);
					skortax.push(data.row[coba].skortax);

				}
				// console.log(nama.length);
				$('#nilailengkap').text(skorlengkap);
				$('#nilaiizin').text(skorwaktu);
				$('#nilaieksiting').text(skorkondisieksis);

				$('#nilaipbb').text(skorpbb);
				$('#nilainpwp').text(skornpwp);

				$('#pempbb').text(skotpempbb);
				$('#ketumkm').text(skorketumkm);
				$('#persewa').text(skorsewa);

				$('#penglahan').text(skorpenglahan);
				$('#setwarga').text(skorwarga);
				$('#eksismadai').text(skorjalaneksis);

				$('#jarakpasar').text(skorjarakpasar);
				$('#renjalan').text(skorrenjalan);
				$('#rekumkm').text(skorrekumkm);
				$('#slfeksis').text(skorslf);
				$('#kondisisumur').text(skorkondisisumur);
				$('#drainasesek').text(skordrainase);
				$('#tataruang').text(skortataruang);
				$('#kajiansostek').text(skorkajian);
				$('#imbeksis').text(skorimb);
				$('#jarakusaha').text(skorjarakusaha);
				$('#sumurserap').text(skorvolsumur);
				$('#kdhmini').text(skorkdhmini);

				var totaladmin = parseFloat(skorlengkap)+parseFloat(skorwaktu)+parseFloat(skorkondisieksis);
				var totalmanfaat = parseFloat(skotpempbb)+parseFloat(skorketumkm)+parseFloat(skorsewa)+parseFloat(skorpenglahan)+parseFloat(skorwarga)+parseFloat(skorjalaneksis);
				var totaldampak = parseFloat(skorjarakpasar)+parseFloat(skorrenjalan)+parseFloat(skorrekumkm)+parseFloat(skorslf)+parseFloat(skorkondisisumur)+parseFloat(skordrainase)+parseFloat(skortataruang)+parseFloat(skorkajian)+parseFloat(skorimb)+parseFloat(skorjarakusaha)+parseFloat(skorvolsumur)+parseFloat(skorkdhmini);
				var totaltax = parseFloat(skorpbb)*parseFloat(skornpwp);

				var hasiladmin = parseFloat(totaladmin/3);
				var hasilmanfaat = parseFloat(totalmanfaat/6);
				var hasildampak = parseFloat(totaldampak/12);

				$('#totaladminis').text(String(hasiladmin).substr(0, 4));
				$('#totalmanfaat').text(String(hasilmanfaat).substr(0, 4));
				$('#totaldampak').text(String(hasildampak).substr(0, 4));
				$('#totaltax').text(totaltax);

				var total = parseFloat(hasiladmin)+parseFloat(hasilmanfaat)+parseFloat(hasildampak)*parseFloat(totaltax);

				$('#totalakhir').text(String(total).substr(0, 4));
				$('#totalakhir2').val(String(total).substr(0, 4));

				
				window.print();
				if (nama.length != 0) {
					$("#izinnya").html('<div class="col-md-12"><div class="card card-stats mb-4 mb-xl-0"><div class="card-body"><p class="m-0">Tidak ada Data</p></div></div></div>');
				}		
			}
		})
},
	// start view data
	datadetailadmin:function() {
		var datas = {id:localStorage.getItem("idbangunanadmin")};
		$.ajax({
			url: BASE_URL + 'OfficeController/detailBangunanDinas',
			type: 'POST',
			data: datas,
			dataType : 'json',
			success:function(data) {
				var skorlengkap = [];
				var skorwaktu = [];
				var skorpbb = [];
				var skornpwp = [];
				var skorrenjalan = [];
				var skorjalaneksis = [];
				var skortataruang = [];
				var skorjarakusaha = [];
				var skorpenglahan = [];
				var skorkondisieksis = [];
				var skotpempbb = [];
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
				var code = [];
				var nama = [];
				var nib = [];
				var npwp = [];
				var tgl = [];
				var alamat = [];
				var ketadmin = [];
				var ketteknis = [];
				var zona = [];
				var kode_sublok = [];
				var skoradministrasi = [];
				var skormanfaat = [];
				var skordampak = [];
				var skortax = [];
				var skorjarakpasar = [];
				for(var coba in data.row){
					skorlengkap.push(data.row[coba].skorlengkap);
					skorwaktu.push(data.row[coba].skorwaktu);
					skorpbb.push(data.row[coba].skorpbb);
					skornpwp.push(data.row[coba].skornpwp);
					skorrenjalan.push(data.row[coba].skorrenjalan);
					skorjalaneksis.push(data.row[coba].skorjalaneksis);
					skortataruang.push(data.row[coba].skortataruang);
					skorjarakusaha.push(data.row[coba].skorjarakusaha);
					skorpenglahan.push(data.row[coba].skorpenglahan);
					skorkondisieksis.push(data.row[coba].skorkondisieksis);
					skotpempbb.push(data.row[coba].skotpempbb);
					skorketumkm.push(data.row[coba].skorketumkm);
					skorsewa.push(data.row[coba].skorsewa);
					skorwarga.push(data.row[coba].skorwarga);
					skorrekumkm.push(data.row[coba].skorrekumkm);
					skorslf.push(data.row[coba].skorslf);
					skorimb.push(data.row[coba].skorimb);
					skorkajian.push(data.row[coba].skorkajian);
					skorvolsumur.push(data.row[coba].skorvolsumur);
					skordrainase.push(data.row[coba].skordrainase);
					skorkondisisumur.push(data.row[coba].skorkondisisumur);
					skorkdhmini.push(data.row[coba].skorkdhmini);
					skorjarakpasar.push(data.row[coba].skorjarakpasar);
					code.push(data.row[coba].code);
					nama.push(data.row[coba].nama);
					nib.push(data.row[coba].nib);
					npwp.push(data.row[coba].npwp);
					tgl.push(data.row[coba].tgl);
					alamat.push(data.row[coba].alamat);
					ketadmin.push(data.row[coba].ketadmin);
					ketteknis.push(data.row[coba].ketteknis);
					zona.push(data.row[coba].zona);
					kode_sublok.push(data.row[coba].kode_sublok);

					skoradministrasi.push(data.row[coba].skoradministrasi);
					skormanfaat.push(data.row[coba].skormanfaat);
					skordampak.push(data.row[coba].skordampak);
					skortax.push(data.row[coba].skortax);

				}
				// console.log(nama.length);
				$('#nilailengkap').text(skorlengkap);
				$('#nilaiizin').text(skorwaktu);
				$('#nilaieksiting').text(skorkondisieksis);

				$('#nilaipbb').text(skorpbb);
				$('#nilainpwp').text(skornpwp);

				$('#pempbb').text(skotpempbb);
				$('#ketumkm').text(skorketumkm);
				$('#persewa').text(skorsewa);

				$('#penglahan').text(skorpenglahan);
				$('#setwarga').text(skorwarga);
				$('#eksismadai').text(skorjalaneksis);

				$('#jarakpasar').text(skorjarakpasar);
				$('#renjalan').text(skorrenjalan);
				$('#rekumkm').text(skorrekumkm);
				$('#slfeksis').text(skorslf);
				$('#kondisisumur').text(skorkondisisumur);
				$('#drainasesek').text(skordrainase);
				$('#tataruang').text(skortataruang);
				$('#kajiansostek').text(skorkajian);
				$('#imbeksis').text(skorimb);
				$('#jarakusaha').text(skorjarakusaha);
				$('#sumurserap').text(skorvolsumur);
				$('#kdhmini').text(skorkdhmini);

				var totaladmin = parseFloat(skorlengkap)+parseFloat(skorwaktu)+parseFloat(skorkondisieksis);
				var totalmanfaat = parseFloat(skotpempbb)+parseFloat(skorketumkm)+parseFloat(skorsewa)+parseFloat(skorpenglahan)+parseFloat(skorwarga)+parseFloat(skorjalaneksis);
				var totaldampak = parseFloat(skorjarakpasar)+parseFloat(skorrenjalan)+parseFloat(skorrekumkm)+parseFloat(skorslf)+parseFloat(skorkondisisumur)+parseFloat(skordrainase)+parseFloat(skortataruang)+parseFloat(skorkajian)+parseFloat(skorimb)+parseFloat(skorjarakusaha)+parseFloat(skorvolsumur)+parseFloat(skorkdhmini);
				var totaltax = parseFloat(skorpbb)*parseFloat(skornpwp);

				var hasiladmin = parseFloat(totaladmin/3);
				var hasilmanfaat = parseFloat(totalmanfaat/6);
				var hasildampak = parseFloat(totaldampak/12);

				$('#totaladminis').text(String(hasiladmin).substr(0, 4));
				$('#totalmanfaat').text(String(hasilmanfaat).substr(0, 4));
				$('#totaldampak').text(String(hasildampak).substr(0, 4));
				$('#totaltax').text(totaltax);

				var total = parseFloat(hasiladmin)+parseFloat(hasilmanfaat)+parseFloat(hasildampak)*parseFloat(totaltax);

				$('#totalakhir').text(String(total).substr(0, 4));
				$('#totalakhir2').val(String(total).substr(0, 4));

				$('#catatan').text(ketadmin);

				$('#tokenbangunan').text(code);
				$('#namabangunan').text(nama);
				$('#nibpemohon').text(nib);
				$('#npwppemohon').text(npwp);
				$('#tglpemohon').text(tgl);
				$('#zonasi').text(zona);
				$('#kodesublock').text(kode_sublok);
				$('#alamatpemohon').text(alamat);
				$('#ketadministrasi').text(ketadmin);
				$('#ketadminteknis').text(ketteknis);
				if (nama.length != 0) {
					$("#izinnya").html('<div class="col-md-12"><div class="card card-stats mb-4 mb-xl-0"><div class="card-body"><p class="m-0">Tidak ada Data</p></div></div></div>');
				}		
			}
		})
},
datadetailPemohon:function() {
	var datas = {code:localStorage.getItem("idbangunanadmin")};
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
				for(var coba in data.row){
					code.push(data.row[coba].code);
					nama.push(data.row[coba].nama);
					nib.push(data.row[coba].nib);
					npwp.push(data.row[coba].npwp);
					alamat.push(data.row[coba].alamat);
					zona.push(data.row[coba].zona);
					kode_sublok.push(data.row[coba].kode_sublok);
					tgl.push(data.row[coba].created_at);

				}
				$('#tokenbangunan').text(code);
				$('#namabangunan').text(nama);
				$('#nibpemohon').text(nib);
				$('#npwppemohon').text(npwp);
				$('#tglpemohon').text(tgl);
				$('#zonasi').text(zona);
				$('#kodesublock').text(kode_sublok);
				$('#alamatpemohon').text(alamat);
			}
		}
	});
},
	// end view data
};
$("#logout").click(function(event) {
	localStorage.clear();
	window.location.href = '/';
});
$("#inputadministrasi").submit(function (event) {
	var data = new FormData($(this)[0]);
	$.ajax({
		url: BASE_URL + 'OfficeController/InsertAdministrasi',
		type: "POST",
		dataType:'json',
		data: {id_bangunan:localStorage.getItem('idbangunanadmin'),admin:localStorage.getItem('idadmin'),kelengkapan_admin:$("#kelengkapan_admin").val(),lama_mengajukan:$('#lama_izin').val(),statusNPWP:$('#statusNPWP').val(),statusPBB:$('#statusPBB').val(),keterangan:$("#keterangan").val()},
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
		data: {id_bangunan:localStorage.getItem('idbangunanadmin'),admin:localStorage.getItem('idadmin'),lahansekitar:$("#lahansekitar").val(),rencanajalan:$('#rencanajalan').val(),eksitingjalan:$('#eksitingjalan').val(),tataruang:$('#tataruang').val(),statususaha:$('#statususaha').val(),statuspasar:$('#statuspasar').val(),keterangan:$("#keterangan").val()},
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
