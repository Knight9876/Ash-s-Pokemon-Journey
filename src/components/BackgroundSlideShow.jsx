import React, { useState, useEffect } from "react";
import "../App.css";

const images = [
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031366/bg/bg1_ftc8ii.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031390/bg/bg2_mzskij.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031399/bg/bg3_s5whkb.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031407/bg/bg4_kf6nwi.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031399/bg/bg5_lhow2p.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031399/bg/bg6_mmnblk.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031400/bg/bg7_pvkgoh.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031400/bg/bg8_f6dskv.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031400/bg/bg9_peigmj.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031377/bg/bg10_u2hoyh.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031385/bg/bg11_nyvymt.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031385/bg/bg12_c3h9uh.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031385/bg/bg13_leuduj.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031386/bg/bg14_l9dvwh.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031386/bg/bg15_rvypds.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031389/bg/bg16_r1ufsd.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031391/bg/bg17_tymoan.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031390/bg/bg18_cnsbd1.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031390/bg/bg19_dc2gou.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031390/bg/bg20_hsnl8f.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031390/bg/bg21_w3mwre.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031390/bg/bg22_etq4f3.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031391/bg/bg23_vv664y.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031391/bg/bg24_zwqckq.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031392/bg/bg25_tw4add.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031391/bg/bg26_nn40b6.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031398/bg/bg27_eqntio.png",
  "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031399/bg/bg28_kotswf.png",
];

const BackgroundSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow overflow-hidden">
      <div
        className="slideshow-image overflow-hidden"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
    </div>
  );
};

export default BackgroundSlideshow;
