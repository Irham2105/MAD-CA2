import * as React from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
  ImageBackground,
  SafeAreaView,
  TextInput
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { ScrollView } from 'react-native-virtualized-view'
import Counter from './counter'
import Counter1 from './counter'
import Counter2 from './counter'

const DATA1 = [
  {
    id: 1,
    Category: 'Adult',
    Desc: 'Above 21',
    Price: 35
  },
  {
    id: 2,
    Category: 'Child',
    Desc: 'Below 16',
    Price: 25
  },
  {
    id: 3,
    Category: 'Elderly',
    Desc: 'Above 65',
    Price: 25
  },
]

const DATA = [
  {
    id: 1,
    Event: 'Street Photography Event',
    Image: require('./assets/Featuredimage.png'),
    Description: 'This Braun watch is a reissue of the original 1970s design from renowned design team Dietrich Lubs and Dieter Rams, both of whom have work featured in the Museum’s collection. The large watch features a numbered face, and the smaller watch has only index lines. Made of a matte stainless-steel case, black dial, mineral glass, a three-hand quartz movement, and a leather band. Water-resistant.',
    Liked: true,
    Date: '28-07-2023'
  },
  {
    id: 2,
    Event: 'Bright Eyes Concert',
    Image: require('./assets/image2.png'),
    Description: 'This Braun watch is a reissue of the original 1970s design from renowned design team Dietrich Lubs and Dieter Rams, both of whom have work featured in the Museum’s collection. The large watch features a numbered face, and the smaller watch has only index lines. Made of a matte stainless-steel case, black dial, mineral glass, a three-hand quartz movement, and a leather band. Water-resistant.',
    Liked: true,
    Date: '31-07-2023'
  },
  {
    id: 3,
    Event: 'Bright Eyes Concert',
    Image: require('./assets/image2.png'),
    Description: 'This Braun watch is a reissue of the original 1970s design from renowned design team Dietrich Lubs and Dieter Rams, both of whom have work featured in the Museum’s collection. The large watch features a numbered face, and the smaller watch has only index lines. Made of a matte stainless-steel case, black dial, mineral glass, a three-hand quartz movement, and a leather band. Water-resistant.',
    Liked: false,
    Date: '16-05-2023'
  },
  {
    id: 4,
    Event: 'Bright Eyes Concert',
    Image: require('./assets/image2.png'),
    Description: 'This Braun watch is a reissue of the original 1970s design from renowned design team Dietrich Lubs and Dieter Rams, both of whom have work featured in the Museum’s collection. The large watch features a numbered face, and the smaller watch has only index lines. Made of a matte stainless-steel case, black dial, mineral glass, a three-hand quartz movement, and a leather band. Water-resistant.',
    Liked: false,
    Date: '24-07-2023'
  },
  {
    id: 5,
    Event: 'Bright Eyes Concert',
    Image: require('./assets/image2.png'),
    Description: 'This Braun watch is a reissue of the original 1970s design from renowned design team Dietrich Lubs and Dieter Rams, both of whom have work featured in the Museum’s collection. The large watch features a numbered face, and the smaller watch has only index lines. Made of a matte stainless-steel case, black dial, mineral glass, a three-hand quartz movement, and a leather band. Water-resistant.',
    Liked: true,
    Date: '11-11-2023'
  },
  {
    id: 6,
    Event: 'Bright Eyes Concert',
    Image: require('./assets/image2.png'),
    Description: 'This Braun watch is a reissue of the original 1970s design from renowned design team Dietrich Lubs and Dieter Rams, both of whom have work featured in the Museum’s collection. The large watch features a numbered face, and the smaller watch has only index lines. Made of a matte stainless-steel case, black dial, mineral glass, a three-hand quartz movement, and a leather band. Water-resistant.',
    Liked: true,
    Date: '01-08-200023'
  },
];

function Item({ item }) {
  return (
    <View>
      <View style={styles.listItem}>
        <View
          style={{
            flex: 1,
            height: 250,
            justifyContent: 'center',
            textAlign: 'left',
          }}>
          <Image
            source={item.Image}
            style={{ height: 200, borderRadius: 15, width: "100%" }}
          />
          <Text style={styles.date}>{item.Date}</Text>
          <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={styles.Event}>
              {item.Event}
            </Text>
            <Entypo name={'chevron-right'} color={'black'} size={20} />
          </View>
        </View>
      </View>
    </View>
  );
}



