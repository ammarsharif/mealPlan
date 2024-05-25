import PropTypes from 'prop-types';

const ContentContainer = (props) => {
  const componentStyle = {
    maxWidth: props.width + 'em',
    margin: '0 auto',
  };
  return (
    <div
      className={props.className}
      data-testid="ContentContainer"
      style={componentStyle}
    >
      {props.children}
    </div>
  );
};

ContentContainer.propTypes = {
  width: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
};

ContentContainer.defaultProps = {
  width: 75,
  className: '',
};

export default ContentContainer;
