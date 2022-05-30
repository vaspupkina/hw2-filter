import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

function Portfolio({projects}) {
    const [state, setState] = useState("All");
    const onSelectFilterHandler = (event) => {
        if (event)
        {
            event.preventDefault();
            event.stopPropagation();
        }
        setState(() => {
            return event.target.id;
        });
    }
    return (
        <div className='Portfolio' style={{marginLeft:15, marginTop: 15}}>
            <Toolbar filters={["All", "Websites", "Flayers", "Business Cards"]} 
                        selected={state} 
                        onSelectFilter={onSelectFilterHandler}/>
            <br/>
            <ProjectList projects={projects.filter((project) => {
                    return (state === "All") || (project.category === state); 
                })} />
        </div>
    )
}

Portfolio.propTypes = {
    projects : PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Portfolio
