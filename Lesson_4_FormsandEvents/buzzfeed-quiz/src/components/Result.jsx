// src/components/Result.jsx
import React from "react";

/**
 * Props:
 * - result: { title, description, img? }
 * - onRestart(): clears state to retake the quiz
 */
export default function Result({ result, onRestart }) {
  return (
    <div className="result">
      <h2>{result.title}</h2>

      {/* Optional image — put files in /public if you add them */}
      {result.img && (
        <img className="result-img" src={result.img} alt={result.title} />
      )}

      <p>{result.description}</p>

      <button className="secondary" onClick={onRestart}>
        Retake the quiz
      </button>
    </div>
  );
}
