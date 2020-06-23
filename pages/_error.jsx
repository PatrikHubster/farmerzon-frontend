import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import actions from '../lib/redux/actions';

const errorPage = () => (
  <div>
    <h1>Fehler</h1>
    <p>Zurück zur <Link href="/"><a>Startseite</a></Link></p>
  </div>
)

export default  connect(state => state, actions)(errorPage);
