import React from 'react';
import ProjectLayoutSkelet from './ProjectLayoutSkelet';

const LayoutSkeletList = () => {

    const list  = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <div className='layout_list'> 
            {list.map((el) => (
                <ProjectLayoutSkelet key={el}/>
            ))}
        </div>
    );
};

export default LayoutSkeletList;