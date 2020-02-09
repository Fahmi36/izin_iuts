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

        /* Data Administrasi Pemohon */
        localStorage.setItem("no_token", $("#no_token").val());
        localStorage.setItem("namapemohon", $("#namaLengkap").val());
        localStorage.setItem("jabatan", $("#jabatan").val());
        localStorage.setItem("nik", $("#nomorInKepen").val());
        localStorage.setItem("nib", $("#nomorInBeru").val());
        localStorage.setItem("npwp", $("#npwp").val());
        localStorage.setItem("alamat_perusahaan", $("#alamat_perusahaan").val());
        localStorage.setItem("no_telp", $("#no_telp").val());
        localStorage.setItem("email", $("#emailAktif").val());

        var no_token = localStorage.getItem('no_token');
        var nama = localStorage.getItem('namapemohon');
        var jabatan = localStorage.getItem('jabatan');
        var nik = localStorage.getItem('nik');
        var nib = localStorage.getItem('nib');
        var npwp = localStorage.getItem('npwp');
        var alamat_perusahaan = localStorage.getItem('alamat_perusahaan');
        var no_telp = localStorage.getItem('no_telp');
        var email = localStorage.getItem('email');

        $("#nomorToken").text(no_token);
        $("#nama").text(nama);
        $("#jabatanlocal").text(jabatan);
        $("#nik").text(nik);
        $("#nib").text(nib);
        $("#npwplocal").text(npwp);
        $("#alamatperusahaan").text(alamat_perusahaan);
        $("#nomortelp").text(no_telp);
        $("#email").text(email);
        /* Data Administrasi Pemohon */

        /* Data Umum Bangunan */
        localStorage.setItem("luas_lahan", $("#luasLahan").val());
        localStorage.setItem("status_milik", $("#status_milik").val());
        localStorage.setItem("luas_tapak", $("#luasTapakB").val());
        localStorage.setItem("jml_lantai", $("#jml_lantai  option:selected").text());
        localStorage.setItem("luas_bangunan", $("#luas_bangunan").val());
        localStorage.setItem("tinggi_bangunan", $("#tinggi_bangunan").val());
        localStorage.setItem("peruntukan_bangunan", $("#peruntukan_bangunan").val());
        localStorage.setItem("foto_luar_bangunan", $("#foto_luar_bangunan").val());
        localStorage.setItem("foto_dalam_bangunan", $("#foto_dalam_bangunan").val());

        var luas = localStorage.getItem('luas_lahan');
        var status_milik = localStorage.getItem('status_milik');
        var luastapak = localStorage.getItem('luas_tapak');
        var jml_lantai = localStorage.getItem('jml_lantai');
        var luas_bangunan = localStorage.getItem('luas_bangunan');
        var tinggi_bangunan = localStorage.getItem('tinggi_bangunan');
        var peruntukan_bangunan = localStorage.getItem('peruntukan_bangunan');
        var foto_luar_bangunan = localStorage.getItem('foto_luar_bangunan');
        var foto_dalam_bangunan = localStorage.getItem('foto_dalam_bangunan');

        $("#luas_lahan").text(luas);
        $("#statusmilik").text(status_milik);
        $("#luastapak").text(luastapak);
        $("#jmllantai").text(jml_lantai);
        $("#totalBangunan").text(luas_bangunan);
        $("#tinggiBangunan").text(tinggi_bangunan);
        $("#peruntukanBangunan").text(peruntukan_bangunan);
        $("#fotoDalam").text(foto_dalam_bangunan);
        $("#fotoLuar").text(foto_luar_bangunan);
        /* Data Umum Bangunan */

        /*Data Keseimbangan, Keserasian, Keselarasan Lingkungan*/
        localStorage.setItem("kdh_zonasi", $("#kdh_zonasi").val());
        localStorage.setItem("kdh_minimum", $("#kdh_minimum option:selected").text());
        localStorage.setItem("kondisi_kdh", $("#kondisi_kdh option:selected").text());
        localStorage.setItem("volumeSumur", $("#volumeSumur option:selected").text());
        localStorage.setItem("kondisi_pertandaan_toko", $("#kondisi_pertandaan_toko option:selected").text());
        localStorage.setItem("kondisi_sumur_r", $("#kondisi_sumur_r option:selected").text());
        localStorage.setItem("drainase_disekeliling", $("#drainase_disekeliling option:selected").text());

        var kdh_zonasi = localStorage.getItem('kdh_zonasi');
        var kdh_minimum = localStorage.getItem('kdh_minimum');
        var kondisi_kdh = localStorage.getItem('kondisi_kdh');
        var volumeSumur = localStorage.getItem('volumeSumur');
        var kondisi_pertandaan_toko = localStorage.getItem('kondisi_pertandaan_toko');
        var kondisi_sumur_r = localStorage.getItem('kondisi_sumur_r');
        var drainase_disekeliling = localStorage.getItem('drainase_disekeliling'); 

        $("#kdh_zonasi_summary").text(kdh_zonasi);
        $("#kdh_minimum_summary").text(kdh_minimum);
        $("#kondisi_kdh_summary").text(kondisi_kdh);
        $("#volume_sumur_summary").text(volumeSumur);
        $("#kondisi_toko_summary").text(kondisi_pertandaan_toko);
        $("#kondisi_sumur_summary").text(kondisi_sumur_r);
        $("#drainase_disekeliling_summary").text(drainase_disekeliling);
        /*Data Keseimbangan, Keserasian, Keselarasan Lingkungan*/

        /* Data Keselamatan dan Keamanan */
        localStorage.setItem("rekomendasi_slf", $("#rekomendasi_slf option:selected").text());
        localStorage.setItem("izin_dinas_pkp", $("#izin_dinas_pkp option:selected").text());
        localStorage.setItem("izin_dinas_tkt", $("#izin_dinas_tkt option:selected").text());
        localStorage.setItem("imb", $("#imb option:selected").text());
        localStorage.setItem("fasilitas_penang_kebakaran", $("#fasilitas_penang_kebakaran option:selected").text());
        localStorage.setItem("ketersediaan_asuransi_toko", $("#ketersediaan_asuransi_toko option:selected").text());
        localStorage.setItem("waktu_pembaruan_k_g", $("#waktu_pembaruan_k_g option:selected").text());

        var rekomendasi_slf = localStorage.getItem('rekomendasi_slf');
        var izin_dinas_pkp = localStorage.getItem('izin_dinas_pkp');
        var izin_dinas_tkt = localStorage.getItem('izin_dinas_tkt');
        var imb = localStorage.getItem('imb');
        var fasilitas_penang_kebakaran = localStorage.getItem('fasilitas_penang_kebakaran');
        var ketersediaan_asuransi_toko = localStorage.getItem('ketersediaan_asuransi_toko');
        var waktu_pembaruan_k_g = localStorage.getItem('waktu_pembaruan_k_g');

        $("#rekomendasi_slf_summary").text(rekomendasi_slf);
        $("#izin_pkp_summary").text(izin_dinas_pkp);
        $("#izin_tkt_summary").text(izin_dinas_tkt);
        $("#imb_summary").text(imb);
        $("#fasilitas_kebakaran_summary").text(fasilitas_penang_kebakaran);
        $("#asuransi_toko_summary").text(ketersediaan_asuransi_toko);
        $("#kelayakan_gedung_summary").text(waktu_pembaruan_k_g);
        /* Data Keselamatan dan Keamanan */

        /* Data Kesehatan */
        localStorage.setItem("air_bersih", $("#air_bersih option:selected").text());
        localStorage.setItem("sumber_air_bersih", $("#sumber_air_bersih").val());
        localStorage.setItem("pengelolaan_air_kotor", $("#pengelolaan_air_kotor option:selected").text());
        localStorage.setItem("pengelolaan_sampah", $("#pengelolaan_sampah option:selected").text());
        localStorage.setItem("ketersediaan_listrik", $("#ketersediaan_listrik option:selected").text());

        var air_bersih = localStorage.getItem('air_bersih');
        var sumber_air_bersih = localStorage.getItem('sumber_air_bersih');
        var pengelolaan_air_kotor = localStorage.getItem('pengelolaan_air_kotor');
        var pengelolaan_sampah = localStorage.getItem('pengelolaan_sampah');
        var ketersediaan_listrik = localStorage.getItem('ketersediaan_listrik');

        $("#air_bersih_summary").text(air_bersih);
        $("#sumber_air_b_summary").text(sumber_air_bersih);
        $("#pengelola_air_k_summary").text(pengelolaan_air_kotor);
        $("#pengelolaan_sampah_summary").text(pengelolaan_sampah);
        $("#listrik_summary").text(ketersediaan_listrik);
        /* Data Kesehatan */

        /* Data Kemudahan */
        localStorage.setItem("ketersediaan_toilet", $("#ketersediaan_toilet option:selected").text());
        localStorage.setItem("kondisi_parkir", $("#kondisi_parkir option:selected").text());

        var ketersediaan_toilet = localStorage.getItem('ketersediaan_toilet');
        var kondisi_parkir = localStorage.getItem('kondisi_parkir');

        $("#ketersediaan_toilet_summary").text(ketersediaan_toilet);
        $("#kondisi_parkir_summary").text(kondisi_parkir);
        /* Data Kemudahan */

        /* Data Administrasi Usaha */
        localStorage.setItem("nop", $("#nomorObjekPajak").val());
        localStorage.setItem("njop", $("#njop").val());
        localStorage.setItem("nama_toko", $("#nama_toko").val());
        localStorage.setItem("kelompok_usaha", $("#kelompok_usaha option:selected").text());
        localStorage.setItem("nama_badan_usaha", $("#nama_badan_usaha").val());
        localStorage.setItem("kategori_usaha", $("#kategori_usaha option:selected").text());
        localStorage.setItem("omset_perbulan", $("#omset_perbulan").val());
        localStorage.setItem("peruntukan_toko", $("#peruntukan_toko").val());
        localStorage.setItem("status_bangunan", $("#status_bangunan").val());
        localStorage.setItem("alamat_lengkap", $("#alamatLengkap").val());

        var nop = localStorage.getItem('nop');
        var njop = localStorage.getItem('njop');
        var nama_toko = localStorage.getItem('nama_toko');
        var kelompok_usaha = localStorage.getItem('kelompok_usaha');
        var nama_badan_usaha = localStorage.getItem('nama_badan_usaha');
        var kategori_usaha = localStorage.getItem('kategori_usaha');
        var omset_perbulan = localStorage.getItem('omset_perbulan');
        var peruntukan_toko = localStorage.getItem('peruntukan_toko');
        var status_bangunan = localStorage.getItem('status_bangunan');
        var alamat = localStorage.getItem('alamat_lengkap');

        $("#nop").text(nop);
        $("#njoplocal").text(njop);
        $("#namatoko").text(nama_toko);
        $("#kelompokusaha").text(kelompok_usaha);
        $("#namausaha").text(nama_badan_usaha);
        $("#kategori_usaha_summary").text(kategori_usaha);
        $("#omset_perbulan_summary").text(omset_perbulan);
        $("#peruntukan_toko_summary").text(peruntukan_toko);
        $("#statusbangunan").text(status_bangunan);
        $("#alamatlocal").text(alamat);
        /* Data Administrasi Usaha */

        /* Data Kebermanfaatan Usaha */
        localStorage.setItem("pemutakhiran_pbb", $("#pemutakhiran_pbb option:selected").text());
        localStorage.setItem("keterlibatan_umkm", $("#keterlibatan_umkm option:selected").text());
        localStorage.setItem("keterlibatan_umkm_input", $("#keterlibatan_umkm_input").val());
        localStorage.setItem("persetujuan_warga", $("#persetujuan_warga option:selected").text());
        localStorage.setItem("jumlah_karyawan", $("#jumlah_karyawan").val());
        localStorage.setItem("asal_karyawan", $("#asal_karyawan option:selected").text());
        localStorage.setItem("jumlah_atm", $("#jumlah_atm").val());
        localStorage.setItem("jumlah_pengunjung_b", $("#jumlah_pengunjung_b").val());
        localStorage.setItem("penggunaan_lahan_sekitar", $("#penggunaan_lahan_sekitar option:selected").text());

        var pemutakhiran_pbb = localStorage.getItem('pemutakhiran_pbb');
        var keterlibatan_umkm = localStorage.getItem('keterlibatan_umkm');
        var keterlibatan_umkm_input = localStorage.getItem('keterlibatan_umkm_input');
        var persetujuan_warga = localStorage.getItem('persetujuan_warga');
        var jumlah_karyawan = localStorage.getItem('jumlah_karyawan');
        var asal_karyawan = localStorage.getItem('asal_karyawan');
        var jumlah_atm = localStorage.getItem('jumlah_atm');
        var jumlah_pengunjung_b = localStorage.getItem('jumlah_pengunjung_b');
        var penggunaan_lahan_sekitar = localStorage.getItem('penggunaan_lahan_sekitar');

        $("#pbb_summary").text(pemutakhiran_pbb);
        $("#keterlibatan_umkm_summary").html(keterlibatan_umkm+'<br>'+keterlibatan_umkm_input);
        $("#persetujuan_warga_summary").text(persetujuan_warga);
        $("#jumlah_karyawan_summary").text(jumlah_karyawan);
        $("#asal_karyawan_summary").text(asal_karyawan);
        $("#jumlah_atm_summary").text(jumlah_atm);
        $("#jumlah_pengunjung_summary").text(jumlah_pengunjung_b);
        $("#peng_lahan_s_summary").text(penggunaan_lahan_sekitar);
        /* Data Kebermanfaatan Usaha */

        /* Data Antisipasi Dampak/Resiko */
        localStorage.setItem("jarak_pasar", $("#jarak_pasar option:selected").text());
        localStorage.setItem("rencana_jalan_memadai", $("#rencana_jalan_memadai option:selected").text());
        localStorage.setItem("jalan_eksisting_memadai", $("#jalan_eksisting_memadai option:selected").text());
        localStorage.setItem("rekomendasi_umkm", $("#rekomendasi_umkm option:selected").text());
        localStorage.setItem("tataruang", $("#tataruang option:selected").text());
        localStorage.setItem("kajian_sostek", $("#kajian_sostek option:selected").text());
        localStorage.setItem("jarak_usaha_sejenis", $("#jarak_usaha_sejenis option:selected").text());

        var jarak_pasar = localStorage.getItem('jarak_pasar');
        var rencana_jalan_memadai = localStorage.getItem('rencana_jalan_memadai');
        var jalan_eksisting_memadai = localStorage.getItem('jalan_eksisting_memadai');
        var rekomendasi_umkm = localStorage.getItem('rekomendasi_umkm');
        var tataruang = localStorage.getItem('tataruang');
        var kajian_sostek = localStorage.getItem('kajian_sostek');
        var jarak_usaha_sejenis = localStorage.getItem('jarak_usaha_sejenis');

        $("#jarak_pasar_summary").text(jarak_pasar);
        $("#rencana_jalan_summary").text(rencana_jalan_memadai);
        $("#jalan_eksisting_summary").text(jalan_eksisting_memadai);
        $("#rek_umkm_summary").text(rekomendasi_umkm);
        $("#tata_ruang_summary").text(tataruang);
        $("#kajian_sostek_summary").text(kajian_sostek);
        $("#jarak_sejenis_summary").text(jarak_usaha_sejenis);
        /* Data Antisipasi Dampak/Resiko */

        localStorage.setItem("npwp_pemohon", $("#npwp_pemohon").val());
        localStorage.setItem("npwp_perusahaan", $("#npwp_perusahaan").val());
        localStorage.setItem("barang_jasa", $("#barang_jasa").val());
        localStorage.setItem("nrb", $("#nomorRegistrasiB").val());
        localStorage.setItem("luas_lantai", $("#luasLantaiB").val());
        localStorage.setItem("luas_lantai_input", $("#luas_lantai_input").val());
        localStorage.setItem("jml_lantai", $("#jmlLantaiB").val());
        localStorage.setItem("kondisi_eksisting", $("#kondisi_eksisting option:selected").text());
        localStorage.setItem("lama_izin", $("#lama_izin option:selected").text());
        localStorage.setItem("perjanjian_sewa", $("#perjanjian_sewa option:selected").text());
        localStorage.setItem("imb_eksisting", $("#imb_eksisting option:selected").text());
        localStorage.setItem("slf_eksisting", $("#slf_eksisting option:selected").text());
        localStorage.setItem("kdh_minimum", $("#kdh_minimum option:selected").text());
        localStorage.setItem("kondisi_kdh", $("#kondisi_kdh option:selected").text());
        localStorage.setItem("janji_sewa_input", $("#janji_sewa_input").val());
        localStorage.setItem("lama_izin_input", $("#lama_izin_input").val());
        localStorage.setItem("detail_kondisi_input", $("#detail_kondisi_input").val());
        localStorage.setItem("alamat_lengkap", $("#alamatLengkap").val());

        // var npwp_perusahaan = localStorage.getItem('npwp_perusahaan');
        // var barang_jasa = localStorage.getItem('barang_jasa');
        // var kontak_pemohon = localStorage.getItem('kontak_pemohon');
        // var nrb = localStorage.getItem('nrb');
        // var luaslantai = localStorage.getItem('luas_lantai');
        // var luas_lantai_input = localStorage.getItem('luas_lantai_input');
        // var kondisi_eksisting = localStorage.getItem('kondisi_eksisting');
        // var lama_izin = localStorage.getItem('lama_izin');
        // var perjanjian_sewa = localStorage.getItem('perjanjian_sewa');
        // var imb_eksisting = localStorage.getItem('imb_eksisting');
        // var slf_eksisting = localStorage.getItem('slf_eksisting');
        // var janji_sewa_input = localStorage.getItem('janji_sewa_input');
        // var lama_izin_input = localStorage.getItem('lama_izin_input');
        // var detail_kondisi_input = localStorage.getItem('detail_kondisi_input');
        // var alamat_lengkap = localStorage.getItem('alamat_lengkap');

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
                /* Data Administrasi Pemohon */
                no_token: $("#no_token").val(),
                namaLengkap: $("#namaLengkap").val(),
                jabatan: $("#jabatan").val(),
                nomorInKepen: $("#nomorInKepen").val(),
                nomorInBeru: $("#nomorInBeru").val(),
                npwp: $("#npwp").val(),
                alamat_perusahaan: $("#alamat_perusahaan").val(),
                no_telp: $("#no_telp").val(),
                emailAktif: $("#emailAktif").val(),
                /* Data Administrasi Pemohon */

                /* Data Umum Bangunan */
                luas_lahan: $("#luasLahan").val(),
                status_milik: $("#status_milik").val(),
                ltb: $("#luasTapakB").val(),
                jml_lantai: $("#jml_lantai").val(),
                luas_bangunan: $("#luas_bangunan").val(),
                tinggi_bangunan: $("#tinggi_bangunan").val(),
                peruntukan_bangunan: $("#peruntukan_bangunan").val(),
                foto_luar_bangunan: $("#foto_luar_bangunan").val(),
                foto_dalam_bangunan: $("#foto_dalam_bangunan").val(),
                /* Data Umum Bangunan */

                /* Data Keseimbangan, Keserasian, Keselarasan Lingkungan */
                kdh_zonasi: $("#kdh_zonasi").val(),
                kdh_minimum: $("#kdh_minimum").val(),
                kondisi_kdh: $("#kondisi_kdh").val(),
                volumeSumur: $("#volumeSumur").val(),
                kondisi_pertandaan_toko: $("#kondisi_pertandaan_toko").val(),
                kondisi_sumur_r: $("#kondisi_sumur_r").val(),
                drainase_disekeliling: $("#drainase_disekeliling").val(),
                /* Data Keseimbangan, Keserasian, Keselarasan Lingkungan */

                /* Data Keselamatan dan Keamanan */
                rekomendasi_slf: $("#rekomendasi_slf").val(),
                izin_dinas_pkp: $("#izin_dinas_pkp").val(),
                izin_dinas_tkt: $("#izin_dinas_tkt").val(),
                imb: $("#imb").val(),
                fasilitas_penang_kebakaran: $("#fasilitas_penang_kebakaran").val(),
                waktu_pembaruan_k_g: $("#ketersediaan_asuransi_toko").val(),
                waktu_pembaruan_k_g: $("#waktu_pembaruan_k_g").val(),
                /* Data Keselamatan dan Keamanan */

                /* Data Kesehatan */
                air_bersih: $("#air_bersih").val(),
                sumber_air_bersih: $("#sumber_air_bersih").val(),
                pengelolaan_air_kotor: $("#pengelolaan_air_kotor").val(),
                pengelolaan_sampah: $("#pengelolaan_sampah").val(),
                ketersediaan_listrik: $("#ketersediaan_listrik").val(),
                /* Data Kesehatan */

                /* Data Kemudahan */
                ketersediaan_toilet: $("#ketersediaan_toilet").val(),
                kondisi_parkir: $("#kondisi_parkir").val(),
                /* Data Kemudahan */

                /* Data Administrasi Usaha */
                nop: $("#nomorObjekPajak").val(),
                njop: $("#njop").val(),
                nama_toko: $("#nama_toko").val(),
                kelompok: $("#kelompok_usaha").val(),
                nama_badan_usaha: $("#nama_badan_usaha").val(),
                kategori_usaha: $("#kategori_usaha").val(),
                omset_perbulan: $("#omset_perbulan").val(),
                peruntukan_toko: $("#peruntukan_toko").val(),
                status_bangunan: $("#status_bangunan").val(),
                lat: $('#lat').val(),
                lng: $('#lng').val(), 
                subzona: $('#subzona').val(),
                idsubblok: $('#idsubblok').val(),
                alamat_lengkap: $("#alamatLengkap").val(),
                alamat: $("#alamatPemohon").val(),
                kelurahan: $("#kelurahan").val(),
                kecamatan: $("#kecamatan").val(),
                /* Data Administrasi Usaha */

                /* Data Kebermanfaatan Usaha */
                pemutakhiran_pbb: $("#pemutakhiran_pbb").val(),
                keterlibatan_umkm: $("#keterlibatan_umkm").val(),
                keterlibatan_umkm_input: $("#keterlibatan_umkm_input").val(),
                persetujuan_warga: $("#persetujuan_warga").val(),
                jumlah_karyawan: $("#jumlah_karyawan").val(),
                asal_karyawan: $("#asal_karyawan").val(),
                jumlah_atm: $("#jumlah_atm").val(),
                jumlah_pengunjung_b: $("#jumlah_pengunjung_b").val(),
                penggunaan_lahan_sekitar: $("#penggunaan_lahan_sekitar").val(),
                /* Data Kebermanfaatan Usaha */

                /* Data Antisipasi Dampak/Resiko */
                jarak_pasar: $("#jarak_pasar").val(),
                rencana_jalan_memadai: $("#rencana_jalan_memadai").val(),
                jalan_eksisting_memadai: $("#jalan_eksisting_memadai").val(),
                rekomendasi_umkm: $("#rekomendasi_umkm").val(),
                tataruang: $("#tataruang").val(),
                kajian_sostek: $("#kajian_sostek").val(),
                jarak_usaha_sejenis: $("#jarak_usaha_sejenis").val(),
                /* Data Antisipasi Dampak/Resiko */

                barang_jasa: $("#barang_jasa").val(),
                luas_lantai: $("#luasLantaiB").val(),
                luas_lantai_input: $("#luas_lantai_input").val(),
                jml_lantai: $("#jmlLantaiB").val(),
                kondisi_eksisting: $("#kondisi_eksisting").val(),
                perjanjian_sewa: $("#perjanjian_sewa").val(),
                barang_jasa: $("#barang_jasa").val(),
                imb_eksisting: $("#imb_eksisting").val(),
                slf_eksisting: $("#slf_eksisting").val(),
                janji_sewa_input: $("#janji_sewa_input").val(),
                lama_izin_input: $("#lama_izin_input").val(),
                detail_kondisi_input: $("#detail_kondisi_input").val(),
            };

            /* Data Administrasi Pemohon */
            dataRegis[0].no_token = dataInput.no_token;
            dataRegis[0].namaLengkap = dataInput.namaLengkap;
            dataRegis[0].jabatan = dataInput.jabatan;
            dataRegis[0].nomorInKepen = dataInput.nomorInKepen;
            dataRegis[0].nomorInBeru = dataInput.nomorInBeru;
            dataRegis[0].npwp = dataInput.npwp;
            dataRegis[0].alamat_perusahaan = dataInput.alamat_perusahaan;
            dataRegis[0].no_telp = dataInput.no_telp;
            dataRegis[0].emailAktif = dataInput.emailAktif;
            /*identitas pemohon*/

            /* Data Umum Bangunan */
            dataRegis[0].luas_lahan = dataInput.luas_lahan;
            dataRegis[0].status_milik = dataInput.status_milik;
            dataRegis[0].ltb = dataInput.ltb;
            dataRegis[0].jml_lantai = dataInput.jml_lantai;
            dataRegis[0].luas_bangunan = dataInput.luas_bangunan;
            dataRegis[0].tinggi_bangunan = dataInput.tinggi_bangunan;
            dataRegis[0].peruntukan_bangunan = dataInput.peruntukan_bangunan;
            dataRegis[0].foto_luar_bangunan = dataInput.foto_luar_bangunan;
            dataRegis[0].foto_dalam_bangunan = dataInput.foto_dalam_bangunan;
            /* Data Umum Bangunan */
                
            /* Data Keseimbangan, Keserasian, Keselarasan Lingkungan */
            dataRegis[0].kdh_zonasi = dataInput.kdh_zonasi;
            dataRegis[0].kdh_minimum = dataInput.kdh_minimum;
            dataRegis[0].kondisi_kdh = dataInput.kondisi_kdh;
            dataRegis[0].volumeSumur = dataInput.volumeSumur;
            dataRegis[0].kondisi_pertandaan_toko = dataInput.kondisi_pertandaan_toko;
            dataRegis[0].kondisi_sumur_r = dataInput.kondisi_sumur_r;
            dataRegis[0].drainase_disekeliling = dataInput.drainase_disekeliling;
            /* Data Keseimbangan, Keserasian, Keselarasan Lingkungan */
            
            /* Data Keselamatan dan Keamanan */
            dataRegis[0].rekomendasi_slf = dataInput.rekomendasi_slf;
            dataRegis[0].izin_dinas_pkp = dataInput.izin_dinas_pkp;
            dataRegis[0].izin_dinas_tkt = dataInput.izin_dinas_tkt;
            dataRegis[0].imb = dataInput.imb;
            dataRegis[0].fasilitas_penang_kebakaran = dataInput.fasilitas_penang_kebakaran;
            dataRegis[0].ketersediaan_asuransi_toko = dataInput.ketersediaan_asuransi_toko;
            dataRegis[0].waktu_pembaruan_k_g = dataInput.waktu_pembaruan_k_g;
            /* Data Keselamatan dan Keamanan */    

            /* Data Kesehatan */
            dataRegis[0].air_bersih = dataInput.air_bersih;
            dataRegis[0].sumber_air_bersih = dataInput.sumber_air_bersih;
            dataRegis[0].pengelolaan_air_kotor = dataInput.pengelolaan_air_kotor;
            dataRegis[0].pengelolaan_sampah = dataInput.pengelolaan_sampah;
            dataRegis[0].ketersediaan_listrik = dataInput.ketersediaan_listrik;
            /* Data Kesehatan */

            /* Data Kemudahan */
            dataRegis[0].ketersediaan_toilet = dataInput.ketersediaan_toilet;
            dataRegis[0].kondisi_parkir = dataInput.kondisi_parkir;
            /* Data Kemudahan */

            /* Data Administrasi Usaha */
            dataRegis[0].nop = dataInput.nop;
            dataRegis[0].njop = dataInput.njop;
            dataRegis[0].nama_toko = dataInput.nama_toko;
            dataRegis[0].kelompok = dataInput.kelompok;
            dataRegis[0].nama_badan_usaha = dataInput.nama_badan_usaha;
            dataRegis[0].kategori_usaha = dataInput.kategori_usaha;
            dataRegis[0].omset_perbulan = dataInput.omset_perbulan;
            dataRegis[0].peruntukan_toko = dataInput.peruntukan_toko;
            dataRegis[0].status_bangunan = dataInput.status_bangunan;
            dataRegis[0].alamat = dataInput.alamat;
            dataRegis[0].lat = dataInput.lat;
            dataRegis[0].lng = dataInput.lng;
            dataRegis[0].subzona = dataInput.subzona;
            dataRegis[0].idsubblok = dataInput.idsubblok;
            dataRegis[0].alamat_lengkap = dataInput.alamat_lengkap;
            dataRegis[0].kecamatan = dataInput.kecamatan;
            dataRegis[0].kelurahan = dataInput.kelurahan;

            /* Data Kebermanfaatan Usaha */
            dataRegis[0].pemutakhiran_pbb = dataInput.pemutakhiran_pbb;
            dataRegis[0].keterlibatan_umkm = dataInput.keterlibatan_umkm;
            dataRegis[0].keterlibatan_umkm_input = dataInput.keterlibatan_umkm_input;
            dataRegis[0].persetujuan_warga = dataInput.persetujuan_warga;
            dataRegis[0].jumlah_karyawan = dataInput.jumlah_karyawan;
            dataRegis[0].asal_karyawan = dataInput.asal_karyawan;
            dataRegis[0].jumlah_atm = dataInput.jumlah_atm;
            dataRegis[0].jumlah_pengunjung_b = dataInput.jumlah_pengunjung_b;
            dataRegis[0].penggunaan_lahan_sekitar = dataInput.penggunaan_lahan_sekitar;
            /* Data Kebermanfaatan Usaha */

            /* Data Antisipasi Dampak/Resiko */
            dataRegis[0].jarak_pasar = dataInput.jarak_pasar;
            dataRegis[0].rencana_jalan_memadai = dataInput.rencana_jalan_memadai;
            dataRegis[0].jalan_eksisting_memadai = dataInput.jalan_eksisting_memadai;
            dataRegis[0].rekomendasi_umkm = dataInput.rekomendasi_umkm;
            dataRegis[0].tataruang = dataInput.tataruang;
            dataRegis[0].kajian_sostek = dataInput.kajian_sostek;
            dataRegis[0].jarak_usaha_sejenis = dataInput.jarak_usaha_sejenis;
            /* Data Antisipasi Dampak/Resiko */

            // dataRegis[0].barang_jasa = dataInput.barang_jasa;
            // dataRegis[0].perjanjian_sewa = dataInput.perjanjian_sewa;
            // dataRegis[0].npwp_perusahaan = dataInput.npwp_perusahaan;
            // dataRegis[0].luas_lantai = dataInput.luas_lantai;
            // dataRegis[0].luas_lantai_input = dataInput.luas_lantai_input;
            // dataRegis[0].jml_lantai = dataInput.jml_lantai;
            // dataRegis[0].kondisi_eksisting = dataInput.kondisi_eksisting;
            // dataRegis[0].detail_kondisi_input = dataInput.detail_kondisi_input;
            // dataRegis[0].imb_eksisting = dataInput.imb_eksisting;
            // dataRegis[0].slf_eksisting = dataInput.slf_eksisting;
            // dataRegis[0].janji_sewa_input = dataInput.janji_sewa_input;

            localStorage.setItem("dataPermohonan", JSON.stringify(dataRegis));
            $.ajax({
                url: BASE_URL + "ApiController/ApiPajakNPWP",
                type: 'POST',
                dataType: 'json',
                data : {nik:$('#nomorInKepen').val()},
                beforeSend:function() {
                    $("#text-loader").html('Sedang Cek Data Pajak Anda');
                    $('#page-loader').fadeIn('slow');
                },
                success:function(response) {
                    $('#page-loader').fadeOut('slow');
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
                    }else if (response.errorCode == '4') {
                        swal({
                            type: 'error',
                            title: 'Silakan Isi NIK Anda',
                            showCancelButton: true,
                        });
                    }else{
                        for (var i =0; i < response.length; i++) {
                            if (response[i].JNS_PAJAK == "PBB"){
                                if (response[i].NOPD == $('#nomorObjekPajak').val()) {
                                    console.log(response[i].NOPD);
                                    console.log(response[i]);
                                    console.log($('#nomorObjekPajak').val());
                                    if (response.STATUS == "TIDAK TERDAPAT TUNGGAKAN") {
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
                                                beforeSend:function(argument) {
                                                    $("#text-loader").html('Mohon Tunggu');
                                                    $('#page-loader').fadeIn('slow');
                                                },
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
                                                    $('#page-loader').fadeOut('slow');
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
                    $('#penggunaan_lahan_sekitar').html(options);

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
                    $('#rencana_jalan_memadai').html(options);

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
                    $('#jalan_eksisting_memadai').html(options);

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
                    $('#jarak_usaha_sejenis').html(options);

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
                    $('#jarak_pasar').html(options);

                }
            }
        });
        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=kondisi_pertandaan',
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
                    $('#kondisi_pertandaan_toko').html(options);
                }
            }
        });
        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=rekomendasi_slf',
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
                    $('#rekomendasi_slf').html(options);
                }
            }
        });
        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=izin_damkar',
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
                    $('#izin_dinas_pkp').html(options);
                }
            }
        });
        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=izin_tenaga_kerja',
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
                    $('#izin_dinas_tkt').html(options);
                }
            }
        });
        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=izin_imb',
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
                    $('#imb').html(options);
                }
            }
        });
        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=fasilitas_damkar',
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
                    $('#fasilitas_penang_kebakaran').html(options);
                }
            }
        });
        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=asuransi_toko',
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
                    $('#ketersediaan_asuransi_toko').html(options);
                }
            }
        });
        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=kelayakan_gedung',
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
                    $('#waktu_pembaruan_k_g').html(options);
                }
            }
        });
        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=ketersedian_air',
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
                    $('#air_bersih').html(options);
                }
            }
        });
        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=pengelola_limbah',
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
                    $('#pengelolaan_air_kotor').html(options);
                }
            }
        });
        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=ketersedian_listrik',
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
                    $('#ketersediaan_listrik').html(options);
                }
            }
        });
        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=ketersedian_toilet',
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
                    $('#ketersediaan_toilet').html(options);
                }
            }
        });
        $.ajax({
            url: BASE_URL + 'ValidasiController/getallSelect?table=kelayakan_gedung',
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
                    $('#waktu_pembaruan_k_g').html(options);
                }
            }
        });

    });
    /* end animation */

    $(function() {
        $(document).on("change",".uploadFile", function()
        {
            var uploadFile = $(this);
            var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

        if (/^image/.test( files[0].type)){ // only image file
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(files[0]); // read the local file

            reader.onloadend = function(){ // set image data as background of div
                //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
                uploadFile.closest(".imgUpLuar").find('#img-luar-bangunan').css("background-image", "url("+this.result+")");
                $('#img-luar-bangunan').fadeIn('slow');
                uploadFile.closest(".imgUpDalam").find('#img-dalam-bangunan').css("background-image", "url("+this.result+")");
                $('#img-dalam-bangunan').fadeIn('slow');
            }
        }

    });
    });