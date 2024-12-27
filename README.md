# React useEffect Memory Leak

This repository demonstrates a common memory leak in React components using the `useEffect` hook.  The example shows a component that updates its count every second using `setTimeout`. However, if the component unmounts before the timeout completes, the timeout continues to run, leading to a memory leak.

The solution demonstrates the correct way to use `useEffect` with cleanup function to avoid the memory leak.