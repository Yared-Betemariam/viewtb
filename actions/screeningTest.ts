"use server";

export const screeningTest = (userData: string) => {
  const data = JSON.parse(userData);

  let result = "";
  if (data.items.length <= 0) {
    result = "Screening test are done if you have one of the listed symptoms";
  }
  if ((data.items.length = 1)) {
    result =
      "Your symptoms don't suggest tuberculosis. If concerned, consult a healthcare professional.";
  } else if (data.items.length > 1) {
    result =
      "You may be exhibiting symptoms of tuberculosis. It is crucial to consult a doctor for further evaluation and testing.";
  }
  // if (hasCough && hasFever && hasWeightLoss && hasNightSweats) {
  //   result =
  //     "You may be exhibiting symptoms of tuberculosis. It is crucial to consult a doctor for further evaluation and testing.";
  // } else if (hasCough && (hasFever || hasWeightLoss || hasNightSweats)) {
  //   result =
  //     "Your symptoms could be related to tuberculosis. It is recommended to see a doctor for proper diagnosis.";
  // } else if (hasCough || hasFever || hasWeightLoss || hasNightSweats) {
  //   result =
  //     "While your symptoms may not directly indicate tuberculosis, it is still advisable to seek medical advice for proper evaluation.";
  // } else {
  //   result =
  //     "Your symptoms do not seem to indicate tuberculosis. However, if you have any concerns, consulting a healthcare professional is always wise.";
  // }

  return result;
};