function DetailsScreen({ route, navigation }) {
  const [total, setTotal] = React.useState(0);
  const [num, setNum] = React.useState(0);
  const [num1, setNum1] = React.useState(0);
  const [num2, setNum2] = React.useState(0);
  const { itemID } = route.params
  const name = itemID.Event
  const desc = itemID.Description
  const date = itemID.Date
  function AddCount() {
    if (num < 10) {
      setNum(num + 1)
      setTotal(total + 35)
    }
  }
  function AddCount1() {
    if (num1 < 10) {
      setNum1(num1 + 1)
      setTotal(total + 25)
    }
  }
  function AddCount2() {
    if (num2 < 10) {
      setNum2(num2 + 1)
      setTotal(total + 25)
    }
  }
  function MinusCount() {
    if (num > 0) {
      setNum(num - 1)
      setTotal(total - 35)
    }
  }
  function MinusCount1() {
    if (num1 > 0) {
      setNum1(num1 - 1)
      setTotal(total - 25)
    }
  }
  function MinusCount2() {
    if (num2 > 0) {
      setNum2(num2 - 1)
      setTotal(total - 25)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.listItem}>
        <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
          >
            <View>
              <Image
                source={itemID.Image}
                style={{ height: 200, borderRadius: 15, width: "100%" }}
              />
              <Text style={styles.date}>{date}</Text>
              <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', paddingTop: 10, paddingBottom: 20, }}>
                <Text style={styles.Event}>{name}</Text>
                <TouchableHighlight onPress={() => {
                  if (isLiked) {
                    itemID.Liked = false
                    isLiked = itemID.Liked
                    console.log(itemID.Liked)
                    color = 'white'
                  } else {
                    itemID.Liked = true
                    isLiked = itemID.Liked
                    console.log(itemID.Liked)
                    color = 'red'
                  }
                }}>
                  <Entypo name={'heart'} color={'red'} size={20} />
                </TouchableHighlight>
              </View>
              <Text style={styles.date}>{desc}</Text>
            </View>
            <View style={{ paddingHorizontal: 20, paddingVertical: 40 }}>
              <Text style={styles.bigText}>Skip The Queue.</Text>
              <Text style={styles.bigText}>Purchase Tickets Here.</Text>
              <Text style={{ color: 'red' }}>Prices Are Inclusive of GST</Text>
              <Text style={{ color: 'black', fontWeight: '600', fontSize: 20, textAlign: 'center', textDecorationLine: 'underline', padding: 20 }}>BUY</Text>
              <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', paddingTop: 10, paddingBottom: 20, alignItems: 'center' }}>
                <View style={{ flex: 1 / 2, justifyContent: 'center', paddingTop: 10, paddingBottom: 20, alignItems: 'flex-start' }}>
                  <Text style={styles.Event}>Adult - $35</Text>
                  <Text style={styles.desc}>Above 16</Text>
                </View>
                <Counter setNum={AddCount} num={num} setNumMinus={MinusCount} />
              </View>
              <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', paddingTop: 10, paddingBottom: 20, alignItems: 'center' }}>
                <View style={{ flex: 1 / 2, justifyContent: 'center', paddingTop: 10, paddingBottom: 20, alignItems: 'flex-start' }}>
                  <Text style={styles.Event}>Child - $25</Text>
                  <Text style={styles.desc}>Under 16</Text>
                </View>
                <Counter1 setNum={AddCount1} num={num1} setNumMinus={MinusCount1} />
              </View>
              <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', paddingTop: 10, paddingBottom: 20, alignItems: 'center' }}>
                <View style={{ flex: 1 / 2, justifyContent: 'center', paddingTop: 10, paddingBottom: 20, alignItems: 'flex-start' }}>
                  <Text style={styles.Event}>Elderly - $25</Text>
                  <Text style={styles.desc}>Above 60</Text>
                </View>
                <Counter2 setNum={AddCount2} num={num2} setNumMinus={MinusCount2} />
              </View>
              <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', paddingTop: 10, paddingBottom: 20, }}>
                <Text style={styles.Event}>Total:</Text>
                <Text style={styles.Event}>${total}</Text>
              </View>
              <TouchableOpacity style={{ flex: 1, justifyContent: 'center', paddingVertical: 12, alignItems: 'center', backgroundColor: '#FF473A', borderRadius: 20 }}>
                <Text style={{ color: 'white' }}>Add To Cart</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topOfHome}>
        <TouchableOpacity style={{ flex: 1 / 2, justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }} onPress={() => { navigation.navigate('Settings') }}>
          <Image
            source={require('./assets/image5.jpg')}
            style={{ borderRadius: 20 }}
          />
          <Text style={{ paddingLeft: 10 }}>Naura Ayu</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('Notifications') }}>
          <Ionicons name={'notifications'} color={'black'} size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleBody}>
        <Text style={styles.title}>Upcoming Events</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.FlatList}
        data={DATA}
        renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('Details', { itemID: item })}><Item item={item} /></TouchableOpacity>}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Cart') }}>
        <Ionicons name={'cart'} color={'white'} size={30} />
      </TouchableOpacity>
    </View>
  );
}

function MainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search screen</Text>
    </View>
  );
}

