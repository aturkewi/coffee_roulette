class Employees extends React.Component{
  
  constructor(props){
    super(props);
    
    this.activeEmployees = this.activeEmployees.bind(this);
    this.deactiveEmployees = this.deactiveEmployees.bind(this);
    
    this.state={
      employees:[]
    }
  }
  
  componentWillMount(){
    fetch('/employees')
      .then(res => res.json())
      .then(json => this.setState({employees: json}))
  }
  
  activeEmployees(){
    return this.state.employees.filter(e => e.active === true)
  }
  
  deactiveEmployees(){
    return this.state.employees.filter(e => e.active === false)
  }
  
  render(){
    return(
      <div>
        
        <h2>Active Employees</h2>
        {this.activeEmployees().map(e => <Employee info={e}/>)}
        <hr />
        
        <h2>Deactive Employees</h2>
        {this.deactiveEmployees().map(e => <Employee info={e}/>)}

      </div>
    )
  }
}