import { HashRouter, Route, Switch } from 'react-router-dom';
import { Providers } from './providers';
import {
  AnalyticsView,
  ArtCreateView,
  ArtistsView,
  ArtistView,
  ArtView,
  ArtworksView,
  AuctionCreateView,
  AuctionView,
  HomeView,
} from './views';
import { AdminView } from './views/admin';
import { BillingView } from './views/auction/billing';
import { Index } from './dank/splash';
import { Dankpedia } from './dank/dankpedia';
import { Profile } from './dank/profile';
import { Auctions } from './dank/auctions';
import { Nugget } from './dank/nugget';
import { Auction } from './dank/auction';
import { Schedule } from './dank/schedule';

export function Routes() {
  return (
    <>
      <HashRouter basename={'/'}>
        <Providers>
          <Switch>
            <Route exact path="/admin" component={() => <AdminView />} />
            <Route
              exact
              path="/analytics"
              component={() => <AnalyticsView />}
            />
            <Route
              exact
              path="/art/create/:step_param?"
              component={() => <ArtCreateView />}
            />
            <Route
              exact
              path="/artworks/:id?"
              component={() => <ArtworksView />}
            />
            <Route exact path="/art/:id" component={() => <ArtView />} />
            <Route exact path="/artists/:id" component={() => <ArtistView />} />
            <Route exact path="/artists" component={() => <ArtistsView />} />
            <Route
              exact
              path="/auction/create/:step_param?"
              component={() => <AuctionCreateView />}
            />
            <Route
              exact
              path="/auction/:id"
              component={() => <AuctionView />}
            />
            <Route
              exact
              path="/auction/:id/billing"
              component={() => <BillingView />}
            />
            <Route path="/schedule" component={() => <Schedule />} />
            <Route path="/auctions/:id" component={() => <Auction/>}/>
            <Route path="/auctions" component={() => <Auctions />} />
            <Route path="/profile" component={() => <Profile />} />
            <Route path="/dankpedia/nugget/:id" component={() => <Nugget />} />
            <Route path="/dankpedia" component={() => <Dankpedia />} />
            <Route path="/" component={() => <Index />} />
          </Switch>
        </Providers>
      </HashRouter>
    </>
  );
}
