import Image from "next/image";
import React from "react";

function CoverImg() {
  return (
    <Image
      src="https://images.pexels.com/photos/3323687/pexels-photo-3323687.jpeg?auto=compress&cs=tinysrgb&w=600"
      width={500}
      height={500}
      style={{ width: "100%", objectFit: "cover" }}
      alt="cover-img"
    />
  );
}

export default CoverImg;
