import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css'

export const FeedbackOptions = ({options,onLeaveFeedback}) => {
    // console.log(options, onLeaveFeedback);
    return(
        <ul className={styles.list}>{options.map((option, index) =>
            <li key={index} className={styles.item}><button onClick={()=>{onLeaveFeedback(option)}} type="button">{option}</button></li>)}
        </ul>
    )   
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired,),
    onLeaveFeedback: PropTypes.func.isRequired,

    
}