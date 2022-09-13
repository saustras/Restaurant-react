import PropTypes from 'prop-types';

const Helmet = props => {
  document.title = 'Foot ordering app -' + props.title;

  return <div className="w-100"> {props.children}</div>;
};

// propTypes
Helmet.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Helmet;
