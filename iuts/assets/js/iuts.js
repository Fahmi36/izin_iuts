const numberSteps = $('.ijin__step').length - 1;
let disableButtons = false;
const tick = '<div class="answer__tick"><svg width="14" height="14" viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg></div>'; 
let summary = '<div class="summary"><h1 class="judul-ijin">Permohonan Izin Usaha Toko Swalayan Berhasil Diajukan</h1><p>Nomor Token telah dikirimkan melalui email Anda <br> Silahkan Cek Email Anda</p><p>Perkiran Waktu Perizinan Selesai (0) Hari</p><div class="backkehalaman"><a onclick="backkehalaman();" href="javascript:void(0);" class="btn3d btn btn-danger btn-lg">Kembali Ke Halaman Utama</a></div></div>';
// var BASE_URL = 'http://localhost/rest-api-iuts/';
var BASE_URL = 'https://rest-iuts.pkkmart.com/';

/* Add Row */
function statuspemohon() {
    if ($("#status_pemohon option:selected").val()) {
        $(".sistemU").removeAttr('style');
    }
}

function statuspemohon_k() {
    if ($("#status_pemohon option:selected").val()) {
        $(".statusP").removeAttr('style');
    }
}
function kemitraan() {
    if ($("#kepemilikan_kemitraan option:selected").val() == 1) {
        $(".rowJumKem").removeAttr('style');
    }else{
        $(".rowJumKem").attr('style', 'display:none');
    }
}
function sistemUsaha() {
    if ($("#sistem_usaha option:selected").val()) {
        $(".form_nib").removeAttr('style');
    }
}
function statusKepemIMB() {
    if ($("#status_pemohon option:selected").val() == "Perorangan") {
        $(".statusP").removeAttr('style');
        $(".jabatan_row").removeAttr('style');
        $(".npj").removeAttr('style');
        $(".nikPJ").removeAttr('style');
        $(".npwpPJ").removeAttr('style');
        $(".np").attr('style', 'display:none');
        $(".nikD").attr('style', 'display:none');
        $(".npwpP").attr('style', 'display:none');
        $(".namaPJ").attr('style', 'display:none');
        $(".akteP").attr('style', 'display:none');
    // }else if($("#sistem_usaha option:selected").val() == "Waralaba" && $("#status_nib option:selected").val() == "Pelaku Waralaba") {
    //     $(".select-waralaba").removeAttr('style');
    }else{
        $(".statusP").removeAttr('style');
        $(".jabatan_row").attr('style', 'display:none');
        $(".npj").attr('style', 'display:none');
        $(".nikPJ").attr('style', 'display:none');
        $(".npwpPJ").attr('style', 'display:none');
        $(".np").removeAttr('style');
        $(".nikD").removeAttr('style');
        $(".nibP").removeAttr('style');
        $(".npwpP").removeAttr('style');
        $(".namaPJ").removeAttr('style');
        $(".akteP").removeAttr('style');
    }
}

$("#status_nib").on("change", function() {
    if($("#sistem_usaha option:selected").val() == "Waralaba" || $("#sistem_usaha option:selected").val() == "Mandiri" && $("#status_nib option:selected").val() == "Pelaku Waralaba"){
        $("#select-waralaba").html("<p class='text-danger text-left'>NIB yang digunakan seharusnya NIB pemilik Usaha, silahkan membuat NIB di OSS</p>"); 
    } else {
        $("#select-waralaba").html("");
    }
});
function rekomendasislf() {
    if ($("#rekomendasi_slf option:selected").val() != 1 &&  $("#rekomendasi_slf option:selected").val() != 2) {
        $("#uploadReSLF").removeAttr('style');
    }else{
        $("#uploadReSLF").attr('style', 'display:none');
    }
}
function slf_change() {
    if ($("#slf option:selected").val() == 3 ||  $("#slf option:selected").val() == 4) {
        $(".uploadSLF").removeAttr('style');
        $(".suratPengawas").attr('style', 'display:none');
        $(".rekDamkar").attr('style', 'display:none');
        $(".rekTKT").attr('style', 'display:none');
        $(".fasilitasDamkar").attr('style', 'display:none');
    }else{
        $(".uploadSLF").attr('style', 'display:none');
        $(".suratPengawas").removeAttr('style');
        $(".rekDamkar").removeAttr('style');
        $(".rekTKT").removeAttr('style');
        $(".fasilitasDamkar").removeAttr('style');
    }
}
function damkar() {
    if ($("#izin_dinas_pkp option:selected").val() != 1 &&  $("#izin_dinas_pkp option:selected").val() != 2) {
        $(".uploadDamkar").removeAttr('style');
    }else{
        $(".uploadDamkar").attr('style', 'display:none');
    }
}
function izinTKT() {
    if ($("#izin_dinas_tkt option:selected").val() != 1 &&  $("#izin_dinas_tkt option:selected").val() != 2) {
        $(".uploadTKT").removeAttr('style');
    }else{
        $(".uploadTKT").attr('style', 'display:none');
    }
}
function imb_change() {
    if ($("#imb option:selected").val() != 1 &&  $("#imb option:selected").val() != 2) {
        $(".uploadIMB").removeAttr('style');
    }else{
        $(".uploadIMB").attr('style', 'display:none');
    }
}
function kondisieksis() {
    if ($("#kondisi_eksisting option:selected").val() != 1 &&  $("#kondisi_eksisting option:selected").val() != 2) {
        $("#kondisieksis").removeAttr('style');
    }else{
        $("#kondisieksis").attr('style', 'display:none');
    }
}
function statusbangunan() {
    if ($("#status_bangunan option:selected").val() == "Sewa") {
        $(".rowSewa").removeAttr('style');
    }else{
        $(".rowSewa").attr('style', 'display:none');
    }
}
function kelompokusaha() {
    if ($("#kelompok_usaha option:selected").val() == "8") {
        $("#rowKelompok").removeAttr('style');
    }else{
        $("#rowKelompok").attr('style', 'display:none');
    }
}
function rekomendasiUMKM() {
    if ($("#rekomendasi_umkm option:selected").val() == 4) {
        $(".uploadUMKM").removeAttr('style');
    }else{
        $(".uploadUMKM").attr('style', 'display:none');
    }
}
function kajianSostek() {
    if ($("#kajian_sostek option:selected").val() != 1 &&  $("#kajian_sostek option:selected").val() != 2) {
        $(".uploadSostek").removeAttr('style');
    }else{
        $(".uploadSostek").attr('style', 'display:none');
    }
}
function aktaKoperasi() {
    if ($("#akta_koperasi option:selected").val() == 1) {
        $(".uploadAkta").removeAttr('style');
    }else{
        $(".uploadAkta").attr('style', 'display:none');
    }
}
function suratPeng() {
    if ($("#surat_pengawas option:selected").val() == 1) {
        $(".uploadSuratPeng").removeAttr('style');
    }else{
        $(".uploadSuratPeng").attr('style', 'display:none');
    }
}
function asuransiToko() {
    if ($("#ketersediaan_asuransi_toko option:selected").val() != 1) {
        $(".uploadAsuransiT").removeAttr('style');
    }else{
        $(".uploadAsuransiT").attr('style', 'display:none');
    }
}
function pemutahiranPBB() {
    if ($("#pemutakhiran_pbb option:selected").val() == 4) {
        $(".uploadPBB").removeAttr('style');
    }else{
        $(".uploadPBB").attr('style', 'display:none');
    }
}
function persetujuanWarga() {
    if ($("#persetujuan_warga option:selected").val() == 4) {
        $(".uploadPW").removeAttr('style');
    }else{
        $(".uploadPW").attr('style', 'display:none');
    }
}
function statusLahan() {
    if ($("#status_kepem_lahan option:selected").val() != "Tidak Ada") {
        $(".uploadStatusL").removeAttr('style');
    }else{
        $(".uploadStatusL").attr('style', 'display:none');
    }
}
function lamaizin() {
    $("#lama_izin_row").removeAttr('style');
}
function umkm() {
    if ($("#keterlibatan_umkm option:selected").val() != 1) {
        $(".keterlibatan_umkm_row").removeAttr('style');
    }else{
        $(".keterlibatan_umkm_row").attr('style', 'display:none');
    }
}
function janjisewa() {
    $("#janji_sewa_row").removeAttr('style');
}
function luaslantai() {
    $("#luas_lantai_row").removeAttr('style');
}
/* Add Row */

// function volumesumur() {
//     $("#volume_sumur_row").removeAttr('style');
// }
// function kondisikdh() {
//     $("#kondisi_kdh_row").removeAttr('style');
// }

