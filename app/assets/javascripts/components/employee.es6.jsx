class Employee extends React.Component {
  render () {
    return (
      <div>
        {this.props.info.name} <button onClick={this.props.toggleStatus}>{this.props.active ? 'Reactivate' : 'Deactivate'}</button>
      </div>
    );
  }
}

