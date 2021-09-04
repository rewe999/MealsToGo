import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, FlatList} from "react-native";
import styled from "styled-components";

import { RestaurantInfoCard } from "../../../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <RestaurantList 
    data={[
      {name: "1"},
      {name: "2"},
      {name: "3"},
      {name: "4"},
      {name: "5"},
      {name: "6"},
    ]}
    renderItem={() => <RestaurantInfoCard />}
    keyExtractor={(item) => item.name}
    contentContainerStyle={{padding: 16}}
    />
        
  </SafeArea>
);