/* File Upload */    
$('#fileRekomendasiSlf').bind('change', function () {
    var filenameReSLF = $("#fileRekomendasiSlf").val();
    if (/^\s*$/.test(filenameReSLF)) {
        $(".uploadReSLF").removeClass('active');
        $("#noFileReSLF").text("No file chosen..."); 
    }
    else {
        $(".uploadReSLF").addClass('active');
        $("#noFileReSLF").text(filenameReSLF.replace("C:\\fakepath\\", "")); 
    }
});   
$('#fileSLF').bind('change', function () {
    var filenameSLF = $("#fileSLF").val();
    if (/^\s*$/.test(filenameSLF)) {
        $(".uploadSLF").removeClass('active');
        $("#noFileSLF").text("No file chosen..."); 
    }
    else {
        $(".uploadSLF").addClass('active');
        $("#noFileSLF").text(filenameSLF.replace("C:\\fakepath\\", "")); 
    }
});   
$('#fileDamkar').bind('change', function () {
    var filenameDamkar = $("#fileDamkar").val();
    if (/^\s*$/.test(filenameDamkar)) {
        $(".uploadDamkar").removeClass('active');
        $("#noFileDamkar").text("No file chosen..."); 
    }
    else {
        $(".uploadDamkar").addClass('active');
        $("#noFileDamkar").text(filenameDamkar.replace("C:\\fakepath\\", "")); 
    }
});  
$('#fileTKT').bind('change', function () {
    var filenameTKT = $("#fileTKT").val();
    if (/^\s*$/.test(filenameTKT)) {
        $(".uploadTKT").removeClass('active');
        $("#noFileTKT").text("No file chosen..."); 
    }
    else {
        $(".uploadTKT").addClass('active');
        $("#noFileTKT").text(filenameTKT.replace("C:\\fakepath\\", "")); 
    }
});   
$('#fileIMB').bind('change', function () {
    var filenameIMB = $("#fileIMB").val();
    if (/^\s*$/.test(filenameIMB)) {
        $(".uploadIMB").removeClass('active');
        $("#noFileIMB").text("No file chosen..."); 
    }
    else {
        $(".uploadIMB").addClass('active');
        $("#noFileIMB").text(filenameIMB.replace("C:\\fakepath\\", "")); 
    }
});   
/* File Upload */

