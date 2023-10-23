import React from 'react'

const NewsItem = (props) => {
    let {title, description,imageUrl,newsUrl,date,author,source} = props;
    return (
      <div>
            <div className="card">
              <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left:'85%',zIndex:'1'}}>{source}</span>
                    <img src={imageUrl?imageUrl:"https://images.hindustantimes.com/tech/img/2023/10/14/1600x900/bg_1680331096842_1697257053751.jpeg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className='text-muted'>By {!author?"Unknown":author}
                        on {new Date(date).toUTCString()} </small></p>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
                    </div>
            </div>
      </div>
    )
}

export default NewsItem
