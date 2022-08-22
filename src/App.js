import { Flex, useBreakpointValue, View } from "@aws-amplify/ui-react";
import { RecommendationList, NavBar } from './ui-components';

function App() {
  const sizeVariant = useBreakpointValue({
    small: 'small',
    medium: 'default'
  })

  return (
    <div className="App">
      <NavBar width='100vw' size={sizeVariant} />
      <Flex overflow={'auto'}>
        <View>
          <RecommendationList />
        </View>
        <View>
          {/* Details of recommendation */}
        </View>
      </Flex>
    </div>
  );
}

export default App;
