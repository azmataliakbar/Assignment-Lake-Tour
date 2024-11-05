import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <h1 className="para1-3">Tourism of Wonderful Land</h1>
      <div className="box1">
        <Image className="img-3, card" src="/alp1.png" alt="Tourism" width={600} height={500} />
        <br />
        <div className="buttonContainer">
        <a
        href="https://www.tripadvisor.com/Attraction_Review-g190427-d11653470-Reviews-Hallstatter_See-Hallstatt_Upper_Austria.html"
        rel="noopener noreferrer">
        <button className="btn1">Site Visit</button>
        </a>
        
        <a
        href="https://unsplash.com/s/photos/Hallst%C3%A4tter-See"
        target="_blank"
        rel="noopener noreferrer">
        <button className="btn2">Lake View</button>
        </a>
        </div>
        <br />
        <h4 className="para2">Hallstätter See</h4>
        <p className="para3">
The Hallstatt lake, a majestic Austrian lake, located in the Salzkammergut region in Austria, is one of the most beautiful and iconic lakes in the entire world. It is popularly known as Hallstatter See or Hallstatt Lake, and it is a part of the UNESCO World Heritage Site.
        </p>
        <br />
        <a
        href="https://en.wikipedia.org/wiki/Hallst%C3%A4tter_See"
        target="_blank"
        rel="noopener noreferrer">
        <button className="btn3">Read More</button>
        </a>
      </div>
      <h5>Author: Azmat Ali</h5>
    </main>
  );
}
