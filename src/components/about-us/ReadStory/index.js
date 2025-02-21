import React from 'react'
import './index.css'

function ReadStory() {
  return (
    <section className='raed-story-bg-con'>
        <div className='read-story-left-con'>
              <h5>The Status quo is brocken.</h5>
              <p>
              With this structure, we create a fully responsive home page with a header,
              hero section, testimonial section, Q&A section, and footer. Each component has its
              own CSS file for styling, and the home page integrates these components to create the full layout.
              </p>
              <button>Read Vishal's story</button>
        </div>
        <div className='read-story-right-con'>
            <img src='/images/imgk.jpg' alt='' className='read-story-img'/>
        </div>
    </section>
  )
}

export default ReadStory