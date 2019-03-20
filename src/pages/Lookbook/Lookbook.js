import React, {Component} from 'react';
import Nav from '../../components/Nav';
import Cover from './Cover';
import LookbookSlider from './Slider/LookbookSlider';

class Lookbook extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Cover />
                <LookbookSlider />
            </div>
        );
    }
}

export default Lookbook;