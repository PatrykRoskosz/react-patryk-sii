import React from "react";
import "./style.css";
import Slider from './components/Slider.js';


export default function App() {
  return (
   <>
    <header>
      <p className='headerContact'>nr.tel: +48 000 000 000</p>
      <div className='logo'>
        <h1>doWszamania.pl</h1>
         <hr/>  
        <p>Logo</p>
      </div> 
      <button>Kontakt</button>
      <div className='heroImage'></div>
    </header>
    <nav>
      <ol>
        <li><button>oferta</button></li>
        <li><button>zamówienia</button></li>
        <li><button>odbiór</button></li>
        <li><button>profil</button></li>
      </ol>
    </nav>
    <main>
      <article></article>
    </main>
    <aside>
        <Slider />
    </aside>
    <footer></footer>

   </>
  );
}
