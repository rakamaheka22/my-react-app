import { useEffect, useState } from "react"

const Pokemon = () => {

  const [pokemonData, setPokemonData] = useState(null)

  const fetchWeather = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
    const data = await response.json()
    setPokemonData(data)
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  return (
    <section>
      {pokemonData?.results && (
        <ul>
          {pokemonData?.results.map((item) => (
            <li key={item.name}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Pokemon