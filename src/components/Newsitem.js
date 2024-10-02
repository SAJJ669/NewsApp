import React from 'react';

export default function Newsitem(props) {


    let { title, description, imgurl, newsurl, author, date } = props;

    return (
        <div className="my-3 d-flex justify-content-center align-items-center ">
            <div className="card border-light mx-3" style={{ backgroundColor: "	#202020", color: "white", margin: "0 auto"}}>
                <img src={imgurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text" ><small className="text-white bg-dark" >By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsurl} target="_blank" className="btn btn-sm btn-outline-info">Go somewhere</a>
                </div>
            </div>
        </div>
    );

}
