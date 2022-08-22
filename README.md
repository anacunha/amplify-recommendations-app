# AWS Innovate Every App

## Code

`App.js`:

```javascript
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
```

## Content

### Recommendations

| Name | Description | Address | Cover Image | Credits | 
| ---- | ----------- | ------- | ----------- | ------- |
| Meet Korean BBQ | Window-filled eatary serving contemporary Korean barbecue dishes, small plates & fermented sides. | 500 E Pike St | https://images.unsplash.com/photo-1632558610168-8377309e34c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80 | https://unsplash.com/photos/Fy1DsvIY5Tc |
| Sawyer | Rustic-airy eatery & bar offering elevated new American comfort cuisine & cocktails, plus a patio. | 5309 22nd Ave NW | https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80 | https://unsplash.com/photos/17ZU9BPy_Q4 |
| Secret Congee | Congee specialist shop located in Seattle, authentically influenced by the South East Asia style of cooking. | 6301 Seaview Ave NW | https://images.unsplash.com/photo-1653860468845-a53ac4b1059a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 | https://unsplash.com/photos/wql0slFyg9w |
| Starbucks Reserve | Combining the art and craft of coffee in an immersive and thoughtfully designed environment, this one-of-a-kind space features an impressive mix of bars and custom details. | 1124 Pike St | https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1637&q=80 | https://unsplash.com/photos/nzyzAUsbV0M |
| The Ballard Cut | Seasonal menus, locally sourced ingredients & Japanese whiskey showcased in a down-home environment. | 5313 Ballard Ave NW | https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 |  https://unsplash.com/photos/-YHSwy6uqvk |
| The Spheres| Ultramodern office building with lush botanical gardens, open for public tours by appointment. | 2111 7th Ave | https://d39w7f4ix9f5s9.cloudfront.net/dims4/default/1e77595/2147483647/strip/true/crop/6000x4000+0+0/resize/1738x1159!/quality/90/?url=http%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Ff4%2F9d%2F38b72dc14625a32f7c33160dc1d7%2Fbahamondez-manuel-20170627-05.jpg | |
