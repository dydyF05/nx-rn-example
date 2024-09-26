import { normalizePixel } from '@example/mobile-utils-shared';

export const theme = {
  jams: {
    grey: {
      white: '#FFFFFF',
      whiteDark: '#F4F4F5',
      greyLight: '#D4D4D8',
      greyDark: '#A1A1AA',
      blackLight: '#52525B',
      black: '#18181B',
    },
    colors: {
      blueDark: '#040050',
      blueFluo: '#1408FF',
      blue: '#8FC0FF',
      blueLight: '#EFF6FF',
      orangeFluo: '#FF5310',
      orange: '#FF9C75',
      orangeLight: '#FFF7ED',
      pinkFluo: '#FF0DF5',
      pink: '#FF75F9',
      pinkLight: '#FDF4FF',
      yellowFluo: '#FFF628',
      yellow: '#FBF460',
      yellowLight: '#FEFCE8',
      purpleFluo: '#9208FF',
      purple: '#C780FF',
      purpleLight: '#F5F3FF',
      greenFluo: '#16FF73',
      green: '#65F69F',
      greenLight: '#F0FDF4',
    },
    overlay: {
      overlayLight: '#FFFFFF4D',
      // TODO : react native linear gradient ?
      overlayDark: '#18181B',
    },
    border: {
      tabBar: '#404040',
    },
  },
};

