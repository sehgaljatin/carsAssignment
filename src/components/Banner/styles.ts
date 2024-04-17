import styled from 'styled-components';
import { BannerIcon } from '../../assets/images';
export const StyledBannerContainer = styled.div`
    display: flex;
    background-image: url(${BannerIcon});
    background-size: cover;
    background-position: center;
    height: 400px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
`;

export const StyledTextContainer = styled.div`
    width: 400px;
    display: flex;
    color: #ffffff;
    padding: 0px 100px;
    flex-direction: column;
    /* gap: 0px; */
`;

export const StyledText = styled.span`
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    color: #fff;
    display: block;
`;

export const StyledHeading = styled.span`
    margin-bottom: 0;
    font-family: var(--main-font);
    font-weight: 700;
    font-size: 36px;
    line-height: 46px;
    color: #fff;
`;
