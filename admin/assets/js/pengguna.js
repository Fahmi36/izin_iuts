$('#table_pengguna').DataTable();
$("#Ubahpassword").submit(function (event) {
	var data = new FormData($(this)[0]); 
	Swal.fire({
		title: 'Apa Data Anda Sudah Benar ?',
		text: "Klik Ya",
		type: 'Warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Ya',
		preConfirm: () => { 
			$.ajax({
				url: BASE_URL+'/ubahdata',
				type: "POST",
				data: data,
				contentType: false,
				cache: false,
				processData: false,
				headers: {'X-CSRF-TOKEN': CSRF},
				success: function (response) {
					if (response.code == 200) {
						Swal.fire(
							'Berhasil Ganti Password!',
							''+response.message+'',
							'Terima Kasih',
							);
					} else {
						Swal.fire(
							'Gagal Ganti Password!',
							''+response.message+'',
							'Hubungi Tim Terkait',
							);
					}
				},
				error: function () {
					Swal.fire(
						'Serve Error!',
						''+response.message+'',
						'Hubungi Tim Terkait',
						);
				}
			});
			return false;
		}
	});
});
$("#Ubahprofile").submit(function (event) {
	var data = new FormData($(this)[0]); 
	Swal.fire({
		title: 'Apa Data Anda Sudah Benar ?',
		text: "Klik Ya",
		type: 'Warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Ya',
		preConfirm: () => { 
			$.ajax({
				url: BASE_URL+'/ubahdata',
				type: "POST",
				data: data,
				contentType: false,
				cache: false,
				processData: false,
				headers: {'X-CSRF-TOKEN': CSRF},
				success: function (response) {
					if (response.code == 200) {
						Swal.fire(
							'Berhasil Ubah data!',
							''+response.message+'',
							'Terima Kasih',
							);
					} else {
						Swal.fire(
							'Gaga Ubah data!',
							''+response.message+'',
							'Hubungi Tim Terkait',
							);
					}
				},
				error: function () {
					Swal.fire(
						'Serve Error!',
						''+response.message+'',
						'Hubungi Tim Terkait',
						);
				}
			});
			return false;
		}
	});
});
$("#UbahJabatan").submit(function (event) {
	var data = new FormData($(this)[0]); 
	Swal.fire({
		title: 'Apa Data Anda Sudah Benar ?',
		text: "Klik Ya",
		type: 'success',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Ya',
		preConfirm: () => { 
			$.ajax({
				url: BASE_URL + '/account_edit',
				type: "POST",
				data: data,
				contentType: false,
				cache: false,
				processData: false,
				headers: {'X-CSRF-TOKEN': CSRF},
				success: function (response) {
					if (response.code == 200) {
						Swal.fire(
							'Data Berhasil di Ubah!',
							''+response.message+''+'',
							'Terima Kasih',
							);
						location.reload();
					} else {
						Swal.fire(
							'Data Gagal di Ubah!',
							''+response.message+''+'',
							'Terima Kasih',
							);
					}
				},
				error: function () {
					Swal.fire(
						'Data Gagal di Ubah!',
						''+response.message+''+'',
						'Terima Kasih',
						);
				}
			});
			return false;
		}
	});
});
$("#tambahorang").submit(function (event) {
	var data = new FormData($(this)[0]); 
	Swal.fire({
		title: 'Apa Data Anda Sudah Benar ?',
		text: "Klik Ya",
		type: 'success',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Ya',
		preConfirm: () => { 
			$.ajax({
				url: "{{route('/register')}}",
				type: "POST",
				data: data,
				contentType: false,
				cache: false,
				processData: false,
				headers: {'X-CSRF-TOKEN': CSRF},
				success: function (response) {
					if (response.code == 200) {
						Swal.fire(
							'Verifikasi!',
							''+response.message+'',
							'Terima Kasih',
							);
					} else {
						Swal.fire(
							'Gagal Verivikasi!',
							''+response.message+'',
							'Hubungi Tim Terkait',
							);
					}
				},
				error: function () {
					Swal.fire(
						'Serve Error!',
						''+response.message+'',
						'Hubungi Tim Terkait',
						);
				}
			});
			return false;
		}
	});
});
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

function deleteuser(id) {
	Swal.fire({
		title: 'Yakin Ingin Hapus Data ?',
		text: "Klik Ya",
		type: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Ya',
		preConfirm: () => { 
			$.ajax({
				url: BASE_URL + '/account_delete',
				type: "POST",
				data: {id_usernya : id},
				headers: {'X-CSRF-TOKEN': CSRF},
				success: function (response) {
					if (response.code == 200) {
						Swal.fire(
							'Berhasil Delete Data!',
							''+response.message+''+'',
							'Terima Kasih',
							);
						location.reload();
					} else {
						Swal.fire(
							'Gagal delete!',
							''+response.message+''+'',
							'Terima Kasih',
							);
					}
				},
				error: function () {
					Swal.fire(
						'Gagal!',
						''+response.message+''+'',
						'Terima Kasih',
						);
				}
			});
		}
	});
}
function Modaluser(id) {
	$.ajax({
		url: BASE_URL + '/user/modal',
		type: "POST",
		data : {iduser:id},
		headers: {'X-CSRF-TOKEN': CSRF},
		success: function (response) {
			if (response.code == 200) {
				$('#modaluser').html(response.html);
  				$('#ubahModal').modal('show'); 
			} else {
				Swal.fire(
					'Gagal Muncul Modal!',
					''+response.message+'',
					'Hubungi Tim Terkait',
					);

			}
		},
		error: function () {
			Swal.fire(
				'Server Gagal!',
				''+response.message+'',
				'Hubungi Tim Terkait',
				);

		}
	});
	return false;
}