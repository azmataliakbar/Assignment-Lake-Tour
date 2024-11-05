import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <h1 className="para1-5">Tourism of Wonderful Land</h1>
      <div className="box1">
        <Image className="img-5, card" src="/ashi1.png" alt="Tourism" width={600} height={500} />
        <br />
        <div className="buttonContainer">
        <a
        href="https://hakone-japan.com/things-to-do/sightseeing/lake-ashi-in-hakone/"
        target="_blank"
        rel="noopener noreferrer">
        <button className="btn1">Site Visit</button>
        </a>
        
        <a
        href="https://unsplash.com/s/photos/Lake-Ashi"
        target="_blank"
        rel="noopener noreferrer">
        <button className="btn2">Lake View</button>
        </a>
        </div>
        <br />
        <h4 className="para2">Ashi</h4>
        <p className="para3">
        Lake Ashinoko is a lake inside caldera of Hakone located in Western Kanagawa. From Lake Ashi runs to Hayakawa river which flows down to Odawara port along the Pacific Ocean. The Lake was created in the remnants of the Hakone Volcano which last erupted in 1170. 
        </p>
        <br />
        <a
        href="https://en.wikipedia.org/wiki/Lake_Ashi"
        target="_blank"
        rel="noopener noreferrer">
        <button className="btn3">Read More</button>
        </a>
      </div>
      <h5>Author: Azmat Ali</h5>
    </main>
  );
}