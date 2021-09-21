import styled from 'styled-components';
import { Gradient3 } from '../brand/brand.gradients';

export const ConnectStyles = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${Gradient3};
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 900;

    @keyframes loader {
        0%      { transform: translateY(0); }
        50%     { transform: translateY(-25px); }
        100%    { transform: translateY(0); }
    }

    img {
        height: 64px;
        animation: loader 5s infinite;
    }

    p {
        font-size: 24px;
        font-weight: 300;
        letter-spacing: 1px;
        padding: 30px;
    }

    &.active {
        display: flex;
    }
`;

export function Connect({ active = false }) {
    return(
        <ConnectStyles className={active ? 'active' : ''}>
            <img src="/images/logo.png"/>
            <p>Connect your wallet to view your dank nuggets</p>
        </ConnectStyles>
    )
}