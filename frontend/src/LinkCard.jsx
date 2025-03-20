import React from 'react';

const LinkCard = ({formatter}) => {
  return(
    <div>
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
