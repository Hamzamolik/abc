import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description,imageurl,url,author,date,source} = this.props;
    return (
      <>
        <div>
          <div className="card" style={{width : "18rem"}}>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%',zIndex:'1'}}>{source}</span>
            <img src={imageurl} className="card-img-top" alt="..." />
            <div className="card-body" >
              <h5>{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">by:{author} on {new Date(date).toGMTString()}</p>
              <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read more</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Newsitem;
