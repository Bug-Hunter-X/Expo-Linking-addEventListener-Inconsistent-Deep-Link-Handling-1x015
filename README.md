# Expo Linking.addEventListener Inconsistent Deep Link Handling

This repository demonstrates an uncommon bug in Expo's `Linking` API related to inconsistent deep link event handling. The `Linking.addEventListener` callback sometimes fails to trigger reliably when the app is in the background or cold-started, leading to missed deep links.

## Bug Description
The core issue is that `Linking.addEventListener` doesn't always capture deep link events consistently, causing unpredictable behavior in apps relying on deep links for navigation or data retrieval. This inconsistency is more prominent when the app isn't actively in the foreground.

## Reproduction
The `bug.js` file contains a minimal example showing the unreliable deep link capture using `Linking.addEventListener`. You can reproduce the bug by running the app, sending a deep link (while the app is in the background or cold-started), and observing whether the callback is triggered consistently.

## Solution
The `bugSolution.js` file offers a potential solution using `Linking.getInitialURL` to retrieve pending deep links when the app starts, combined with `Linking.addEventListener` for subsequent links. This approach provides more robust deep link handling across various app states.

## Additional Notes
This bug is likely related to background task limitations and the complexities of handling deep links across different operating systems and app states. The provided solution attempts to mitigate the problem, but edge cases might still exist. Please report any further findings or potential improvements.