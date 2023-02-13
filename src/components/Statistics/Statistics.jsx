import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { Title, StatsEl, Label, Percentage } from './Statistics.styled';

export default function Statistics(props) {
  const { title, stats } = props;

  return (
    <Box
      as="section"
      width={400}
      display="flex"
      alignItems="stretch"
      flexDirection="column"
      background="white"
      borderRadius={6}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      mb={2}
    >
      {title && <Title>{title}</Title>}

      <Box as="ul" display="flex">
        {stats.map(({ id, label, percentage }) => (
          <StatsEl key={id}>
            <Label> {label}</Label>
            <Percentage> {percentage}%</Percentage>
          </StatsEl>
        ))}
      </Box>
    </Box>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
