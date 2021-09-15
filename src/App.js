import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import Admin from './src/Routing/Admin'
import LandingPage from './src/Pages/LandingPage'
import Client from './src/Routing/Client'
import { AnimatePresence } from "framer-motion"
// import { GlobalContenxt } from './src/context/Provider'
// import SplashScreen from './src/Pages/SplashScreen'

function App() {
  // const { authState: {
  //   isLoggedIn
  // },
  //   authDispatch
  // } = useContext(GlobalContenxt)
  // const [splashLoading, setSplashLoading] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(()=>{
  //     authDispatch({type: "LOGIN"})
  //     setSplashLoading(false)

  //   }, 3000)
  //   return () =>{
  //     clearTimeout(timer)
  //   }
  // }, [])
  const location = useLocation();

  return (
    <AnimatePresence>
      <Switch location={location} key={location.key}>
        <Route path="/Certificate" component={Client} />
        <Route path='/Admin' component={Admin} />
        <Route path='/' component={LandingPage} />
      </Switch>

    </AnimatePresence>
  )
}

export default App



























// import logo from "./logo.svg";
// import {
//   Box,
//   Image,
//   Text,
//   Link,
//   HStack,
//   Heading,
//   Switch,
//   useColorMode,
//   VStack,
//   Code,
// } from "native-base";

// function App() {
//   const { colorMode } = useColorMode();

//   return (
//     <Box
//       bg={colorMode === "light" ? "coolGray.50" : "coolGray.900"}
//       minHeight="100vh"
//       justifyContent="center"
//       px={4}
//     >
//       <VStack space={5} alignItems="center">
//         <Image
//           source={{ uri: logo }}
//           resizeMode="contain"
//           size={220}
//           alt="NativeBase logo"
//         />
//         <Heading size="lg">Welcome to NativeBase</Heading>
//         <Text>
//           Edit <Code>src/App.js</Code> and save to reload.
//         </Text>
//         <Link href="https://docs.nativebase.io" isExternal>
//           <Text color="primary.500" underline fontSize={"xl"}>
//             Learn NativeBase
//           </Text>
//         </Link>
//         <ToggleDarkMode />
//       </VStack>
//     </Box>
//   );
// }

// function ToggleDarkMode() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <HStack space={2}>
//       <Text>Dark</Text>
//       <Switch
//         isChecked={colorMode === "light" ? true : false}
//         onToggle={toggleColorMode}
//         accessibilityLabel={
//           colorMode === "light" ? "switch to dark mode" : "switch to light mode"
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   );
// }

// export default App;
