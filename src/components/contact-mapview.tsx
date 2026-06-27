"use client";

export default function ContactMapView() {
  return (
    <iframe
      className="gmap-iframe shadow-dark"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Badung,Bali,Indonesia`}
    ></iframe>
  );
}
