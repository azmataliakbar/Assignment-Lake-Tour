import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <h1 className="para1-1">Tourism of Wonderful lakes</h1>
      <div className="box1">
        <Image className="card" src="/lake1.png" alt="Tourism" width={600} height={500} />
        <br />
        <div>
        <h4 className="svc-1">We offer trip to five lakes.</h4>
        <h4 className="svc-1">In package & services:-</h4>
        <ol className="svc">
          <li>Visit all web pages</li>
          <li>10 days tour</li>
          <li>Visa & Ticket</li>
          <li>Trip Guide</li>
          <li>Free Transportation</li>
          <li>Free Meal</li>
          <li>Free Camping</li>
          <li>Swiming</li>
          <li>Free Boating</li>
          <li>Free Lighting System</li>
          <li>Security</li>
        </ol>
        </div>
        <br />
        <h4 className="para2">Lakes</h4>
        <p className="para3">
        A lake is an often naturally occurring, relatively large and fixed body of water on or near the Earth surface. It is localized in a basin or interconnected basins surrounded by dry land.Lakes lie completely on land and are separate from the ocean, although they may be connected with the ocean by rivers.
        </p>
        <br />
        <h4 className="svc-1">Contact us:-</h4>
        <h4 className="svc">Name: John Doe</h4>
        <h4 className="svc">Ph: 123-456789</h4>
        <h4 className="svc">johndoe@abc.com</h4>
        <h4 className="svc">www.lake-tour.com</h4>
        <a
        href="https://en.wikipedia.org/wiki/Lake"
        target="_blank"
        rel="noopener noreferrer">
        <button className="btn3">Read More</button>
        </a>
      </div>
      <h5>Author: Azmat Ali</h5>
    </main>
  );
}
