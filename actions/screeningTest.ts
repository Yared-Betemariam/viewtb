"use server";

export const screeningTest = (userData: string) => {
  const symptoms = userData.toLowerCase();

  // Check for common TB symptoms in the user input
  const hasCough = symptoms.includes("cough");
  const hasFever = symptoms.includes("fever");
  const hasWeightLoss = symptoms.includes("weight loss");
  const hasNightSweats = symptoms.includes("night sweats");

  // Determine if the user should seek a doctor based on symptoms
  let result = "";
  if (hasCough && hasFever && hasWeightLoss && hasNightSweats) {
    result =
      "You may be exhibiting symptoms of tuberculosis. It is crucial to consult a doctor for further evaluation and testing.";
  } else if (hasCough && (hasFever || hasWeightLoss || hasNightSweats)) {
    result =
      "Your symptoms could be related to tuberculosis. It is recommended to see a doctor for proper diagnosis.";
  } else if (hasCough || hasFever || hasWeightLoss || hasNightSweats) {
    result =
      "While your symptoms may not directly indicate tuberculosis, it is still advisable to seek medical advice for proper evaluation.";
  } else {
    result =
      "Your symptoms do not seem to indicate tuberculosis. However, if you have any concerns, consulting a healthcare professional is always wise.";
  }

  return result;
};
