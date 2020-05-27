# React Hooks

## Problems hooks fix
- Wrapper hell
- Huge components
- Confusing classes
- Can't add state or lifecycle methods without class components


## Inbuilt hooks

### useState

```
const [name, setName] = useState(intialValue)
```

### useEffect

```
useEffect(() => {
  window.addEventListener('resize', this.handleResize)
  return () => {
    window.removeEventListener('resize', this.handleResize)
  }
}, [count]);
```

### useContext

(https://reactjs.org/docs/hooks-reference.html#usecontext)

```
const theme = useContext(ThemeContext);
```

### useReducer

(https://reactjs.org/docs/hooks-reference.html#usereducer)

```
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

### useCallback

Returns a memoized callback.

```
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
(shouldComponentUpdate)
```

### useMemo

(https://reactjs.org/docs/hooks-reference.html#usememo)
Returns a memoized value.

```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### useRef

(https://reactjs.org/docs/hooks-reference.html#usememo)

```
const refContainer = useRef(initialValue);
```

## Rules
- Start custom hooks with “use”
  - “use” means the function is stateful
- Relies on order of hook calls
  - Don't call hooks inside a condition
https://reactjs.org/docs/hooks-overview.html#rules-of-hooks

## Future
https://reactjs.org/docs/hooks-intro.html#classes-confuse-both-people-and-machines
> Additionally, React has been out for about five years, and we want to make sure it stays relevant in the next five years. As Svelte, Angular, Glimmer, and others show, ahead-of-time compilation of components has a lot of future potential. Especially if it’s not limited to templates. Recently, we’ve been experimenting with component folding using Prepack, and we’ve seen promising early results. However, we found that class components can encourage unintentional patterns that make these optimizations fall back to a slower path. Classes present issues for today’s tools, too. For example, classes don’t minify very well, and they make hot reloading flaky and unreliable. We want to present an API that makes it more likely for code to stay on the optimizable path.
