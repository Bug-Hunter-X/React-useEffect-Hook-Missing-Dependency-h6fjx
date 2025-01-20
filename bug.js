```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here
    if (count > 0) {
      console.log('Count is greater than 0');
    } else {
      console.log('Count is not greater than 0');
    }
  }, [count]); // Missing dependency in the useEffect hook

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```