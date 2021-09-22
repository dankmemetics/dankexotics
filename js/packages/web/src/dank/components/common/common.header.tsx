import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import { CgMenu } from 'react-icons/cg';
import { FaRegAddressCard } from 'react-icons/fa';
import { BiStoreAlt } from 'react-icons/bi';
import { GiSecretBook } from 'react-icons/gi';
import { BsCalendar } from 'react-icons/bs';

import { Gradient2 } from '../brand/brand.gradients';

export const HeaderStyles = styled.div`
  position: relative;
  background: ${Gradient2};
  width: 100%;
  height: 70px;
  z-index: 901;

  div.wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1200px;
    margin: auto;
    height: 100%;
    padding: 0 15px;

    @media (max-width: 1128px) {    
      padding: 0 30px;
    }

    a {
      text-decoration: none;
      height: 100%;
    }
  
    a.brand {
      display: flex;
      align-items: center;
      height: 100%;
      color: white;
      border-bottom: 5px solid transparent;

      &.active {
        border-bottom: 5px solid white;
      }

      text-decoration: none;
      letter-spacing: 1px;

      img {
        width: 32px;
      }

      h2 {
        font-size: 24px;
        font-weight: 400;
        padding: 2.5px 5px 0 10px;
      }

      @media (max-width: 1023px) {    
        img {
          width: 42px;
        }

        h2 {
          font-size: 24px;
        }
      }
    }

    a.menu-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      cursor: pointer;

      width: 70px;
      height: 100%;

      @media (min-width: 1023px) {    
        display: none;
      }
    }


    div.hitems {
      display: flex;
      align-items: center;
      height: 100%;

      .wallet-adapter-dropdown {
        display: flex;
        align-items: center;
        height: 100%;
      }

      .wallet-adapter-button {
        height: 40px;
        font-size: 14px;
        font-weight: 400;
        font-family: Montserrat;
        margin: 0 0 0 15px;

        @media (max-width: 1023px) {  
          margin: 10px 15px;
        }
      }

      a.item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        height: 100%;
        color: white;
        font-size: 16px;
        cursor: pointer;
        text-decoration: none;

        .icon {
          margin: 0 10px 0 0;
        }

        border-bottom: 5px solid transparent;

        &:hover {
          border-bottom: 5px solid rgba(255, 255, 255, 0.5);
        }

        &.active {
          border-bottom: 5px solid white;
        }
      }

      @media (max-width: 1023px) {    
        display: none;
        background: ${Gradient2};
        position: absolute;
        right: 0;
        top: 70px;

        flex-direction: column;
        align-items: flex-start;
        height: auto;
        width: 100%;
        padding: 15px 0 0 0;

        a.item {
          width: 100%;
          justify-content: flex-start;
          padding: 5px 15px;

          &.active {
            border-bottom: none;
          }
        }

        &.active {
          display: flex;
        }
      }
    }
  }
`;

export function Header({ tab }) {
  const { publicKey } = useWallet();
  const [menu, setMenu] = useState(false);

  return (
    <HeaderStyles>
      <div className="wrap">
        <Link to="/">
          <a className={`brand ${tab === 'index' ? 'active' : ''}`}>
            <img src="/images/logo.png"/>
            <h2>Dank Exotics</h2>
          </a>
        </Link>

        <a className="menu-toggle" onClick={e => setMenu(!menu)}>
          <CgMenu/>
        </a>
       
        <div className={`hitems ${menu ? 'active' : ''}`}>
          <Link to="/profile">
            <a className={`item ${tab === 'profile' ? 'active' : ''}`}>
              <FaRegAddressCard className="icon"/>
              Profile
            </a>
          </Link>
          <Link to="/dankpedia">
            <a className={`item ${tab === 'dankpedia' ? 'active' : ''}`}>
              <GiSecretBook className="icon"/>
              Dankpedia
            </a>
          </Link>
          <Link to="/schedule">
            <a className={`item ${tab === 'schedule' ? 'active' : ''}`}>
              <BsCalendar className="icon"/>
              Schedule
            </a>
          </Link>
          <Link to="/auctions">
            <a className={`item ${tab === 'auctions' ? 'active' : ''}`}>
              <BiStoreAlt className="icon" />
              Auctions
            </a>
          </Link>

          <WalletModalProvider logo="/images/logo.png">
            <WalletMultiButton />
            {
              publicKey ? <WalletDisconnectButton /> : ''
            }
          </WalletModalProvider>
        </div>        
      </div>
    </HeaderStyles>
  )
}