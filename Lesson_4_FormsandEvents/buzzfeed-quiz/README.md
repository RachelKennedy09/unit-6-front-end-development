Controlled inputs: Each radio’s checked comes from answers[q.id] === opt.value. Changing a radio calls onChange, which updates React state. This keeps the UI in sync with state.

Prevent default: On submit, we e.preventDefault() because forms try to reload the page by default. In React, we handle it entirely in JS.

Computing results: Every option “votes” for a personality type. We tally counts and choose the max — classic reduce pattern.

Conditional rendering: !result ? <Quiz/> : <Result/> — one state variable drives the whole flow.

Single source of truth: App owns state; Quiz and Result are “dumb” UI components fed by props. This separation is the React way and scales well.