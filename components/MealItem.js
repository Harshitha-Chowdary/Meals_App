import {View,Pressable,Image,Text,StyleSheet,Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealsDetails from './MealDetails';

function MealItem({id,title, imageUrl,complexity,duration,affordability}){
    const navigation = useNavigation();

    function selectMealItemHandler(){
    navigation.navigate('MealDetails', {
        mealId: id,
    });
};
    
    return (
    <View style={styles.mealItem}>
        <Pressable android_ripple={{color:'#ccc'}} 
        style={({ pressed }) => 
        (pressed ? styles.buttonPressed: null)}
        onPress={selectMealItemHandler}
        >
            <View>
            <View>
                <Image source={{uri: imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
            </View>
            <MealsDetails 
            duration={duration}
            affordability={affordability}
            complexity={complexity}
            />
            </View>
        </Pressable>
    </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden':'visible',
        backgroundColor:'white',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowRadius:16,
        shadowOpacity:0.35
    },
    innerContainer:{
        borderRadius:8,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:200,
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin: 8
    },
    buttonPressed:{
        flex:1,
        opacity: 0.5
    },
});