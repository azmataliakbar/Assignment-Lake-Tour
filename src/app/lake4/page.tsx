import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <h1 className="para1-4">Tourism of Wonderful Land</h1>
      <div className="box1">
        <Image className="img-4 card" src="/cos1.png" alt="Tourism" width={600} height={500} />
        <br />
        <div className="buttonContainer">
        <a
        href="https://www.constance-lake-constance.com/"
        target="_blank"
        rel="noopener noreferrer">
        <button className="btn1">Site Visit</button>
        </a>
        
        <a
        href="https://unsplash.com/s/photos/Lake-Constance"
        target="_blank"
        rel="noopener noreferrer">
        <button className="btn2">Lake View</button>
        </a>
        </div>
        <br />
        <h4 className="para2">Constance</h4>
        <p className="para3">
        Lake Constance in southern Germany is one of the largest lakes in Central Europe. Crossing the borders of three countries, it boasts clear waters, charming lakeside towns and historic landmarks.As a holiday area, the Lake Constance region offers a unique blend of natural beauty, historic charm and cultural experiences.
        </p>
        <br />
        <a
        href="https://en.wikipedia.org/wiki/Lake_Constance"
        target="_blank"
        rel="noopener noreferrer">
        <button className="btn3">Read More</button>
        </a>
      </div>
      <h5>Author: Azmat Ali</h5>
    </main>
  );
}