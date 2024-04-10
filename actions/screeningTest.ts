"use server";

export const screeningTest = (userData: string) => {
  const data = JSON.parse(userData);

  let result = "";
  if (data.items.length <= 0) {
    result =
      "Your symptoms don't suggest tuberculosis. If concerned, consult a healthcare professional.";
  } else if (data.items.length >= 1) {
    result =
      "You may be exhibiting symptoms of tuberculosis. It is crucial to consult a doctor for further evaluation and testing.";
  }

  return result;
};
