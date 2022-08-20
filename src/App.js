import { Flex, View } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      Navigation bar
      <Flex overflow={'auto'}>
        <View>
          List of recommendations
        </View>
        <Flex position={'relative'} overflow={'hidden'} grow={1}>
          {/* Details of recommendation */}
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
