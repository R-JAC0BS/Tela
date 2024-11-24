import React from "react";
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";


export function CardInfo({ navigation }) {    
    const Stars = (numberStar) => {
      if (numberStar > 0 && numberStar < 2 || numberStar == 1){
        return (
          <OneStar size={18}/>
        )
       
      }
      if (numberStar > 2 && numberStar < 3 || numberStar == 2){
        return (
          <TwoStar size={18}/>
        ) 
      }

      if (numberStar > 3 && numberStar < 4 || numberStar == 3){
        return (
          <ThreStar size={18}/>
        ) 
      }
      if (numberStar > 4 && numberStar < 5 || numberStar == 4){
        return (
          <FourStar size={18}/>
        ) 
      }
      if (numberStar == 5){
        return (
          <FiveStar size={18}/>
        ) 
      }
    }

    return (
        <ScrollView style={styles.scrollContainer}>
            <Image
                source={{ uri: 'https://via.placeholder.com/360' }}
                style={styles.fotoBar}
                />

            <Text style={styles.nomeBar}>Porão Bar e Tabacaria</Text>

            <View style={styles.stars}>
                <Text>4,8</Text>
                <Text>05</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    scrollContainer: {
      backgroundColor: 'white'
    },
    fotoBar: {
        width: '100%',
        height: 321,
        marginTop: 40
    },
    nomeBar: {
        fontSize: 20,
        fontWeight: 500,
        fontFamily: 'Roboto',
        marginLeft: 23,
        marginTop: 20,
        color: 'black',
        letterSpacing: 0.25,
        lineHeight: 20,
        fontStyle: 'normal'
    },
    stars: {
        backgroundColor: 'white',
        paddingTop: 20,
        borderWidth: 2,
        margin: 20,
        flexDirection: 'row',
        textAlign: 'center',
        borderRadius: 15
    }
})