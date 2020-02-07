    const numberSteps = $('.ijin__step').length - 1;
    let disableButtons = false;
    const tick = '<div class="answer__tick"><svg width="14" height="14" viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg></div>'; 
    let summary = '<div class="summary"><h1 class="judul-ijin">Permohonan Izin Usaha Toko Swalayan Berhasil Diajukan</h1><p>Nomor Token telah dikirimkan melalui email Anda <br> Silahkan Cek Email Anda</p><p>Perkiran Waktu Perizinan Selesai (0) Hari</p><div class="backkehalaman"><a onclick="backkehalaman();" href="javascript:void(0);" class="btn3d btn btn-danger btn-lg">Kembali Ke Halaman Utama</a></div></div>';
    // var BASE_URL = 'http://localhost/rest_api_iuts/';
    var BASE_URL = 'https://rest-iuts.pkkmart.com/';

    function kondisieksis() {
        if ($("#kondisi_eksisting option:selected").val() != 1 &&  $("#kondisi_eksisting option:selected").val() != 2) {
            $("#kondisieksis").removeAttr('style');
        }else{
            $("#kondisieksis").attr('style', 'display:none');
        }
    }
    function lamaizin() {
        $("#lama_izin_row").removeAttr('style');
    }
    function umkm() {
        $("#keterlibatan_umkm_row").removeAttr('style');
    }
    function janjisewa() {
        $("#janji_sewa_row").removeAttr('style');
    }
    function luaslantai() {
        $("#luas_lantai_row").removeAttr('style');
    }
        // function volumesumur() {
        //     $("#volume_sumur_row").removeAttr('style');
        // }
        // function kondisikdh() {
        //     $("#kondisi_kdh_row").removeAttr('style');
        // }
        $('.answer__input').on('change', function(e) { 

           if($(this).next().children('.answer__tick').length>0){
              return false
          }
          $(this).next().append(tick)
      });
        $('.backkehalaman').click(function(event) {
            localStorage.clear();
            location.reload();
        });
        $('#buttonreload').click(function(event) {
            localStorage.clear();
            location.reload();
        });
        function backkehalaman() {
            localStorage.clear();
            location.reload();
        }

        function npwpusahachecking() {
           $.ajax({
            url: "https://jakartasatu.jakarta.go.id/server/rest/services/Hosted/survey123_4f22b11ca9c4456bbb9ef5026fb32656/FeatureServer/0/query?where=masukkan_nomor_npwp_badan_usaha='"+$('#npwp_perusahaan').val()+"'&outFields=*&returnGeometry=true&resultType=&f=pjson",
            type: 'GET',
            dataType: 'json',
            success:function(data) {
                if (data.features[0].attributes == '') {

                }else{

                    $.getScript("https://iuts.pkkmart.com/iuts/assets/js/arcgis.js", function() {
                    });
                    $("#kelompok_usaha").val(data.features[0].attributes.pilih_kelompok_usaha_anda);
                    $("#nama_toko").val(data.features[0].attributes.nama_toko_anda);
                    $("#nama_badan_usaha").val(data.features[0].attributes.masukkan_nama_ptcv_badan_usaha_);
                    $("#peruntukan_toko").val(data.features[0].attributes.masukkan_peruntukkan_toko_anda_);
                    $("#status_bangunan").val(data.features[0].attributes.pilih_status_kepemilikan_tempat);
                    $("#nomorObjekPajak").val(data.features[0].attributes.field_23);

                    $("#rekomendasi_umkm").val(data.features[0].attributes.rekomendasi_dinas_kumkmp);
                    $("#imb_eksisting").val(data.features[0].attributes.masukkan_nomor_imb_toko_anda);
                    
                    localStorage.setItem('lat',data.features[0].geometry.y);
                    localStorage.setItem('lng',data.features[0].geometry.x);
                    localStorage.setItem('wkid',data.spatialReference.wkid);
                    $("#alamatLengkap").val(data.features[0].attributes.masukkan_alamat_anda);
                    $("#alamat_perusahaan").val(data.features[0].attributes.masukkan_alamat_objek_pajak_1);
                }
            }
        })
       }
       $('.navigation__btn--right').click(function(e){
	    // if($('.ijin__step--current input').length == 0){
	    //  	//console.log('input empty');
	    //  	return false;
	   	// }
        localStorage.clear();
        localStorage.setItem("namapemohon", $("#namaLengkap").val());
        localStorage.setItem("nik", $("#nomorInKepen").val());
        localStorage.setItem("nib", $("#nomorInBeru").val());
        localStorage.setItem("npwp", $("#npwp").val());
        // localStorage.setItem("npwp_pemohon", $("#npwp_pemohon").val());
        localStorage.setItem("npwp_perusahaan", $("#npwp_perusahaan").val());
        localStorage.setItem("jabatan", $("#jabatan").val());
        localStorage.setItem("njop", $("#njop").val());
        localStorage.setItem("no_telp", $("#no_telp").val());
        localStorage.setItem("email", $("#emailAktif").val());
        localStorage.setItem("alamat_perusahaan", $("#alamat_perusahaan").val());
        localStorage.setItem("nop", $("#nomorObjekPajak").val());
        localStorage.setItem("barang_jasa", $("#barang_jasa").val());
        localStorage.setItem("nrb", $("#nomorRegistrasiB").val());
        localStorage.setItem("nama_toko", $("#nama_toko").val());
        localStorage.setItem("kelompok_usaha", $("#kelompok_usaha").val());
        localStorage.setItem("peruntukan_toko", $("#peruntukan_toko").val());
        localStorage.setItem("kontak_pemohon", $("#kontak_pemohon").val());
        localStorage.setItem("nama_badan_usaha", $("#nama_badan_usaha").val());
        localStorage.setItem("luas_lahan", $("#luasLahan").val());
        localStorage.setItem("luas_tapak", $("#luasTapakB").val());
        localStorage.setItem("luas_lantai", $("#luasLantaiB").val());
        localStorage.setItem("luas_lantai_input", $("#luas_lantai_input").val());
        localStorage.setItem("jml_lantai", $("#jmlLantaiB").val());
        localStorage.setItem("status_bangunan", $("#status_bangunan").val());
        localStorage.setItem("status_milik", $("#status_milik").val());
        localStorage.setItem("alamat", $("#alamatPemohon").val());
        // localStorage.setItem("kategori_usaha", $("#kategori_usaha").val());
        localStorage.setItem("jumlah_atm", $("#jumlah_atm").val());
        localStorage.setItem("omset_perbulan", $("#omset_perbulan").val());
        localStorage.setItem("jumlah_karyawan", $("#jumlah_karyawan").val());
        localStorage.setItem("asal_karyawan", $("#asal_karyawan").val());

        localStorage.setItem("kondisi_eksisting", $("#kondisi_eksisting option:selected").text());
        localStorage.setItem("lama_izin", $("#lama_izin option:selected").text());
        localStorage.setItem("pemutakhiran_pbb", $("#pemutakhiran_pbb option:selected").text());
        localStorage.setItem("keterlibatan_umkm", $("#keterlibatan_umkm option:selected").text());
        localStorage.setItem("perjanjian_sewa", $("#perjanjian_sewa option:selected").text());
        localStorage.setItem("persetujuan_warga", $("#persetujuan_warga option:selected").text());
        localStorage.setItem("kategori_usaha", $("#kategori_usaha option:selected").text());
        localStorage.setItem("rekomendasi_umkm", $("#rekomendasi_umkm option:selected").text());
        localStorage.setItem("kajian_sostek", $("#kajian_sostek option:selected").text());
        localStorage.setItem("imb_eksisting", $("#imb_eksisting option:selected").text());
        localStorage.setItem("slf_eksisting", $("#slf_eksisting option:selected").text());
        localStorage.setItem("volumeSumur", $("#volumeSumur option:selected").text());
        localStorage.setItem("kondisi_sumur_r", $("#kondisi_sumur_r option:selected").text());
        localStorage.setItem("drainase_disekeliling", $("#drainase_disekeliling option:selected").text());
        localStorage.setItem("kdh_minimum", $("#kdh_minimum option:selected").text());
        localStorage.setItem("kondisi_kdh", $("#kondisi_kdh option:selected").text());
        localStorage.setItem("pengelolaan_sampah", $("#pengelolaan_sampah option:selected").text());
        localStorage.setItem("kondisi_parkir", $("#kondisi_parkir option:selected").text());

        // localStorage.setItem("kondisi_eksisting", $("#kondisi_eksisting").val());
        // localStorage.setItem("lama_izin", $("#lama_izin").val());
        // localStorage.setItem("pemutakhiran_pbb", $("#pemutakhiran_pbb").val());
        // localStorage.setItem("keterlibatan_umkm", $("#keterlibatan_umkm").val());
        // localStorage.setItem("perjanjian_sewa", $("#perjanjian_sewa").val());
        // localStorage.setItem("persetujuan_warga", $("#persetujuan_warga").val());
        // localStorage.setItem("rekomendasi_umkm", $("#rekomendasi_umkm").val());
        // localStorage.setItem("kajian_sostek", $("#kajian_sostek").val());
        // localStorage.setItem("imb_eksisting", $("#imb_eksisting").val());
        // localStorage.setItem("slf_eksisting", $("#slf_eksisting").val());
        // localStorage.setItem("volumeSumur", $("#volumeSumur").val());
        // localStorage.setItem("kondisi_sumur_r", $("#kondisi_sumur_r").val());
        // localStorage.setItem("drainase_disekeliling", $("#drainase_disekeliling").val());
        // localStorage.setItem("kdh_minimum", $("#kdh_minimum").val());
        // localStorage.setItem("kondisi_kdh", $("#kondisi_kdh").val());
        // localStorage.setItem("pengelolaan_sampah", $("#pengelolaan_sampah").val());
        // localStorage.setItem("kondisi_parkir", $("#kondisi_parkir").val());


        localStorage.setItem("janji_sewa_input", $("#janji_sewa_input").val());
        localStorage.setItem("keterlibatan_umkm_input", $("#keterlibatan_umkm_input").val());
        localStorage.setItem("lama_izin_input", $("#lama_izin_input").val());
        localStorage.setItem("detail_kondisi_input", $("#detail_kondisi_input").val());
        localStorage.setItem("alamat_lengkap", $("#alamatLengkap").val());

        var nama = localStorage.getItem('namapemohon');
        var nik = localStorage.getItem('nik');
        var nib = localStorage.getItem('nib');
        var npwp = localStorage.getItem('npwp');
        // var npwp_pemohon = localStorage.getItem('npwppemohon');
        var npwp_perusahaan = localStorage.getItem('npwp_perusahaan');
        var jabatan = localStorage.getItem('jabatan');
        var njop = localStorage.getItem('njop');
        var no_telp = localStorage.getItem('no_telp');
        var alamat_perusahaan = localStorage.getItem('alamat_perusahaan');
        var barang_jasa = localStorage.getItem('barang_jasa');
        var email = localStorage.getItem('email');
        var nop = localStorage.getItem('nop');
        var nama_toko = localStorage.getItem('nama_toko');
        var kelompok_usaha = localStorage.getItem('kelompok_usaha');
        var peruntukan_toko = localStorage.getItem('peruntukan_toko');
        var nama_badan_usaha = localStorage.getItem('nama_badan_usaha');
        var kontak_pemohon = localStorage.getItem('kontak_pemohon');
        var nrb = localStorage.getItem('nrb');
        var luas = localStorage.getItem('luas_lahan');
        var luastapak = localStorage.getItem('luas_tapak');
        var luaslantai = localStorage.getItem('luas_lantai');
        var luas_lantai_input = localStorage.getItem('luas_lantai_input');
        var jml_lantai = localStorage.getItem('jml_lantai');
        var status_bangunan = localStorage.getItem('status_bangunan');
        var status_milik = localStorage.getItem('status_milik');
        var alamat = localStorage.getItem('alamat_lengkap');

        var kondisi_eksisting = localStorage.getItem('kondisi_eksisting');
        var lama_izin = localStorage.getItem('lama_izin');
        var pemutakhiran_pbb = localStorage.getItem('pemutakhiran_pbb');
        var keterlibatan_umkm = localStorage.getItem('keterlibatan_umkm');
        var perjanjian_sewa = localStorage.getItem('perjanjian_sewa');
        var persetujuan_warga = localStorage.getItem('persetujuan_warga');
        var kategori_usaha = localStorage.getItem('kategori_usaha');
        var jumlah_atm = localStorage.getItem('jumlah_atm');
        var omset_perbulan = localStorage.getItem('omset_perbulan');
        var jumlah_karyawan = localStorage.getItem('jumlah_karyawan');
        var asal_karyawan = localStorage.getItem('asal_karyawan');
        var rekomendasi_umkm = localStorage.getItem('rekomendasi_umkm');
        var kajian_sostek = localStorage.getItem('kajian_sostek');
        var imb_eksisting = localStorage.getItem('imb_eksisting');
        var slf_eksisting = localStorage.getItem('slf_eksisting');
        var volumeSumur = localStorage.getItem('volumeSumur');
        var kondisi_sumur_r = localStorage.getItem('kondisi_sumur_r');
        var drainase_disekeliling = localStorage.getItem('drainase_disekeliling');
        var kdh_minimum = localStorage.getItem('kdh_minimum');
        var kondisi_kdh = localStorage.getItem('kondisi_kdh');
        var pengelolaan_sampah = localStorage.getItem('pengelolaan_sampah');
        var kondisi_parkir = localStorage.getItem('kondisi_parkir');
        var janji_sewa_input = localStorage.getItem('janji_sewa_input');
        var keterlibatan_umkm_input = localStorage.getItem('keterlibatan_umkm_input');
        var lama_izin_input = localStorage.getItem('lama_izin_input');
        var detail_kondisi_input = localStorage.getItem('detail_kondisi_input');
        var alamat_lengkap = localStorage.getItem('alamat_lengkap');



        $("#nama").text(nama);
        $("#nik").text(nik);
        $("#nib").text(nib);
        $("#npwplocal").text(npwp);
        $("#npwpperusahaan").text(npwp_perusahaan);
        $("#jabatanlocal").text(jabatan);
        $("#njoplocal").text(njop);
        $("#nomortelp").text(no_telp);
        $("#alamatperusahaan").text(alamat_perusahaan);
        $("#email").text(email);

        $("#nop").text(nop);
        $("#namatoko").text(nama_toko);
        $("#kelompokusaha").text(kelompok_usaha);
        $("#peruntukantoko").text(peruntukan_toko);
        $("#namausaha").text(nama_badan_usaha);
        $("#kontakpemohon").text(kontak_pemohon);
        $("#nrb").text(nrb);
        $("#luas_lahan").text(luas);
        $("#luastapak").text(luastapak);
        $("#luaslantai").html(luaslantai+'<br>'+luas_lantai_input);
        $("#jmllantai").text(jml_lantai);
        $("#statusbangunan").text(status_bangunan);
        $("#statusmilik").text(status_milik);
        $("#alamatlocal").text(alamat);

        $("#kondisi_eks_summary").html(kondisi_eksisting+'<br>'+detail_kondisi_input);
        $("#lama_izin_summary").html(lama_izin+'<br>'+lama_izin_input);
        $("#pbb_summary").text(pemutakhiran_pbb);
        $("#keterlibatan_umkm_summary").html(keterlibatan_umkm+'<br>'+keterlibatan_umkm_input);
        $("#janji_sewa_summary").html(perjanjian_sewa+'<br>'+janji_sewa_input);
        $("#persetujuan_warga_summary").text(persetujuan_warga);
        $("#kategori_usaha_summary").html(kategori_usaha);
        $("#barang_jasa_summary").text(barang_jasa);
        $("#jumlah_atm_summary").text(jumlah_atm);
        $("#omset_perbulan_summary").text(omset_perbulan);
        $("#jumlah_karyawan_summary").text(jumlah_karyawan);
        $("#asal_karyawan_summary").text(asal_karyawan);

        $("#rek_umkm_summary").text(rekomendasi_umkm);
        $("#kajian_sostek_summary").text(kajian_sostek);
        $("#imb_eksisting_summary").text(imb_eksisting);
        $("#slf_eksisting_summary").text(slf_eksisting);
        $("#volume_sumur_summary").html(volumeSumur);
        $("#kondisi_sumur_summary").text(kondisi_sumur_r);
        $("#drainase_disekeliling_summary").text(drainase_disekeliling);
        $("#kdh_minimum_summary").text(kdh_minimum);
        $("#kondisi_kdh_summary").html(kondisi_kdh);
        $("#pengelolaan_sampah_summary").text(pengelolaan_sampah);
        $("#kondisi_parkir_summary").text(kondisi_parkir);

        var dataPermohonan = JSON.stringify([{test:'1'}]);
        localStorage.setItem("dataPermohonan", dataPermohonan);
        let currentIndex = Number($('.ijin__step--current').attr('data-question'));
        if(currentIndex == numberSteps + 1 || disableButtons==true){
		    //console.log('last')
		    return false;
		}
		// if($('.ijin__step--current input' + 2).value != null){
		// 	return false;
		// }
		if(currentIndex + 1 == numberSteps + 1 ){
			$(this).addClass('navigation__btn--disabled');
		}
		if(currentIndex == numberSteps){
			$('.summary__item').remove();
			$('.ijin__step:not(.ijin__summary)').each(function(index, item){
				let icon = $(item).children('.question__emoji').text()
				let answer = $(item).children('.answer').find('input:checked').val();
				let node = '<div class="summary__item"><div class="question__emoji">'+icon+'</div>'+answer+'</div>'
				$('#summary').append(node)
			})
		}

		const percentage = (currentIndex * 100)/ numberSteps;
		$('.progress__inner').width(percentage+ '%');
		$('.ijin__step--current').hide('300');
		$('.ijin__step--current').removeClass('ijin__step--current');
		$('.ijin__step--'+(currentIndex+1)).show('300').addClass('ijin__step--current');
		currentIndex = Number($('.ijin__step--current').attr('data-question'));
		if(currentIndex > 1 ){
			$('.navigation__btn--left').removeClass('navigation__btn--disabled');
		}
	});
    $('#buttonbacktohome').click(function(e){
        let currentIndex = Number($('.ijin__step--current').attr('data-question'));
        $('.ijin__step--current').hide('300');
        $('.ijin__step--current').removeClass('ijin__step--current');
        $('.ijin__step--1').show('300').addClass('ijin__step--current');
        currentIndex = Number($('.ijin__step--current').attr('data-question'));
        const percentage = ((currentIndex-1)  * 100)/ numberSteps+1;
        $('.progress__inner').width(percentage+ '%');
        $('.ijin__step--current').keyup(keypressEvent);
    });

    $('.navigation__btn--left').click(function(e){
    	let currentIndex = Number($('.ijin__step--current').attr('data-question'));
    	if(currentIndex == 1 || currentIndex == 2 || disableButtons==true){
    		$(this).addClass('navigation__btn--disabled');
    		return false;
    	}

    	$('.navigation__btn--right').removeClass('navigation__btn--disabled')
    	$('.ijin__step--current').hide('300');
    	$('.ijin__step--current').removeClass('ijin__step--current');
    	$('.ijin__step--'+(currentIndex-1)).show('300').addClass('ijin__step--current');
    	currentIndex = Number($('.ijin__step--current').attr('data-question'));
    	if(currentIndex == 1 ){
    		$(this).addClass('navigation__btn--disabled');
    	}
    	const percentage = ((currentIndex-1)  * 100)/ numberSteps+1;
    	$('.progress__inner').width(percentage+ '%');
    	$('.ijin__step--current').keyup(keypressEvent);
    });
    /* end ijin */
    $('#btn-modalmaps').click(function(event) {
        swal({
          title: "Alamat Maps ", 
          text: "Apakah Alamat Sudah Sesuai ?", 
          type: "warning",
          confirmButtonText: "Iya",
          cancelButtonText: "Belum",
          showCancelButton: true
      }).then((result) => {
        if (result.value) {
            $('#pilihLokasi').modal('hide');
            console.log(localStorage.getItem('lat'));
        }
    });
  });
    /* konfirmasi ijin */
    $(document).on('click', '.submit__container', function(e) {
        var dataRegis = JSON.parse(localStorage.getItem("dataPermohonan"));
        swal({
          title: "Ajukan Izin", 
          text: "Apakah Data Yang Anda Masukkan Sudah Benar", 
          type: "warning",
          confirmButtonText: "Iya",
          cancelButtonText: "Belum",
          showCancelButton: true
      })
        .then((result) => {
          if (result.value) {
             var dataInput = {
                namaLengkap: $("#namaLengkap").val(),
                nomorInKepen: $("#nomorInKepen").val(),
                nomorInBeru: $("#nomorInBeru").val(),
                jabatan: $("#jabatan").val(),
                npwp: $("#npwp").val(),
                npwp_perusahaan: $("#npwp_perusahaan").val(),
                alamat_perusahaan: $("#alamat_perusahaan").val(),
                njop: $("#njop").val(),
                barang_jasa: $("#barang_jasa").val(),
                no_telp: $("#no_telp").val(),
                emailAktif: $("#emailAktif").val(),
                nop: $("#nomorObjekPajak").val(),
                nama_toko: $("#nama_toko").val(),
                nama_badan_usaha: $("#nama_badan_usaha").val(),
                kelompok: $("#kelompok_usaha").val(),
                peruntukan_toko: $("#peruntukan_toko").val(),
                luas_lahan: $("#luasLahan").val(),
                ltb: $("#luasTapakB").val(),
                luas_lantai: $("#luasLantaiB").val(),
                luas_lantai_input: $("#luas_lantai_input").val(),
                jml_lantai: $("#jmlLantaiB").val(),
                status_bangunan: $("#status_bangunan").val(),
                status_milik: $("#status_milik").val(),
                alamat: $("#alamatPemohon").val(),
                kondisi_eksisting: $("#kondisi_eksisting").val(),
                pemutakhiran_pbb: $("#pemutakhiran_pbb").val(),
                keterlibatan_umkm: $("#keterlibatan_umkm").val(),
                perjanjian_sewa: $("#perjanjian_sewa").val(),
                persetujuan_warga: $("#persetujuan_warga").val(),
                barang_jasa: $("#barang_jasa").val(),
                jumlah_atm: $("#jumlah_atm").val(),
                rekomendasi_umkm: $("#rekomendasi_umkm").val(),
                kajian_sostek: $("#kajian_sostek").val(),
                imb_eksisting: $("#imb_eksisting").val(),
                slf_eksisting: $("#slf_eksisting").val(),
                volumeSumur: $("#volumeSumur").val(),
                kondisi_sumur_r: $("#kondisi_sumur_r").val(),
                drainase_disekeliling: $("#drainase_disekeliling").val(),
                kdh_minimum: $("#kdh_minimum").val(),
                kondisi_kdh: $("#kondisi_kdh").val(),
                pengelolaan_sampah: $("#pengelolaan_sampah").val(),
                kondisi_parkir: $("#kondisi_parkir").val(),
                janji_sewa_input: $("#janji_sewa_input").val(),
                keterlibatan_umkm_input: $("#keterlibatan_umkm_input").val(),
                lama_izin_input: $("#lama_izin_input").val(),
                detail_kondisi_input: $("#detail_kondisi_input").val(),
                lat: $('#lat').val(),
                lng: $('#lng').val(), 
                subzona: $('#subzona').val(),
                idsubblok: $('#idsubblok').val(),
                alamat_lengkap: $("#alamatLengkap").val(),
                kelurahan: $("#kelurahan").val(),
                kecamatan: $("#kecamatan").val(),
            };

            /*identitas pemohon*/
            dataRegis[0].namaLengkap = dataInput.namaLengkap;
            dataRegis[0].nomorInKepen = dataInput.nomorInKepen;
            dataRegis[0].nomorInBeru = dataInput.nomorInBeru;
            dataRegis[0].jabatan = dataInput.jabatan;
            dataRegis[0].npwp = dataInput.npwp;
            dataRegis[0].npwp_perusahaan = dataInput.npwp_perusahaan;
            dataRegis[0].alamat_perusahaan = dataInput.alamat_perusahaan;
            dataRegis[0].njop = dataInput.njop;
            dataRegis[0].barang_jasa = dataInput.barang_jasa;
            dataRegis[0].no_telp = dataInput.no_telp;
            dataRegis[0].emailAktif = dataInput.emailAktif;
            /*identitas pemohon*/

            /*Data Umum Bangunan*/
            dataRegis[0].nop = dataInput.nop;
            dataRegis[0].luas_lahan = dataInput.luas_lahan;
            dataRegis[0].ltb = dataInput.ltb;
            dataRegis[0].luas_lantai = dataInput.luas_lantai;
            dataRegis[0].luas_lantai_input = dataInput.luas_lantai_input;
            dataRegis[0].jml_lantai = dataInput.jml_lantai;
            dataRegis[0].status_bangunan = dataInput.status_bangunan;
            dataRegis[0].status_milik = dataInput.status_milik;
            dataRegis[0].nama_toko = dataInput.nama_toko;
            dataRegis[0].kelompok = dataInput.kelompok;
            dataRegis[0].peruntukan_toko = dataInput.peruntukan_toko;
            dataRegis[0].nama_badan_usaha = dataInput.nama_badan_usaha;
            dataRegis[0].alamat = dataInput.alamat;
            dataRegis[0].lat = dataInput.lat;
            dataRegis[0].lng = dataInput.lng;
            dataRegis[0].subzona = dataInput.subzona;
            dataRegis[0].idsubblok = dataInput.idsubblok;
            dataRegis[0].alamat_lengkap = dataInput.alamat_lengkap;
            dataRegis[0].kecamatan = dataInput.kecamatan;
            dataRegis[0].kelurahan = dataInput.kelurahan;
            /*Data Umum Bangunan*/

            /*Administrasi Bangunan*/
            dataRegis[0].kondisi_eksisting = dataInput.kondisi_eksisting;
            dataRegis[0].detail_kondisi_input = dataInput.detail_kondisi_input;
            /*Administrasi Bangunan*/

            /*Informasi Kebermanfaatan Usaha*/
            dataRegis[0].pemutakhiran_pbb = dataInput.pemutakhiran_pbb;
            dataRegis[0].keterlibatan_umkm = dataInput.keterlibatan_umkm;
            dataRegis[0].perjanjian_sewa = dataInput.perjanjian_sewa;
            dataRegis[0].persetujuan_warga = dataInput.persetujuan_warga;
            dataRegis[0].jumlah_atm = dataInput.jumlah_atm;
            /*Informasi Kebermanfaatan Usaha*/

            /*Informasi Antisipasi Dampak/Resiko*/
            dataRegis[0].rekomendasi_umkm = dataInput.rekomendasi_umkm;
            dataRegis[0].kajian_sostek = dataInput.kajian_sostek;
            dataRegis[0].imb_eksisting = dataInput.imb_eksisting;
            dataRegis[0].slf_eksisting = dataInput.slf_eksisting;
            dataRegis[0].kondisi_sumur_r = dataInput.kondisi_sumur_r;
            dataRegis[0].volumeSumur = dataInput.volumeSumur;
            dataRegis[0].drainase_disekeliling = dataInput.drainase_disekeliling;
            dataRegis[0].kdh_minimum = dataInput.kdh_minimum;
            dataRegis[0].kondisi_kdh = dataInput.kondisi_kdh;
            dataRegis[0].pengelolaan_sampah = dataInput.pengelolaan_sampah;
            dataRegis[0].kondisi_parkir = dataInput.kondisi_parkir;

            dataRegis[0].janji_sewa_input = dataInput.janji_sewa_input;
            dataRegis[0].keterlibatan_umkm_input = dataInput.keterlibatan_umkm_input;
            /*Informasi Antisipasi Dampak/Resiko*/
            
            localStorage.setItem("dataPermohonan", JSON.stringify(dataRegis));
            $.ajax({
                url: BASE_URL + "ApiController/ApiPajakNPWP",
                type: 'POST',
                dataType: 'json',
                data : {nik:$('#nomorInKepen').val()},
                beforeSend:function() {

                },
                success:function(response) {
                    if (response.pesan == 'Data Tidak ditemukan') {
                        swal({
                            type: 'error',
                            title: 'Data Tidak Di Temukan',
                            showCancelButton: true,
                        });
                    }else if (response.pesan == 'Panjang Karakter Kurang dari 15') {
                        swal({
                            type: 'error',
                            title: 'Maaf Panjang Angka NIK dari 15',
                            showCancelButton: true,
                        });
                    }else if (response.errorCode == '32') {
                        swal({
                            type: 'error',
                            title: 'Server Pajak Sedang Sibuk, Silakan Kirim Ulang',
                            showCancelButton: true,
                        });
                    }else if (response.errorCode == '99') {
                        swal({
                            type: 'error',
                            title: 'Server Pajak Sedang Sibuk, Silakan Kirim Ulang',
                            showCancelButton: true,
                        });
                    }else if (response.msg == 'Server Sedang Bermasasalah') {
                        swal({
                            type: 'error',
                            title: 'Maaf NIK Anda Tidak Mempunyai Pajak PBB',
                            showCancelButton: true,
                        });
                    }else{
                        for (var i =0; i < response.length; i++) {
                            if (response[i].JNS_PAJAK == "PBB"){
                                console.log(response[i].JNS_PAJAK);
                                console.log(response[i]);
                                if (response[i].NOPD == $('#nomorObjekPajak').val()) {
                                    if (response[i].STATUS == "TIDAK TERDAPAT TUNGGAKAN") {
                                        var dataRegis = JSON.parse(localStorage.getItem("dataPermohonan"));
                                        dataRegis[0].status_npwp = '1';
                                        dataRegis[0].status_pbb = '1';
                                        localStorage.setItem("dataPermohonan", JSON.stringify(dataRegis));
                                        if ($('#idsubblok').val() == 'H.2') {
                                            swal({
                                                type: 'error',
                                                title: 'Anda Tidak Dapat Mengajukan Izin pada Zona Ini',
                                                showCancelButton: true,
                                            });
                                        }else{
                                            $.ajax({
                                                url: BASE_URL + 'ValidasiController/ValidasiIzin',
                                                type: 'POST',
                                                dataType: 'json',
                                                data:{dataRegist: localStorage.getItem('dataPermohonan')},
                                                success:function(data) {
                                                    if (data.success) {
                                                        e.preventDefault();
                                                        $('.ijin').remove();
                                                        $(summary).appendTo('.container');
                                                        disableButtons=true;
                                                        $('.navigation__btn').addClass('navigation__btn--disabled');
                                                        swal({
                                                            type: 'success',
                                                            title: data.msg,
                                                            showCancelButton: true
                                                        }); 
                                                    }else{
                                                        swal({
                                                            type: 'error',
                                                            title: data.msg,
                                                            showCancelButton: true
                                                        });
                                                    }
                                                }
                                            });    
                                        } 
                                    }else{
                                        swal({
                                            type: 'error',
                                            title: 'Maaf Anda Tidak Bisa Membuat Izin Usaha Toko Swalayan Karena PBB Anda Belum Lunas',
                                            showCancelButton: true,
                                        });
                                    }
                                }else{
                                    swal({
                                        type: 'error',
                                        title: 'Nomor NOPD dan NIK tidak Terdaftar di Kantor Pajak',
                                        showCancelButton: true,
                                    });   
                                }
                            }else{
                                swal({
                                    type: 'error',
                                    title: 'Maaf NIK Anda Tidak Mempunyai Pajak PBB',
                                    showCancelButton: true,
                                });
                            }
                        }  
                    }
                }
            });
        }
    });
});
    /* end konfirmasi ijin */

    /* animation */
    (function () {
    	var canvas = $('canvas')[0];
    	var ctx = canvas.getContext('2d');
    	var width = canvas.width = window.innerWidth;
    	var height = canvas.height = window.innerHeight;
    	var particleCount = 100;
    	var particles = [];

    	function init() {
    		for (var i = 0; i < particleCount; i++) {
    			createParticle();
    		}
    	}

    	function createParticle() {
    		var newParticle = new Particle();
    		newParticle.initialize();
    		particles.push(newParticle);
    	}

    	function Particle() {
    		this.initialize = function() {
    			this.x = Math.random() * width;
    			this.y = Math.random() * height + height;
    			this.v = 5 + Math.random() * 5;
    			this.s = 5 + Math.random() * 5;
    		}

    		this.update = function () {
    			this.x += Math.sin(this.s);
    			this.s -= 0.1;
    			this.y -= this.v * 0.5;
    			if (this.isOutOfBounds()) {
    				this.initialize();
    			}
    		}

    		this.draw = function () {
    			ctx.fillRect(this.x, this.y, this.s, this.s);
    			ctx.fillStyle = "#eee";
    			ctx.fill();
    		}

    		this.isOutOfBounds = function () {
    			return ((this.x < 0) || (this.x > width) || (this.y < 0) || (this.y > height));
    		}
    	}

    	function render() {
    		ctx.clearRect(0, 0, width, height);
    		for (var i = 0; i < particles.length; i++) {
    			particles[i].update();
    			particles[i].draw();
    		}
    		requestAnimationFrame(render);
    	}

    	window.addEventListener('resize', resize);
    	function resize() {
    		width = canvas.width = window.innerWidth;
    		height = canvas.height = window.innerHeight;
    	}

    	init();
    	render();
    })();
    $(document).ready(function() {
        // var BASE_URL = 'http://perizinan.pkkmart.com/iuts/';

        
        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=kondisi_eksisting',
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
                    $('#kondisi_eksisting').html(options);

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
                    var options = "<option value='-' readonly='' selected>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
                    }
                    $('#lama_izin').html(options);

                }
            }
        });

        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=pemutakhiran_pbb',
            type: 'GET',
            dataType: 'json',
            beforeSend: function () {
            },
            success: function (data) {
                if (data.success) {
                    var options = "<option value='-' readonly='' selected>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
                    }
                    $('#pemutakhiran_pbb').html(options);

                }
            }
        });

        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=volume_sumur',
            type: 'GET',
            dataType: 'json',
            beforeSend: function () {
            },
            success: function (data) {
                if (data.success) {
                    var options = "<option value='-' readonly='' selected>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
                    }
                    $('#volumeSumur').html(options);

                }
            }
        });

        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=keterlibatan_umkm',
            type: 'GET',
            dataType: 'json',
            beforeSend: function () {
            },
            success: function (data) {
                if (data.success) {
                    var options = "<option value='-' readonly='' selected>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
                    }
                    $('#keterlibatan_umkm').html(options);

                }
            }
        }); 

        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=kelompok_usaha',
            type: 'GET',
            dataType: 'json',
            beforeSend: function () {
            },
            success: function (data) {
                if (data.success) {
                    var options = "<option value='-' readonly='' selected>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
                    }
                    $('#kelompok_usaha').html(options);

                }
            }
        }); 

        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=luas_lantai',
            type: 'GET',
            dataType: 'json',
            beforeSend: function () {
            },
            success: function (data) {
                if (data.success) {
                    var options = "<option value='-' readonly='' selected>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
                    }
                    $('#luasLantaiB').html(options);

                }
            }
        }); 

        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=perjanjian_sewa',
            type: 'GET',
            dataType: 'json',
            beforeSend: function () {
            },
            success: function (data) {
                if (data.success) {
                    var options = "<option value='-' readonly='' selected>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
                    }
                    $('#perjanjian_sewa').html(options);

                }
            }
        }); 

        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=setuju_warga_sekitar',
            type: 'GET',
            dataType: 'json',
            beforeSend: function () {
            },
            success: function (data) {
                if (data.success) {
                    var options = "<option value='-' readonly='' selected>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
                    }
                    $('#persetujuan_warga').html(options);

                }
            }
        }); $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=rekomen_umkm',
            type: 'GET',
            dataType: 'json',
            beforeSend: function () {
            },
            success: function (data) {
                if (data.success) {
                    var options = "<option value='-' readonly='' selected>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
                    }
                    $('#rekomendasi_umkm').html(options);

                }
            }
        }); 
        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=kajian_sostek',
            type: 'GET',
            dataType: 'json',
            beforeSend: function () {
            },
            success: function (data) {
                if (data.success) {
                    var options = "<option value='-' readonly='' selected>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
                    }
                    $('#kajian_sostek').html(options);

                }
            }
        });
        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=imb_eksisting',
            type: 'GET',
            dataType: 'json',
            beforeSend: function () {
            },
            success: function (data) {
                if (data.success) {
                    var options = "<option value='-' readonly='' selected>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
                    }
                    $('#imb_eksisting').html(options);

                }
            }
        });
        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=slf_eksisting',
            type: 'GET',
            dataType: 'json',
            beforeSend: function () {
            },
            success: function (data) {
                if (data.success) {
                    var options = "<option value='-' readonly='' selected>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
                    }
                    $('#slf_eksisting').html(options);

                }
            }
        });
        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=kondisi_sumur',
            type: 'GET',
            dataType: 'json',
            beforeSend: function () {
            },
            success: function (data) {
                if (data.success) {
                    var options = "<option value='-' readonly='' selected>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
                    }
                    $('#kondisi_sumur_r').html(options);

                }
            }
        });
        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=kondisi_drainase',
            type: 'GET',
            dataType: 'json',
            beforeSend: function () {
            },
            success: function (data) {
                if (data.success) {
                    var options = "<option value='-' readonly='' selected>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
                    }
                    $('#drainase_disekeliling').html(options);

                }
            }
        });

        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=kdh_minimum',
            type: 'GET',
            dataType: 'json',
            beforeSend: function () {
            },
            success: function (data) {
                if (data.success) {
                    var options = "<option value='-' readonly='' selected>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
                    }
                    $('#kdh_minimum').html(options);

                }
            }
        });

        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=kondisi_kdh',
            type: 'GET',
            dataType: 'json',
            beforeSend: function () {
            },
            success: function (data) {
                if (data.success) {
                    var options = "<option value='-' readonly='' selected>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
                    }
                    $('#kondisi_kdh').html(options);

                }
            }
        });

        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=pengelola_sampah',
            type: 'GET',
            dataType: 'json',
            beforeSend: function () {
            },
            success: function (data) {
                if (data.success) {
                    var options = "<option value='-' readonly='' selected>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
                    }
                    $('#pengelolaan_sampah').html(options);

                }
            }
        });
        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=kondisi_parkir',
            type: 'GET',
            dataType: 'json',
            beforeSend: function () {
            },
            success: function (data) {
                if (data.success) {
                    var options = "<option value='-' readonly='' selected>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].id +"'>"+ data.row[i].nama +"</option>";
                    }
                    $('#kondisi_parkir').html(options);

                }
            }
        });

    });
    /* end animation */