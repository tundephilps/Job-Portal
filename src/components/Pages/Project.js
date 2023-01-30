import React from 'react';
import { useNavigate } from "react-router-dom";

const Project = ({ item: { id, date, image, title, Link, tech, sourcecode, description }}) => {

    
    const navigate = useNavigate();

  return (
        <div className='portfolio-item'
        data-aos='zoom-in'
        data-aos-delay='300'
        >
                    <div className='portfolio-item-thumbnail'>
                          <img src={image} alt="port" />
                    </div>
                    <h3 className='portfolio-item-title'>{title}</h3>
                <button type='button' className='btn view-project-btn' href onClick={() => {navigate(`/Popup/${id}`);}}>View project</button>
                


                <div className='portfolio-item-details'>
                    <div className='description'>
                    <p>{description}  </p>
                    </div>
                    <div className='general-info'>
                        <ul>
                            <li>Created - <span>{date}</span></li>
                            <li>Technologies used - <span>{tech}</span></li>
                            <li>Role - <span>Front End</span></li>
                            <li>View Online - <span><a href='/#' target={'_blank'}>{sourcecode}</a></span></li>
                        
                        </ul>
                    </div>
                </div>
                  </div>



  )
}

export default Project