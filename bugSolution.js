```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearTimeout(timeoutId); // Cleanup function to clear the timeout
  }, [count]);

  return <div>Count: {count}</div>;
}
```