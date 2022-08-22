import { Flex, useBreakpointValue, View } from "@aws-amplify/ui-react";
import { Recommendation, TopBar } from './ui-components';

function App() {
  const sizeVariant = useBreakpointValue({
    small: 'small',
    medium: 'default'
  })

  return (
    <div className="App">
      <TopBar width='100vw' size={sizeVariant} />
      <Flex overflow={'auto'}>
        <View>
          <Recommendation />
          <Recommendation />
          <Recommendation />
          <Recommendation />
        </View>
        <Flex position={'relative'} overflow={'hidden'} grow={1}>
          {/* Details of recommendation */}
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
