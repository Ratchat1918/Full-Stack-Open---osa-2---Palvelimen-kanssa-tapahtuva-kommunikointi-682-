function Course({ course }) {
  let exerciseTotal1 = 0;
  let exerciseTotal2 = 0;
  course[0].parts.forEach((element) => {
    exerciseTotal1 += element.exercises;
  });
  course[1].parts.forEach((element) => {
    exerciseTotal2 += element.exercises;
  });
  return (
    <div>
      <h1>Web developmwnt curriculum</h1>
      <h2>{course[0].name}</h2>
      <p>
        {course[0].parts[0].name} {course[0].parts[0].exercises}
      </p>
      <p>
        {course[0].parts[1].name} {course[0].parts[1].exercises}
      </p>
      <p>
        {course[0].parts[2].name} {course[0].parts[2].exercises}
      </p>
      <p>
        {course[0].parts[3].name} {course[0].parts[3].exercises}
      </p>
      <b>
        <p>total of exercises {exerciseTotal1}</p>
      </b>
      <h2>{course[1].name}</h2>
      <p>
        {course[1].parts[0].name} {course[1].parts[0].exercises}
      </p>
      <p>
        {course[1].parts[1].name} {course[1].parts[1].exercises}
      </p>
      <b>
        <p>total of exercises {exerciseTotal2}</p>
      </b>
    </div>
  );
}
export default Course;
