class AddEmployee extends React.Component{
  render(){
    return(
      <div>
        <h3>Add new employee</h3>
        <form onSubmit={this.props.onSubmit}>
          <input name="employee[name]" placeholder="Employee Name"/>
          <input name="employee[department]" placeholder="Department"/>
          <input type="submit" value="Add"/>    
        </form>
      </div>
    )
  }
}