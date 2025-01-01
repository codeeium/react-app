import React, { useState, useMemo } from 'react';

// Memoized Image Component
const MemoizedImage = React.memo(({ src, alt }) => {
    console.log(`Rendering image: ${alt}`);
    return <img src={src} alt={alt} style={{ width: 200, height: 200 }} />;
});

const ImageMemoizationExample = () => {
    const [imageIndex, setImageIndex] = useState(0);

    // List of image URLs
    const images = [
        'https://via.placeholder.com/200x200?text=Image+1',
        'https://via.placeholder.com/200x200?text=Image+2',
        'https://via.placeholder.com/200x200?text=Image+3',
    ];

    // Memoize the selected image URL to avoid recalculating it on each render
    const imageSrc = useMemo(() => images[imageIndex], [imageIndex]);

    return (
        <div>
            <h1>React Image Memoization Example</h1>
            <MemoizedImage src={imageSrc} alt={`Image ${imageIndex + 1}`} />

            <div>
                <button onClick={() => setImageIndex((prev) => (prev + 1) % images.length)}>
                    Next Image
                </button>
            </div>
        </div>
    );
};

export default ImageMemoizationExample;
