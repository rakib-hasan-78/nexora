
import React from "react";
import { 
    MapContainer, 
    TileLayer,   
  Marker,
  Popup,
 } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import locations from "../../../utilities/locations/locations";

const ContactMap = () => {
  return (
    <section className="w-full mt-8 2xs:mt-10 sm:mt-12">

      {/* Map heading */}
      <div className="mb-4 2xs:mb-5 flex flex-col items-center justify-center">
        <h2 className="text-xl 2xs:text-2xl sm:text-3xl font-bold text-zinc-800 capitalize">
          explore our world
        </h2>

        <p className="text-xs 2xs:text-sm sm:text-base text-zinc-600 mt-2">
          Discover the world through stories, news and perspectives.
        </p>
      </div>

      {/* Interactive map */}
      <div className="w-full h-64 2xs:h-72 xs:h-80 sm:h-96 lg:h-[420px] overflow-hidden rounded-xl border border-zinc-200 shadow-md">

        <MapContainer
          center={[20, 0]}
          zoom={2}
          minZoom={2}
          scrollWheelZoom={false}
          className="w-full h-full z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            locations.map(location=>(
                <Marker
                key={location.id}
                position={location.position}
                >
                <Popup>
                    {location.name}
                </Popup>
                </Marker>
            ))
          }
        </MapContainer>

      </div>

    </section>
  );
};

export default ContactMap;
