import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useAppContext } from 'fusion:context';

const HomepageCentered = ({ children }) => {
  const { isAdmin, outputType, requestUri } = useAppContext();
  const [head, body, left, right, footer] = children;
  const isAmp = outputType === 'amp-type' ? '-amp' : '';

  return (
      <div className="homepage-centered-layout">
        <div className={`top${isAmp}`}>{head}</div>
        <div className={`homepage-centered-content${isAdmin ? ' isAdmin' : ''}`}>
          <div className="homepage-centered-left-span span-rail span-rail-section">
            {left}
          </div>
          <div className="homepage-centered-body">
            {body}
          </div>
          <div className="homepage-centered-right-span span-rail span-rail-section">
            {right}
          </div>
        </div>
        <footer className="footer-ctn">{footer}</footer>
      </div>
  );
};

HomepageCentered.propTypes = {
  children: PropTypes.node,
  isAdmin: PropTypes.bool,
};

HomepageCentered.sections = ['head', 'body', 'left_span_rail', 'right_span_rail', 'footer'];

HomepageCentered.static = ['amp-type'];

export default HomepageCentered;
