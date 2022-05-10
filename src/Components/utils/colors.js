export const getBackground = (type) => {
  switch (type) {
    case 'fire':
      return '#FD7D24';
      break;
    case 'grass':
      return '#7FFFD4';
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
      return '#ffb';
  }
};

export const getTitle = (type) => {
  switch (type) {
    case 'fire':
      return '#fff';
      break;
    default:
      return '#222';
  }
};
