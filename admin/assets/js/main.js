const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const admin = document.getElementById('loginAdmin');
const user = document.getElementById('loginUser');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

admin.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

user.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
// var BASE_URL = 'http://localhost/rest_api_iuts/';
var BASE_URL = 'https://rest-iuts.pkkmart.com/';
	if (typeof(Storage) !== "undefined") {
		if (localStorage.getItem('iduser') != null ) {
			// window.location.href = 'dashboard.html';
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
			url: BASE_URL + 'UserController/loginAdmin',
			type: "POST",
			data: {email:$("#cek_email_admin").val(), token:$("#cek_token_admin").val()},
			dataType: 'json',
			beforeSend:function () {
				$("#btnLoginP").addClass('active loader');
			},
			success:function(data) {
				if (data.success == true) {
						    // console.log(data);
						    localStorage.setItem("idadmin", data.row[0].id);
						    localStorage.setItem("namaadmin", data.row[0].username);
						    localStorage.setItem("level", data.row[0].level);
						    localStorage.setItem("posisi", data.row[0].posisi);
						    window.location.href = 'back_office/dashboard_admin.html';
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