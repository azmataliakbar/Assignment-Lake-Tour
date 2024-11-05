import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <h1 className="para1">Tourism of Wonderful Magic Land</h1>
      <div className="box1">
        <Image className="img-2 card" src="/sf3.png" alt="Tourism" width={600} height={500} />
        <br />
        <div className="buttonContainer">
        <a
        href="https://www.tripadvisor.com/Attraction_Review-g1772449-d3179315-Reviews-Saif_ul_Muluk_Lake-Naran_Khyber_Pakhtunkhwa_Province.html"
        target="_blank"
        rel="noopener noreferrer">
        <button className="btn1">Site Visit</button>
        </a>
        
        <a
        href="https://unsplash.com/s/photos/Lake-Saiful-Muluk"
        target="_blank"
        rel="noopener noreferrer">
        <button className="btn2">Lake View</button>
        </a>
        </div>
        <br />
        <h4 className="para2">Saiful Muluk</h4>
        <p className="para3">
        According to the folklore, Saiful Maluk was a prince of Egypt.One night, Prince Saiful Maluk saw in a dream, a lake and a fairy.The prince recollected his dream, the more he was overwhelmed with love for the fairy.Prince Saiful Malook fell in love with a fairy princess named Princess Badri-ul-Jamala at the lake.
        </p>
        <br />
        <a
        href="https://en.wikipedia.org/wiki/Lake_Saiful_Muluk"
        target="_blank"
        rel="noopener noreferrer">
        <button className="btn3">Read More</button>
        </a>
      </div>
      <h5>Author: Azmat Ali</h5>
    </main>
  );
}
