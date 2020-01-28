require([
  "esri/tasks/Locator",
  "esri/layers/TileLayer",
  "esri/Basemap",
  "esri/views/2d/draw/Draw",
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
  "esri/geometry/Polygon",
  "esri/geometry/geometryEngine",
  "esri/widgets/Sketch/SketchViewModel",
  "esri/layers/GraphicsLayer",
  "esri/geometry/geometryEngine",
  "dojo/domReady!",
  ], function(
    Locator,
    TileLayer, 
    Basemap,
    Draw,
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
    Polygon,
    geometryEngine,
    SketchViewModel,
    GraphicsLayer,
    geometryEngine,
    ) {

    var locatorTask = new Locator({
      url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"
    });

    var layer = new TileLayer({

      // url: "https://tataruang.jakarta.go.id/arcgis/rest/services/DCKTRP/CitraDKI2014Tile/MapServer"
      url: "https://jakartasatu.jakarta.go.id/server/rest/services/DCKTRP/Peta_Struktur_2018/MapServer"
    });

    var myBasemap = new Basemap({
      baseLayers: [layer],
      thumbnailUrl: "https://stamen-tiles.a.ssl.fastly.net/terrain/10/177/409.png",
      title: "Pusdatin",
      id: "myMap"
    });

    let editGraphic;
    const tempGraphicsLayer = new GraphicsLayer();

    var map = new Map({
      basemap: "hybrid",
      layers: [tempGraphicsLayer]
    });

    var view = new MapView({
      container: "maps",
      map: map,
      center: [106.827130, -6.175876],
      zoom: 15
    });


    var searchWidget = new Search({
      view: view, 
    });

    view.ui.add(searchWidget, {
      position: "top-right",
      index: 2
    });
    var makerSymbol = {
      type: "simple-marker",
      color: [226, 119, 40],
      outline:{
        color: [255, 255, 255],
        width: 2
      }
    };
    searchWidget.on("select-result", function(event){
      view.graphics.removeAll();
      console.log(event);

      var lat = Math.round(event.result.feature.geometry.latitude * 1000000)/ 1000000;
      var lon = Math.round(event.result.feature.geometry.longitude * 1000000)/ 1000000;

      
      localStorage.setItem('lat', lat);
      localStorage.setItem('lon', lat);

      view.popup.open({
        title: "Koordinat : [" + lat +" , "+ lon +" ] ",
        location : event.result.feature.geometry
      });

      locatorTask.locationToAddress(event.result.feature.geometry).then(function(response){
        view.popup.content = response.address;
        $("#alamatPemohon").val(response.address);
      }).catch(function(err) {
        view.popup.content =
        "Tidak ada lokasi yang ditemukan";
      });

      var point = {
        type: "point",
        longitude: lon ,
        latitude: lat
      };

      var points = [
      [lon,lat]
      ];

      var pointGraphic = new Graphic({
        geometry: point,
        symbol: makerSymbol
      })
      view.graphics.add(pointGraphic);

      arrayUtils.forEach(points, function(point) {
       var graphic = new Graphic(new Point(point), makerSymbol);
       view.on("drag",(event) => {
        dragpoint(event);
      });
     });
    });

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

        localStorage.setItem('lat', lat);
        localStorage.setItem('lon', lat);
        
        if (event.action == 'end') {
         locatorTask.locationToAddress(g.geometry).then(function(response) {
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
    });
  }

});