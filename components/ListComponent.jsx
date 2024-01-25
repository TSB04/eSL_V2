import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { List, Text } from 'react-native-paper';


const ListComponent = ({ data }) => {
    const renderItem = ({ item }) => (
      <List.Item
        title={item.prenom}
        left={(props) => <List.Icon {...props} icon="account-circle" />}
      />
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });
  
  export default ListComponent;
  