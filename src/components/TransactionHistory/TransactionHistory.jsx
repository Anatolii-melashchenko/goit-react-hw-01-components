import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { Td, Thead, Tr } from './TransactionHistory.styled';

export default function TransactionHistory(props) {
  const { items } = props;

  return (
    <Box
      as="table"
      width={350}
      background="white"
      borderRadius={6}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
    >
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <Tr key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        ))}
      </tbody>
    </Box>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
