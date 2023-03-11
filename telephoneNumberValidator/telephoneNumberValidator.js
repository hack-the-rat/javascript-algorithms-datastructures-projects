function telephoneCheck(str) {
  const validPatterns = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^\(\d{3}\) \d{3}-\d{4}$/,
    /^\d{3} \d{3} \d{4}$/,
    /^\d{10}$/,
    /^1 \d{3} \d{3} \d{4}$/,
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/
  ];

  return validPatterns.some((pattern) => pattern.test(str));
}

telephoneCheck("555-555-5555");
