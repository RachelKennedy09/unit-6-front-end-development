// src/components/Quiz.jsx
import React from "react";

/**
 * Props:
 * - questions: array of {id, text, options[]}
 * - answers: object like { q1: "adventurer", q2: "homebody", ... }
 * - onChange(qid, value): called when a radio changes
 * - onSubmit(): called when form is submitted
 *
 * "Controlled inputs" = the checked state comes from React state (answers),
 * and we update that state on every change. React is the single source of truth.
 */
export default function Quiz({ questions, answers, onChange, onSubmit }) {
  function handleFormSubmit(e) {
    e.preventDefault();       // prevent page reload
    onSubmit();               // let parent (App) do the grading
  }

  return (
    <form onSubmit={handleFormSubmit} className="quiz">
      {questions.map((q) => (
        <fieldset key={q.id} className="question">
          <legend>{q.text}</legend>

          {q.options.map((opt) => (
            <label key={opt.value} className="option">
              <input
                type="radio"
                name={q.id}                   // radios grouped by question id
                value={opt.value}
                checked={answers[q.id] === opt.value}  // controlled
                onChange={() => onChange(q.id, opt.value)}
              />
              {opt.label}
            </label>
          ))}
        </fieldset>
      ))}

      <button type="submit" className="primary">See my result</button>
    </form>
  );
}