export const styles = {
  baseTitle: {
    fontSize: normalizePixel(36),
    // paddingTop: normalizePixel(8),
    // paddingBottom: normalizePixel(8),
    // paddingLeft: normalizePixel(16),
    color: theme.jams.grey.white,
  },
  flex1: {
    flex: 1,
  },
  marginStyle: {
    mt0: {
      marginTop: normalizePixel(0),
    },
    mt1: {
      marginTop: normalizePixel(1),
    },
    mt2: {
      marginTop: normalizePixel(2),
    },
    mt4: {
      marginTop: normalizePixel(4),
    },
    mt6: {
      marginTop: normalizePixel(6),
    },
    mt8: {
      marginTop: normalizePixel(8),
    },
    mt12: {
      marginTop: normalizePixel(12),
    },
    mt16: {
      marginTop: normalizePixel(16),
    },
    mt24: {
      marginTop: normalizePixel(24),
    },
    mt32: {
      marginTop: normalizePixel(32),
    },
    mt40: {
      marginTop: normalizePixel(40),
    },
    mt48: {
      marginTop: normalizePixel(48),
    },
    mtAuto: {
      marginTop: 'auto' as const,
    },
    mr0: {
      marginRight: normalizePixel(0),
    },
    mr1: {
      marginRight: normalizePixel(1),
    },
    mr2: {
      marginRight: normalizePixel(2),
    },
    mr4: {
      marginRight: normalizePixel(4),
    },
    mr6: {
      marginRight: normalizePixel(6),
    },
    mr8: {
      marginRight: normalizePixel(8),
    },
    mr12: {
      marginRight: normalizePixel(12),
    },
    mr16: {
      marginRight: normalizePixel(16),
    },
    mr24: {
      marginRight: normalizePixel(24),
    },
    mr32: {
      marginRight: normalizePixel(32),
    },
    mr40: {
      marginRight: normalizePixel(40),
    },
    mr48: {
      marginRight: normalizePixel(48),
    },
    mrAuto: {
      marginRight: 'auto' as const,
    },
    mb0: {
      marginBottom: normalizePixel(0),
    },
    mb1: {
      marginBottom: normalizePixel(1),
    },
    mb2: {
      marginBottom: normalizePixel(2),
    },
    mb4: {
      marginBottom: normalizePixel(4),
    },
    mb6: {
      marginBottom: normalizePixel(6),
    },
    mb8: {
      marginBottom: normalizePixel(8),
    },
    mb12: {
      marginBottom: normalizePixel(12),
    },
    mb16: {
      marginBottom: normalizePixel(16),
    },
    mb24: {
      marginBottom: normalizePixel(24),
    },
    mb32: {
      marginBottom: normalizePixel(32),
    },
    mb40: {
      marginBottom: normalizePixel(40),
    },
    mb48: {
      marginBottom: normalizePixel(48),
    },
    mbAuto: {
      marginBottom: 'auto' as const,
    },
    ml0: {
      marginLeft: normalizePixel(0),
    },
    ml1: {
      marginLeft: normalizePixel(1),
    },
    ml2: {
      marginLeft: normalizePixel(2),
    },
    ml4: {
      marginLeft: normalizePixel(4),
    },
    ml6: {
      marginLeft: normalizePixel(6),
    },
    ml8: {
      marginLeft: normalizePixel(8),
    },
    ml12: {
      marginLeft: normalizePixel(12),
    },
    ml16: {
      marginLeft: normalizePixel(16),
    },
    ml24: {
      marginLeft: normalizePixel(24),
    },
    ml32: {
      marginLeft: normalizePixel(32),
    },
    ml40: {
      marginLeft: normalizePixel(40),
    },
    ml48: {
      marginLeft: normalizePixel(48),
    },
    mlAuto: {
      marginLeft: 'auto' as const,
    },
    pt0: {
      paddingTop: normalizePixel(0),
    },
    pt4: {
      paddingTop: normalizePixel(4),
    },
    pt6: {
      paddingTop: normalizePixel(6),
    },
    pt8: {
      paddingTop: normalizePixel(8),
    },
    pt12: {
      paddingTop: normalizePixel(12),
    },
    pt16: {
      paddingTop: normalizePixel(16),
    },
    pt24: {
      paddingTop: normalizePixel(24),
    },
    pt32: {
      paddingTop: normalizePixel(32),
    },
    pt40: {
      paddingTop: normalizePixel(40),
    },
    pt48: {
      paddingTop: normalizePixel(48),
    },
    pr0: {
      paddingRight: normalizePixel(0),
    },
    pr4: {
      paddingRight: normalizePixel(4),
    },
    pr6: {
      paddingRight: normalizePixel(6),
    },
    pr8: {
      paddingRight: normalizePixel(8),
    },
    pr12: {
      paddingRight: normalizePixel(12),
    },
    pr16: {
      paddingRight: normalizePixel(16),
    },
    pr24: {
      paddingRight: normalizePixel(24),
    },
    pr32: {
      paddingRight: normalizePixel(32),
    },
    pr40: {
      paddingRight: normalizePixel(40),
    },
    pr48: {
      paddingRight: normalizePixel(48),
    },
    pb0: {
      paddingBottom: normalizePixel(0),
    },
    pb4: {
      paddingBottom: normalizePixel(4),
    },
    pb6: {
      paddingBottom: normalizePixel(6),
    },
    pb8: {
      paddingBottom: normalizePixel(8),
    },
    pb12: {
      paddingBottom: normalizePixel(12),
    },
    pb16: {
      paddingBottom: normalizePixel(16),
    },
    pb24: {
      paddingBottom: normalizePixel(24),
    },
    pb32: {
      paddingBottom: normalizePixel(32),
    },
    pb40: {
      paddingBottom: normalizePixel(40),
    },
    pb48: {
      paddingBottom: normalizePixel(48),
    },
    pl0: {
      paddingLeft: normalizePixel(0),
    },
    pl4: {
      paddingLeft: normalizePixel(4),
    },
    pl6: {
      paddingLeft: normalizePixel(6),
    },
    pl8: {
      paddingLeft: normalizePixel(8),
    },
    pl12: {
      paddingLeft: normalizePixel(12),
    },
    pl16: {
      paddingLeft: normalizePixel(16),
    },
    pl24: {
      paddingLeft: normalizePixel(24),
    },
    pl32: {
      paddingLeft: normalizePixel(32),
    },
    pl40: {
      paddingLeft: normalizePixel(40),
    },
    pl48: {
      paddingLeft: normalizePixel(48),
    },
  },
  alertPadding: {
    paddingBottom: normalizePixel(72),
  },
};

export type ThemeMarginStylesProps = Record<keyof (typeof styles)['marginStyle'], boolean>;
