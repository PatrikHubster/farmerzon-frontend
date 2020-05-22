import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const errorPage = () => (
  <div>
    <h1>Fehler: Seite nicht vorhanden</h1>
    <p>Zurück zur <Link href="/"><a>Startseite</a></Link></p>
  </div>
)

export default errorPage;
