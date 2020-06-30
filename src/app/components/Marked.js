import React, { Fragment, useState, useEffect } from 'react';
import marked from 'marked';
import Lightbox from 'react-image-lightbox';

const Marked = ({ text }) => {
  const [currentImageSrc, setCurrentImageSrc] = useState('');
  const [isOpen, setOpen] = useState(false);

  const handleMarkdownImageClick = (event) => {
    const currentImageSrc = event.target.src;
    setCurrentImageSrc(currentImageSrc);
    setOpen(true);
  }

  useEffect(() => {
    const markdownImages = document.querySelectorAll(".marked img");
    markdownImages.forEach(img => { 
      img.addEventListener("click", handleMarkdownImageClick);
    });
  });

  return (
    <Fragment>
      <div dangerouslySetInnerHTML={{ __html: marked(text) }} className="marked darkMarkdown" />
      {isOpen && (
        <Lightbox
          mainSrc={currentImageSrc}
          onCloseRequest={() => {
            setOpen(false);
          }}
        />
      )}
    </Fragment>
  )
};

export default Marked;