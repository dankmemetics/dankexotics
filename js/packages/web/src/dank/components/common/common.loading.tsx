import styled from 'styled-components';
import { Gradient3 } from '../brand/brand.gradients';

export const LoadingStyles = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${Gradient3};
    display: none;
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

    &.active {
        display: flex;
    }
`;

export function Loading({ active = false }) {
    return(
        <LoadingStyles className={active ? 'active' : ''}>
            <img src="/images/logo.png"/>
        </LoadingStyles>
    )
}