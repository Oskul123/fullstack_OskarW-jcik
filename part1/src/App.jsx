const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return (
      <div>{props.course}</div>
    )
  }
  const Part = (props) => {
    return (
      <div>
      <p>
        {props.p1} {props.ex1}
      </p>
      <p>
        {props.p2} {props.ex2}
      </p>
      <p>
        {props.p3} {props.ex3}
      </p>
      </div>
    )
  }

  const Total = (props) =>{
    return (
      <p> Number of exercises: {props.ex1 + props.ex2 + props.ex3}</p>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Part p1={part1} ex1={exercises1} p2={part2} ex2={exercises2} p3={part3} ex3={exercises3}/>
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
    </div>
  )
}

export default App