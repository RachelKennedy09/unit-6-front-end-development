// src/App.jsx
import { useState } from "react";
import { QUESTIONS } from "./data/questions";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./index.css";

/**
 * App owns:
 * - answers state (object keyed by question id)
 * - result state (null or {title, description, img})
 * - submit / reset logic
 */
export default function App() {
  const [answers, setAnswers] = useState({});  // { q1: "adventurer", ... }
  const [result, setResult] = useState(null);  // null until submitted

  // Update a single answer
  function handleAnswerChange(qid, value) {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
  }

  // Turn selected values into an outcome
  function computeResult(finalAnswers) {
    // 1) Tally how many times each "type" was chosen
    const tally = {};
    for (const q of QUESTIONS) {
      const v = finalAnswers[q.id];
      if (!v) continue; // unanswered question
      tally[v] = (tally[v] || 0) + 1;
    }

    // 2) Pick the type with the highest count
    let bestType = null;
    let bestCount = -1;
    for (const [type, count] of Object.entries(tally)) {
      if (count > bestCount) {
        bestType = type;
        bestCount = count;
      }
    }

    // 3) Map each type to a friendly message (and optional image)
    const OUTCOMES = {
      adventurer: {
        title: "You’re The Adventurer 🧭",
        description:
          "You come alive exploring new places and trying bold things. Mountain air, new cities, spontaneous road trips — yes please.",
        img: "", // e.g. "/adventurer.png" if you add one to /public
      },
      homebody: {
        title: "You’re The Cozy Homebody 🛋️",
        description:
          "Soft blankets, hot drinks, a good series — you recharge in calm spaces and cherish slow days.",
        img: "",
      },
      creative: {
        title: "You’re The Creative 🎨",
        description:
          "Ideas pop for you. You love making things — art, code, photos, stories — and turning sparks into something real.",
        img: "",
      },
      foodie: {
        title: "You’re The Foodie 🍣",
        description:
          "You chase flavors and memories through meals. New restaurants, markets, recipes — that’s your adventure.",
        img: "",
      },
    };

    return OUTCOMES[bestType] ?? {
      title: "You’re A Balanced Mix ✨",
      description: "You’ve got a little of everything — versatile and vibey.",
      img: "",
    };
  }

  function handleSubmit() {
    // Require all questions to be answered
    const allAnswered = QUESTIONS.every((q) => answers[q.id]);
    if (!allAnswered) {
      alert("Please answer every question 😊");
      return;
    }
    const r = computeResult(answers);
    setResult(r);
  }

  function handleRestart() {
    setAnswers({});
    setResult(null);
  }

  return (
    <div className="app">
      <h1>Buzzfeed-Style Quiz</h1>

      {!result ? (
        <Quiz
          questions={QUESTIONS}
          answers={answers}
          onChange={handleAnswerChange}
          onSubmit={handleSubmit}
        />
      ) : (
        <Result result={result} onRestart={handleRestart} />
      )}
    </div>
  );
}
