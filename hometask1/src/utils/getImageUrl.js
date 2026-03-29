export const getImageUrl = (imageName) => {
  if (!imageName) return "https://via.placeholder.com/80x60?text=No+Image";
  return `http://37.27.29.18:8001/images/${imageName}`;
};
