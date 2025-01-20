# React useEffect Hook Missing Dependency Bug
This repository demonstrates a common bug in React applications involving the useEffect hook. The bug is caused by a missing dependency in the useEffect hook's dependency array, leading to unexpected behavior and potentially incorrect state updates.

## Bug Description
The `MyComponent` functional component uses the `useState` hook to manage a count variable. The `useEffect` hook is intended to log a message to the console based on the value of the `count` variable. However, because the `count` variable is not included in the dependency array, the effect is only run once after the initial render.  Subsequent changes to the `count` variable do not trigger the effect.

## Solution
The solution involves adding `count` to the dependency array of the `useEffect` hook. This ensures the effect is re-run whenever the `count` variable changes.