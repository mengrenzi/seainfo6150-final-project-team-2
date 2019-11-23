import React from 'react';
import PropTypes from 'prop-types';

const TotalPrice = ({ options, selectedOptions, apartment }) => {
  if (!apartment) {
    return null;
  }

  let price = apartment.sale || apartment.price;

  const premiumOptionsIds = new Set(Object.values(options).filter(option => option.premium).map(option => option.id));

  const selectedOptionsIds = new Set (Object.keys(selectedOptions));

  const selectedPremiumOptionsIds = new Set(
    [...premiumOptionsIds].filter(x => selectedOptionsIds.has(x)))

  return (
    <div>
      <span>Total:</span> { price + [...selectedPremiumOptionsIds].length*50 }
    </div>
  );
};

TotalPrice.propTypes = {
  options: PropTypes.object.isRequired,
  selectedOptions: PropTypes.object.isRequired,
  apartment: PropTypes.object
};

export default TotalPrice;