function EditProfile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Edit Profile screen</Text>
    </View>
  );
}

function ChangePasswordScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Change Password screen</Text>
    </View>
  );
}

function PaymentScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Payment Method screen</Text>
    </View>
  );
}

function CartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your Cart is Empty</Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topOfHome}>
        <View style={{ flex: 1 / 2, justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
          <Image
            source={require('./assets/image5.jpg')}
            style={{ borderRadius: 20 }}
          />
          <Text style={{ paddingLeft: 10 }}>Naura Ayu</Text>
        </View>
      </View>
      <View style={styles.lineStyle}>
      </View>
      <Text style={styles.title}>Account Settings</Text>
      <View style={styles.alignLeftStuff}>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={styles.Event}>
            Edit Profile
          </Text>
          <Entypo name={'chevron-right'} color={'black'} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.alignLeftStuff}>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={styles.Event}>
            Payment Methods
          </Text>
          <Entypo name={'chevron-right'} color={'black'} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.alignLeftStuff}>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={styles.Event}>
            Change Password
          </Text>
          <Entypo name={'chevron-right'} color={'black'} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>You Have 0 Tickets</Text>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function LikesScreen({ navigation }) {
  const LikedData = DATA.filter(Object => {
    return Object.Liked === true
  })
  return (
    <View style={styles.container}>
      <View style={styles.LikesScreen}>
        <Text style={styles.likesTitle}>You have,</Text>
        <Text style={styles.likesTitle}>{LikedData.length} Liked Events</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.FlatList}
        data={LikedData}
        renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('Details', { itemID: item })}><Item item={item} /></TouchableOpacity>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

function InfoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Info screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/background.png')}
        resizeMode="cover"
        style={styles.background}>
        <View>
          <Text style={styles.title}>YOUR</Text>
          <Text style={styles.title}>TICKETING</Text>
          <Text style={styles.title}>FRIEND</Text>
        </View>
        <View>
          <Login></Login>
        </View>
        <View>
          <TouchableOpacity
            style={styles.forgot}
            onPress={() => navigation.navigate('Reset')}>
            <Text style={styles.touchabletext}>Forgot Your Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.login}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.touchabletext}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.create}
            onPress={() => navigation.navigate('Create')}>
            <Text style={styles.touchabletext}>Don't have an account?</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

function CreateScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/background.png')}
        resizeMode="cover"
        style={styles.background}>
        <Text style={styles.title}>CREATE YOUR</Text>
        <Text style={styles.title}>ACCOUNT</Text>
        <CreateAccount></CreateAccount>
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.touchabletext}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.goback}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.touchabletext}>Go back</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

function ResetScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/background.png')}
        resizeMode="cover"
        style={styles.background}>
        <Text style={styles.title}>RESET YOUR</Text>
        <Text style={styles.title}>PASSWORD</Text>
        <Text style={styles.reset}>
          Type in your email address for you and you will get an email to reset
          your password
        </Text>
        <Reset></Reset>
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.touchabletext}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.goback}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.touchabletext}>Go back</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const CreateAccount = () => {
  const [text, onChangeText] = React.useState(null);
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Username"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email address"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Password"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Confirm Password"
      />
    </SafeAreaView>
  );
};



const Reset = () => {
  const [text, onChangeText] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email address"
      />
    </SafeAreaView>
  );
};

const Login = () => {
  const [text, onChangeText] = React.useState(null);
  const [text2, onChangeText2] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email address"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeText2}
        value={text2}
        placeholder="Password"
      />
    </SafeAreaView>
  );
};


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName='Home'
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 16, color: '#FF473A' },
          headerBackVisible: false
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 16, color: '#FF473A' }
        }}
      />
      <HomeStack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 16, color: '#FF473A' }
        }}
      />
      <HomeStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 16, color: '#FF473A' }
        }}
      />
      <HomeStack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 16, color: '#FF473A' }
        }}
      />
    </HomeStack.Navigator>
  );
}

const SettingStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 16, color: '#FF473A' },
        }}
      />
      <SettingStack.Screen
        name="Edit"
        component={EditProfile}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 16, color: '#FF473A' },
        }}
      />
      <SettingStack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 16, color: '#FF473A' },
        }}
      />
      <SettingStack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 16, color: '#FF473A' },
        }}
      />
    </SettingStack.Navigator>
  )
}

const LikeStack = createNativeStackNavigator();

function LikeStackScreen() {
  return (
    <LikeStack.Navigator>
      <LikeStack.Screen
        name="Likes"
        component={LikesScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 16, color: '#FF473A' },
        }}
      />
      <LikeStack.Screen name="Details" component={DetailsScreen} />
    </LikeStack.Navigator>
  );
}

