import React from 'react'

function Results({ error, isLoading, users }){

    if(isLoading) return <li>Loading...</li>
    
    if(error) return <div>{error}</div>
    
    return (
        <div className="results">
            {users.length > 0 && (
                <ol className="ol">      
                    {users.map(({id, name, username}) => (
                        <li key={id} className="li">
                            {name} {" "}                
                            <span className="userName">@{username}</span>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    )

}

export default Results;
