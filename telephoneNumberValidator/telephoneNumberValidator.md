# Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

# Tests
1. telephoneCheck("555-555-5555") should return a boolean.
2. telephoneCheck("1 555-555-5555") should return true.
3. telephoneCheck("1 (555) 555-5555") should return true.
4. telephoneCheck("5555555555") should return true.
5. telephoneCheck("555-555-5555") should return true.
6. telephoneCheck("(555)555-5555") should return true.
7. telephoneCheck("1(555)555-5555") should return true.
8. telephoneCheck("555-5555") should return false.
9. telephoneCheck("5555555") should return false.
10. telephoneCheck("1 555)555-5555") should return false.
11. telephoneCheck("1 555 555 5555") should return true.
12. telephoneCheck("1 456 789 4444") should return true.
13. telephoneCheck("123**&!!asdf#") should return false.
14. telephoneCheck("55555555") should return false.
15. telephoneCheck("(6054756961)") should return false.
16. telephoneCheck("2 (757) 622-7382") should return false.
17. telephoneCheck("0 (757) 622-7382") should return false.
18. telephoneCheck("-1 (757) 622-7382") should return false.
19. telephoneCheck("2 757 622-7382") should return false.
20. telephoneCheck("10 (757) 622-7382") should return false.
21. telephoneCheck("27576227382") should return false.
22. telephoneCheck("(275)76227382") should return false.
23. telephoneCheck("2(757)6227382") should return false.
24. telephoneCheck("2(757)622-7382") should return false.
25. telephoneCheck("555)-555-5555") should return false.
26. telephoneCheck("(555-555-5555") should return false.
27. telephoneCheck("(555)5(55?)-5555") should return false.
28. telephoneCheck("55 55-55-555-5") should return false.
29. telephoneCheck("11 555-555-5555") should return false.
