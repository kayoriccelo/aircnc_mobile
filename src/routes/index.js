import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from '../apps/SignIn';
import Spot from '../apps/Spot';
import Booking from '../apps/Booking';

const Routes = createAppContainer(
    createSwitchNavigator({
        SignIn,
        Spot,
        Booking
    })
);

export default Routes;
