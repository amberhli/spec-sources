import React from 'react';

function List() {
    return (
        <div className="entries"> 
            <div className="entry">
                <h3 style={{ marginRight: '5rem' }}>1</h3>
                <h3 style={{ marginRight: '1rem' }}>Presbo</h3>
                <h4 style={{ marginRight: '1rem' }}>presbo@columbia.edu</h4>
                <button className="delete-button">
                    DELETE
                </button>
            </div>
            <div className="entry">
                <h3 style={{ marginRight: '5rem' }}>2</h3>
                <h3 style={{ marginRight: '1rem' }}>John Jay Mouse</h3>
                <h4 style={{ marginRight: '1rem' }}>mouse@columbia.edu</h4>
                <button className="delete-button">
                    DELETE
                </button>
            </div>
            <div className="entry">
                <h3 style={{ marginRight: '5rem' }}>1</h3>
                <h3 style={{ marginRight: '1rem' }}>Water Bottle Man</h3>
                <h4 style={{ marginRight: '1rem' }}>flipper@columbia.edu</h4>
                <button className="delete-button">
                    DELETE
                </button>
            </div>
        </div>
    );
}
  
export default List;