import Cities from "./Cities/Cities";
import City from "./Cities/City";
import AddCity from "./AddCity/AddCity";
import {colors} from "./theme";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Stacks = (props) => {
    const options = {
        headerStyle: {
            backgroundColor: colors.primary,
        },
        headerTintColor: "#fff",
    };
    return (
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name={"Cities"} component={Cities} initialParams={props.route.params}/>
            <Stack.Screen name="City" component={City} initialParams={props.route.params}/>
            <Stack.Screen name="AddCity" component={AddCity}/>
        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
const Tabs = (props) => {
    const options = {
        headerStyle: {
            backgroundColor: colors.primary,
        },
        headerTintColor: "#fff",
    };
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name={"Citiess"} component={Stacks} initialParams={props}/>
            <Tab.Screen name="AddCity" component={AddCity} initialParams={props}/>
        </Tab.Navigator>
    );
}
export default Tabs;
