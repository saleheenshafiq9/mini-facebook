import React from 'react'

const Story = () => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-4">
            <div className="thumbnail">
                <a href="/w3images/lights.jpg">
                    <img src="/w3images/lights.jpg" alt="Lights" style={{width: "100%"}} />
                    <div className="caption">
                        <p>Lorem ipsum...</p>
                    </div>
                </a>
            </div>
        </div>
        <div className="col-md-4">
            <div className="thumbnail">
                <a href="/w3images/nature.jpg">
                    <img src="/w3images/nature.jpg" alt="Nature" style={{width: "100%"}} />
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