import { useEffect, useState } from 'react';

import { getContentByName } from '../utils.js';

import '../style/common.css';


export function ContentCard({contentName}) {

const [contentItem, setContentItem] = useState(null);

useEffect(() => {
  getContentByName(contentName).then((contentData) => {
    setContentItem(contentData);
  });
}, []);


  return (
    <>
      {contentItem && (
        <article className={"content-card"}>
          {
            (contentItem.multimediaType === "video") &&
            <video width="100%" height="auto" controls poster={contentItem.multimediaPreview ? contentItem.multimediaPreview : ""}>
              <source src={contentItem.multimediaSrc} type="video/mp4"/>
            </video>
          }

          {(contentItem.multimediaType === "image") &&
            <img src={contentItem.multimediaSrc} alt={contentItem.name}/>
          }

          <div className="content-card-description">
            <p className="general-title">{contentItem.name}</p>
            <p className="description-text">{contentItem.description}</p>

            {(contentItem.detailsLink != "") && <a className="btn-primary" href={contentItem.detailsLink} target="_blank">Ver más detalles</a>}
          </div>
        </article>
      )}
    </>
  );
}