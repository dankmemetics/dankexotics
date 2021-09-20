import { CardStyles } from './common.card';
import { Meter } from './common.meter';

export function Modifier({ type = 'marketplace' }) {
  return (
    <CardStyles>
      <img src="/papers/raw.webp" />
      <div className="text">
        <h3>Raw Papers</h3>
        <div className="accent" />
        
        <div className="traits">                  
          <div className="trait potency">
            <p>THC Potency Increase 2%</p>
            <div className="meter-wrap">
              <Meter width={2} height={15} />
            </div>
          </div>

          <div className="trait potency">
            <p>CBD Potency Increase 1%</p>
            <div className="meter-wrap">
              <Meter width={1} height={15}/>
            </div>
          </div>

        </div>

      </div>
    </CardStyles>
  )
}