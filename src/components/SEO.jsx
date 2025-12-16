import { useEffect } from 'react';
import PropTypes from 'prop-types';

const SEO = ({ title, description, keywords }) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    setMetaTag('description', description);
    if (keywords) {
      setMetaTag('keywords', keywords);
    }
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
  }, [title, description, keywords]);

  return null;
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string
};

export default SEO;
