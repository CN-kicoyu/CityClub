'use strict';

import { PixelRatio, Dimensions, Platform } from 'react-native'

export default {
    // 获取屏幕高宽
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
}