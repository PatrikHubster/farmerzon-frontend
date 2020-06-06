import React from 'react';
import Link from 'next/link';

const errorPage = () => (
  <div>
    <h1>Fehler: Gesuchter Inhalt ist nicht vorhanden.</h1>
    <p>Zurück zur <Link href="/"><a>Startseite</a></Link></p>
  </div>
)

export default errorPage;
