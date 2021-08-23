import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { Card } from 'react-native-paper';

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled(Text)`
  padding: 16px;
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({restaurant = {} }) => {
  const {
    name = "Nazwa Restauracji",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
    ],
    address = "Legnicka 13",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily
  } = restaurant;

  return(
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};