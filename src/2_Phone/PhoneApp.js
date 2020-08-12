import React from 'react';
import PhoneForm from './PhoneForm';
import PhoneInfoList from './PhoneInfoList';


class PhoneApp extends React.Component {
  id = 2
  state = {
    information : [
      {
        id : 0,
        name : '임준규',
        phone : '010-1234-1244'
      },
      {
        id : 1,
        name : '김이박',
        phone : '010-1234-3456'
      }
    ]
  } 

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information : information.concat({ id : this.id++, ...data })
    })
  }
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information : information.filter(info => info.id !== id)
    })
  }
  handleUpdate = (id,data) => {
    const { information } = this.state;
    this.setState({
      information : information.map(
        info => id === info.id
        ? { ...info, ...data }
        : info
      )
    })
  }

  render(){
    const { information } = this.state
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfoList 
          data={this.state.information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default PhoneApp;
