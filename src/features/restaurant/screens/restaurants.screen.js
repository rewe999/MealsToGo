import React, {useContext} from "react";
import {View} from "react-native";
import { SafeAreaView, FlatList} from "react-native";
import styled from "styled-components";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, Colors } from 'react-native-paper';

import { RestaurantInfoCard } from "../../../components/restaurant-info-card.component";
import { Search } from "../../../components/search.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})``;

const Loading = styled(ActivityIndicator)`
  margin-left = -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const {isLoading, error, restaurants} = useContext(RestaurantsContext);
  return (
  <SafeArea>
    {
      isLoading && (
        <LoadingContainer>
          <Loading 
          size={50}
          animating={true}
          color={Colors.blue300}
          />
        </LoadingContainer>
      )}
    <Search />
    <RestaurantList 
    data={restaurants}
    renderItem={({item}) => {
      return (
        <RestaurantInfoCard restaurant={item} />
      )
    }}
    keyExtractor={(item) => item.name}
    contentContainerStyle={{padding: 16}}
    />
        
  </SafeArea>
)};