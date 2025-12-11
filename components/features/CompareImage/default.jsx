import React from 'react';
import PropTypes from 'prop-types';
import ReactCompareImage from "react-compare-image";

const CompareImage = (props) => {
  const { customFields = {} } = props || {};
  const { showCompareImage = true } = customFields || {};

  if (!showCompareImage) return null;

  return (
    <div>
      <h1>CompareImage</h1>
      <ReactCompareImage
        leftImage="https://www.infobae.com/resizer/v2/4BKOHKGLUVDQFCMNZCC5LUR5CU.jpg?auth=389e52c52e9f1de87a5a50f78d0d8627b92884cc8447b80c94fcabadf9d71871&smart=true&width=768&height=432&quality=85"
        rightImage="https://www.infobae.com/resizer/v2/E7TTTQJUOREKZM5EILEZBME5RE.jpg?auth=6b623a2e9073f1d6333f415083c4cb565742860f0d61fe6df605d7c0ae0100a5&smart=true&width=420&height=236&quality=85"
      />
    </div>
  );
};

CompareImage.propTypes = {
  overrides: PropTypes.shape({}),
  customFields: PropTypes.shape({
    showCompareImage: PropTypes.bool.tag({
      defaultValue: true,
      name: 'Show CompareImage',
    }),
  }),
};

export default CompareImage;
