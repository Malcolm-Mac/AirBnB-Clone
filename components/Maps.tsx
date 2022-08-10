import React, { useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import 'mapbox-gl/dist/mapbox-gl.css';
import {
  LocationMarkerIcon
} from '@heroicons/react/solid';

const Maps = ({ searchResult }: any) => {

  const coordinates = searchResult.map((result: any) => ({
    longitude: result.long,
    latitude: result.lat
  }))

  const center: any = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
    bearing: 3,
    pitch: 5
  });

  const [selectedLocation, setSelectedLocation] : any = useState({});

  return (
    <>
      <Map
        mapStyle="mapbox://styles/malcolm45/cl6eursh4001814nkxfujbrve"
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        style={{ width: "100%", height: "100%" }}
        onMove={evt => setViewport(evt.viewState)}
      >
        {
          searchResult?.map((result: any) => (
            <div key={result.long}>
              <Marker
                draggable={true}
                longitude={result.long}
                latitude={result.lat}
                offset={[0, 10]}
              >
                <p className="cursor-pointer text-2xl animate-bounce"
                  onClick={() => setSelectedLocation(result)}
                >
                  <LocationMarkerIcon className="h-10 w-5 text-red-400" />
                </p>
              </Marker>
              {
                selectedLocation.long === result.long ? (
                  <Popup
                    onClose={() => setSelectedLocation({})}
                    closeOnClick={false}
                    longitude={result.long}
                    latitude={result.lat}>
                    {result.title}
                  </Popup>
                ) : (
                  false
                )
              }
            </div>
          ))
        }
      </Map>
    </>
  )
}

export default Maps