import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

class Beers extends Component {
  state = { beers: []}   
  componentDidMount() {
    axios.get("/api/all_beers").then(res => {
      this.setState({ beers: res.data });
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