import Prompt from "../Prompt";

const body =
  "Your wish list is important to us, so we recommend logging in or creating an account to make sure it’s always there when you need it.";

const LoginPrompt = () => {
  return (
    <Prompt
      title="hey there!"
      body={body}
      action={
        <>
          <a href="/signup">create account</a>
          <a href="/login">log in</a>
        </>
      }
    />
  );
};

export default LoginPrompt;
