import React from 'react'

const Story = () => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-3">
            <div className="thumbnail mt-5">
                <a>
                    <img src="./story1.jpg" alt="Lights" style={{width: "40%", height: "250px"}} />
                    <div className="caption">
                        <p>Saleheen Shafiq</p>
                    </div>
                </a>
            </div>
        </div>
        <div className="col-md-3">
            <div className="thumbnail mt-5">
                <a>
                    <img src="./story2.jpg" alt="Nature" style={{width: "40%", height: "250px"}} />
                    <div className="caption">
                        <p>Lorem ipsum...</p>
                    </div>
                </a>
            </div>
        </div>
        <div className="col-md-4">
            <div className="thumbnail">
                <a href="/w3images/fjords.jpg">
                    <img src="/w3images/fjords.jpg" alt="Fjords" style={{width: "100%"}} />
                    <div className="caption">
                        <p>Lorem ipsum...</p>
                    </div>
                </a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Story