$('input').on('keyup', function () {
    $("input").filter(function () {
        this.value.length ? $(this).addClass('input-success') : $(this).removeClass('input-success');
    });
});

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
    //      console.log('input empty');
    //      return false;
    // }
    localStorage.clear();

    // bannerImage = document.getElementById('bannerImg');
    // imgData = getBase64Image(bannerImage);
    // localStorage.setItem("imgData", imgData);

    // function getBase64Image(img) {
    //     var canvas = document.createElement("canvas");
    //     canvas.width = img.width;
    //     canvas.height = img.height;

    //     var ctx = canvas.getContext("2d");
    //     ctx.drawImage(img, 0, 0);

    //     var dataURL = canvas.toDataURL("image/png");

    //     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    // }
    // var dataImage = localStorage.getItem('imgData');
    // bannerImg = document.getElementById('tableBanner');
    // bannerImg.src = "data:image/png;base64," + dataImage;

    $("#statusPemohon").text(status_pemohon);
    /* Data Administrasi Pemohon */
    localStorage.setItem("status_pemohon", $("#status_pemohon").val());
    localStorage.setItem("nama_perusahaan", $("#nama_perusahaan").val());
    localStorage.setItem("namapemohon", $("#namaLengkap").val());
    localStorage.setItem("jabatan", $("#jabatan").val());
    localStorage.setItem("nik", $("#nomorInKepen").val());
    localStorage.setItem("foto_ktp", $("#foto_ktp").val());
    localStorage.setItem("nib", $("#nomorInBeru").val());
    localStorage.setItem("npwp", $("#npwp").val());
    localStorage.setItem("foto_npwp", $("#foto_npwp").val());
    localStorage.setItem("aktePerusahaan", $("#aktePerusahaan").val());
    localStorage.setItem("alamat_perusahaan", $("#alamat_perusahaan").val());
    localStorage.setItem("no_telp", $("#no_telp").val());
    localStorage.setItem("email", $("#emailAktif").val());

    var status_pemohon = localStorage.getItem('status_pemohon');
    var nama_perusahaan = localStorage.getItem('nama_perusahaan');
    var nama = localStorage.getItem('namapemohon');
    var jabatan = localStorage.getItem('jabatan');
    var nik = localStorage.getItem('nik');
    var foto_ktp = localStorage.getItem('foto_ktp');
    var nib = localStorage.getItem('nib');
    var npwp = localStorage.getItem('npwp');
    var foto_npwp = localStorage.getItem('foto_npwp');
    var aktePerusahaan = localStorage.getItem('aktePerusahaan');
    var alamat_perusahaan = localStorage.getItem('alamat_perusahaan');
    var no_telp = localStorage.getItem('no_telp');
    var email = localStorage.getItem('email');

    $("#statusPemohon").text(status_pemohon);
    $("#nama_p").text(nama_perusahaan);
    $("#nama").text(nama);
    $("#jabatanlocal").text(jabatan);
    $("#nik").text(nik);
    $("#foto_ktp_summary").text(foto_ktp.replace("C:\\fakepath\\", ""));
    $("#nib").text(nib);
    $("#npwplocal").text(npwp);
    $("#foto_npwp_summary").text(foto_npwp.replace("C:\\fakepath\\", ""));
    $("#akte_p_summary").text(aktePerusahaan);
    $("#alamatperusahaan").text(alamat_perusahaan);
    $("#nomortelp").text(no_telp);
    $("#email").text(email);
    /* Data Administrasi Pemohon */

    /* Data Umum Bangunan */
    localStorage.setItem("nopd_bangunan", $("#nopd_bangunan").val());
    localStorage.setItem("luas_lahan", $("#luasLahan").val());
    localStorage.setItem("status_kepem_lahan", $("#status_kepem_lahan").val());
    localStorage.setItem("luas_tapak", $("#luasTapakB").val());
    localStorage.setItem("jml_lantai", $("#jml_lantai  option:selected").text());
    localStorage.setItem("luas_bangunan", $("#luas_bangunan").val());
    localStorage.setItem("tinggi_bangunan", $("#tinggi_bangunan").val());
    localStorage.setItem("peruntukan_bangunan", $("#peruntukan_bangunan").val());
    localStorage.setItem("foto_luar_bangunan", $("#foto_luar_bangunan").val());
    localStorage.setItem("foto_dalam_bangunan", $("#foto_dalam_bangunan").val());

    var nopd_bangunan = localStorage.getItem('nopd_bangunan');
    var luas = localStorage.getItem('luas_lahan');
    var status_kepem_lahan = localStorage.getItem('status_kepem_lahan');
    var luastapak = localStorage.getItem('luas_tapak');
    var jml_lantai = localStorage.getItem('jml_lantai');
    var luas_bangunan = localStorage.getItem('luas_bangunan');
    var tinggi_bangunan = localStorage.getItem('tinggi_bangunan');
    var peruntukan_bangunan = localStorage.getItem('peruntukan_bangunan');
    var foto_luar_bangunan = localStorage.getItem('foto_luar_bangunan');
    var foto_dalam_bangunan = localStorage.getItem('foto_dalam_bangunan');

    $("#nopd_bangunan_summary").text(nopd_bangunan);
    $("#luas_lahan").text(luas);
    $("#statusmilik").text(status_kepem_lahan);
    $("#luastapak").text(luastapak);
    $("#jmllantai").text(jml_lantai);
    $("#totalBangunan").text(luas_bangunan);
    $("#tinggiBangunan").text(tinggi_bangunan);
    $("#peruntukanBangunan").text(peruntukan_bangunan);
    $("#fotoDalam").text(foto_dalam_bangunan.replace("C:\\fakepath\\", ""));
    $("#fotoLuar").text(foto_luar_bangunan.replace("C:\\fakepath\\", ""));
    /* Data Umum Bangunan */

    /*Data Keseimbangan, Keserasian, Keselarasan Lingkungan*/
    localStorage.setItem("kdh_zonasi", $("#kdh_zonasi").val());
    localStorage.setItem("kdh_minimum", $("#kdh_minimum").val());
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
    localStorage.setItem("fileRekomendasiSlf", $("#fileRekomendasiSlf").val());
    localStorage.setItem("slf", $("#slf option:selected").text());
    localStorage.setItem("fileSLF", $("#fileSLF").val());
    localStorage.setItem("izin_dinas_pkp", $("#izin_dinas_pkp option:selected").text());
    localStorage.setItem("fileDamkar", $("#fileDamkar").val());
    localStorage.setItem("izin_dinas_tkt", $("#izin_dinas_tkt option:selected").text());
    localStorage.setItem("fileTKT", $("#fileTKT").val());
    localStorage.setItem("imb", $("#imb option:selected").text());
    localStorage.setItem("fileIMB", $("#fileIMB").val());
    localStorage.setItem("fasilitas_penang_kebakaran", $("#fasilitas_penang_kebakaran option:selected").text());
    localStorage.setItem("ketersediaan_asuransi_toko", $("#ketersediaan_asuransi_toko option:selected").text());
    localStorage.setItem("waktu_pembaruan_k_g", $("#waktu_pembaruan_k_g option:selected").text());

    var rekomendasi_slf = localStorage.getItem('rekomendasi_slf');
    var fileRekomendasiSlf = localStorage.getItem('fileRekomendasiSlf');
    var slf = localStorage.getItem('slf');
    var fileSLF = localStorage.getItem('fileSLF');
    var izin_dinas_pkp = localStorage.getItem('izin_dinas_pkp');
    var fileDamkar = localStorage.getItem('fileDamkar');
    var izin_dinas_tkt = localStorage.getItem('izin_dinas_tkt');
    var fileTKT = localStorage.getItem('fileTKT');
    var imb = localStorage.getItem('imb');
    var fileIMB = localStorage.getItem('fileIMB');
    var fasilitas_penang_kebakaran = localStorage.getItem('fasilitas_penang_kebakaran');
    var ketersediaan_asuransi_toko = localStorage.getItem('ketersediaan_asuransi_toko');
    var waktu_pembaruan_k_g = localStorage.getItem('waktu_pembaruan_k_g');

    $("#rekomendasi_slf_summary").html(rekomendasi_slf+'<br>'+fileRekomendasiSlf.replace("C:\\fakepath\\", ""));
    $("#slf_summary").html(slf+'<br>'+fileSLF.replace("C:\\fakepath\\", ""));
    $("#izin_pkp_summary").html(izin_dinas_pkp+'<br>'+fileDamkar.replace("C:\\fakepath\\", ""));
    $("#izin_tkt_summary").html(izin_dinas_tkt+'<br>'+fileTKT.replace("C:\\fakepath\\", ""));
    $("#imb_summary").html(imb+'<br>'+fileIMB.replace("C:\\fakepath\\", ""));
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
    localStorage.setItem("kelompok_input", $("#kelompok_input").val());
    localStorage.setItem("nama_badan_usaha", $("#nama_badan_usaha").val());
    localStorage.setItem("kategori_usaha", $("#kategori_usaha option:selected").text());
    localStorage.setItem("omset_perbulan", $("#omset_perbulan").val());
    localStorage.setItem("peruntukan_toko", $("#peruntukan_toko").val());
    localStorage.setItem("status_bangunan", $("#status_bangunan option:selected").text());
    localStorage.setItem("lama_sewa_input", $("#lama_sewa_input").val());
    localStorage.setItem("alamat_lengkap", $("#alamatLengkap").val());

    var nop = localStorage.getItem('nop');
    var njop = localStorage.getItem('njop');
    var nama_toko = localStorage.getItem('nama_toko');
    var kelompok_usaha = localStorage.getItem('kelompok_usaha');
    var kelompok_input = localStorage.getItem('kelompok_input');
    var nama_badan_usaha = localStorage.getItem('nama_badan_usaha');
    var kategori_usaha = localStorage.getItem('kategori_usaha');
    var omset_perbulan = localStorage.getItem('omset_perbulan');
    var peruntukan_toko = localStorage.getItem('peruntukan_toko');
    var status_bangunan = localStorage.getItem('status_bangunan');
    var lama_sewa_input = localStorage.getItem('lama_sewa_input');
    var alamat = localStorage.getItem('alamat_lengkap');

    $("#nop").text(nop);
    $("#njoplocal").text(njop);
    $("#namatoko").text(nama_toko);
    $("#kelompokusaha").html(kelompok_usaha+'<br>'+kelompok_input);
    $("#namausaha").text(nama_badan_usaha);
    $("#kategori_usaha_summary").text(kategori_usaha);
    $("#omset_perbulan_summary").text(omset_perbulan);
    $("#peruntukan_toko_summary").text(peruntukan_toko);
    $("#statusbangunan_summary").html(status_bangunan+'<br>'+lama_sewa_input);
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
    localStorage.setItem("status_milik_usaha", $("#status_milik_usaha option:selected").text());

    var pemutakhiran_pbb = localStorage.getItem('pemutakhiran_pbb');
    var keterlibatan_umkm = localStorage.getItem('keterlibatan_umkm');
    var keterlibatan_umkm_input = localStorage.getItem('keterlibatan_umkm_input');
    var persetujuan_warga = localStorage.getItem('persetujuan_warga');
    var jumlah_karyawan = localStorage.getItem('jumlah_karyawan');
    var asal_karyawan = localStorage.getItem('asal_karyawan');
    var jumlah_atm = localStorage.getItem('jumlah_atm');
    var jumlah_pengunjung_b = localStorage.getItem('jumlah_pengunjung_b');
    var status_milik_usaha = localStorage.getItem('status_milik_usaha');

    $("#pbb_summary").text(pemutakhiran_pbb);
    $("#keterlibatan_umkm_summary").html(keterlibatan_umkm+'<br>'+keterlibatan_umkm_input);
    $("#persetujuan_warga_summary").text(persetujuan_warga);
    $("#jumlah_karyawan_summary").text(jumlah_karyawan);
    $("#asal_karyawan_summary").text(asal_karyawan);
    $("#jumlah_atm_summary").text(jumlah_atm);
    $("#jumlah_pengunjung_summary").text(jumlah_pengunjung_b);
    $("#status_mlk_ush_summary").text(status_milik_usaha);
    /* Data Kebermanfaatan Usaha */

    /* Data Antisipasi Dampak/Resiko */
    localStorage.setItem("rekomendasi_umkm", $("#rekomendasi_umkm option:selected").text());
    localStorage.setItem("kajian_sostek", $("#kajian_sostek option:selected").text());

    var rekomendasi_umkm = localStorage.getItem('rekomendasi_umkm');
    var kajian_sostek = localStorage.getItem('kajian_sostek');

    $("#rek_umkm_summary").text(rekomendasi_umkm);
    $("#kajian_sostek_summary").text(kajian_sostek);
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
    if(currentIndex == numberSteps + 1 || currentIndex == 11 || disableButtons==true){
        //console.log('last')
        $.getScript("https://iuts.pkkmart.com/iuts/assets/js/mapsuser.js", function() {
        });
        return false;
    }
    // if($('.ijin__step--current input' + 2).value != null){
    //  return false;
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
            // var dataInput = {
            //     /* Data Administrasi Pemohon */
            //     status_pemohon: $("#status_pemohon").val(),
            //     namaLengkap: $("#namaLengkap").val(),
            //     jabatan: $("#jabatan").val(),
            //     nomorInKepen: $("#nomorInKepen").val(),
            //     nomorInBeru: $("#nomorInBeru").val(),
            //     npwp: $("#npwp").val(),
            //     alamat_perusahaan: $("#alamat_perusahaan").val(),
            //     no_telp: $("#no_telp").val(),
            //     emailAktif: $("#emailAktif").val(),
            //     /* Data Administrasi Pemohon */

            //     /* Data Umum Bangunan */
            //     luas_lahan: $("#luasLahan").val(),
            //     status_milik: $("#status_milik").val(),
            //     ltb: $("#luasTapakB").val(),
            //     jml_lantai: $("#jml_lantai").val(),
            //     luas_bangunan: $("#luas_bangunan").val(),
            //     tinggi_bangunan: $("#tinggi_bangunan").val(),
            //     peruntukan_bangunan: $("#peruntukan_bangunan").val(),
            //     foto_luar_bangunan: $("#foto_luar_bangunan").val(),
            //     foto_dalam_bangunan: $("#foto_dalam_bangunan").val(),
            //     /* Data Umum Bangunan */

            //     /* Data Keseimbangan, Keserasian, Keselarasan Lingkungan */
            //     kdh_zonasi: $("#kdh").val(),
            //     kdh_minimum: $("#kdh_minimum").val(),
            //     kondisi_kdh: $("#kondisi_kdh").val(),
            //     volumeSumur: $("#volumeSumur").val(),
            //     kondisi_pertandaan_toko: $("#kondisi_pertandaan_toko").val(),
            //     kondisi_sumur_r: $("#kondisi_sumur_r").val(),
            //     drainase_disekeliling: $("#drainase_disekeliling").val(),
            //     /* Data Keseimbangan, Keserasian, Keselarasan Lingkungan */

            //     /* Data Keselamatan dan Keamanan */
            //     rekomendasi_slf: $("#rekomendasi_slf").val(),
            //     fileRekomendasiSlf: $("#fileRekomendasiSlf").val(),
            //     slf: $("#slf").val(),
            //     fileSLF: $("#fileSLF").val(),
            //     izin_dinas_pkp: $("#izin_dinas_pkp").val(),
            //     fileDamkar: $("#fileDamkar").val(),
            //     izin_dinas_tkt: $("#izin_dinas_tkt").val(),
            //     fileTKT: $("#fileTKT").val(),
            //     imb: $("#imb").val(),
            //     fileIMB: $("#fileIMB").val(),
            //     fasilitas_penang_kebakaran: $("#fasilitas_penang_kebakaran").val(),
            //     waktu_pembaruan_k_g: $("#ketersediaan_asuransi_toko").val(),
            //     waktu_pembaruan_k_g: $("#waktu_pembaruan_k_g").val(),
            //     /* Data Keselamatan dan Keamanan */

            //     /* Data Kesehatan */
            //     air_bersih: $("#air_bersih").val(),
            //     sumber_air_bersih: $("#sumber_air_bersih").val(),
            //     pengelolaan_air_kotor: $("#pengelolaan_air_kotor").val(),
            //     pengelolaan_sampah: $("#pengelolaan_sampah").val(),
            //     ketersediaan_listrik: $("#ketersediaan_listrik").val(),
            //     /* Data Kesehatan */

            //     /* Data Kemudahan */
            //     ketersediaan_toilet: $("#ketersediaan_toilet").val(),
            //     kondisi_parkir: $("#kondisi_parkir").val(),
            //     /* Data Kemudahan */

            //     /* Data Administrasi Usaha */
            //     nop: $("#nomorObjekPajak").val(),
            //     njop: $("#njop").val(),
            //     nama_toko: $("#nama_toko").val(),
            //     kelompok: $("#kelompok_usaha").val(),
            //     kelompok_input: $("#kelompok_input").val(),
            //     nama_badan_usaha: $("#nama_badan_usaha").val(),
            //     kategori_usaha: $("#kategori_usaha").val(),
            //     omset_perbulan: $("#omset_perbulan").val(),
            //     peruntukan_toko: $("#peruntukan_toko").val(),
            //     status_bangunan: $("#status_bangunan").val(),
            //     lama_sewa_input: $("#lama_sewa_input").val(),
            //     lat: $('#lat').val(),
            //     lng: $('#lng').val(), 
            //     subzona: $('#subzona').val(),
            //     idsubblok: $('#idsubblok').val(),
            //     alamat_lengkap: $("#alamatLengkap").val(),
            //     alamat: $("#alamatPemohon").val(),
            //     kelurahan: $("#kelurahan").val(),
            //     kecamatan: $("#kecamatan").val(),
            //     /* Data Administrasi Usaha */

            //     /* Data Kebermanfaatan Usaha */
            //     pemutakhiran_pbb: $("#pemutakhiran_pbb").val(),
            //     keterlibatan_umkm: $("#keterlibatan_umkm").val(),
            //     keterlibatan_umkm_input: $("#keterlibatan_umkm_input").val(),
            //     persetujuan_warga: $("#persetujuan_warga").val(),
            //     jumlah_karyawan: $("#jumlah_karyawan").val(),
            //     asal_karyawan: $("#asal_karyawan").val(),
            //     jumlah_atm: $("#jumlah_atm").val(),
            //     jumlah_pengunjung_b: $("#jumlah_pengunjung_b").val(),
            //     status_milik_usaha: $("#status_milik_usaha").val(),
            //     /* Data Kebermanfaatan Usaha */

            //     /* Data Antisipasi Dampak/Resiko */
            //     rekomendasi_umkm: $("#rekomendasi_umkm").val(),
            //     kajian_sostek: $("#kajian_sostek").val(),
            //     /* Data Antisipasi Dampak/Resiko */

            //     barang_jasa: $("#barang_jasa").val(),
            //     luas_lantai: $("#luasLantaiB").val(),
            //     luas_lantai_input: $("#luas_lantai_input").val(),
            //     jml_lantai: $("#jmlLantaiB").val(),
            //     kondisi_eksisting: $("#kondisi_eksisting").val(),
            //     perjanjian_sewa: $("#perjanjian_sewa").val(),
            //     barang_jasa: $("#barang_jasa").val(),
            //     imb_eksisting: $("#imb_eksisting").val(),
            //     slf_eksisting: $("#slf_eksisting").val(),
            //     janji_sewa_input: $("#janji_sewa_input").val(),
            //     lama_izin_input: $("#lama_izin_input").val(),
            //     detail_kondisi_input: $("#detail_kondisi_input").val(),
            // };

            // /* Data Administrasi Pemohon */
            // dataRegis[0].status_pemohon = dataInput.status_pemohon;
            // dataRegis[0].namaLengkap = dataInput.namaLengkap;
            // dataRegis[0].jabatan = dataInput.jabatan;
            // dataRegis[0].nomorInKepen = dataInput.nomorInKepen;
            // dataRegis[0].nomorInBeru = dataInput.nomorInBeru;
            // dataRegis[0].npwp = dataInput.npwp;
            // dataRegis[0].alamat_perusahaan = dataInput.alamat_perusahaan;
            // dataRegis[0].no_telp = dataInput.no_telp;
            // dataRegis[0].emailAktif = dataInput.emailAktif;
            // /*identitas pemohon*/

            // // Mulai SLF//
            // /* Data Umum Bangunan */
            // dataRegis[0].luas_lahan = dataInput.luas_lahan;
            // dataRegis[0].status_milik = dataInput.status_milik;
            // dataRegis[0].ltb = dataInput.ltb;
            // dataRegis[0].jml_lantai = dataInput.jml_lantai;
            // dataRegis[0].luas_bangunan = dataInput.luas_bangunan;
            // dataRegis[0].tinggi_bangunan = dataInput.tinggi_bangunan;
            // dataRegis[0].peruntukan_bangunan = dataInput.peruntukan_bangunan;
            // dataRegis[0].foto_luar_bangunan = dataInput.foto_luar_bangunan;
            // dataRegis[0].foto_dalam_bangunan = dataInput.foto_dalam_bangunan;
            // /* Data Umum Bangunan */

            // /* Data Keseimbangan, Keserasian, Keselarasan Lingkungan */
            // dataRegis[0].kdh_zonasi = dataInput.kdh_zonasi;
            // dataRegis[0].kdh_minimum = dataInput.kdh_minimum;
            // dataRegis[0].kondisi_kdh = dataInput.kondisi_kdh;
            // dataRegis[0].volumeSumur = dataInput.volumeSumur;
            // dataRegis[0].kondisi_pertandaan_toko = dataInput.kondisi_pertandaan_toko;
            // dataRegis[0].kondisi_sumur_r = dataInput.kondisi_sumur_r;
            // dataRegis[0].drainase_disekeliling = dataInput.drainase_disekeliling;
            // /* Data Keseimbangan, Keserasian, Keselarasan Lingkungan */

            // /* Data Keselamatan dan Keamanan */
            // dataRegis[0].rekomendasi_slf = dataInput.rekomendasi_slf;
            // dataRegis[0].fileRekomendasiSlf = dataInput.fileRekomendasiSlf;
            // dataRegis[0].slf = dataInput.slf;
            // dataRegis[0].fileSLF = dataInput.fileSLF;
            // dataRegis[0].izin_dinas_pkp = dataInput.izin_dinas_pkp;
            // dataRegis[0].fileDamkar = dataInput.fileDamkar;
            // dataRegis[0].izin_dinas_tkt = dataInput.izin_dinas_tkt;
            // dataRegis[0].fileTKT = dataInput.fileTKT;
            // dataRegis[0].imb = dataInput.imb;
            // dataRegis[0].fileIMB = dataInput.fileIMB;
            // dataRegis[0].fasilitas_penang_kebakaran = dataInput.fasilitas_penang_kebakaran;
            // dataRegis[0].ketersediaan_asuransi_toko = dataInput.ketersediaan_asuransi_toko;
            // dataRegis[0].waktu_pembaruan_k_g = dataInput.waktu_pembaruan_k_g;
            // /* Data Keselamatan dan Keamanan */    

            // /* Data Kesehatan */
            // dataRegis[0].air_bersih = dataInput.air_bersih;
            // dataRegis[0].sumber_air_bersih = dataInput.sumber_air_bersih;
            // dataRegis[0].pengelolaan_air_kotor = dataInput.pengelolaan_air_kotor;
            // dataRegis[0].pengelolaan_sampah = dataInput.pengelolaan_sampah;
            // dataRegis[0].ketersediaan_listrik = dataInput.ketersediaan_listrik;
            // /* Data Kesehatan */

            // /* Data Kemudahan */
            // dataRegis[0].ketersediaan_toilet = dataInput.ketersediaan_toilet;
            // dataRegis[0].kondisi_parkir = dataInput.kondisi_parkir;
            // /* Data Kemudahan */
            // // Selesai SLF//

            // // Mulau IUTS/
            // /* Data Administrasi Usaha */
            // dataRegis[0].nop = dataInput.nop;
            // dataRegis[0].njop = dataInput.njop;
            // dataRegis[0].nama_toko = dataInput.nama_toko;
            // dataRegis[0].kelompok = dataInput.kelompok;
            // dataRegis[0].kelompok_input = dataInput.kelompok_input;
            // dataRegis[0].nama_badan_usaha = dataInput.nama_badan_usaha;
            // dataRegis[0].kategori_usaha = dataInput.kategori_usaha;
            // dataRegis[0].omset_perbulan = dataInput.omset_perbulan;
            // dataRegis[0].peruntukan_toko = dataInput.peruntukan_toko;
            // dataRegis[0].status_bangunan = dataInput.status_bangunan;
            // dataRegis[0].lama_sewa_input = dataInput.lama_sewa_input;
            // dataRegis[0].alamat = dataInput.alamat;
            // dataRegis[0].lat = dataInput.lat;
            // dataRegis[0].lng = dataInput.lng;
            // dataRegis[0].subzona = dataInput.subzona;
            // dataRegis[0].idsubblok = dataInput.idsubblok;
            // dataRegis[0].alamat_lengkap = dataInput.alamat_lengkap;
            // dataRegis[0].kecamatan = dataInput.kecamatan;
            // dataRegis[0].kelurahan = dataInput.kelurahan;

            // /* Data Kebermanfaatan Usaha */
            // dataRegis[0].pemutakhiran_pbb = dataInput.pemutakhiran_pbb;
            // dataRegis[0].keterlibatan_umkm = dataInput.keterlibatan_umkm;
            // dataRegis[0].keterlibatan_umkm_input = dataInput.keterlibatan_umkm_input;
            // dataRegis[0].persetujuan_warga = dataInput.persetujuan_warga;
            // dataRegis[0].jumlah_karyawan = dataInput.jumlah_karyawan;
            // dataRegis[0].asal_karyawan = dataInput.asal_karyawan;
            // dataRegis[0].jumlah_atm = dataInput.jumlah_atm;
            // dataRegis[0].jumlah_pengunjung_b = dataInput.jumlah_pengunjung_b;
            // dataRegis[0].status_milik_usaha = dataInput.status_milik_usaha;
            // /* Data Kebermanfaatan Usaha */

            // /* Data Antisipasi Dampak/Resiko */
            // dataRegis[0].rekomendasi_umkm = dataInput.rekomendasi_umkm;
            // dataRegis[0].kajian_sostek = dataInput.kajian_sostek;
            /* Data Antisipasi Dampak/Resiko */
            // Selesai IUTS//

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

            // localStorage.setItem("dataPermohonan", JSON.stringify(dataRegis));
            $nofotoktp = 0;
            $nofotonpwp = 0;
            $nofotoakta = 0;
            $nofotoluar = 0;
            $nofotodalam = 0;
            $nofileimb = 0;
            $nofileslf = 0;
            $nofileimb = 0;
            $nofileslf = 0;
            $nofilesuratp = 0;
            $nofiledamkar = 0;
            $nofiletkt = 0;
            $nofilestatuslahan = 0;
            $nofileasuransi = 0;
            $nofileperw = 0;
            $nofilepbb = 0;
            $nofilesostek = 0;
            $nofileumkm = 0;

            $("#formizinslfiuts").submit(function (event) {
                event.preventDefault();

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
            // var datas = new FormData($(this)[0]);

            var datas = new FormData($(this)[0]);
            $.ajax({
                url: BASE_URL + 'ValidasiController/ValidasiIzin',
                type: 'POST',
                dataType: 'json',
                data:datas,
                contentType: false,
                cache: false,
                processData: false,
                beforeSend:function() {
                    $("#text-loader").html('Mohon Tunggu');
                    $('#page-loader').fadeIn('slow');
                },
                success:function(data) {
                    if (data.success) {
                        var nsktp = document.getElementById('foto_ktp').files.length;
                        for (var noktp = 0; noktp < nsktp; noktp++) {
                            var filektp = document.getElementById('foto_ktp').files[noktp];
                            var readerktp = new FileReader();
                            if (filektp != undefined) {
                                readerktp.readAsDataURL(filektp);
                                readerktp.onload = shipOffAdministrasi;
                                var aktp = new Date();
                                var datenyaktp = aktp.getHours() + aktp.getMinutes() + aktp.getMilliseconds();
                                var namektp = datenyaktp + filektp.name;
                                var jenisktp = 'File KTP';
                                // console.log(data);
                                updateFotoAdmin(namektp, data.idizin,jenisktp);

                            }
                        }
                        var nsnpwp = document.getElementById('foto_npwp').files.length;
                        for (var nonpwp = 0; nonpwp < nsnpwp; nonpwp++) {
                            var filenpwp = document.getElementById('foto_npwp').files[nonpwp];
                            var readernpwp = new FileReader();
                            if (filenpwp != undefined) {
                                readernpwp.readAsDataURL(filenpwp);
                                readernpwp.onload = shipOffAdministrasinpwp;
                                var aktp = new Date();
                                var datenyanpwp = aktp.getHours() + aktp.getMinutes() + aktp.getMilliseconds();
                                var namenpwp = datenyanpwp + filenpwp.name;
                                var jenisnpwp = 'File NPWP';
                                // console.log(data);
                                updateFotoAdmin(namenpwp, data.idizin,jenisnpwp);

                            }
                        }
                        var nsakta = document.getElementById('aktePerusahaan').files.length;
                        for (var noakta = 0; noakta < nsakta; noakta++) {
                            var fileakta = document.getElementById('aktePerusahaan').files[noakta];
                            var readerakta = new FileReader();
                            if (fileakta != undefined) {
                                readerakta.readAsDataURL(fileakta);
                                readerakta.onload = shipOffAdministrasinoakta;
                                var aakta = new Date();
                                var datenyaakta = aakta.getHours() + aakta.getMinutes() + aakta.getMilliseconds();
                                var nameakta = datenyaakta + fileakta.name;
                                var jenisakta = 'File Akta Bangunan';
                                // console.log(data);
                                updateFotoAdmin(nameakta, data.idizin,jenisakta);

                            }
                        }
                        /*SLF*/
                        var ins1 = document.getElementById('foto_luar_bangunan').files.length;
                        for (var x1 = 0; x1 < ins1; x1++) {
                            var file1 = document.getElementById('foto_luar_bangunan').files[x1];
                            var reader1 = new FileReader();
                            if (file1 != undefined) {
                                reader1.readAsDataURL(file1);
                                reader1.onload = shipOffLuarBangunan;
                                var a1 = new Date();
                                var datenya1 = a1.getHours() + a1.getMinutes() + a1.getMilliseconds();
                                var name1 = datenya1 + file1.name;
                                var jenis1 = 'File Tampak Luar Bangunan';
                                // console.log(data);
                                updateFoto(name1, data.idslf,jenis1);

                            }
                        }
                        var ins2 = document.getElementById('foto_dalam_bangunan').files.length;
                        for (var x2 = 0; x2 < ins2; x2++) {
                            var file2 = document.getElementById('foto_dalam_bangunan').files[x2];
                            var reader2 = new FileReader();
                            if (file2 != undefined) {
                                reader2.readAsDataURL(file2);
                                reader2.onload = shipOffDalamBangunan;
                                var a2 = new Date();
                                var datenya2 = a2.getHours() + a2.getMinutes() + a2.getMilliseconds();
                                var name2 = datenya2 + file2.name;
                                var jenis2 = 'File Tampak Dalam Bangunan';
                                // console.log(data);
                                updateFoto(name2, data.idslf,jenis2);

                            }
                        }
                        var ins3 = document.getElementById('fileIMB').files.length;
                        for (var x3 = 0; x3 < ins3; x3++) {
                            var file3 = document.getElementById('fileIMB').files[x3];
                            var reader3 = new FileReader();
                            if (file3 != undefined) {
                                reader3.readAsDataURL(file3);
                                reader3.onload = shipOffFileIIMB;
                                var a3 = new Date();
                                var datenya3 = a3.getHours() + a3.getMinutes() + a3.getMilliseconds();
                                var name3 = datenya3 + file3.name;
                                var jenis3 = 'File IMB Eksiting';
                                // console.log(data);
                                updateFoto(name3, data.idslf,jenis3);
                            }
                        }
                        var ins4 = document.getElementById('fileSLF').files.length;
                        for (var x4 = 0; x4 < ins4; x4++) {
                            var file4 = document.getElementById('fileSLF').files[x4];
                            var reader4 = new FileReader();
                            if (file4 != undefined) {
                                reader4.readAsDataURL(file4);
                                reader4.onload = shipOffFileSLF;
                                var a4 = new Date();
                                var datenya4 = a4.getHours() + a4.getMinutes() + a4.getMilliseconds();
                                var name4 = datenya4 + file4.name;
                                var jenis4 = 'File SLF';
                                // console.log(data);
                                updateFoto(name4, data.idslf,jenis4);

                            }
                        }
                        var ins5 = document.getElementById('fileSuratP').files.length;
                        for (var x5 = 0; x5 < ins5; x5++) {
                            var file5 = document.getElementById('fileSuratP').files[x5];
                            var reader5 = new FileReader();
                            if (file5 != undefined) {
                                reader5.readAsDataURL(file5);
                                reader5.onload = shipOffFileSuratP;
                                var a5 = new Date();
                                var datenya5 = a5.getHours() + a5.getMinutes() + a5.getMilliseconds();
                                var name5 = datenya5 + file5.name;
                                var jenis5 = 'File Pernyataan Pengawas';
                                // console.log(data);
                                updateFoto(name5, data.idslf,jenis5);

                            }
                        }
                        var ins6 = document.getElementById('fileDamkar').files.length;
                        for (var x6 = 0; x6 < ins6; x6++) {
                            var file6 = document.getElementById('fileDamkar').files[x6];
                            var reader6 = new FileReader();
                            if (file6 != undefined) {
                                reader6.readAsDataURL(file6);
                                reader6.onload = shipOffFileDamkar;
                                var a6 = new Date();
                                var datenya6 = a6.getHours() + a6.getMinutes() + a6.getMilliseconds();
                                var name6 = datenya6 + file6.name;
                                var jenis6 = 'File Rekomendasi Dari Dinas Penanggunlangan Kebakaran dan Penyelamatan';
                                // console.log(data);
                                updateFoto(name6, data.idslf,jenis6);

                            }
                        }
                        var ins7 = document.getElementById('fileTKT').files.length;
                        for (var x7 = 0; x7 < ins7; x7++) {
                            var file7 = document.getElementById('fileTKT').files[x7];
                            var reader7 = new FileReader();
                            if (file7 != undefined) {
                                reader7.readAsDataURL(file7);
                                reader7.onload = shipOffFileTKT;
                                var a7 = new Date();
                                var datenya7 = a7.getHours() + a7.getMinutes() + a7.getMilliseconds();
                                var name7 = datenya7 + file7.name;
                                var jenis7 = 'File Rekomendasi Dari Dinas Tenaga Kerja dan Transmigrasi';
                                // console.log(data);
                                updateFoto(name7, data.idslf,jenis7);

                            }
                        }
                        
                        var ins8 = document.getElementById('fileStatusLahan').files.length;
                        for (var x8 = 0; x8 < ins8; x8++) {
                            var file8 = document.getElementById('fileStatusLahan').files[x8];
                            var reader8 = new FileReader();
                            if (file8 != undefined) {
                                reader8.readAsDataURL(file8);
                                reader8.onload = shipOffFileStatusLahan;
                                var a8 = new Date();
                                var datenya8 = a8.getHours() + a8.getMinutes() + a8.getMilliseconds();
                                var name8 = datenya8 + file8.name;
                                var jenis8 = 'File Bukti Status Lahan';
                                // console.log(data);
                                updateFoto(name8, data.idslf,jenis8);

                            }
                        }
                        var ins9 = document.getElementById('fileAsuransi').files.length;
                        for (var x9 = 0; x9 < ins9; x9++) {
                            var file9 = document.getElementById('fileAsuransi').files[x9];
                            var reader9 = new FileReader();
                            if (file9 != undefined) {
                                reader9.readAsDataURL(file9);
                                reader9.onload = shipOffFileAsuransi;
                                var a9 = new Date();
                                var datenya9 = a9.getHours() + a9.getMinutes() + a9.getMilliseconds();
                                var name9 = datenya9 + file9.name;
                                var jenis9 = 'File Asuransi Toko';
                                // console.log(data);
                                updateFoto(name9, data.idslf,jenis9);

                            }
                        }
                        /*SLF*/

                        // IUTS
                        var ins10 = document.getElementById('filePerW').files.length;
                        for (var x10 = 0; x10 < ins10; x10++) {
                            var file10 = document.getElementById('filePerW').files[x10];
                            var reader10 = new FileReader();
                            if (file10 != undefined) {
                                reader10.readAsDataURL(file10);
                                reader10.onload = shipOffFilePerW;
                                var a10 = new Date();
                                var datenya10 = a10.getHours() + a10.getMinutes() + a10.getMilliseconds();
                                var name10 = datenya10 + file10.name;
                                var jenis10 = 'File Persetujuan Warga';
                                // console.log(data);
                                updateFotoiuts(name10, data.idiuts,jenis10);

                            }
                        }
                        var ins11 = document.getElementById('filePBB').files.length;
                        for (var x11 = 0; x11 < ins11; x11++) {
                            var file11 = document.getElementById('filePBB').files[x11];
                            var reader11 = new FileReader();
                            if (file11 != undefined) {
                                reader11.readAsDataURL(file11);
                                reader11.onload = shipOffFilePBB;
                                var a11 = new Date();
                                var datenya11 = a11.getHours() + a11.getMinutes() + a11.getMilliseconds();
                                var name11 = datenya11 + file11.name;
                                var jenis11 = 'File Pemutakhiran PBB';
                                // console.log(data);
                                updateFotoiuts(name11, data.idiuts,jenis11);

                            }
                        }
                        var ins12 = document.getElementById('fileSostek').files.length;
                        for (var x12 = 0; x12 < ins12; x12++) {
                            var file12 = document.getElementById('fileSostek').files[x12];
                            var reader12 = new FileReader();
                            if (file12 != undefined) {
                                reader12.readAsDataURL(file12);
                                reader12.onload = shipOffFileSostek;
                                var a12 = new Date();
                                var datenya12 = a12.getHours() + a12.getMinutes() + a12.getMilliseconds();
                                var name12 = datenya12 + file12.name;
                                var jenis12 = 'File Kajian Sostek';
                                // console.log(data);
                                updateFotoiuts(name12, data.idiuts,jenis12);

                            }
                        }
                        var ins13 = document.getElementById('fileUMKM').files.length;
                        for (var x13 = 0; x13 < ins13; x13++) {
                            var file13 = document.getElementById('fileUMKM').files[x13];
                            var reader13 = new FileReader();
                            if (file13 != undefined) {
                                reader13.readAsDataURL(file13);
                                reader13.onload = shipOffFileUMKM;
                                var a13 = new Date();
                                var datenya13 = a13.getHours() + a13.getMinutes() + a13.getMilliseconds();
                                var name13 = datenya13 + file13.name;
                                var jenis13 = 'File Rekomendasi UMKM';
                                // console.log(data);
                                updateFotoiuts(name13, data.idiuts,jenis13);

                            }
                        }
                        $.ajax({
                            url: BASE_URL + "ApiController/ApiPajakNPWP",
                            type: 'POST',
                            dataType: 'json',
                            data : {nik:$('#nomorInKepen').val(),nopd:$('#nopd_bangunan').val(),jenispajak:null},
                            beforeSend:function() {
                                $("#text-loader").html('Sedang Cek Data PBB Anda');
                                $('#page-loader').fadeIn('slow');
                            },
                            success:function(datapajak) {
                                if (datapajak.pesan == "Data Tidak ditemukan") {
                                    $('#page-loader').fadeOut('slow');
                                    swal({
                                        type: 'error',
                                        title: 'Tidak ada Data',
                                        showCancelButton: true
                                    });
                                }else if(datapajak.pesan == "Panjang Karakter Kurang dari 15"){
                                    $('#page-loader').fadeOut('slow');
                                    swal({
                                        type: 'error',
                                        title: 'Maaf Panjang Angka NIK Kurang dari 15 Angka',
                                        showCancelButton: true
                                    });
                                }else if(datapajak.errorCode == "32"){
                                    $('#page-loader').fadeOut('slow');
                                    swal({
                                        type: 'error',
                                        title: 'Server Pajak Sedang Sibuk, Silakan Kirim Ulang',
                                        showCancelButton: true
                                    });
                                }else if(datapajak.errorCode == "34"){
                                    $('#page-loader').fadeOut('slow');
                                    swal({
                                        type: 'error',
                                        title: 'Server Pajak Sedang Sibuk, Silakan Kirim Ulang',
                                        showCancelButton: true
                                    });
                                }else if(datapajak.errorCode == "99"){
                                    $('#page-loader').fadeOut('slow');
                                    swal({
                                        type: 'error',
                                        title: 'Server Pajak Sedang Sibuk, Silakan Kirim Ulang',
                                        showCancelButton: true
                                    });
                                }else if(datapajak.errorCode == "4"){
                                    $('#page-loader').fadeOut('slow');
                                    swal({
                                        type: 'error',
                                        title: 'Angka NIK / NPWP Kurang Dari 15',
                                        showCancelButton: true
                                    });
                                }else{
                                    for (var i =0; i < datapajak.length; i++) {
                                        if (datapajak[i].JNS_PAJAK == "PBB" && datapajak[i].NOPD == $('#nopd_bangunan').val()) {
                                            if (datapajak[i].NILAI_TUNGGAKAN == 0) {
                                                $.ajax({
                                                    url: BASE_URL + "ApiController/ApiPajakNPWP",
                                                    type: 'POST',
                                                    dataType: 'json',
                                                    data : {nik:$('#npwp').val(),jenispajak:$('#peruntukan_toko').val()},
                                                    beforeSend:function() {
                                                        $("#text-loader").html('Sedang Cek Data NPWP Usaha Anda');
                                                        $('#page-loader').fadeIn('slow');
                                                    },
                                                    success:function(response) {
                                                        if (response.pesan == "Data Tidak ditemukan") {
                                                            $('#page-loader').fadeOut('slow');
                                                            swal({
                                                                type: 'error',
                                                                title: 'Tidak ada Data',
                                                                showCancelButton: true
                                                            });
                                                        }else if(response.pesan == "Panjang Karakter Kurang dari 15"){
                                                            $('#page-loader').fadeOut('slow');
                                                            swal({
                                                                type: 'error',
                                                                title: 'Maaf Panjang Angka NIK Kurang dari 15 Angka',
                                                                showCancelButton: true
                                                            });
                                                        }else if(response.errorCode == "32"){
                                                            $('#page-loader').fadeOut('slow');
                                                            swal({
                                                                type: 'error',
                                                                title: 'Server Pajak Sedang Sibuk, Silakan Kirim Ulang',
                                                                showCancelButton: true
                                                            });
                                                        }else if(response.errorCode == "34"){
                                                            $('#page-loader').fadeOut('slow');
                                                            swal({
                                                                type: 'error',
                                                                title: 'Server Pajak Sedang Sibuk, Silakan Kirim Ulang',
                                                                showCancelButton: true
                                                            });
                                                        }else if(response.errorCode == "99"){
                                                            $('#page-loader').fadeOut('slow');
                                                            swal({
                                                                type: 'error',
                                                                title: 'Server Pajak Sedang Sibuk, Silakan Kirim Ulang',
                                                                showCancelButton: true
                                                            });
                                                        }else if(response.errorCode == "4"){
                                                            $('#page-loader').fadeOut('slow');
                                                            swal({
                                                                type: 'error',
                                                                title: 'Angka NIK / NPWP Kurang Dari 15',
                                                                showCancelButton: true
                                                            });
                                                        }else{
                                                            for (var i = 0; i < response.length; i++) {
                                                                if (response[i].NOPD == $('#nomorObjekPajak').val() && response[i].NILAI_TUNGGAKAN == 0) {
                                                                        $.ajax({
                                                                            url: BASE_URL + 'ValidasiController/saveTaxClear',
                                                                            type: 'POST',
                                                                            dataType: 'json',
                                                                            data:{id:data.idizin,status_pbb:'1',status_npwp:'1',jenis:response[i].JNS_PAJAK},
                                                                            beforeSend:function() {
                                                                                $("#text-loader").html('Mohon Tunggu');
                                                                                $('#page-loader').fadeIn('slow');
                                                                            },
                                                                            success:function(hasil) {
                                                                                if (hasil.success) {
                                                                                    e.preventDefault();
                                                                                    $('.ijin').remove();
                                                                                    $(summary).appendTo('.container');
                                                                                    disableButtons=true;
                                                                                    $('.navigation__btn').addClass('navigation__btn--disabled');
                                                                                    $('#page-loader').fadeOut('slow'); 
                                                                                    swal({
                                                                                        type: 'success',
                                                                                        title: hasil.msg,
                                                                                        showCancelButton: true
                                                                                    });
                                                                                }else{
                                                                                    $('#page-loader').fadeOut('slow');
                                                                                    swal({
                                                                                        type: 'error',
                                                                                        title: data.msg,
                                                                                        showCancelButton: true
                                                                                    });
                                                                                }
                                                                                $('#page-loader').fadeOut('slow');
                                                                            }
                                                                        });
                                                                    }else{
                                                                        $('#page-loader').fadeOut('slow');
                                                                        // BElUM Lunas
                                                                }
                                                            }
                                                        }
                                                    }
                                                })
                                            }else{
                                                $('#page-loader').fadeOut('slow');
                                                // BELUM PBB TIDAK TERDAFTAR
                                                UpdatePajak(data.idizin,'0','0',datapajak[i].JNS_PAJAK);
                                            }
                                        }else{
                                            $('#page-loader').fadeOut('slow');
                                            UpdatePajak(data.idizin,'0','0',datapajak[i].JNS_PAJAK);
                                        }        
                                    }       
                                }
                            }
                        });
                    }else{
                        $('#page-loader').fadeOut('slow');
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
    });
});

function UpdatePajak(id,pbb,npwp,jenis) {
    $.ajax({
        url: BASE_URL + 'ValidasiController/saveTaxClear',
        type: 'POST',
        dataType: 'json',
        data:{id:id,status_pbb:pbb,status_npwp:npwp,jenis:jenis},
        beforeSend:function() {
            $("#text-loader").html('Mohon Tunggu');
            $('#page-loader').fadeIn('slow');
        },
        success:function(hasil) {
            $('#page-loader').fadeOut('slow');
        }
    });
}
function shipOffAdministrasi(event) {
    var result = event.target.result;
    var a = new Date();
    var datenya = a.getHours() + a.getMinutes() + a.getMilliseconds();
    // debugger;
    var fileName = datenya + document.getElementById('foto_luar_bangunan').files[$nofotoktp].name;
    $nofotoktp+=1;
    // console.log(fileName);

    $.ajax({
        url: BASE_URL + 'ValidasiController/addAttachment',
        method: 'post',
        data: {data: result, name: fileName},
        success: function (dt) {
        }
    })
}
function shipOffAdministrasinpwp(event) {
    var result = event.target.result;
    var a = new Date();
    var datenya = a.getHours() + a.getMinutes() + a.getMilliseconds();
    // debugger;
    var fileName = datenya + document.getElementById('foto_luar_bangunan').files[$nofotonpwp].name;
    $nofotonpwp+=1;
    // console.log(fileName);

    $.ajax({
        url: BASE_URL + 'ValidasiController/addAttachment',
        method: 'post',
        data: {data: result, name: fileName},
        success: function (dt) {
        }
    })
}
function shipOffAdministrasinoakta(event) {
    var result = event.target.result;
    var a = new Date();
    var datenya = a.getHours() + a.getMinutes() + a.getMilliseconds();
    // debugger;
    var fileName = datenya + document.getElementById('foto_luar_bangunan').files[$nofotoakta].name;
    $nofotoakta+=1;
    // console.log(fileName);

    $.ajax({
        url: BASE_URL + 'ValidasiController/addAttachment',
        method: 'post',
        data: {data: result, name: fileName},
        success: function (dt) {
        }
    })
}
function shipOffLuarBangunan(event) {
    var result = event.target.result;
    var a = new Date();
    var datenya = a.getHours() + a.getMinutes() + a.getMilliseconds();
    // debugger;
    var fileName = datenya + document.getElementById('foto_luar_bangunan').files[$nofotoluar].name;
    $nofotoluar+=1;
    // console.log(fileName);

    $.ajax({
        url: BASE_URL + 'ValidasiController/addAttachment',
        method: 'post',
        data: {data: result, name: fileName},
        success: function (dt) {
        }
    })
}
function shipOffDalamBangunan(event) {
    var result = event.target.result;
    var a = new Date();
    var datenya = a.getHours() + a.getMinutes() + a.getMilliseconds();
    // debugger;
    var fileName = datenya + document.getElementById('foto_dalam_bangunan').files[$nofotodalam].name;
    $nofotodalam+=1;
    console.log(fileName);

    $.ajax({
        url: BASE_URL + 'ValidasiController/addAttachment',
        method: 'post',
        data: {data: result, name: fileName},
        success: function (dt) {
        }
    })
}function shipOffFileIIMB(event) {
    var result = event.target.result;
    var a = new Date();
    var datenya = a.getHours() + a.getMinutes() + a.getMilliseconds();
    // debugger;
    var fileName = datenya + document.getElementById('fileIMB').files[$nofileimb].name;
    $nofileimb+=1;
    // console.log(fileName);

    $.ajax({
        url: BASE_URL + 'ValidasiController/addAttachment',
        method: 'post',
        data: {data: result, name: fileName},
        success: function (dt) {
        }
    })
}function shipOffFileSLF(event) {
    var result = event.target.result;
    var a = new Date();
    var datenya = a.getHours() + a.getMinutes() + a.getMilliseconds();
    // debugger;
    var fileName = datenya + document.getElementById('fileSLF').files[$nofileslf].name;
    $nofileslf+=1;
    // console.log(fileName);

    $.ajax({
        url: BASE_URL + 'ValidasiController/addAttachment',
        method: 'post',
        data: {data: result, name: fileName},
        success: function (dt) {
        }
    })
}function shipOffFileSuratP(event) {
    var result = event.target.result;
    var a = new Date();
    var datenya = a.getHours() + a.getMinutes() + a.getMilliseconds();
    // debugger;
    var fileName = datenya + document.getElementById('fileSuratP').files[$nofilesuratp].name;
    $nofilesuratp+=1;
    // console.log(fileName);

    $.ajax({
        url: BASE_URL + 'ValidasiController/addAttachment',
        method: 'post',
        data: {data: result, name: fileName},
        success: function (dt) {
        }
    })
}function shipOffFileDamkar(event) {
    var result = event.target.result;
    var a = new Date();
    var datenya = a.getHours() + a.getMinutes() + a.getMilliseconds();
    // debugger;
    var fileName = datenya + document.getElementById('fileDamkar').files[$nofiledamkar].name;
    $nofiledamkar+=1;
    // console.log(fileName);

    $.ajax({
        url: BASE_URL + 'ValidasiController/addAttachment',
        method: 'post',
        data: {data: result, name: fileName},
        success: function (dt) {
        }
    })
}function shipOffFileTKT(event) {
    var result = event.target.result;
    var a = new Date();
    var datenya = a.getHours() + a.getMinutes() + a.getMilliseconds();
    // debugger;
    var fileName = datenya + document.getElementById('fileTKT').files[$nofiletkt].name;
    $nofiletkt+=1;
    // console.log(fileName);

    $.ajax({
        url: BASE_URL + 'ValidasiController/addAttachment',
        method: 'post',
        data: {data: result, name: fileName},
        success: function (dt) {
        }
    })
}function shipOffFileStatusLahan(event) {
    var result = event.target.result;
    var a = new Date();
    var datenya = a.getHours() + a.getMinutes() + a.getMilliseconds();
    // debugger;
    var fileName = datenya + document.getElementById('fileStatusLahan').files[$nofilestatuslahan].name;
    $nofilestatuslahan+=1;
    // console.log(fileName);

    $.ajax({
        url: BASE_URL + 'ValidasiController/addAttachment',
        method: 'post',
        data: {data: result, name: fileName},
        success: function (dt) {
        }
    })
}function shipOffFileAsuransi(event) {
    var result = event.target.result;
    var a = new Date();
    var datenya = a.getHours() + a.getMinutes() + a.getMilliseconds();
    // debugger;
    var fileName = datenya + document.getElementById('fileAsuransi').files[$nofileasuransi].name;
    $nofileasuransi+=1;
    // console.log(fileName);

    $.ajax({
        url: BASE_URL + 'ValidasiController/addAttachment',
        method: 'post',
        data: {data: result, name: fileName},
        success: function (dt) {
        }
    })
}

function shipOffFilePerW(event) {
    var result = event.target.result;
    var a = new Date();
    var datenya = a.getHours() + a.getMinutes() + a.getMilliseconds();
    // debugger;
    var fileName = datenya + document.getElementById('filePerW').files[$nofileperw].name;
    $nofileperw+=1;
    // console.log(fileName);

    $.ajax({
        url: BASE_URL + 'ValidasiController/addAttachmentIUTS',
        method: 'post',
        data: {data: result, name: fileName},
        success: function (dt) {
        }
    })
}
function shipOffFilePBB(event) {
    var result = event.target.result;
    var a = new Date();
    var datenya = a.getHours() + a.getMinutes() + a.getMilliseconds();
    // debugger;
    var fileName = datenya + document.getElementById('filePBB').files[$nofilepbb].name;
    $nofilepbb+=1;
    // console.log(fileName);

    $.ajax({
        url: BASE_URL + 'ValidasiController/addAttachmentIUTS',
        method: 'post',
        data: {data: result, name: fileName},
        success: function (dt) {
        }
    })
}

function shipOffFileSostek(event) {
    var result = event.target.result;
    var a = new Date();
    var datenya = a.getHours() + a.getMinutes() + a.getMilliseconds();
    // debugger;
    var fileName = datenya + document.getElementById('fileSostek').files[$nofilesostek].name;
    $nofilesostek+=1;
    // console.log(fileName);

    $.ajax({
        url: BASE_URL + 'ValidasiController/addAttachmentIUTS',
        method: 'post',
        data: {data: result, name: fileName},
        success: function (dt) {
        }
    })
}
function shipOffFileUMKM(event) {
    var result = event.target.result;
    var a = new Date();
    var datenya = a.getHours() + a.getMinutes() + a.getMilliseconds();
    // debugger;
    var fileName = datenya + document.getElementById('fileUMKM').files[$nofileumkm].name;
    $nofileumkm+=1;
    // console.log(fileName);

    $.ajax({
        url: BASE_URL + 'ValidasiController/addAttachmentIUTS',
        method: 'post',
        data: {data: result, name: fileName},
        success: function (dt) {
        }
    })
}
function updateFoto(name, id,jenis) {
    $.ajax({
        url: BASE_URL + 'ValidasiController/updateData',
        data: {id: id, name: name,jenis:jenis},
        method: 'post',
        success: function (data) {
        }
    })
}
function updateFotoiuts(name, id,jenis) {
    $.ajax({
        url: BASE_URL + 'ValidasiController/updateDataiuts',
        data: {id: id, name: name,jenis:jenis},
        method: 'post',
        success: function (data) {
        }
    })
}
function updateFotoAdmin(name, id,jenis) {
    $.ajax({
        url: BASE_URL + 'ValidasiController/updateDataAdmin',
        data: {id: id, name: name,jenis:jenis},
        method: 'post',
        success: function (data) {
        }
    })
}
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
    }); 

    $.ajax({
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
                $('#slf').html(options);
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
                $('#jln_eksisting').html(options);
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
// $(".btnimgAdd").click(function(){
//     // e.preventDefault();

//      var controlForm = $('.controls-terlantar .forms-terlantar:first'),
//      currentEntry = $(this).parents('.entry-terlantar:first'),
//      newEntry = $(currentEntry.clone()).appendTo(controlForm);

//      newEntry.find('input').val('');
//      controlForm.find('.entry-terlantar:not(:last) .btnimgAdd')
//      .removeClass('btnimgAdd').addClass('btn-removeimgluar')
//      .removeClass('btn-info').addClass('red')
//      .html('Hapus');
//    }).on('click', '.btn-removeimgluar', function(e)
//    {
//      $(this).parents('.entry-terlantar:first').remove();

//      e.preventDefault();
//      return false;

// });
$(".imgAdd").click(function(){
  $(this).closest(".row").find('.imgAdd').before('<div class="col-md-6 imgUpLuar"> <div class="imagePreview" id="img-luar-bangunan"></div> <label class="btn btn-danger btn3d btn-block m-0">Pilih Foto <input type="file" class="uploadFile img" name="foto_luar_bangunan" id="foto_luar_bangunan" value="Upload Photo" style="width: 0px;height: 0px;overflow: hidden;"> </label><i class="fa fa-times del"></i></div>');
});
$(".imgAddDalam").click(function(){
  $(this).closest(".row").find('.imgAddDalam').before('<div class="col-md-6 imgUpDalam"> <div class="imagePreview" id="img-dalam-bangunan"></div> <label class="btn btn-danger btn3d btn-block m-0">Pilih Foto <input type="file" class="uploadFile img" name="foto_dalam_bangunan" id="foto_dalam_bangunan" value="Upload Photo" style="width: 0px;height: 0px;overflow: hidden;"> </label><i class="fa fa-times del"></i></div>');
});
$(".addStatusLahan").click(function(){
  $(this).closest(".row").find('.addStatusLahan').before('<div class="imgUpLuar" style="display:inline-flex;"> <input type="file" name="fileStatusLahan[]" id="fileStatusLahan" style="width:100%;"> <i class="fa fa-times del" style="position: relative;"></i></div>'); 
});
$(".addIMB").click(function(){
  $(this).closest(".row").find('.addIMB').before('<div class="imgUpLuar" style="display:inline-flex;"> <input type="file" name="fileIMB[]" id="fileIMB" style="width:100%;"> <i class="fa fa-times del" style="position: relative;"></i></div>'); 
});
$(".addSLF").click(function(){
  $(this).closest(".row").find('.addSLF').before('<div class="imgUpLuar" style="display:inline-flex;"> <input type="file" name="fileSLF[]" id="fileSLF" style="width:100%;"> <i class="fa fa-times del" style="position: relative;"></i></div>'); 
});
$(".addTeknis").click(function(){
  $(this).closest(".row").find('.addTeknis').before('<div class="imgUpLuar" style="display:inline-flex;"> <input type="file" name="fileSuratP[]" id="fileSuratP" style="width:100%;"> <i class="fa fa-times del" style="position: relative;"></i></div>'); 
});
$(".addDamkar").click(function(){
  $(this).closest(".row").find('.addDamkar').before('<div class="imgUpLuar" style="display:inline-flex;"> <input type="file" name="fileDamkar[]" id="fileDamkar" style="width:100%;"> <i class="fa fa-times del" style="position: relative;"></i></div>'); 
});
$(".addTKT").click(function(){
  $(this).closest(".row").find('.addTKT').before('<div class="imgUpLuar" style="display:inline-flex;"> <input type="file" name="fileTKT[]" id="fileTKT" style="width:100%;"> <i class="fa fa-times del" style="position: relative;"></i></div>'); 
});
$(".addAsuransi").click(function(){
  $(this).closest(".row").find('.addAsuransi').before('<div class="imgUpLuar" style="display:inline-flex;"> <input type="file" name="fileAsuransi[]" id="fileAsuransi" style="width:100%;"> <i class="fa fa-times del" style="position: relative;"></i></div>'); 
});
$(".addPBB").click(function(){
  $(this).closest(".row").find('.addPBB').before('<div class="imgUpLuar" style="display:inline-flex;"> <input type="file" name="filePBB[]" id="filePBB" style="width:100%;"> <i class="fa fa-times del" style="position: relative;"></i></div>'); 
});
$(".addWarga").click(function(){
  $(this).closest(".row").find('.addWarga').before('<div class="imgUpLuar" style="display:inline-flex;"> <input type="file" name="filePerW[]" id="filePerW" style="width:100%;"> <i class="fa fa-times del" style="position: relative;"></i></div>'); 
});
$(".addUMKM").click(function(){
  $(this).closest(".row").find('.addUMKM').before('<div class="imgUpLuar" style="display:inline-flex;"> <input type="file" name="fileUMKM[]" id="fileUMKM" style="width:100%;"> <i class="fa fa-times del" style="position: relative;"></i></div>'); 
});
$(".addKajian").click(function(){
  $(this).closest(".row").find('.addKajian').before('<div class="imgUpLuar" style="display:inline-flex;"> <input type="file" name="fileSostek[]" id="fileSostek" style="width:100%;"> <i class="fa fa-times del" style="position: relative;"></i></div>'); 
});
$(document).on("click", "i.del" , function() {
    $(this).parent().remove();
});
$(document).on("click", "i.del-file" , function() {
    $(this).parent().remove();
});
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
                uploadFile.closest(".imgUpKTP").find('#img-KTP').css("background-image", "url("+this.result+")");
                uploadFile.closest(".imgUpNIB").find('#img-NIB').css("background-image", "url("+this.result+")");
                uploadFile.closest(".imgUpNPWP").find('#img-NPWP').css("background-image", "url("+this.result+")");
                uploadFile.closest(".imgUpLuar").find('#img-luar-bangunan').css("background-image", "url("+this.result+")");
                uploadFile.closest(".imgUpDalam").find('#img-dalam-bangunan').css("background-image", "url("+this.result+")");
            }
        }

    });
});

