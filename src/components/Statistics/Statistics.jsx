import PropTypes from 'prop-types';

const Statistics = ({ good, bad, neutral, totalCount, newPercentage }) => {
    
    return (
          <div>
                <p>Good:{good}</p>
                <p>Neutral:{neutral}</p>
                <p>Bad:{bad}</p>
                <p>Total: {totalCount}</p>
                <p>Percentage: {newPercentage}%</p>
          </div>

    )
}
Statistics.propTypes = {
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
      totalCount: PropTypes.number.isRequired,
      newPercentage: PropTypes.number.isRequired,
          
}
export default Statistics;