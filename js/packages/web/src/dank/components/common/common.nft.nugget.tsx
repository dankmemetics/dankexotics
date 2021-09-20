import { Link } from 'react-router-dom';
import { CardStyles } from './common.card';
import { Trait } from './common.trait';
import { Meter } from './common.meter';
import { useArt, useExtendedArt } from '../../../hooks';
import { ArtType } from '../../../types';

export function NftNugget({
  className = 'nugget',
  pubkey = '',
  image = '',
  attributes = [],
}) {
  const art = useArt(pubkey);

  let badge = '';
  if (art.type === ArtType.NFT) {
    badge = 'Unique';
  } else if (art.type === ArtType.Master) {
    badge = 'NFT 0';
  } else if (art.type === ArtType.Print) {
    badge = `${art.edition} of ${art.supply}`;
  }

  let type = 'Indica';
  let terpene = 'Myrcene';
  let thc = 1;
  let cbd = 1;
  let url = '1';

  for (let i = 0; i < attributes.length; i++) {
    const attr: any = attributes[i];

    if (attr.trait_type === 'thc') {
      thc = attr.value;
    }

    if (attr.trait_type === 'cbd') {
      cbd = attr.value;
    }

    if (attr.trait_type === 'type') {
      type = attr.value;
    }

    if (attr.trait_type === 'terpene') {
      terpene = attr.value;
    }

    if (attr.trait_type === 'ref_id') {
      url = attr.value;
    }
  }

  return (
    <CardStyles className={className}>
      <img src={image ? image : '/exotics/1.jpg'} />
      <div className="text">
        <h3>{art.title}</h3>
        <div className="accent" />
        
        <div className="traits">
          <div className="trait label">
            <Trait type={type} label={type}/>
            <Trait type={terpene} label={terpene}/>
          </div>
          
          <div className="trait marker">
            <p>THC {thc}%</p>
            <div className="meter-wrap">
              <Meter width={thc} height={15} />
            </div>
          </div>

          <div className="trait marker">
            <p>CBD {cbd}%</p>
            <div className="meter-wrap">
              <Meter width={cbd} height={15}/>
            </div>
          </div>

          <div className="trait rarity">
            {badge}
          </div>
          
          <Link to={`/dankpedia/nugget/${url}`}>
            <a className="view-button">
              View Exotic
            </a>
          </Link>
        </div>

      </div>
    </CardStyles>
  )
}