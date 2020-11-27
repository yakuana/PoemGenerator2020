import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 

// actions 
import { getWheatleyData, getDunbarData, getHammonData } from '../actions/index.js'

const Home = (props) => {

    useEffect(() => {
        props.getWheatleyData() 
        props.getHammonData() 
        props.getDunbarData()
    }, []) 
    
    return (
        <div id="home-container">
            <div id="home-artist-container">
                <h2>Artists</h2>
                <ol id="artist-list">
                    <li>Phillis Wheatley</li>
                    <li>Paul Laurence Dunbar</li>
                    <li>Jupiter Hammon</li>
                </ol>
            </div>

            <div>
                
            </div>
        </div>
    );
}; 

const mapStateToProps = state => {
    return {
        poems: state.poems
    }; 
}; 

export default connect(
    mapStateToProps, 
    { 
        getDunbarData, 
        getHammonData, 
        getWheatleyData,
    }
)(Home);