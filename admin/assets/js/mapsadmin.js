require([
	"esri/tasks/Locator",
	"esri/layers/TileLayer",
	"esri/Basemap",
	"esri/Map",
	"esri/views/MapView",
	"esri/symbols/SimpleMarkerSymbol",
	"esri/symbols/SimpleLineSymbol",
	"esri/Color",
	"esri/widgets/Locate",
	"esri/widgets/Search",
	"esri/Graphic",
	"esri/geometry/support/webMercatorUtils",
	"dojo/_base/array",
	"esri/geometry/Point",
	"esri/widgets/Sketch/SketchViewModel",
	"esri/layers/GraphicsLayer",
	"esri/layers/FeatureLayer",
	"esri/PopupTemplate",
	"dojo/domReady!",
	], function(
		Locator,
		TileLayer,
		Basemap,
		Map,
		MapView,
		SimpleMarkerSymbol,
		SimpleLineSymbol,
		Color,
		Locate,
		Search,
		Graphic,
		webMercatorUtils,
		arrayUtils,
		Point,
		SketchViewModel,
		GraphicsLayer,
		FeatureLayer,
		PopupTemplate,
		) {
    // Start service locator untuk mencari alamat yang akurat
    var locatorTask = new Locator({
    	url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
    	allPlaceholder : "Cari Alamat",
    });
    // End Locator

    // Setting layer yang akan di tampilkan , jika maps di bawah pakai tampilan maps jakarta saja silakan pakai ini jika tidak mohon di matikan

   //  var layer = new TileLayer({
   //   url: "https://jakartasatu.jakarta.go.id/server/rest/services/DCKTRP/Peta_Struktur_2018/MapServer"
   // });

   //  var myBasemap = new Basemap({
   //    baseLayers: [layer],
   //    thumbnailUrl: "https://www.example.com/images/thumbnail_2014-11-25_61051.png",
   //    title: "Custom Basemap",
   //    id: "myMap"
   //  });
    // End Setting layer

    // Pilih Maps yang di pakai
    var map = new Map({
    	basemap: "hybrid"
    });

    // hanya tampil maps jakarta tampilan sederhana
    // var map = new Map({
    //   basemap: myBasemap,
    // });

    // Start setting maps
    var view = new MapView({
    	container: "mapsadmin",
    	map: map,
    	center: [$('#long').val(), $('#lat').val()],
    	zoom: 17
    });
    // end Setting maps

    // Start symbol , setting jika ingin mengganti Simbol
    var makerSymbol = {
    	type: "simple-marker",
    	color: [226, 119, 40],
    	outline:{
    		color: [255, 255, 255],
    		width: 2
    	}
    };
    // End Untuk mengganti Symbol
    // Start Template Popup
    var template = {
      // title: "{KECAMATAN} dan {KELURAHAN}",
      content: [
      {
      	type: "fields",
      	fieldInfos: [
      	{
          fieldName: "KECAMATAN", // The field whose values you want to format
          label: "Kecamatan",
        },
        {
          fieldName: "KELURAHAN", // The field whose values you want to format
          label: "Kelurahan",
          format: {
            digitSeparator: true, // Uses a comma separator in numbers >999
            places: 0 // Sets the number of decimal places to 0 and rounds up
          }
        },
        {
          fieldName: "SUB_BLOK", // The field whose values you want to format
          label: "Id Sublok",
          format: {
            digitSeparator: true, // Uses a comma separator in numbers >999
            places: 0 // Sets the number of decimal places to 0 and rounds up
          }
        },
        {
          fieldName: "ZONA", // The field whose values you want to format
          label: "Zona",
          format: {
            digitSeparator: true, // Uses a comma separator in numbers >999
            places: 0 // Sets the number of decimal places to 0 and rounds up
          }
        },
        {
          fieldName: "SUB_ZONA", // The field whose values you want to format
          label: "Sub Zona",
          format: {
            digitSeparator: true, // Uses a comma separator in numbers >999
            places: 0 // Sets the number of decimal places to 0 and rounds up
          }
        },
        {
          fieldName: "BERSYARAT", // The field whose values you want to format
          label: "Perizinan Bersyarat",
          format: {
            digitSeparator: true, // Uses a comma separator in numbers >999
            places: 0 // Sets the number of decimal places to 0 and rounds up
          }
        },
        {
          fieldName: "DIIZINKAN", // The field whose values you want to format
          label: "Perizinan di Izinkan",
          format: {
            digitSeparator: true, // Uses a comma separator in numbers >999
            places: 0 // Sets the number of decimal places to 0 and rounds up
          }
        },
        {
          fieldName: "TERBATAS", // The field whose values you want to format
          label: "Perizinan Terbatas",
          format: {
            digitSeparator: true, // Uses a comma separator in numbers >999
            places: 0 // Sets the number of decimal places to 0 and rounds up
          }
        },
        {
          fieldName: "TERBATAS_BERSYARAT", // The field whose values you want to format
          label: "Perizinan Terbatas Bersyarat",
          format: {
            digitSeparator: true, // Uses a comma separator in numbers >999
            places: 0 // Sets the number of decimal places to 0 and rounds up
          }
        }
        ]
      }
      ]
    };
    var point = {
    	type: "point",
    	longitude: $('#long').val(),
    	latitude: $('#lat').val(),
    };

    var pointGraphic = new Graphic({
    	geometry: point,
    	symbol: makerSymbol
    })
    view.graphics.add(pointGraphic);
    //End Template Popup tadi di pakai sekarang tidak , tapi lebih baik buat kenangan
    // Fungsinya untuk menempelkan layer pada maps
    var parksLayer = new FeatureLayer({
    	url: "https://tataruang.jakarta.go.id/server/rest/services/peta_operasional/Peta_Ops_V2_View/FeatureServer/3",
     // Testing Jika Tata ruang lama di buka
     // definitionExpression : "KECAMATAN = 'GAMBIR'",
     popupTemplate : template,
     opacity : 0.3,
   });

    map.add(parksLayer);
    // End menempelkan

  });
