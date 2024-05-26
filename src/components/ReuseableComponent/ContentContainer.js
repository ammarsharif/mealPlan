import PropTypes from 'prop-types';

const ContentContainer = ({ width = 80, className = '', children }) => {
  const componentStyle = {
    maxWidth: width + 'em',
    margin: '0 auto',
  };
  return (
    <div
      className={className}
      data-testid="ContentContainer"
      style={componentStyle}
    >
      {children}
    </div>
  );
};

ContentContainer.propTypes = {
  width: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ContentContainer;
