```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic here
    if (count > 0) {
      console.log('Count is greater than 0');
    } else {
      console.log('Count is not greater than 0');
    }
  }, [count]); // count is now included in the dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```