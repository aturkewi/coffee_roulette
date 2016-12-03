class Employees extends React.Component{
  
  constructor(props){
    super(props);
    
    this.state={
      employees:[]
    }
  }
  
  componentWillMount(){
    fetch('/employees')
      .then(res => res.json())
      .then(json => this.setState({employees: json}))
  }
  
  render(){
    return(
      <div>
        There are all of the employees
        <hz />
        {this.state.employees.map(e => <Employee info={e}/>)}
      </div>
    )
  }
}