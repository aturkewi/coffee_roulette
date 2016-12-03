class Employees extends React.Component{
  
  componentWillMount(){
    console.log('My employees component will mount');
  }
  
  render(){
    return(
      <div>
        My employees are in here
      </div>
    )
  }
}