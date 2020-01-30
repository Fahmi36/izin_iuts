const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
// var BASE_URL = 'http://localhost/rest_api_iuts/';
var BASE_URL = 'https://rest-iuts.pkkmart.com/';
$(document).ready(function() {
	$("#proseslogP").submit(function(event) {
		$.ajax({
			url: BASE_URL + 'UserController/loginPemohon',
			type: "POST",
			data: {email:$("#cek_email").val(), token:$("#cek_token").val()},
			dataType: 'json',
			beforeSend:function () {
				$("#btnLoginP").addClass('active loader');
			},
			success:function(data) {
				if (data.success == true) {
						    // console.log(data);
						    localStorage.setItem("iduser", data.row[0].id_pemohon);
						    localStorage.setItem("nama", data.row[0].nama);
						    localStorage.setItem("nik", data.row[0].nik);
						    localStorage.setItem("email", data.row[0].email);
						    localStorage.setItem("nohp", data.row[0].no_hp);
						    localStorage.setItem("nib", data.row[0].nib);
						    window.location.href = 'dashboard.html';
						}else{
							// $("#msg").html(data.msg);
							// $modal = $('#alert');
							// $overlay = $('.modal-overlay');
							// $overlay.addClass('state-show');
							// $modal.removeClass('state-leave').addClass('state-appear');
							alert(data.msg);
							$("#btnLoginP").removeClass('active loader');
						}
					},
					error:function (e) {
						$("#btnLoginP").removeClass('active loader');
						alert(e);
					}
				})		
	});

	$("#proseslogA").submit(function(event) {
		$.ajax({
			url: BASE_URL + 'UserController/loginemail',
			type: "POST",
			data: {email:$("#cek_email_admin").val(), token:$("#cek_token_admin").val()},
			dataType: 'json',
			beforeSend:function () {
				$("#btnLoginP").addClass('active loader');
			},
			success:function(data) {
				if (data.success == true) {
						    // console.log(data);
						    localStorage.setItem("idadmin", data.id);
						    localStorage.setItem("namaadmin", data.username);
						    localStorage.setItem("level", data.level);
						    localStorage.setItem("posisi", data.posisi);
						    window.location.href = 'dashboardadmin.html';
						}else{
							// $("#msg").html(data.msg);
							// $modal = $('#alert');
							// $overlay = $('.modal-overlay');
							// $overlay.addClass('state-show');
							// $modal.removeClass('state-leave').addClass('state-appear');
							alert(data.msg);
							$("#btnLoginA").removeClass('active loader');
						}
					},
					error:function (e) {
						$("#btnLoginA").removeClass('active loader');
						alert(e);
					}
				})		
	});	
});