"use server";

export const screeningTest = (userData: string) => {
  const data = JSON.parse(userData);

  let result = "";
  if (data.items.length <= 0) {
    result = "ምልክቶቹ ቲቢን አይጠቁሙም። የሚያሳስብዎ ከሆነ፥ የጤና ባለሙያ ያማክሩ።";
  } else if (data.items.length >= 1) {
    result = "የቲቢ በሽታ ምልክቶች እየታዩብዎ ሊሆን ይችላል። ለበለጠ ምርመራ የጤና ባለሙያ ማማከር አስፈላጊ ነው።";
  }

  return result;
};
