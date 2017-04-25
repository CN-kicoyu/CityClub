'use strict';

import {Dimensions} from 'react-native';

const deviceWidthtDp = Dimensions.get('window').width;

const uiWidthtPx = 750;

export default function px2dp(uiElementPx) {
    return uiElementPx *  deviceWidthtDp / uiWidthtPx;
}