import React from 'react';
import {
    StyledButton,
    StyledContainer,
    StyledIcon,
    StyledIconSection,
    StyledInfoSection,
    StyledInfoSpan,
    StyledInfoSubSpan
} from './styles';
import { IQuote } from './types';
import { CarIcon } from '../../assets/images';

const PriceQuote: React.FunctionComponent<IQuote> = ({ onClick }) => {
    return (
        <StyledContainer>
            <StyledInfoSection>
                <StyledInfoSpan>Selling a car? We’re buying!</StyledInfoSpan>
                <StyledInfoSubSpan>
                    Get up to <b>₹20,000</b> when you sell and buy your next car from us.
                </StyledInfoSubSpan>
                <StyledButton onClick={onClick}>GET CAR PRICE</StyledButton>
            </StyledInfoSection>
            <StyledIconSection>
                <StyledIcon src={CarIcon} />
            </StyledIconSection>
        </StyledContainer>
    );
};

export default PriceQuote;
