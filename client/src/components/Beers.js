import {React, Component} from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import axios from 'axios';

class Beers extends Component {
  state = { beers: []}   
    componentDidMount() {
    axios.get('/api/all_beers.json')
      .then( res => {
       this.setState({ beers: res.data });
      })
  }

  allBeers = () => {
    return this.state.beers.map(s => {
      return( <Card
      header="`${s.name}`"
      description='`${s.description}`'
      />
        
      )
    });
  }
  
  render () {
    const { beers } = this.setState;
    return(
     this.allBeers
    )
  }
} 


export default connect()(Beers);