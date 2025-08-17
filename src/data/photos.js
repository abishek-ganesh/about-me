// Simple photo configuration
const photos = [
  {
    id: 'sidebar',
    path: '/images/august-2025/website-01.JPG',
    alt: 'Professional shot in Under Armour athletic wear at Banff restaurant',
    title: 'Abishek Ganesh'
  },
  {
    id: 'carousel-1', 
    path: '/images/august-2025/website-05.jpg',
    alt: 'Blue polo shirt in natural outdoor setting',
    title: 'The Teacher',
    caption: 'Making complex technology simple'
  },
  {
    id: 'carousel-2',
    path: '/images/august-2025/website-13.JPG', 
    alt: 'At Nickelback concert in Arizona',
    title: 'Life Beyond Code',
    caption: 'Finding balance in life'
  },
  {
    id: 'carousel-3',
    path: '/images/august-2025/website-07.jpg',
    alt: 'Pink shirt at Singapore Marina Bay',
    title: 'Global Tech Perspective', 
    caption: 'Building bridges across continents'
  },
  {
    id: 'carousel-4',
    path: '/images/august-2025/website-14.JPG',
    alt: 'Groomsman at friend Ryan Adams\' wedding to Sam',
    title: 'Celebrating Friendship',
    caption: 'Building relationships that last'
  },
  {
    id: 'carousel-5',
    path: '/images/august-2025/website-06.jpg',
    alt: 'With sister and mom at botanical conservatory',
    title: 'The Women Who Made Me',
    caption: 'Family: The foundation of everything'
  },
  {
    id: 'carousel-6',
    path: '/images/august-2025/website-10.jpg',
    alt: 'With grandfather, both wearing sunglasses',
    title: 'Three Generations of Wisdom',
    caption: 'Honoring the past while building the future'
  }
];

// Simple helper functions
export const getSidebarPhoto = () => photos.find(p => p.id === 'sidebar');

export const getCarouselPhotos = () => photos.filter(p => p.id.startsWith('carousel'));

export const get404Photo = () => ({
  path: '/images/august-2025/website-03.jpg',
  alt: 'Side-by-side recreation of The Rock\'s iconic 90s photo'
});

export const getPhotosForContext = (context) => {
  if (context === 'contact') {
    return [photos.find(p => p.id === 'carousel-1')]; // The Teacher photo for contact
  }
  return [];
};