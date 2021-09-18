import { CardStyles } from './common.card';
import { Trait } from './common.trait';
import { Meter } from './common.meter';

export function Nugget({
  className = 'nugget',
  image = '2',
  label = 'Granddaddy Purple Kush',
  type = 'Indica',
  terpene = 'Myrcene',
  thc = 17,
  cbd = 2,
  mint = 1,
  supply = 100,
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

          <div className="trait rarity">
            #{mint} of {supply}
          </div>

          <a className="view-button">
            View Exotic
          </a>

        </div>

      </div>
    </CardStyles>
  )
}