import React from "react";
import { View, Text,Image } from "react-native";
import {SvgXml} from "react-native-svg";
import { RestaurantCard, RestaurantCardCover, Title, Rating, Section, SectionEnd, Info, Address } from './restaurant-info-card-styles';

import star from "../../assets/star";
import open from "../../assets/open";

export const RestaurantInfoCard = ({restaurant = {} }) => {
  const {
    name = "Nazwa Restauracji",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
    ],
    address = "Legnicka 13",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return(
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((__key,index) => (
              <SvgXml xml={star} width={20} height={20} key={index}/>
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                TYMCZASOWO ZAMKNIĘTE
              </Text>
            )}
            <View style={{ paddingLeft: 16 }} />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <View style={{ paddingLeft: 16 }} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};