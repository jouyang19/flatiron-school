// A React component is a function that returns JSX.
// We can optionally export the function to use it in other files.
export const App = () => {
  const buildTool = "Parcel";
  const link = "https://google.com";
  return (
    <>
      <h1>{buildTool} + React!</h1>
      <a href={link}>Google</a>
    </>
  );
};
