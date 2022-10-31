export type TColorOption = '#0d75e0' | '#0066FF' | '#35699e';

export type TPaletteSubMap = {
  Profile: TColorOption;
  Main: TColorOption;
};

type TColorNameOptions = 'Blue' | 'Red';

type TPalletMap = {
  [Palette in TColorNameOptions]: TPaletteSubMap;
};

export const ColorPalette: TPalletMap = {
  Blue: {
    Profile: '#0d75e0',
    Main: '#0066FF',
  },
  Red: {
    Profile: '#0d75e0',
    Main: '#35699e',
  },
};
