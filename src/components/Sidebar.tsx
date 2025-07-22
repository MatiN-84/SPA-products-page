import React from 'react'
import categories from '../Constants/categories'
function Sidebar() {
  return (
              <div className=" fixed  ">
                <div>
                  <input type="text" placeholder="Search" />
                </div>
                <div>
                  <h2>Category</h2>
                  <div>
                    <ul>
                      {categories.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
    
                <div>
                  <h2>Price</h2>
                  <p>$999.99</p>
                  <progress></progress>
                </div>
    
                <div>
                  <button>Reset Filters</button>
                </div>
              </div>
  )
}

export default Sidebar