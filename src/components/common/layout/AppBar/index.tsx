import { AppBarPresentation } from "./AppBar";

// TODO
const isSigned = true;
const handleSignIn = () => {};
const handleSignOut = () => {};

const props = {
  isSigned,
  handleSignIn,
  handleSignOut,
};

export const AppBar = () => {
  return <AppBarPresentation {...props} />;
};
