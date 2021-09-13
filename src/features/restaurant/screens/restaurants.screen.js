import React, {useContext} from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView, FlatList} from "react-native";
import styled from "styled-components";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { RestaurantInfoCard } from "../../../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})``;

export const RestaurantsScreen = () => {
  const {isLoading, error, restaurants} = useContext(RestaurantsContext);
  return (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
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