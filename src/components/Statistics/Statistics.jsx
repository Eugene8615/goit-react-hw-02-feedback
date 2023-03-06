import { NotificationFeedback } from 'components/NotificationFeedback/NotificationFeedback';
import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => 
         total === 0 ?  (<NotificationFeedback text="No feedbacks given"/>) : (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {positivePercentage}%</p>
        </div>
        
    )
 

Statistics.propsTypes = {
    good: PropTypes.number.isRequired, 
    neutral: PropTypes.number.isRequired, 
    bad: PropTypes.number.isRequired, 
    total: PropTypes.number.isRequired, 
    positivePercentage: PropTypes.number.isRequired,
}