$("#luas_bangunan").keyup(function() {
    if($(this).val() > 400) {
        $("#alertLuas").html("<span class='text-danger'>Luas total bangunan tidak boleh lebih dari 400 m2</span>");
    } else {
        $("#alertLuas").html("");
    }
});

class FileInput {
    constructor(wrapperEl) {
        this.wrapperEl = wrapperEl
        this.fileInput = wrapperEl.querySelector('input[type="file"]')
        this.uploadCta = wrapperEl.querySelector('.upload-cta')
        this.selectedFileList = wrapperEl.querySelector('.selected-files')

        this.fileInput.addEventListener('change', (e) => {
            this.handleFileChange(e)
        })
    }

    buildSelectedFileElement(file, fileId) {
        var selectedFileEl = document.createElement('li')
        var text = document.createTextNode(file.name)
        // var suffix = "bytes";
        // var size = document.createTextNode(file.size)
        // if (size >= 1024 && size < 1024000) {
        //   suffix = "KB";
        //   size = Math.round(size / 1024 * 100) / 100;
        // } else if (size >= 1024000) {
        //   suffix = "MB";
        //   size = Math.round(size / 1024000 * 100) / 100;
        // }
        var removeButton = document.createElement('button')
        
        removeButton.setAttribute('role', 'button')
        removeButton.classList.add('remove')
        removeButton.innerText = 'Remove'
        removeButton.addEventListener('click', () => {
            selectedFileEl.parentNode.removeChild(selectedFileEl)
            this.removeFile(fileId)
        })
        
        selectedFileEl.appendChild(text)
        // selectedFileEl.appendChild(size)
        selectedFileEl.appendChild(removeButton)
        
        return selectedFileEl
    }
}

