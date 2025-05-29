export const useEffectFaqs = [
  {
    title: 'What are side effects?',
    content:
      'useEffect enables you to execute code that interacts with external systems (like APIs, event listeners) or alters the DOM after a component renders.'
  },
  {
    title: 'When does the useEffect run?',
    content:
      'By default, useEffect runs after every render, including the initial render. You can control when it runs using an optional dependency array.'
  },
  {
    title: 'What are Dependencies in useEffect?',
    content:
      'The dependency array tells React when to re-run the effect. If the array is empty [], the effect runs only on mount and unmount. If the array contains specific values, the effect re-runs whenever those values change.'
  },
  {
    title: 'What is cleanup?',
    content:
      'You can return a function from the useEffect callback to perform cleanup tasks when the component unmounts or before the effect re-runs. This is useful for unsubscribing from events or releasing resources.'
  }
]
