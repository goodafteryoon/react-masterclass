import { useParams } from 'react-router-dom';

interface RouteParams {
  coinId: string;
}

function Coin() {
  // const {coinId} = useParams<{coinId:string}>(); // interface 없이 하려면 이렇게
  const { coinId } = useParams<RouteParams>(); // 타입스크립트에게 useParams가 coinId를 포함하는 오브젝트를 반환할 것이라는 것을 말해줌
  console.log(coinId);
  return <h1>Coin : {coinId}</h1>;
}

export default Coin;
