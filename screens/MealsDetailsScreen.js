import { useLayoutEffect } from 'react';
import {View,Text,Image,ScrollView,StyleSheet} from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealsDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

function MealsDetailsScreen({route, navigation}){
    const mealId = route.params.mealId;
    const selectMeal = MEALS.find((meal) => meal.id === mealId);
    
    function headerButtonPressHandler(){
        console.log('Pressed');
    }
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight:() => {
                return <IconButton 
                icon="star"
                color="white"
                onPress={headerButtonPressHandler}/>
            }
        });
    }, [navigation, headerButtonPressHandler]);
    return(
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectMeal.imageUrl}} />
            <Text style={styles.title}>{selectMeal.title}</Text>
            <MealsDetails 
            duration={selectMeal.duration} 
            complexity={selectMeal.complexity}
            affordability={selectMeal.affordability}
            textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectMeal.ingredients}></List>
            <Subtitle>Steps</Subtitle>
            <List data={selectMeal.steps}></List>
            </View>
            </View>    
        </ScrollView>
    )
};

export default MealsDetailsScreen;
 const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:32
    },
    image:{
        width:'100%',
        height: 350,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        margin:8,
        textAlign:'center',
        color:'white'
    },
    detailText:{
        color:'white'
    },
    listOuterContainer:{
        alignItems:'center'
    },
    listContainer:{
        width:'80%'
    }
 });
