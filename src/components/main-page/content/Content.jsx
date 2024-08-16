import React from 'react'
import Banner from './Banner/Banner'
import Opportunities from './Opportunities/Opportunities'
import "./styles/Content.css"
function Content() {
  return (
    <div className='Content'>
      <Banner/>
      <Opportunities/>
    </div>
  )
}
export default Content
