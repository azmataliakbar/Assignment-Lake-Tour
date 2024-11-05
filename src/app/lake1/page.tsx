import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <h1 className="para1">Tourism of Wonderful Magic Land</h1>
      <div className="box1">
        <Image className="img-1 card" src="/css3_3.jpg" alt="Tourism" width={600} height={500} />
        <br />
        <div className="buttonContainer">
        <a
        href="https://inafarawayland.com/lago-di-braies-visitor-information/"
        target="_blank"
        rel="noopener noreferrer">
        <button className="btn1">Site Visit</button>
        </a>
        
        <a
        href="https://unsplash.com/s/photos/lago-di-braies"
        target="_blank"
        rel="noopener noreferrer">
        <button className="btn2">Lake View</button>
        </a>
        </div>
        <br />
        <h4 className="para2">Lago di Baries</h4>
        <p className="para3">
          The visual surrounding the lake was perceived before the mountains was beautiful and serene. The lavender
          flowers near the water mirroring the colossal mountains smelled of spring. The sunset illuminated the sky
          making it purple and orange. The huge rocks were faultless and could be used for sitting and thinking.
        </p>
        <br />
        <a
        href="https://en.wikipedia.org/wiki/Pragser_Wildsee"
        target="_blank"
        rel="noopener noreferrer">
        <button className="btn3">Read More</button>
        </a>
      </div>
      <h5>Author: Azmat Ali</h5>
    </main>
  );
}