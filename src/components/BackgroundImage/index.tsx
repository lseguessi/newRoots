import React, { useState, useEffect } from "react";
import Image from "next/image";
import backgroundImage from "../../../public/images/background.webp";
import { Box } from "./styles";

function getWindowsDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function BackgroundImage() {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const { width, height } = getWindowsDimensions();
    setWidth(width);
    setHeight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowsDimensions();
      setWidth(width);
      setHeight(height);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <Box>
        <Image
          src={`https://source.unsplash.com/${width}x${height}/?nature,water,mountains,landscape`}
          alt="Imagem de fundo"
          width={width}
          height={height}
        />
      </Box>
    );
  }

  return null;
}
