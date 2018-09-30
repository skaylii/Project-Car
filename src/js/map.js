function map() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2FydG9mZWxlazAwNyIsImEiOiJjamtub3p1ZmUyaDl4M3ZtemFuN2RqcG80In0.ma3wK3iZCvKl2_0WjcLAOg';
    const map = new mapboxgl.Map( {
        container: 'mainMap',
        style: 'mapbox://styles/kartofelek007/cjlhvnrpv0o332sk92lu6jv3v',
        zoom: 14,
        center: [ 19.026078520192783, 50.27508111349661 ],
    } );

    map.on( "load", function() {
        /* Image: An image is loaded and added to the map. */
        map.loadImage( "images/marker.png", function( error, image ) {
            if ( error ) throw error;
            map.addImage( "custom-marker", image );
            /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
            map.addLayer( {
                id: "markers",
                type: "symbol",
                /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
                source: {
                    type: "geojson",
                    data: {
                        type: "FeatureCollection",
                        features: [ {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [ "19.026078520192783", "50.27508111349661" ]
                            }
                        } ]
                    }
                },
                layout: {
                    "icon-image": "custom-marker",
                }
            } );
        } );
    } );
}

export default map;