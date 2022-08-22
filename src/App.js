import { Flex, useBreakpointValue, View } from "@aws-amplify/ui-react";
import { useState } from "react";
import { Details, NavBar, RecommendationList } from './ui-components';

function App() {
  const sizeVariant = useBreakpointValue({
    small: 'small',
    medium: 'default'
  })

  const [selection, setSelection] = useState()

  return (
    <div className="App">
      <NavBar width='100vw' size={sizeVariant} />
      <Flex overflow={'auto'}>
        <View>
          <RecommendationList overrideItems={({ item }) => ({
            onClick: () => setSelection(item)
          })} />
        </View>
        <View>
          {selection ? <Details recommendation={selection} /> : ''}
        </View>
      </Flex>
    </div>
  );
}

export default App;
