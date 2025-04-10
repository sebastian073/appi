import { useState, useEffect } from "react";
import './style.css'
import filtro from "../filtros"



function Lista() {
    const [data, setData] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [tipoSeleccionado, setTipoSeleccionado] = useState('All');
  
    useEffect(() => {
      const obtenerDatos = async () => {
        if (tipoSeleccionado === 'All') {
          const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
          const json = await res.json();
          setData(json.results);
        } else {
          const res = await fetch(`https://pokeapi.co/api/v2/type/${tipoSeleccionado}`);
          const json = await res.json();
          const listaFiltrada = json.pokemon.map(p => p.pokemon);
          setData(listaFiltrada);
        }
      };

      const handleTipoChange = (tipo) => {
        setTipoSeleccionado(tipo);
      };
  
      obtenerDatos();
    }, [tipoSeleccionado]);

    return (
        <>
<section className='c-lista'>

{data.map((pokemon, index) => (
  <div className='c-lista-pokemon'

  key={index}>
    <p>{pokemon.url.split("/")[6]}</p>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split("/")[6]}.png`} 
          alt={`Pokémon ${pokemon.name}`} width='auto' height='60' loading='lazy'
        />
    <p>{pokemon.name}</p>
  </div>
))}
</section>
</>
    )
}
