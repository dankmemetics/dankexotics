import Link from 'next/link';
import styled from 'styled-components';

import { FaRegAddressCard } from 'react-icons/fa';
import { BiStoreAlt } from 'react-icons/bi';
import { GiSecretBook } from 'react-icons/gi';

import { Gradient2 } from '../brand/brand.gradients';

export const FooterStyles = styled.div`
    background: ${Gradient2};
    width: 100%;
    height: 300px;

    div.wrap {    
        width: 100%;
        max-width: 1200px;
        margin: auto;
        height: 100%;
        padding: 15px;

        @media (max-width: 1128px) {    
            padding: 15px 30px;
        }

        a.brand {
            display: flex;
            align-items: center;
            color: white;
            padding: 15px 0;

            text-decoration: none;
            font-size: 32px;
            letter-spacing: 1px;
      
            img {
              width: 48px;
            }
      
            h2 {
              font-size: 32px;
              font-weight: 400;
              padding: 2.5px 15px 0 15px;
            }
        }
    }

    div.accent {
        width: 180px;
        border-bottom: 2px solid white;
    }
    

    div.hitems {
        display: flex;
        flex-direction: column;
        padding: 15px 0;
        a.item {
            display: flex;
            align-items: center;
            color: white;
            font-size: 18px;
            text-decoration: none;

            width: 320px;
            height: 50px;

            .icon {
                margin: 0 10px 0 0;
            }
            
            border-bottom: 3px solid transparent;

            &:hover {
                border-bottom: 3px solid white;
            }
        }
    }
`;

export function Footer() {
    return(
        <FooterStyles>
            <div className="wrap">
                <a className="brand">
                    <img src="/images/logo.png"/>
                    <h2>Dank Exotics</h2>
                </a>

                <div className="accent"/>

                <div className="hitems">
                    <Link href="/profile">
                        <a className="item">
                        <FaRegAddressCard className="icon"/>
                        Profile
                        </a>
                    </Link>
                    <Link href="/dankpedia">
                        <a className="item">
                        <GiSecretBook className="icon"/>
                        Dankpedia
                        </a>
                    </Link>
                    <Link href="/auctions">
                        <a className="item">
                        <BiStoreAlt className="icon" />
                        Auctions
                        </a>
                    </Link>
                </div>  
            </div>
        </FooterStyles>
    )
}