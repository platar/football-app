import React, {Component} from 'react'

class AddPlayer extends Component {

    state = { 
        name: ''
    }

    handleChange = (e) => {
        this.setState({
          name: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.addPlayer(this.state);
        this.setState({
            name: ''
        })
    }

    render() {
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new player:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.name} />
                </form>
            </div>
        )
    }
}

export default AddPlayer;