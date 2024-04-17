import React from 'react';
import {
    StyledContainer,
    StyledDropdown,
    StyledHeaderContainer,
    StyledLogo,
    StyledSignInButton,
    StyledWrapper
} from './styles';
import { IHeader } from './types';
import { Cars24Logo } from '../../assets/images';

const Header: React.FunctionComponent<IHeader> = ({ relationship }) => {
    return (
        <StyledContainer>
            <StyledHeaderContainer>
                <StyledWrapper>
                    <StyledLogo src={Cars24Logo} />
                    <StyledDropdown>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Chandigarh">Chandigarh</option>
                    </StyledDropdown>
                </StyledWrapper>

                <StyledWrapper>
                    <StyledDropdown>
                        <option value="buy">Buy Car</option>
                    </StyledDropdown>
                    <StyledDropdown>
                        <option value="sell">Sell Car</option>
                    </StyledDropdown>
                </StyledWrapper>

                <StyledSignInButton onClick={() => alert('Sign In here')}>Sign In</StyledSignInButton>
            </StyledHeaderContainer>
        </StyledContainer>
    );
};

export default Header;
