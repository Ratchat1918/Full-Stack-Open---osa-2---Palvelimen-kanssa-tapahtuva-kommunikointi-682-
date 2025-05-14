function MyHeader({ course }) {
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  return (
    <>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
    </>
  );
}
export default MyHeader;
