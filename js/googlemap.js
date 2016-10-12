var infowindow = new google.maps.InfoWindow({});

    function showPosition() { 
        var center = new google.maps.LatLng(24.1981, 120.6267);

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: center,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        });

        var data = [
           { latitude: 24.1981, longitude: 120.6267 },
           { latitude: 24.1620, longitude: 120.6404 },
           { latitude: 24.1760, longitude: 120.6470 },
           { latitude: 24.196436, longitude: 120.543454 },
           { latitude: 24.181015, longitude: 120.545292 },
           { latitude: 24.197154, longitude: 120.523584 },
           { latitude: 24.189514, longitude: 120.512417 },
        ];

        var markers = [];

        var icon = {
            //url: "http://wfarm1.dataknet.com/static/resources/icons/set105/7ce3e2c.png", // url
            url: "image/FamilyWork.png",
            size: new google.maps.Size(36, 48),
            scaledSize: new google.maps.Size(36, 48), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };
        
        var icon_tool = {
            //url: "http://wfarm1.dataknet.com/static/resources/icons/set105/7ce3e2c.png", // url
            url: "image/FamilyWork_1.png",
            size: new google.maps.Size(36, 48),
            scaledSize: new google.maps.Size(36, 48), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };

        for (var i = 0; i < data.length; i++) {
            var dataPhoto = data[i];
            var latLng = new google.maps.LatLng(dataPhoto.latitude,
                dataPhoto.longitude);
            if((i % 2) == 0){
                var marker = new google.maps.Marker({
                    position: latLng,
                    icon: icon,
                });
            }
            else{
                var marker = new google.maps.Marker({
                    position: latLng,
                    icon: icon_tool,
                });
            }
            
            markers.push(marker);

            google.maps.event.addListener(marker, "click", function () {
                infowindow.content += "<div>Something<\/div>";
                infowindow.setPosition(marker.position);
                infowindow.open(map, this);
                
                 // $('#myModal').modal('show');
                 // $('#myModal').css({ 'margin-top': window.pageYOffset - $('#myModal').height() / 2, 'top': '50%' });
                 // $('#myModal').css({ 'margin-left': window.pageXOffset - $('#myModal').width() / 2, 'left': '50%' });
            });

        }

        var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://googlemaps.github.io/js-marker-clusterer/images/m' });

        // user location 


        //console.log(position.coords.latitude + "," + position.coords.longitude);
        google.maps.event.addListener(marker, "click", function () {
            infowindow.setContent('Super Man');
            infowindow.setPosition(marker.position);
            infowindow.open(map, this);

        });

        markerCluster.addMarker(marker);
    };

    function initialize() {
        //Get user position
        navigator.geolocation.getCurrentPosition(showPosition);
    }

    google.maps.event.addDomListener(window, 'load', showPosition);