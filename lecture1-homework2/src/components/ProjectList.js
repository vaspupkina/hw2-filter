import React from 'react'
import PropTypes from 'prop-types'
import {v4} from 'uuid'

function ProjectList({projects}) {
    if (!projects)
    {
        return <></>;
    }

    return (
        <div className='ProjectList'>
        {
            projects.map((project) => {
                return <img key={v4()}
                            src={project.img} />;
            })
        }
        </div>
    )
}

ProjectList.propTypes = {
    projects : PropTypes.arrayOf(PropTypes.object)
}

export default ProjectList
