import styled from 'styled-components';
interface DummyProps {
  text: string;
  active?: boolean;
}

// prop에 default값 주는 법
function Dummy({ text, active = false }: DummyProps) {
  return <h1>{text}</h1>;
}
const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

function App() {
  const onClick = (event: React.FormEvent<HTMLButtonElement>) => {};
  return (
    <Container>
      <Dummy text='hello' />
      <button onClick={onClick}>click me</button>
    </Container>
  );
}
export default App;