class SingleFileInput extends FileInput {
    constructor(wrapperEl) {
        super(wrapperEl)
        this.selectedFile = null
    }

    handleFileChange(e) {
        let filesFromInput = e.target.files
        this.selectedFileList.innerHTML = ''

        if (filesFromInput.length < 1) {
            this.selectedFile = null
            return
        }

        this.disableUploadCta()

        this.selectedFile = filesFromInput[0]

        let selectedFileEl = this.buildSelectedFileElement(filesFromInput[0])
        this.selectedFileList.appendChild(selectedFileEl)

        e.target.value = ''
    }     

    disableUploadCta() {
        this.uploadCta.classList.add('hide')
        this.fileInput.disabled = true
    }

    enableUploadCta() {
        this.uploadCta.classList.remove('hide')
        this.fileInput.disabled = false
    }

    removeFile() {
        this.selectedFile = null
        this.enableUploadCta()
    }
}

class MultipleFileInput extends FileInput {
    constructor(wrapperEl) {
        super(wrapperEl)

        this.selectedFiles = {}
        this.nextFileId = 1
    }

    handleFileChange(e) {
        var filesFromInput = e.target.files
        
        for (var i = 0; i < filesFromInput.length; i++) {
            var file = filesFromInput[i]
            var fileId = this.nextFileId++

            this.selectedFiles[fileId] = file

            var selectedFileEl = this.buildSelectedFileElement(file, fileId)
            this.selectedFileList.appendChild(selectedFileEl)
        }
        e.target.value = ''
    }

    removeFile(fileId) {
        delete this.selectedFiles[fileId]
    }
}
// Single file input
document.querySelectorAll('.file-input.single').forEach(function(wrapperEl) {
  new SingleFileInput(wrapperEl)
})
// Multiple file input
document.querySelectorAll('.file-input.multiple').forEach(function(wrapperEl) {
  new MultipleFileInput(wrapperEl)
})