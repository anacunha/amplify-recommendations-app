import { Flex, useBreakpointValue, View } from "@aws-amplify/ui-react";
import { NavBar, RecommendationList } from './ui-components';

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
        <Flex position={'relative'} overflow={'hidden'} grow={1}>
          {/* Details of recommendation */}
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
