import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export function Home({navigation}) {
    return (
        <ScrollView style={styles.home}>
            <View style={styles.header}>
                <View style={styles.headerComponent}>                    
                    <TextInput style={styles.TextField}>
                        <Ionicons name="search-outline" size={20}></Ionicons>
                        Pesquisar
                    </TextInput>                
                    <TouchableOpacity>
                        <Ionicons name="options-outline" size={24} marginLeft='10' top='8'></Ionicons>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttons}>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>Todos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.buttonText}>+ Populares</Text>
                    </TouchableOpacity>
                </View>                
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
        backgroundColor: '#E9E9E9',
        width: '100%',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
      },
      header: {
        backgroundColor: 'white',
        alignItems: 'center',
        paddingBottom: 20,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40, 
        padding: 40,
      },
      headerComponent: {
        flexDirection: 'row',
      },
      buttons: {
        fontWeight: 'bold',
        flexDirection: 'row',
        gap: 100,
        marginTop: 15
      },
      buttonText: {
        fontWeight: 'bold'
      }
    });