const MainStack = createNativeStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Search"
        component={MainScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 16, color: '#FF473A' },
        }}
      />
      <MainStack.Screen name="Details" component={DetailsScreen} />
    </MainStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Tickets"
        component={ProfileScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 16, color: '#FF473A' },
        }}
      />
      <ProfileStack.Screen name="Info" component={InfoScreen} />
    </ProfileStack.Navigator>
  );
}

const stack = createNativeStackNavigator()

function LoginStack() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 16, color: '#FF473A' },
        }}
      />
      <stack.Screen
        name="Create"
        component={CreateScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 16, color: '#FF473A' },
        }}
      />
      <stack.Screen
        name="Reset"
        component={ResetScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 16, color: '#FF473A' },
        }}
      />
      <stack.Screen
        name="Home"
        component={TabNav}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 16, color: '#FF473A' },
        }}
      />
    </stack.Navigator>
  )
}

const Tab = AnimatedTabBarNavigator();

function TabNav () {
  return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#656565",
          inactiveTintColor: "#FFFFFF",
          activeBackgroundColor: "#FFFFFF",
          tabStyle: { backgroundColor: '#656565' }
        }}>
        <Tab.Screen
          name="HOME"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'HOME',
            tabBarIcon: ({ color }) => <Ionicons name={'home'} size={20} color={color} />,
          }}
        />
        <Tab.Screen
          name="SEARCH"
          component={MainStackScreen}
          options={{
            tabBarLabel: 'SEARCH',
            tabBarIcon: ({ color }) => <Ionicons name={'search'} size={20} color={color} />,
          }}
        />
        <Tab.Screen
          name="LIKES"
          component={LikeStackScreen}
          options={{
            tabBarLabel: 'LIKES',
            tabBarIcon: ({ color }) => <Ionicons name={'heart'} size={20} color={color} />,
          }}
        />
        <Tab.Screen
          name="TICKETS"
          component={ProfileStackScreen}
          tabBarActiveTintColor={'black'}
          tabBarInactiveTintColor={'white'}
          options={{
            tabBarLabel: 'TICKETS',
            tabBarIcon: ({ color }) => <Entypo name={'ticket'} size={20} color={color} />,
          }}
        />
      </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
      >
        <stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 16, color: '#FF473A' },
          }}
        />
        <stack.Screen
          name="Create"
          component={CreateScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 16, color: '#FF473A' },
          }}
        />
        <stack.Screen
          name="Reset"
          component={ResetScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 16, color: '#FF473A' },
          }}
        />
        <stack.Screen
          name="Home"
          component={TabNav}
          options={{
            headerShown: false
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  titleBody: {
    paddingTop: 20,
    paddingBottom: 10
  },
  listItem: {
    margin: 0,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#FFF',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 14,
    fontWeight: '900',
    textDecorationLine: 'underline'
  },
  bigText: {
    fontWeight: '900',
    textAlign: 'left',
    paddingTop: 0,
    paddingBottom: 5,
    fontSize: 26
  },
  button: {
    position: 'absolute',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#FF7D73',
    right: 20,
    bottom: 20,
    borderRadius: 40
  },
  likesTitle: {
    fontWeight: '900',
    fontSize: 18
  },
  date: {
    textAlign: 'left',
    fontSize: 13,
    paddingTop: 10,
    fontWeight: '400'
  },
  Event: {
    fontWeight: '900',
    textAlign: 'left',
    fontSize: 18
  },
  LikesScreen: {
    flex: 1 / 15,
    height: 60,
    paddingTop: 15,
    textAlign: 'left',
    alignItems: 'flex-start',
    width: "90%"
  },
  topOfHome: {
    flex: 1 / 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center',
    width: "90%"
  },
  FlatList: {
    flex: 1,
    width: 400,
    padding: 10
  },
  lineStyle: {
    width: "90%",
    borderWidth: 0.5,
    borderColor: 'black',
    marginTop: 15,
    marginBottom: 10
  },
  alignLeftStuff: {
    flex: 1 / 12,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  settingsStyle: {
    fontSize: 16,
    textAlign: 'left',
  },
  text: {
    color: 'white',
    fontSize: 18,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 8,
    alignItems: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 3,
    color: 'black',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title2: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    margin: 4,
  },
  reset: {
    fontSize: 11,
    color: 'white',
    margin: 2,
    justifyContent: 'center',
    padding: 6,
  },
  touchabletext: {
    color: 'white',
  },
  forgot: {
    backgroundColor: 'transparent',
    padding: 10,
    width: '60%',
  },
  login: {
    backgroundColor: '#FF473A',
    padding: 10,
    alignItems: 'center',
    margin: 10,
  },
  goback: {
    backgroundColor: 'transparent',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  create: {
    backgroundColor: '#656565',
    padding: 10,
    alignItems: 'center',
    margin: 10,
  },
});
