import React from "react";
// @ts-ignore
import { ChartPath, ChartPathProvider } from "@rainbow-me/animated-charts";
import styled from "styled-components/native";

export type HeartRatingTypeProp = {
  item: string;
  size: number;
  points: any
};
const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Tilte = styled.Text`
margin-bottom:20px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold
`;
export const HeartRatingChart: React.FC<HeartRatingTypeProp> = ({ item, size, points }) => {
  return (
    <Container>
      <Tilte>{item}</Tilte>
      <ChartPathProvider
        data={{
          points,
          smoothingStrategy: "bezier"
        }}
      >
        <ChartPath
          height={size / 5}
          stroke="black"
          width={size}
          strokeWidth={5}
        />
      </ChartPathProvider>
    </Container>
  );
};
