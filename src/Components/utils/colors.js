export const getBackground = (type) => {
  switch (type) {
    case 'fire':
      return '#FB926C';
      break;
    case 'grass':
      return '#48D0B0';
      break;
    case 'water':
      return '#4592C4';
      break;
    case 'electric':
      return '#EED535';
      break;
    case 'bug':
      return '#53D26E';
      break;
    case 'fairy':
      return '#EC2674';
      break;
    case 'poison':
      return '#AE88DD';
      break;
    case 'ground':
      return '#BAA395';
      break;
    default:
      return '#EAB4C4';
  }
};

export const getTitle = (type) => {
  switch (type) {
    case 'fire':
      return '#ffa464';
      break;
    case 'grass':
      return '#60DFC8';
      break;
    case 'water':
      return '#8FD1FE';
      break;
    case 'electric':
      return '#FFD86F';
      break;
    case 'bug':
      return '#7EE895';
      break;
    case 'fairy':
      return '#EF71A3';
      break;
    case 'poison':
      return '#C89DFD';
      break;
    case 'ground':
      return '#C98638';
      break;
    default:
      return '#FFC5D6';
  }
};
