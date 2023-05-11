export const timeFormat = (duration: number): string => {
  const deciseconds = duration%10;
  const seconds = Math.floor((duration%600)/10);
  const minutes = Math.floor((duration%36000)/600); 
  const hours = Math.floor((duration%864000/36000));

  const digitFormat = (value: number): string => {
    return value.toLocaleString('en-US', { minimumIntegerDigits: 2,
                                           useGrouping: false });
  };

  return digitFormat(hours)+':'
        +digitFormat(minutes)+':'
        +digitFormat(seconds)+':'
        +digitFormat(deciseconds);
};