import React, { useState, useEffect } from 'react'
import { MapContainer, LayersControl, TileLayer, useMap, Marker, Popup, useMapEvent, Tooltip, LayerGroup } from "react-leaflet"

import "leaflet/dist/leaflet.css"
import axios from 'axios'
import { listLandmarks } from '../../api/admin'

import * as L from "leaflet"

function MapContent() {

  const [position, setPosition] = useState(null)

  const [listMarker, setListMarker] = useState([])

  const getLandmarks = async () => {
    try {
      const resp = await listLandmarks()
      console.log("MarkersList :", resp.data.landmarks)
      setListMarker(resp.data.landmarks)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getLandmarks()
  }, [])

  const [form, setForm] = useState({
    title: "",
    lat: "",
    lng: ""
  })



  const hdlOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    console.log(form)
  }


  const hdlSubmit = async (e) => {
    e.preventDefault()
    try {
      const resp = await axios.post("http://localhost:5000/api/createLandmark", form)

      await getLandmarks()

      setPosition(null)

    } catch (err) {
      console.log(err)
    }
    console.log(form)
  }

  const LocationMarker = () => {

    const map = useMapEvent({
      click: (e) => {
        console.log(e.latlng)
        setPosition(e.latlng)
        map.flyTo(e.latlng)
        setForm({
          ...form,
          lat: e.latlng.lat,
          lng: e.latlng.lng
        });
      },
    });


    return position == null
      ? null
      : <Marker position={position}></Marker>
  }

  const f = L.icon({
    iconUrl : "https://www.svgrepo.com/show/403669/hotel.svg",
    iconSize : [25,25]
  })


  return (

    <div className='"flex flex-col p-5 m-5 gap-4 bg-white rounded-sm'>
      <div>
        <form onSubmit={hdlSubmit} >
          <p>Title: <input
            name='title'
            onChange={hdlOnChange}
            type='title'
            className='border' />
          </p>
          <p>Latitude : {position?.lat.toFixed(2)} </p>
          <p>Longitude : {position?.lng.toFixed(2)} </p>
          <button className='p-2 bg-blue-300 rounded-md' >
            Submit
          </button>

        </form>
      </div>

      <MapContainer
        style={{ height: "100vh" }}
        center={[13.7582, 100.535]}
        zoom={10}
        scrollWheelZoom={false}>


        <LayersControl>

          <LayersControl.BaseLayer
            name='map 1'
            checked>

            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer
            name='map 2'
          >

            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />

          </LayersControl.BaseLayer>


          {/* <LayersControl.Overlay name="Landmark">
            <LayerGroup>
              <MapMarkers />
            </LayerGroup>
          </LayersControl.Overlay> */}
          {/* <MapMarkers listMarker={listMarker}     /> */}
          {
            listMarker.map((item, index) =>
              <Marker  key={index}
               position={[item.lat, item.lng]}
                icon={f} 
              >
                <Popup>
                  <p>{item.title}</p>
                  <button>Delete</button>
                </Popup>
                <Tooltip>{item.title}</Tooltip>
              </Marker>

            )
          }

        </LayersControl>

        <LocationMarker />

        {/* <Marker position={[13.7582, 100.535]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}

      </MapContainer>
    </div>
  )
}

export default MapContent