// imageOverlay.js
import { useState } from "react";

export const useImageOverlay = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openOverlay = (image) => {
        setSelectedImage(image);
    };

    const closeOverlay = () => {
        setSelectedImage(null);
    };

    return {
        selectedImage,
        openOverlay,
        closeOverlay,
    };
};
