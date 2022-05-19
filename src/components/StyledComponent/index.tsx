import styled from "styled-components";

type Props = {
  item: string
}

export default function StyledComponent(item: Props) {
  //タイトル
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  //ラッパー
  const Wrapper= styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  console.log(item)
  return (
      <Wrapper>
        <Title>Hello World! {item['item']}</Title>
      </Wrapper>
  );
}
