import PropTypes from 'prop-types';

export const NotificationFeedback = ({text}) => {
    
    return (
        <p>{text}</p>
    )
}

NotificationFeedback.propTypes = {
    text: PropTypes.string.isRequired,
};