import React from 'react'

function Results({ error, isLoading, users }){

    if(isLoading) return <div>Loading...</div>
    
    if(error) return <div>{error}</div>
    
    return users?.length > 0 ? (
                <div className="results">
                    <ol className="ol">      
                        {users.map(({id, name, username}) => (
                            <li key={id} className="li">
                                {name} {" "}                
                                <span className="userName">@{username}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            ) : null
}

export default Results;
