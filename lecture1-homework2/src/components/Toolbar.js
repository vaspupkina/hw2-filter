import React from 'react'
import PropTypes from 'prop-types'

function Toolbar({filters, selected, onSelectFilter}) {
    return (
        <div className='Toolbar'>
        {
            filters.map((filter) => {
                const isSelected = (filter === selected);
                return (<font
                        id={filter} 
                        key={filter}
                        onClick={onSelectFilter} 
                        color={ isSelected ? "white" : "black"}
                        style={ isSelected ? {backgroundColor : "black"} : {backgroundColor : "white"} } 
                        >
                            &nbsp;&nbsp;{filter}&nbsp;&nbsp;
                        </font>
                );
            })
        }
        </div>
    );
}

Toolbar.propTypes = {
    filters : PropTypes.arrayOf(PropTypes.string).isRequired,
    selected : PropTypes.string.isRequired,
    onSelectFilter : PropTypes.func.isRequired
}

export default Toolbar
