import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export function Home({navigation}) {
    return (
        <ScrollView style={styles.home}>
            <View style={styles.header}>
                <View style={styles.headerComponent}>
                    <Ionicons name="search-outline" size={20}></Ionicons>
                    <TextInput style={styles.TextField}>Pesquisar</TextInput>                        
                </View>

                <Ionicons name="options-outline" size={20}></Ionicons>
            </View>
        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      home: {
        flex: 1,
        padding: 25,
        backgroundColor: '#FFAF00',
      },
      TextField: {
        marginTop: '20',
        backgroundColor: '#E9E9E9',
        width: '100%',
        // marginRight: 20
      },
      header: {
        backgroundColor: 'white',
        // alignItems: 'center',
        paddingBottom: 20,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40, 
        padding: 20,
        flexDirection: 'row'
      },
      headerComponent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }
    });
