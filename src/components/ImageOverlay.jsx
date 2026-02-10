import { useState, useEffect } from "react";

export const useImageOverlay = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (selectedImage) {
            // disable scroll
            document.body.style.overflow = "hidden";

            // HIDE NAVBAR
            document.body.classList.add("overlay-open");
        } else {
            document.body.style.overflow = "";
            document.body.classList.remove("overlay-open");
        }

        return () => {
            document.body.style.overflow = "";
            document.body.classList.remove("overlay-open");
        };
    }, [selectedImage]);

    const openOverlay = (image) => setSelectedImage(image);
    const closeOverlay = () => setSelectedImage(null);

    return {
        selectedImage,
        openOverlay,
        closeOverlay,
    };
};
