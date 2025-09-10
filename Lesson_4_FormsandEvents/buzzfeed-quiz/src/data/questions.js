// quiz data
// This file ONLY holds data. No React here.
// Each question has a unique "id", display "text", and multiple "options".
// Each option has a "value" (used for scoring) and a "label" (what the user sees).

export const QUESTIONS = [
  {
    id: "q1",
    text: "Pick a weekend plan:",
    options: [
      { value: "adventurer", label: "Hike a new trail" },
      { value: "homebody", label: "Cozy movie marathon" },
      { value: "creative", label: "DIY art project" },
      { value: "foodie", label: "Try a new restaurant" },
    ],
  },
  {
    id: "q2",
    text: "Your ideal pet would be:",
    options: [
      { value: "adventurer", label: "Energetic husky" },
      { value: "homebody", label: "Chill cat" },
      { value: "creative", label: "Chatty parrot" },
      { value: "foodie", label: "A truffle pig (kidding… or not?)" },
    ],
  },
  {
    id: "q3",
    text: "Pick a superpower:",
    options: [
      { value: "adventurer", label: "Teleportation" },
      { value: "homebody", label: "Pause time" },
      { value: "creative", label: "Mind reading (for stories!)" },
      { value: "foodie", label: "Taste anything (no calories!)" },
    ],
  },
  {
    id: "q4",
    text: "Dream vacation?",
    options: [
      { value: "adventurer", label: "Backpack Patagonia" },
      { value: "homebody", label: "Cabin by a lake" },
      { value: "creative", label: "Street art tour" },
      { value: "foodie", label: "Tokyo food crawl" },
    ],
  },
];
