    const numberSteps = $('.ijin__step').length - 1;
    let disableButtons = false;
    const tick = '<div class="answer__tick"><svg width="14" height="14" viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg></div>'; 
    let summary = '<div class="summary"><h1 class="judul-ijin">Permohonan Izin Usaha Toko Swalayan Berhasil Diajukan</h1><p>Nomor Token telah dikirimkan melalui email Anda <br> Silahkan Cek Email Anda</p><p>Perkiran Waktu Perizinan Selesai (0) Hari</p><div class="submit__container"><a href="#" class="btn3d btn btn-danger btn-lg">Kembali Ke Halaman Utama</a></div></div>';
    var BASE_URL = 'http://localhost/rest_api_iuts/';
    $('.answer__input').on('change', function(e) { 

    	if($(this).next().children('.answer__tick').length>0){
    		return false
    	}
    	$(this).next().append(tick)
    });


    $('.navigation__btn--right').click(function(e){
	    // if($('.ijin__step--current input').length == 0){
	    //  	//console.log('input empty');
	    //  	return false;
	   	// }
        localStorage.clear();
        localStorage.setItem("step", "thirdStep");
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
                    npwp: $("#npwp").val(),
                    njop: $("#njop").val(),
                    no_telp: $("#no_telp").val(),
                    emailAktif: $("#emailAktif").val(),
                    nop: $("#nomorObjekPajak").val(),
                    nrb: $("#nomorRegistrasiB").val(),
                    luas_lahan: $("#luasLahan").val(),
                    ltb: $("#luasTapakB").val(),
                    luas_lantai: $("#luasLantaiB").val(),
                    jml_lantai: $("#jmlLantaiB").val(),
                    status_bangunan: $("#status_bangunan").val(),
                    status_milik: $("#status_milik").val(),
                    alamat: $("#alamatPemohon").val(),
                    kondisi_eksisting: $("#kondisi_eksisting").val(),
                    lama_izin: $("#lama_izin").val(),
                    pemutakhiran_pbb: $("#pemutakhiran_pbb").val(),
                    keterlibatan_umkm: $("#keterlibatan_umkm").val(),
                    perjanjian_sewa: $("#perjanjian_sewa").val(),
                    persetujuan_warga: $("#persetujuan_warga").val(),
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
                    kondisi_parkir: $("#kondisi_parkir").val()
                };

                dataRegis[0].namaLengkap = dataInput.namaLengkap;
                dataRegis[0].nomorInKepen = dataInput.nomorInKepen;
                dataRegis[0].nomorInBeru = dataInput.nomorInBeru;
                dataRegis[0].npwp = dataInput.npwp;
                dataRegis[0].njop = dataInput.njop;
                dataRegis[0].no_telp = dataInput.no_telp;
                dataRegis[0].emailAktif = dataInput.emailAktif;
                dataRegis[0].nop = dataInput.nop;
                dataRegis[0].nrb = dataInput.nrb;
                dataRegis[0].luas_lahan = dataInput.luas_lahan;
                dataRegis[0].ltb = dataInput.ltb;
                dataRegis[0].luas_lantai = dataInput.luas_lantai;
                dataRegis[0].jml_lantai = dataInput.jml_lantai;
                dataRegis[0].status_bangunan = dataInput.status_bangunan;
                dataRegis[0].status_milik = dataInput.status_milik;
                dataRegis[0].alamat = dataInput.alamat;
                dataRegis[0].kondisi_eksisting = dataInput.kondisi_eksisting;
                dataRegis[0].lama_izin = dataInput.lama_izin;
                dataRegis[0].pemutakhiran_pbb = dataInput.pemutakhiran_pbb;
                dataRegis[0].keterlibatan_umkm = dataInput.keterlibatan_umkm;
                dataRegis[0].perjanjian_sewa = dataInput.perjanjian_sewa;
                dataRegis[0].persetujuan_warga = dataInput.persetujuan_warga;
                dataRegis[0].rekomendasi_umkm = dataInput.rekomendasi_umkm;
                dataRegis[0].kajian_sostek = dataInput.kajian_sostek;
                dataRegis[0].imb_eksisting = dataInput.imb_eksisting;
                dataRegis[0].slf_eksisting = dataInput.slf_eksisting;
                dataRegis[0].volumeSumur = dataInput.volumeSumur;
                dataRegis[0].kondisi_sumur_r = dataInput.kondisi_sumur_r;
                dataRegis[0].drainase_disekeliling = dataInput.drainase_disekeliling;
                dataRegis[0].kdh_minimum = dataInput.kdh_minimum;
                dataRegis[0].kondisi_kdh = dataInput.kondisi_kdh;
                dataRegis[0].pengelolaan_sampah = dataInput.pengelolaan_sampah;
                dataRegis[0].kondisi_parkir = dataInput.kondisi_parkir;

                localStorage.setItem("dataPermohonan", JSON.stringify(dataRegis));

                $.ajax({
                    url: BASE_URL + 'ValidasiController/ValidasiIzin',
                    type: 'POST',
                    dataType: 'json',
                    data:{dataRegist: localStorage.getItem('dataPermohonan')},
                    beforeSend:function() {

                },
                success:function(data) {
                   
                }
            });
    			e.preventDefault();
    			$('.ijin').remove();
    			$(summary).appendTo('.container');
    			disableButtons=true;
    			$('.navigation__btn').addClass('navigation__btn--disabled');                
    		}
    	})
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
                    var options = "<option disabled=''>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].if +"'>"+ data.row[i].nama +"</option>";
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
                    var options = "<option disabled=''>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].if +"'>"+ data.row[i].nama +"</option>";
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
                    var options = "<option disabled=''>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].if +"'>"+ data.row[i].nama +"</option>";
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
                    var options = "<option disabled=''>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].if +"'>"+ data.row[i].nama +"</option>";
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
                    var options = "<option disabled=''>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].if +"'>"+ data.row[i].nama +"</option>";
                    }
                    $('#keterlibatan_umkm').html(options);

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
                    var options = "<option disabled=''>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].if +"'>"+ data.row[i].nama +"</option>";
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
                    var options = "<option disabled=''>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].if +"'>"+ data.row[i].nama +"</option>";
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
                    var options = "<option disabled=''>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].if +"'>"+ data.row[i].nama +"</option>";
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
                    var options = "<option disabled=''>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].if +"'>"+ data.row[i].nama +"</option>";
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
                    var options = "<option disabled=''>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].if +"'>"+ data.row[i].nama +"</option>";
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
                    var options = "<option disabled=''>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].if +"'>"+ data.row[i].nama +"</option>";
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
                    var options = "<option disabled=''>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].if +"'>"+ data.row[i].nama +"</option>";
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
                    var options = "<option disabled=''>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].if +"'>"+ data.row[i].nama +"</option>";
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
                    var options = "<option disabled=''>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].if +"'>"+ data.row[i].nama +"</option>";
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
                    var options = "<option disabled=''>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].if +"'>"+ data.row[i].nama +"</option>";
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
                    var options = "<option disabled=''>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].if +"'>"+ data.row[i].nama +"</option>";
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
                    var options = "<option disabled=''>Pilih Salah Satu</option>";
                    for (var i in data.row) {
                        options += "<option value='"+ data.row[i].if +"'>"+ data.row[i].nama +"</option>";
                    }
                    $('#kondisi_parkir').html(options);

                }
            }
        });

    });
    /* end animation */