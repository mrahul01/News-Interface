import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let { title, description, imgUrl, date, newsUrl } = this.props;
    return (
      <div>
        <div className="card p-3" style={{ width: "420px", height: "480px" }}>
          <img src={imgUrl} className="card-img-top" alt="no img" />
          <div className="card-body">
            <p className="card-title fw-bold">{ title && title.length > 32 ? title.substring(0,32) + "..." : title || "title not available"}</p>
            <p style={{ textAlign: "left" }}>{date}</p>
            <p className="card-text fw-medium">
              {description && description.length > 10
                ? description.substring(0, 30) + "..."
                : description || "Description not available"}
            </p>

            <a href={newsUrl}  className="btn btn-primary">open</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItems