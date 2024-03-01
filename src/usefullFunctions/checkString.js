export const checkPasswordValidity = function(value) {
  const isNonWhiteSpace = /^\S*$/;
  if (!isNonWhiteSpace.test(value)) {
    console.log("Password must not contain Whitespaces.");
    return false;
  }

  const isContainsUppercase = /^(?=.*[A-Z]).*$/;
  if (!isContainsUppercase.test(value)) {
    console.log("Password must have at least one Uppercase Character.");
    return false;
  }

  const isContainsLowercase = /^(?=.*[a-z]).*$/;
  if (!isContainsLowercase.test(value)) {
    console.log("Password must have at least one Lowercase Character.")
    return false;
  }

  const isContainsNumber = /^(?=.*[0-9]).*$/;
  if (!isContainsNumber.test(value)) {
    console.log("Password must contain at least one Digit.");
    return false;
  }

  const isContainsSymbol =
    /^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/;
  if (!isContainsSymbol.test(value)) {
    console.log("Password must contain at least one Special Symbol.");
    return false;
  }

  const isValidLength = /^.{6,12}$/;
  if (!isValidLength.test(value)) {
    console.log("Password must be 10-16 Characters Long.")
    return false;
  }

  return true;
}
