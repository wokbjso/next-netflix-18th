"use client";

import styled from "styled-components";

export default function Home() {
  return <Title>Main Page</Title>;
}

const Title = styled.div`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.red};
  ${(props) => props.theme.fontStyles.body0}
`;
