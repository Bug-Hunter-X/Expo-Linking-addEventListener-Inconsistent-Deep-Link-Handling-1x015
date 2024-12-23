A more robust approach involves checking for pending deep links at app startup using `Linking.getInitialURL()` and combining it with `Linking.addEventListener` for subsequent links:

```javascript
import * as Linking from 'expo-linking';
import { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const getInitialUrl = async () => {
      const url = await Linking.getInitialURL();
      setInitialUrl(url);
    };
    getInitialUrl();
  }, []);

  useEffect(() => {
    const subscription = Linking.addEventListener('url', (event) => {
      console.log('Deep link received:', event.url);
      // Process the deep link
    });

    return () => subscription.remove();
  }, []);

  // Process the initial URL if available
  useEffect(() => {
    if (initialUrl) {
      console.log('Initial deep link:', initialUrl);
      // Process the initial deep link
    }
  }, [initialUrl]);

  return (
    // ... your app UI
  );
}
```
This approach ensures that deep links are handled whether the app is cold-started or already running.