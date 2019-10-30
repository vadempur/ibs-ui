import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./Contact.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

import { googleMapsKey } from "../../helpers/constants";
function Contact({ google }) {
  function showOnMaps() {
    const url =
      "https://www.google.com/maps/place/IB+Solutions/@36.7031033,3.0954719,17z/data=!3m1!4b1!4m5!3m4!1s0x128fadca42152b6f:0x55b9bedd495002d6!8m2!3d36.703099!4d3.0976606";
    window.open(url);
  }

  return (
    <section>
      <div className="map-container">
        <Map
          styles={custom_map_styles}
          google={google}
          zoom={16}
          initialCenter={{ lat: 36.7031033, lng: 3.0954719 }}
          scrollwheel={false}
          // gestureHandling='none'          
          mapTypeControl={false}
          streetViewControl={false}
        >
          <Marker
            onClick={showOnMaps}
            title={"IB Solutions"}
            name={"IBS"}
            position={{ lat: 36.7031033, lng: 3.0954719 }}
          />
        </Map>
        <div className="contact-container">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

export default GoogleApiWrapper({ apiKey: googleMapsKey })(Contact);

const custom_map_styles = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5"
      }
    ]
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161"
      }
    ]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5"
      }
    ]
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#dadada"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e"
      }
    ]
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5"
      }
    ]
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#c9c9c9"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e"
      }
    ]
  }
];
