import { useState, useEffect } from "react";
import './styles.css';  // Make sure to import your CSS file

const CatEffect = () => {
    const [fact, setFact] = useState('');

    useEffect(() => {
        fetch('https://catfact.ninja/fact')
            .then(response => response.json())
            .then(data => setFact(data.fact));
    }, []);

    return (
        <>
            <p className="blue-text">
                UseEffect fetch url https://catfact.ninja/fact<br />
                Purpose: Handles side effects in functional components<br />
            </p>
            <p className="red-text">
                {fact.split('. ').map((line, index) => (
                    <span key={index}>
                        {line}<br />
                    </span>
                ))}
            </p>
        </>
    );
};

export default CatEffect;
