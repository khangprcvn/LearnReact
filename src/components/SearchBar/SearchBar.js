import React from 'react';
function searchBar(props) {
    return(
        <div>
            <form>
                <input type = "text" name = "Search" placeholder = "Search..." />
                <p>
                    <input type = "checkbox" name = "Show Product" />
                    {' '}
                    Only show products in stock
                </p> 
            </form>
        </div>
    ) 
} 
export default searchBar;