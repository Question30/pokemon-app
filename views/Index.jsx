const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
}

function capitalizeFirstLetter(string){
    return string[0].toUpperCase() + string.slice(1);
}

function Index ({pokemon}){
    return (<main>
        <h1 style={myStyle}> My First React Component!</h1>
        <ul>
            {
                pokemon.map((pokemon, i) => {
                    return(
                        <li> <a href={`/pokemon/${i}`}>
                            {capitalizeFirstLetter(pokemon.name)}
                        </a>
                        </li>
                    )
                })
            }
        </ul>
        
    </main>)
}

module.exports = Index;