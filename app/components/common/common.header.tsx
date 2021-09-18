import Link from 'next/link';
import styled from 'styled-components';

import { FaRegAddressCard } from 'react-icons/fa';
import { BiStoreAlt } from 'react-icons/bi';
import { GiSecretBook } from 'react-icons/gi';

import { Gradient2 } from '../brand/brand.gradients';

export const HeaderStyles = styled.div`
  background: ${Gradient2};
  width: 100%;
  height: 70px;

  div.wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1200px;
    margin: auto;
    height: 100%;
    padding: 0 15px;

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


    div.hitems {
      display: flex;
      height: 100%;

      a.item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 15px;
        height: 100%;
        color: white;
        font-size: 18px;
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
    }
  }
`;

export function Header({ tab }) {
  return (
    <HeaderStyles>
      <div className="wrap">
        <Link href="/">
          <a className={`brand ${tab === 'index' ? 'active' : ''}`}>
            <img src="/images/logo.png"/>
            <h2>Dank Exotics</h2>
          </a>
        </Link>
       
        <div className="hitems">
          <Link href="/profile">
            <a className={`item ${tab === 'profile' ? 'active' : ''}`}>
              <FaRegAddressCard className="icon"/>
              Profile
            </a>
          </Link>
          <Link href="/dankpedia">
            <a className={`item ${tab === 'exotipedia' ? 'active' : ''}`}>
              <GiSecretBook className="icon"/>
              Dankpedia
            </a>
          </Link>
          <Link href="/auctions">
            <a className={`item ${tab === 'auctions' ? 'active' : ''}`}>
              <BiStoreAlt className="icon" />
              Auctions
            </a>
          </Link>
        </div>        
      </div>
    </HeaderStyles>
  )
}