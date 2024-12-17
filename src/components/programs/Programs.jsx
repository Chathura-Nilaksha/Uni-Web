import React from 'react'
import './Programs.css'

const Programs = () => {
  return (
    <div className='programs' id='programs'> 
                {/* id uses to Link tag purpose. If the to (target) 
                of Link tag is same name as this above className,
                then no need to use an "id" property.
                (here "id" is inserting to the to(target) of the Link tag)  */}
        <div className="program">
            <img src="" alt="" />
            <div className="caption">
                <img src="" alt="" />
                <p>Program 1-Graduation Degree</p>
            </div>
           
        </div>
        <div className="program">
            <img src="" alt="" />
            <div className="caption">
                <img src="" alt="" />
                <p>Program 2-Master Degree</p>
            </div>
        </div>
        <div className="program">
            <img src="" alt="" />
            <div className="caption">
                <img src="" alt="" />
                <p>Program 3-Phd Degree</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
