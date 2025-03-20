import React from 'react';
import './LinkCard.css';

const LinkCard = ({formatter}) => {
  return(
    <div id="linkcard">
      <a 
        href={formatter.url}
        target = "_blank"
        download
        className="LinkCard"
      >
        {formatter.mimeType.split(';')[0] + " "}
        {formatter.hasVideo ? formatter.height + "p" : ""}
      </a>
    </div>
  );
};

export default LinkCard
