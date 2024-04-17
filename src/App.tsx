import React from 'react';
import './App.css';
import { StyledMainContainer } from './styles';
import Header from './components/Header';
import Banner from './components/Banner';
import PriceQuote from './components/PriceQuote';

function App() {
    return (
        <StyledMainContainer>
            <Header />
            <Banner />
            <PriceQuote onClick={() => alert('Perform OnClick Action')} />
        </StyledMainContainer>
    );
}

export default App;
