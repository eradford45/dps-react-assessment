import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import axios from 'axios';

class Beers extends Component {
  state = { beers: [] }   
  componentDidMount() {
    axios.get("/api/all_beers?page=20&per_page=5").then(res => {
      this.setState({ beers: res.data }); debugger
    });
  }
  
  
  
  render () {
    const { beers } = this.setState;
    return( 
      <Card.Group>
        <Card>
          <Card.Content>  
            <Card.Header>
              "Hello World"
            </Card.Header>
            <Card.Description>
              "Hellow World"
            </Card.Description>
          </Card.Content>
        </Card>
     </Card.Group>
    )
  }
} 


export default connect()(Beers);