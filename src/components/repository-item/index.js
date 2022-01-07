import React from "react";

export const RepositoryItem = ( { name, linkToRepo, fullName }) => {
    return (
        <div>
            <h2>{name}</h2>
            <h4>full name:</h4>
            <a  
            href={linkToRepo}
            target="_blank"
            rel="noreferrer"
            >
                {fullName}
            </a>
        </div>
    );
}