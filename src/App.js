import { Flex, View } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      Navigation bar
      <Flex overflow={'auto'}>
        <View>
          List of recommendations
        </View>
        <View>
          {/* Details of recommendation */}
        </View>
      </Flex>
    </div>
  );
}

export default App;
