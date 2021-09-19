import Link from 'next/link';
import { CardStyles } from './common.card';
import { Trait } from './common.trait';
import { Meter } from './common.meter';

export function Nugget({
  className = 'nugget',
  image = 2,
  label = 'Granddaddy Purple Kush',
  type = 'Indica',
  terpene = 'Myrcene',
  thc = 17,
  cbd = 2,
  rarity = '1 of 100',
  displayRarity = true,
  url = '',
}) {
  return (
    <CardStyles className={className}>
      <img src={`/exotics/${image}.jpg`} />
      <div className="text">
        <h3>{label}</h3>
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

          {
            displayRarity ? 
              <div className="trait rarity">
                {rarity}
              </div>
              : ''
          }

          
          {
            url ?
            <Link href={url}>
              <a className="view-button">
                View Exotic
              </a>
            </Link>
            :
            <a className="view-button">
              View Exotic
            </a>
          }
        </div>

      </div>
    </CardStyles>
  )
}