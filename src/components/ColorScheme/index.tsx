export type TColorOption = '#2074c7' | '#0066FF' | '#35699e';

export type TPaletteSubMap = {
  Profile: TColorOption;
  Main: TColorOption;
};

export type TColorNameOptions = 'Blue' | 'Red';

export type TPalletMap = {
  [Palette in TColorNameOptions]: TPaletteSubMap;
};

export const ColorPalette: TPalletMap = {
  Blue: {
    Profile: '#2074c7',
    Main: '#0066FF',
  },
  Red: {
    Profile: '#2074c7',
    Main: '#35699e',
  },
};
