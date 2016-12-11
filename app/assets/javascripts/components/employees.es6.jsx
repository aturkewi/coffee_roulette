class Employees extends React.Component{
  
  constructor(props){
    super(props);
    
    this.activeEmployees = this.activeEmployees.bind(this);
    this.deactiveEmployees = this.deactiveEmployees.bind(this);
    this.toggleActiveStatus = this.toggleActiveStatus.bind(this);
    
    this.state={
      employees:[]
    }
  }
  
  componentWillMount(){
    fetch('/employees')
      .then(res => res.json())
      .then(json => this.setState({employees: json}))
  }
  
  toggleActiveStatus(id, e){
    e.preventDefault();
    fetch(`/employees/${id}?&authenticity_token=${this.props.authenticity_token}`,
      {method: 'PATCH',
      body: JSON.stringify({ 'active': true })})
      .then(res => res.json())
      .then(json => console.log(json))
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
        {this.activeEmployees().map(e => <Employee key={e.id} info={e} toggleStatus={this.toggleActiveStatus.bind(null, e.id)}/>)}
        <hr />
        
        <h2>Deactive Employees</h2>
        {this.deactiveEmployees().map(e => <Employee  key={e.id} info={e}  toggleStatus={this.toggleActiveStatus.bind(null, e.id)}/>)}

      </div>
    )
  }
}