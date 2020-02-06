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

    console.log(localStorage.getItem('lng'));
    if (localStorage.getItem('lat') == null) {
      var view = new MapView({
      container: "maps",
      map: map,
      center: [106.819,-6.173021],
      zoom:17,
    });
    }else{
      var view = new MapView({
      container: "maps",
      map: map,
      center: [parseFloat(localStorage.getItem('lng')),parseFloat(localStorage.getItem('lat'))],
      zoom: 17
    });
    }
      

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
        },
        {
          fieldName: "KDB", // The field whose values you want to format
          label: "Koefisien Dasar Bangunan",
          format: {
            digitSeparator: true, // Uses a comma separator in numbers >999
            places: 0 // Sets the number of decimal places to 0 and rounds up
          }
        },
        {
          fieldName: "KLB", // The field whose values you want to format
          label: "Koefisien Lantai Bangunan",
          format: {
            digitSeparator: true, // Uses a comma separator in numbers >999
            places: 0 // Sets the number of decimal places to 0 and rounds up
          }
        },
        {
          fieldName: "KB", // The field whose values you want to format
          label: "Ketinggian Bangunan",
          format: {
            digitSeparator: true, // Uses a comma separator in numbers >999
            places: 0 // Sets the number of decimal places to 0 and rounds up
          }
        },
        {
          fieldName: "KDH", // The field whose values you want to format
          label: "Koefisien Daerah Hijau",
          format: {
            digitSeparator: true, // Uses a comma separator in numbers >999
            places: 0 // Sets the number of decimal places to 0 and rounds up
          }
        },
        ]
      }
      ]
    };
    //End Template Popup tadi di pakai sekarang tidak , tapi lebih baik buat kenangan
    // Fungsinya untuk menempelkan layer pada maps
    var parksLayer = new FeatureLayer({
    // URL yang telah migrasi
    //  url: "https://jakartasatu.jakarta.go.id/publik/rest/services/DCKTRP/Peta_Rencana_Kota/FeatureServer/3",
    //  url: "https://jakartasatu.jakarta.go.id/publik/rest/services/DCKTRP/OPS_Pulau_Seribu/FeatureServer/0",
     
    //  URL lama
     // url: "http://jakartasatu.jakarta.go.id/server/rest/services/JakartaSatu/Peta_Ops_V2_View/FeatureServer/3",
     url: "http://tataruang.jakarta.go.id/server/rest/services/peta_operasional/Peta_Ops_V2_View/FeatureServer/3",
     // Testing Jika Tata ruang lama di buka
     // definitionExpression : "KECAMATAN = 'GAMBIR'",
     popupTemplate : template,
     opacity : 0.3,
   });

    map.add(parksLayer);
    // End menempelkan

    // Start membuat tombol locate
    var locateBtn = new Locate({
      view: view
    });
    // End tombol locate

    // Untuk Mengatur Tombol locate
    view.ui.add(locateBtn, {
      position:"top-left"
    });
    // End Setting tombol locate

    // Mulai action jika menekan tombol locate

    if (localStorage.getItem('lat') != null) {
       var points = [
        [parseFloat(localStorage.getItem('lng')),parseFloat(localStorage.getItem('lat'))]
        ];
        view.popup.open({
          // Di matikan Karena title sekarang pakai alamat
          // title: "Koordinat [" + lat + ", " + lon + "]",
          location: points[0]
        });
      view.whenLayerView(parksLayer).then(function(layarpak) {

        // console.log(localStorage.getItem('lng'))
        // console.log(layarpak.view.viewpoint.targetGeometry);
        var point = {
          type: "point",
          longitude: parseFloat(localStorage.getItem('lng')), 
          latitude: parseFloat(localStorage.getItem('lat')),
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: makerSymbol,        // popupTemplate: template,
      });
        view.graphics.add(pointGraphic);

        locatorTask.locationToAddress(layarpak.view.viewpoint.targetGeometry).then(function(response){
        // Di matikan Karena blm ada permintaan / kecamatan
        // view.popup.title = response.address;
        // map.add(parksLayer);
        // console.log(response);
        $("#alamatPemohon").val(response.address);
        localStorage.setItem('alamat', response.address);
        localStorage.setItem('kec', response.attributes.City.toUpperCase());
        var asasa = {
          x: response.location.x,
          y: response.location.y,
          spatialReference:{
            wkid: response.location.spatialReference.wkid,
          },
           mapPoint: point,
          graphic: pointGraphic
        };
          var coba = view.toScreen(asasa);
          view.hitTest(coba).then(({ results }) => {
          // console.log(results);
            clickpoint(results);
          }).catch(function(error) {
            view.popup.title = "Alamat Tidak di Temukan";
            view.popup.content = 'Zona tidak di ketahui , Silakan pilih lokasi terdekat';

          });
      }).catch(function(err) {
        view.popup.content =
        "Tidak ada lokasi yang ditemukan";
      });
           
      })
      .catch(function(error) {
      // An error occurred during the layerview creation
    });
    }
     
    locateBtn.on("locate", function(evt){
      var point = {
        type: "point",
        longitude: evt.position.coords.longitude ,
        latitude: evt.position.coords.latitude
      };

      var pointGraphic = new Graphic({
        geometry: point,
        symbol: makerSymbol,
        // popupTemplate: template,
      })
      view.graphics.removeAll();
      view.popup.open({
        // Di matikan Karena title sekarang pakai alamat
        // title: "Koordinat : [" + evt.position.coords.latitude +" , "+ evt.position.coords.longitude +" ] ",
        location : locateBtn.graphic.geometry
      });

      $('#lat').val(evt.position.coords.latitude);
      $('#lng').val(evt.position.coords.longitude);


        var asasa = {
          x: evt.target.graphic.geometry.x,
          y: evt.target.graphic.geometry.y,
          spatialReference:{
            wkid: evt.target.graphic.geometry.spatialReference.wkid,
          }
        };
        var coba = view.toScreen(asasa);
        view.hitTest(coba).then(({ results }) => {
          // console.log(results);
          clickpoint(results);
        }).catch(function(error) {
          view.popup.title = "Alamat Tidak di Temukan";
          view.popup.content = 'Zona tidak di ketahui , Silakan pilih lokasi terdekat';

        });
      locatorTask.locationToAddress(locateBtn.graphic.geometry).then(function(response){
        // Di matikan Karena blm ada permintaan / kecamatan
        // view.popup.title = response.address;
        // map.add(parksLayer);
        $("#alamatPemohon").val(response.address);
        localStorage.setItem('alamat', response.address);
        localStorage.setItem('kec', response.attributes.City.toUpperCase());
      }).catch(function(err) {
        view.popup.content =
        "Tidak ada lokasi yang ditemukan";
      });
      view.graphics.add(pointGraphic);
      var points = [
      [evt.position.coords.longitude, evt.position.coords.latitude]
      ];

      arrayUtils.forEach(points, function(point) {
       var graphic = new Graphic(new Point(point), makerSymbol);
         view.graphics.add(graphic);
         view.on("drag",(event) => {
          dragpoint(event);
        });
       });
    });
    // End Action Tombol Locate

    //Untuk Menampilkan widget Search
    var searchWidget = new Search({
      view: view,
      placeholder: "Cari Alamat",
    });

    //Untuk Mengatur Widget search
    view.ui.add(searchWidget, {
      position: "top-right",
      index: 2
    });
    // End Widget

    // Mulai Action Jika search sudah di klik
    searchWidget.on("select-result", function(event){
      view.graphics.removeAll();
      // event.stopPropagation();
      var lat = Math.round(event.result.feature.geometry.latitude * 1000000)/ 1000000;
      var lon = Math.round(event.result.feature.geometry.longitude * 1000000)/ 1000000;

      
      $('#lat').val(lat);
      $('#lng').val(lon);
      var point = {
        type: "point",
        longitude: lon ,
        latitude: lat
      };

      var pointGraphic = new Graphic({
        geometry: point,
        symbol: makerSymbol,
        // popupTemplate: template,
      })
      view.popup.open({
        // Di matikan Karena title sekarang pakai alamat
        // title: "Koordinat : [" + lat +" , "+ lon +" ] ",
        location : event.result.feature.geometry,

      });
      view.whenLayerView(parksLayer).then(function(layerView) {
        view.graphics.add(pointGraphic);
        var asasa = {
          x: layerView.view.graphics.items[0].geometry.x,
          y: layerView.view.graphics.items[0].geometry.y,
          spatialReference:{
            wkid: layerView.view.graphics.items[0].geometry.spatialReference.wkid,
          }
        };
        var coba = view.toScreen(asasa);
        view.hitTest(coba).then(({ results }) => {
          // console.log(results);
          clickpoint(results);
        }).catch(function(error) {
          view.popup.title = "Alamat Tidak di Temukan";
          view.popup.content = 'Zona tidak di ketahui , Silakan pilih lokasi terdekat';

        });
      }).catch(function(error) {
        console.log(error);
      });


      locatorTask.locationToAddress(event.result.feature.geometry).then(function(response){
            // Di matikan Karena blm ada permintaan / kecamatan
            // map.add(parksLayer);
            $("#alamatPemohon").val(response.address);

            localStorage.setItem('alamat', response.address);
          localStorage.setItem('kec', response.attributes.City.toUpperCase());
            view.popup.title = response.address;
          }).catch(function(err) {
            view.popup.content =
            "Tidak ada lokasi yang ditemukan";
          });

          var points = [
          [lon, lat]
          ];

          arrayUtils.forEach(points, function(point) {
            var graphic = new Graphic(new Point(point), makerSymbol);
            view.on("drag",(event) => {
              dragpoint(event)
            });
          });
        });
      // End Search Location

    // Start jika maps di klik
    
    view.on("click", function(event) {
      view.graphics.removeAll();
      var lat = Math.round(event.mapPoint.latitude * 1000000) / 1000000;
      var lon = Math.round(event.mapPoint.longitude * 1000000) / 1000000;

      
      
      $('#lat').val(lat);
      $('#lng').val(lon);
      view.popup.open({
        // Di matikan Karena title sekarang pakai alamat
        // title: "Koordinat [" + lat + ", " + lon + "]",
        location: event.mapPoint
      });

      view.hitTest(event.screenPoint).then(({ results }) => {
        clickpoint(results);
        locatorTask.locationToAddress(event.mapPoint).then(function(
          response) {
          $("#alamatPemohon").val(response.address);

          localStorage.setItem('alamat', response.address);
          localStorage.setItem('kec', response.attributes.City.toUpperCase());
          view.popup.title = response.address;
          // Di matikan Karena blm ada permintaan / kecamatan
          // parksLayer.definitionExpression = "KECAMATAN = '"+response.attributes.City.toUpperCase()+"'";
          // map.add(parksLayer);
        }).catch(function(err) {
          view.popup.content =
          "Tidak ada lokasi yang ditemukan";
        });
      }).catch(function(error) {
        view.popup.content = 'Zona tidak di ketahui , Silakan pilih lokasi terdekat';
      });
      var points = [
      [lon, lat]
      ];

      arrayUtils.forEach(points, function(point) {
       var graphic = new Graphic(new Point(point), makerSymbol);
       view.graphics.add(graphic);
       view.on("drag",(event) => {
        dragpoint(event);
      });
     });
    });
    // End klik maps
    function dragpoint(event) {
      var screenPoint = {
        x: event.x,
        y: event.y
      };
      view.hitTest(screenPoint).then(({ results }) => {
        const graphic = results[0].graphic;
        event.stopPropagation();
        view.graphics.removeAll();
        const g = graphic.clone();
        const pt = view.toMap(event);
        g.geometry = pt;
        var mp = webMercatorUtils.webMercatorToGeographic(pt);
        var lat = mp.y.toFixed(6);
        var lon =mp.x.toFixed(6);
        view.popup.open({
          // Di matikan Karena title sekarang pakai alamat
          // title: "Koordinat: [" + lat + ", " + lon + "]",
          location: g.geometry
        });
        var point = {
          type: "point",
          longitude: lon ,
          latitude: lat
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: makerSymbol
        })
        view.graphics.add(pointGraphic);
      $('#lat').val(lat);
      $('#lng').val(lon);
        if (event.action == 'end') {
          if (results[0].graphic.attributes == null) {
           view.popup.content = '<table class="esri-widget__table" summary="List of attributes and values"><tbody><tr><th class="esri-feature__field-header">Kecamatan</th><td class="esri-feature__field-data">' + results[1].graphic.attributes['KECAMATAN']+'</td></tr><tr><th class="esri-feature__field-header">Kelurahan</th><td class="esri-feature__field-data">' + results[1].graphic.attributes['KELURAHAN']+'</td></tr><tr><th class="esri-feature__field-header">Sublok</th><td class="esri-feature__field-data">' + results[1].graphic.attributes['SUB_BLOK']+'</td></tr><tr><th class="esri-feature__field-header">Zona</th><td class="esri-feature__field-data">' + results[1].graphic.attributes['ZONA']+'</td></tr><tr><th class="esri-feature__field-header">Sub Zona</th><td class="esri-feature__field-data">' + results[1].graphic.attributes['SUB_ZONA']+'</td></tr><tr><th class="esri-feature__field-header">Perizinan Bersyarat</th><td class="esri-feature__field-data">' + results[1].graphic.attributes['BERSYARAT']+'</td></tr><tr><th class="esri-feature__field-header">Perizinan Dizinkan</th><td class="esri-feature__field-data">' + results[1].graphic.attributes['DIIZINKAN']+'</td></tr><tr><th class="esri-feature__field-header">Perizinan Terbatas</th><td class="esri-feature__field-data">' + results[1].graphic.attributes['TERBATAS']+'</td></tr><tr><th class="esri-feature__field-header">Perizinan Terbatas Bersyarat</th><td class="esri-feature__field-data">' + results[1].graphic.attributes['TERBATAS_BERSYARAT']+'</td></tr><tr><th class="esri-feature__field-header">KDB</th><td class="esri-feature__field-data">' + results[1].graphic.attributes['KDB']+'</td></tr><tr><th class="esri-feature__field-header">KLB</th><td class="esri-feature__field-data">' + results[1].graphic.attributes['KLB']+'</td></tr><tr><th class="esri-feature__field-header">KB</th><td class="esri-feature__field-data">' + results[1].graphic.attributes['KB']+'</td></tr><tr><th class="esri-feature__field-header">KDH</th><td class="esri-feature__field-data">' + results[1].graphic.attributes['KDH']+'</td></tr><tr><th class="esri-feature__field-header">KTB</th><td class="esri-feature__field-data">' + results[1].graphic.attributes['KTB']+'</td></tr></tbody></table>';
           $("#subzona").val(results[1].graphic.attributes['ZONA']);
           $("#idsubblok").val(results[1].graphic.attributes['SUB_ZONA']);
       $('#kelurahan').val(results[1].graphic.attributes['KELURAHAN']);
       $('#kecamatan').val(results[1].graphic.attributes['KECAMATAN']);
           var izinkan = results[1].graphic.attributes['DIIZINKAN'].split(',');
           var b_syarat = results[1].graphic.attributes['BERSYARAT'].split(',');
           var t_batas = results[1].graphic.attributes['TERBATAS'].split(',');
           var t_bersyarat = results[1].graphic.attributes['TERBATAS_BERSYARAT'].split(',');

         }else{
           view.popup.content = '<table class="esri-widget__table" summary="List of attributes and values"><tbody><tr><th class="esri-feature__field-header">Kecamatan</th><td class="esri-feature__field-data">' + results[0].graphic.attributes['KECAMATAN']+'</td></tr><tr><th class="esri-feature__field-header">Kelurahan</th><td class="esri-feature__field-data">' + results[0].graphic.attributes['KELURAHAN']+'</td></tr><tr><th class="esri-feature__field-header">Sublok</th><td class="esri-feature__field-data">' + results[0].graphic.attributes['SUB_BLOK']+'</td></tr><tr><th class="esri-feature__field-header">Zona</th><td class="esri-feature__field-data">' + results[0].graphic.attributes['ZONA']+'</td></tr><tr><th class="esri-feature__field-header">Sub Zona</th><td class="esri-feature__field-data">' + results[0].graphic.attributes['SUB_ZONA']+'</td></tr><tr><th class="esri-feature__field-header">Perizinan Bersyarat</th><td class="esri-feature__field-data">' + results[0].graphic.attributes['BERSYARAT']+'</td></tr><tr><th class="esri-feature__field-header">Perizinan Dizinkan</th><td class="esri-feature__field-data">' + results[0].graphic.attributes['DIIZINKAN']+'</td></tr><tr><th class="esri-feature__field-header">Perizinan Terbatas</th><td class="esri-feature__field-data">' + results[0].graphic.attributes['TERBATAS']+'</td></tr><tr><th class="esri-feature__field-header">Perizinan Terbatas Bersyarat</th><td class="esri-feature__field-data">' + results[0].graphic.attributes['TERBATAS_BERSYARAT']+'</td></tr><tr><th class="esri-feature__field-header">KDB</th><td class="esri-feature__field-data">' + results[0].graphic.attributes['KDB']+'</td></tr><tr><th class="esri-feature__field-header">KLB</th><td class="esri-feature__field-data">' + results[0].graphic.attributes['KLB']+'</td></tr><tr><th class="esri-feature__field-header">KB</th><td class="esri-feature__field-data">' + results[0].graphic.attributes['KB']+'</td></tr><tr><th class="esri-feature__field-header">KDH</th><td class="esri-feature__field-data">' + results[0].graphic.attributes['KDH']+'</td></tr><tr><th class="esri-feature__field-header">KTB</th><td class="esri-feature__field-data">' + results[0].graphic.attributes['KTB']+'</td></tr></tbody></table>';
           $("#subzona").val(results[0].graphic.attributes['ZONA']);
           $("#idsubblok").val(results[0].graphic.attributes['SUB_ZONA']);
       $('#kelurahan').val(results[0].graphic.attributes['KELURAHAN']);
       $('#kecamatan').val(results[0].graphic.attributes['KECAMATAN']);
           var izinkan = results[0].graphic.attributes['DIIZINKAN'].split(',');
           var b_syarat = results[0].graphic.attributes['BERSYARAT'].split(',');
           var t_batas = results[0].graphic.attributes['TERBATAS'].split(',');
           var t_bersyarat = results[0].graphic.attributes['TERBATAS_BERSYARAT'].split(',');

         }
         locatorTask.locationToAddress(g.geometry).then(function(response) {
            // Di matikan Karena blm ada permintaan / kecamatan
            // parksLayer.definitionExpression = "KECAMATAN = '"+response.attributes.City.toUpperCase()+"'";
            // map.add(parksLayer);
            view.popup.title = response.address;
            $("#alamatPemohon").val(response.address);
          }).catch(function(err) {
            view.popup.content =
            "Tidak ada lokasi yang ditemukan";
          });
        }
      }).catch(function(err) {
        console.log(err);
        view.popup.title = "Alamat Tidak di Temukan";
        view.popup.content = 'Zona tidak di ketahui , Silakan pilih lokasi terdekat';
      });
    }
    //end Function Drag marker

    // Start Function Jika maps di klik, search dan locate button
    function clickpoint(evt) {
      // console.log(evt);
      if (evt[0].graphic.attributes == null) {
       view.popup.content = '<table class="esri-widget__table" summary="List of attributes and values"><tbody><tr><th class="esri-feature__field-header">Kecamatan</th><td class="esri-feature__field-data">' + evt[1].graphic.attributes['KECAMATAN']+'</td></tr><tr><th class="esri-feature__field-header">Kelurahan</th><td class="esri-feature__field-data">' + evt[1].graphic.attributes['KELURAHAN']+'</td></tr><tr><th class="esri-feature__field-header">Sublok</th><td class="esri-feature__field-data">' + evt[1].graphic.attributes['SUB_BLOK']+'</td></tr><tr><th class="esri-feature__field-header">Zona</th><td class="esri-feature__field-data">' + evt[1].graphic.attributes['ZONA']+'</td></tr><tr><th class="esri-feature__field-header">Sub Zona</th><td class="esri-feature__field-data">' + evt[1].graphic.attributes['SUB_ZONA']+'</td></tr><tr><th class="esri-feature__field-header">Perizinan Bersyarat</th><td class="esri-feature__field-data">' + evt[1].graphic.attributes['BERSYARAT']+'</td></tr><tr><th class="esri-feature__field-header">Perizinan Dizinkan</th><td class="esri-feature__field-data">' + evt[1].graphic.attributes['DIIZINKAN']+'</td></tr><tr><th class="esri-feature__field-header">Perizinan Terbatas</th><td class="esri-feature__field-data">' + evt[1].graphic.attributes['TERBATAS']+'</td></tr><tr><th class="esri-feature__field-header">Perizinan Terbatas Bersyarat</th><td class="esri-feature__field-data">' + evt[1].graphic.attributes['TERBATAS_BERSYARAT']+'</td></tr><tr><th class="esri-feature__field-header">KDB</th><td class="esri-feature__field-data">' + evt[1].graphic.attributes['KDB']+'</td></tr><tr><th class="esri-feature__field-header">KLB</th><td class="esri-feature__field-data">' + evt[1].graphic.attributes['KLB']+'</td></tr><tr><th class="esri-feature__field-header">KB</th><td class="esri-feature__field-data">' + evt[1].graphic.attributes['KB']+'</td></tr><tr><th class="esri-feature__field-header">KDH</th><td class="esri-feature__field-data">' + evt[1].graphic.attributes['KDH']+'</td></tr><tr><th class="esri-feature__field-header">KTB</th><td class="esri-feature__field-data">' + evt[1].graphic.attributes['KTB']+'</td></tr></tbody></table>';
       var izinkan = evt[1].graphic.attributes['DIIZINKAN'].split(',');
       var b_syarat = evt[1].graphic.attributes['BERSYARAT'].split(',');
       var t_batas = evt[1].graphic.attributes['TERBATAS'].split(',');
       var t_bersyarat = evt[1].graphic.attributes['TERBATAS_BERSYARAT'].split(',');

       localStorage.setItem('b_izinkan', izinkan);
       localStorage.setItem('b_bersyarat', b_syarat);
       localStorage.setItem('b_terbatas', t_batas);
       localStorage.setItem('b_terbatasbersyarat', t_bersyarat);

       $('#subzona').val(evt[1].graphic.attributes['ZONA']);
       $('#idsubblok').val(evt[1].graphic.attributes['SUB_ZONA']);
       $('#kelurahan').val(evt[1].graphic.attributes['KELURAHAN']);
       $('#kecamatan').val(evt[1].graphic.attributes['KECAMATAN']);

     }else{

       view.popup.content = '<table class="esri-widget__table" summary="List of attributes and values"><tbody><tr><th class="esri-feature__field-header">Kecamatan</th><td class="esri-feature__field-data">' + evt[0].graphic.attributes['KECAMATAN']+'</td></tr><tr><th class="esri-feature__field-header">Kelurahan</th><td class="esri-feature__field-data">' + evt[0].graphic.attributes['KELURAHAN']+'</td></tr><tr><th class="esri-feature__field-header">Sublok</th><td class="esri-feature__field-data">' + evt[0].graphic.attributes['SUB_BLOK']+'</td></tr><tr><th class="esri-feature__field-header">Zona</th><td class="esri-feature__field-data">' + evt[0].graphic.attributes['ZONA']+'</td></tr><tr><th class="esri-feature__field-header">Sub Zona</th><td class="esri-feature__field-data">' + evt[0].graphic.attributes['SUB_ZONA']+'</td></tr><tr><th class="esri-feature__field-header">Perizinan Bersyarat</th><td class="esri-feature__field-data">' + evt[0].graphic.attributes['BERSYARAT']+'</td></tr><tr><th class="esri-feature__field-header">Perizinan Dizinkan</th><td class="esri-feature__field-data">' + evt[0].graphic.attributes['DIIZINKAN']+'</td></tr><tr><th class="esri-feature__field-header">Perizinan Terbatas</th><td class="esri-feature__field-data">' + evt[0].graphic.attributes['TERBATAS']+'</td></tr><tr><th class="esri-feature__field-header">Perizinan Terbatas Bersyarat</th><td class="esri-feature__field-data">' + evt[0].graphic.attributes['TERBATAS_BERSYARAT']+'</td></tr><tr><th class="esri-feature__field-header">KDB</th><td class="esri-feature__field-data">' + evt[0].graphic.attributes['KDB']+'</td></tr><tr><th class="esri-feature__field-header">KLB</th><td class="esri-feature__field-data">' + evt[0].graphic.attributes['KLB']+'</td></tr><tr><th class="esri-feature__field-header">KB</th><td class="esri-feature__field-data">' + evt[0].graphic.attributes['KB']+'</td></tr><tr><th class="esri-feature__field-header">KDH</th><td class="esri-feature__field-data">' + evt[0].graphic.attributes['KDH']+'</td></tr><tr><th class="esri-feature__field-header">KTB</th><td class="esri-feature__field-data">' + evt[0].graphic.attributes['KTB']+'</td></tr></tbody></table>';
       
       $('#subzona').val(evt[0].graphic.attributes['ZONA']);
       $('#idsubblok').val(evt[0].graphic.attributes['SUB_ZONA']);
       $('#kelurahan').val(evt[0].graphic.attributes['KELURAHAN']);
       $('#kecamatan').val(evt[0].graphic.attributes['KECAMATAN']);
       var izinkan = evt[0].graphic.attributes['DIIZINKAN'].split(',');
       var b_syarat = evt[0].graphic.attributes['BERSYARAT'].split(',');
       var t_batas = evt[0].graphic.attributes['TERBATAS'].split(',');
       var t_bersyarat = evt[0].graphic.attributes['TERBATAS_BERSYARAT'].split(',');

       localStorage.setItem('b_izinkan', izinkan);
       localStorage.setItem('b_bersyarat', b_syarat);
       localStorage.setItem('b_terbatas', t_batas);
       localStorage.setItem('b_terbatasbersyarat', t_bersyarat);

       localStorage.setItem('zona', evt[0].graphic.attributes['ZONA']);
       localStorage.setItem('subzona', evt[0].graphic.attributes['SUB_ZONA']);
       localStorage.setItem('idsubblok', evt[0].graphic.attributes['SUB_BLOK']);
     }
   }
   // End Function Klik
});
