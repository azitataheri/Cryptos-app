import TableRow from "./TableRow";
import { RotatingLines } from "react-loader-spinner";
function TableCoin({ coins, isLoading }) {
  return (
    <div>
      { isLoading ? 
      <RotatingLines strokeColor="#3874ff" strokeWidth="2" />
      : 
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>Total volume</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <TableRow coin={coin} key={coin.id} />
          ))}
        </tbody>
      </table>
      }
    </div>
  );
}

export default TableCoin;

