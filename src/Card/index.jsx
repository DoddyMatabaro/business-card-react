import React from 'react'
import Description from '../Descritpion';
import Footer from '../Footer';
import Identity from '../Identity';
import './card.css'

function Card() {
  return (
    <section id="card">
        <Identity />
        <Description />
        <Footer />
    </section>
  )
}

export default Card;