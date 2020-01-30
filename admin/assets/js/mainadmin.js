
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
timeline = {
	// start view data
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
				var email = [];
				var code = [];
				var tanggal = [];
				for(var coba in data.row){
					nama.push(data.row[coba].nama);
					status.push(data.row[coba].status);
					email.push(data.row[coba].email);
					code.push(data.row[coba].code);
					tanggal.push(data.row[coba].created_at);
				}

				// console.log(nama.length);
				if (nama.length == 0) {
					$("#izinnya").html('<div class="col-md-12"><div class="card card-stats mb-4 mb-xl-0"><div class="card-body"><p class="m-0">Tidak ada Data</p></div></div></div>');
				}
				for (var i = 0; i < nama.length; i++) {
					console.log(email[i]);
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
						$("#izinnya").append('<div class="col-xl-3 col-lg-6"><a href="timeline_pemohon" class="text-default"><div class="card card-stats mb-4 mb-xl-0"><div class="ribbon ribbon-top-right '+css+'"><span class="bg-'+warna+'">'+statuscard+'</span></div><div class="card-body"><div class="row"><div class="col"><h5 class="card-title text-uppercase text-darker mb-0">Nama Pemohon</h5><span class="font-weight-bold">'+nama[i]+'</span><label class="hr-card"></label><h5 class="card-title text-uppercase text-darker mb-0">Tanggal Pengajuan</h5><span class="font-weight-bold">'+datePHPJS("d/F/Y", new Date(data.row[i].created_at))+'</span><label class="hr-card"></label><h5 class="card-title text-uppercase text-darker mb-0">Jenis Izin</h5><span class="font-weight-bold">Izin Usaha Toko Swalayan</span></div></div><p class="mt-3 mb-0 text-darker text-sm"><span class="text-danger mr-2 badge badge-primary" style="font-size: 18px;">#'+code[i]+'</span><span class="text-nowrap">Nomor Token</span></p></div></div></a></div>');
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
				var email = [];
				var code = [];
				var tanggal = [];
				var tujuan = [];
				for(var coba in data.row){
					nama.push(data.row[coba].nama);
					status.push(data.row[coba].status);
					email.push(data.row[coba].email);
					code.push(data.row[coba].code);
					tanggal.push(data.row[coba].created_at);
				}
				// console.log(nama.length);
				if (nama.length == 0) {
					$("#izinnya").html('<div class="col-md-12"><div class="card card-stats mb-4 mb-xl-0"><div class="card-body"><p class="m-0">Tidak ada Data</p></div></div></div>');
				}
				for (var i = 0; i < nama.length; i++) {
					console.log(status[i]);
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
						$("#izinnya").append('<div class="col-xl-3 col-lg-6"><a href="timeline_pemohon" class="text-default"><div class="card card-stats mb-4 mb-xl-0"><div class="ribbon ribbon-top-right '+css+'"><span class="bg-'+warna+'">'+statuscard+'</span></div><div class="card-body"><div class="row"><div class="col"><h5 class="card-title text-uppercase text-darker mb-0">Nama Pemohon</h5><span class="font-weight-bold">'+nama[i]+'</span><label class="hr-card"></label><h5 class="card-title text-uppercase text-darker mb-0">Tanggal Pengajuan</h5><span class="font-weight-bold">'+datePHPJS("d/F/Y", new Date(data.row[i].created_at))+'</span><label class="hr-card"></label><h5 class="card-title text-uppercase text-darker mb-0">Jenis Izin</h5><span class="font-weight-bold">Izin Usaha Toko Swalayan</span></div></div><p class="mt-3 mb-0 text-darker text-sm"><span class="text-danger mr-2 badge badge-primary" style="font-size: 18px;">#'+code[i]+'</span><span class="text-nowrap">Nomor Token</span></p></div></div></a></div>');
				}
		}
	})
	},
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
				for(var coba in data.row){
					pengirim.push(data.row[coba].id_pengirim);
					penerima.push(data.row[coba].id_penerima);
					pesan.push(data.row[coba].pesan);
					tanggal.push(data.row[coba].created_at);
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

	// end view data
};
$("#logout").click(function(event) {
	localStorage.clear();
	window.location.href = '/';
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
	if (typeof(Storage) !== "undefined") {
		if (localStorage.getItem('iduser') === null && localStorage.getItem('idadmin') === null) {
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