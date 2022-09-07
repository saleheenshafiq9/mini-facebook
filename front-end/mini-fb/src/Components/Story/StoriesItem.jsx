import React from "react";

const StoriesItem = props => {
    return (
        <div>
            <div className="card-group">
            <div className="row">
            <div className="card col-md-2 pt-4">
                    <img className="card-img-top" src="{`http://localhost:5000/${props.image}`}" alt={props.postmaker}/>
                </div>

                <div className="card col-md-2 pt-4">
                    <img className="card-img-top" src="{`http://localhost:5000/${props.image}`}" alt={props.postmaker}/>
                </div>

                <div className="card col-md-2 pt-4">
                    <img className="card-img-top" src="{`http://localhost:5000/${props.image}`}" alt={props.postmaker}/>
                </div>
                
                <div className="card col-md-2 pt-4">
                    <img className="card-img-top" src="{`http://localhost:5000/${props.image}`}" alt={props.postmaker}/>
                </div>

                <div className="card col-md-2 pt-4">
                    <img className="card-img-top" src="{`http://localhost:5000/${props.image}`}" alt={props.postmaker}/>
                </div>

                <div className="card col-md-2 pt-4">
                    <img className="card-img-top" src="{`http://localhost:5000/${props.image}`}" alt={props.postmaker}/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default StoriesItem;
