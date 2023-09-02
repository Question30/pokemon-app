const React = require('react');

function New(){
    return(
        <main>
            <form action='/pokemon' method='POST' >
                <input type='text' name='name' required/>
                <input type='text' name='img' required/>
                <input type='submit' value='Add Pokemon'/>
            </form>
        </main>
    )
}

module.exports = New;