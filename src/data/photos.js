/**
 * Photo configuration and registry for the website
 * Manages all photo assets and their metadata
 */

export const photoConfig = {
  collections: {
    'august-2025': {
      path: '/images/august-2025/',
      photos: [
        {
          filename: 'website-01.JPG',
          tags: ['professional', 'primary', 'hero'],
          contexts: ['homepage', 'about', 'sidebar', 'resume'],
          metadata: {
            date: '2025-08',
            location: 'Banff Restaurant',
            mood: 'professional-warm',
            description: 'Professional shot in Under Armour athletic wear at Banff restaurant'
          },
          story: {
            title: 'The AI Specialist',
            description: 'Captured during a strategy session, this photo represents my passion for bringing cutting-edge AI to life.',
            caption: 'Leading AI innovation with a human touch'
          }
        },
        {
          filename: 'website-03.jpg',
          tags: ['humor', 'personality', 'the-rock', 'meme'],
          contexts: ['404', 'easter-egg'],
          metadata: {
            date: '2025-08',
            mood: 'humorous',
            description: 'Side-by-side recreation of The Rock\'s iconic 90s photo'
          },
          story: {
            title: 'The People\'s AI Champion',
            description: 'Recreating The Rock\'s iconic 90s photo - because if you\'re going to build AI, you might as well do it with confidence!',
            caption: 'Can you smell what the AI is cooking?'
          }
        },
        {
          filename: 'website-05.jpg',
          tags: ['casual', 'approachable', 'outdoor'],
          contexts: ['contact', 'about', 'teaching'],
          metadata: {
            date: '2025-08',
            location: 'Outdoor',
            mood: 'approachable',
            description: 'Blue polo shirt in natural outdoor setting'
          },
          story: {
            title: 'The Teacher',
            description: 'Sharing knowledge and making AI accessible to everyone.',
            caption: 'Making complex technology simple'
          },
          style: {
            objectPosition: '50% 10%' // Raise image significantly to show face
          }
        },
        {
          filename: 'website-06.jpg',
          tags: ['family', 'values', 'personal'],
          contexts: ['about', 'values'],
          metadata: {
            date: '2025-08',
            location: 'Botanical Conservatory',
            mood: 'family',
            description: 'With sister and mom at botanical conservatory'
          },
          story: {
            title: 'The Women Who Made Me',
            description: 'My sister and mom - the strongest influences in my life and my constant reminder to stay grounded.',
            caption: 'Family: The foundation of everything'
          },
          style: {
            objectPosition: '50% 10%' // Raise image significantly to show all faces
          }
        },
        {
          filename: 'website-07.jpg',
          tags: ['travel', 'international', 'global'],
          contexts: ['about', 'international'],
          metadata: {
            date: '2025-08',
            location: 'Singapore Marina Bay',
            mood: 'adventurous',
            description: 'Pink shirt at Singapore Marina Bay'
          },
          story: {
            title: 'Global Tech Perspective',
            description: 'Singapore Marina Bay - taking AI solutions global and learning from tech hubs worldwide.',
            caption: 'Building bridges across continents'
          },
          style: {
            objectPosition: '50% 15%' // Raise image to show face properly
          }
        },
        {
          filename: 'website-10.jpg',
          tags: ['family', 'values', 'grandfather'],
          contexts: ['about', 'values', 'philosophy'],
          metadata: {
            date: '2025-08',
            mood: 'family',
            description: 'With grandfather, both wearing sunglasses'
          },
          story: {
            title: 'Three Generations of Wisdom',
            description: 'With my grandfather - a reminder that technology should serve humanity, not replace human connection.',
            caption: 'Honoring the past while building the future'
          },
          style: {
            objectPosition: '50% 15%' // Raise image to show both faces properly
          }
        },
        {
          filename: 'website-13.JPG',
          tags: ['personal', 'concert', 'balance'],
          contexts: ['about', 'personal'],
          metadata: {
            date: '2025-08',
            location: 'Birds Nest, Arizona',
            mood: 'fun',
            description: 'At Nickelback concert in Arizona'
          },
          story: {
            title: 'Life Beyond Code',
            description: 'At a Nickelback concert in Arizona - because even AI specialists need to rock out sometimes.',
            caption: 'Finding balance in life'
          },
          style: {
            objectPosition: '50% 5%' // Raise image very high to show face
          }
        },
        {
          filename: 'website-14.JPG',
          tags: ['friendship', 'wedding', 'groomsman', 'trust'],
          contexts: ['about', 'values'],
          metadata: {
            date: '2025-08',
            mood: 'celebratory',
            description: 'Groomsman at friend Ryan Adams\' wedding to Sam'
          },
          story: {
            title: 'Celebrating Friendship',
            description: 'Groomsman for Ryan and Sam\'s wedding - because the best partnerships in tech start with trust and friendship.',
            caption: 'Building relationships that last'
          },
          style: {
            objectPosition: '50% 10%' // Raise image significantly to show faces
          }
        }
      ]
    }
  },

  // Context-based photo selection rules
  contextRules: {
    homepage: {
      hero: {
        tags: ['primary', 'professional'],
        preferRecent: true,
        limit: 1
      },
      carousel: {
        tags: ['showcase'],
        excludeTags: ['humor'],
        mixCategories: true,
        limit: 8
      }
    },
    sidebar: {
      main: {
        tags: ['primary', 'professional'],
        randomize: false,
        limit: 1
      }
    },
    about: {
      hero: {
        tags: ['professional'],
        limit: 1
      },
      personal: {
        tags: ['family', 'values', 'personal'],
        limit: 4
      }
    },
    contact: {
      main: {
        tags: ['approachable', 'casual'],
        limit: 1
      }
    },
    404: {
      main: {
        tags: ['humor', 'the-rock'],
        limit: 1
      }
    }
  },

  // Responsive image configuration
  imageSizes: {
    thumbnail: { width: 150, height: 150 },
    small: { width: 300, height: 300 },
    medium: { width: 600, height: 600 },
    large: { width: 900, height: 900 },
    xlarge: { width: 1200, height: 1200 }
  }
};

// Photo Registry Class for dynamic photo management
export class PhotoRegistry {
  constructor() {
    this.photos = new Map();
    this.collections = new Map();
    this.tags = new Set();
    this.initializeFromConfig();
  }

  initializeFromConfig() {
    Object.entries(photoConfig.collections).forEach(([collectionName, collection]) => {
      collection.photos.forEach(photo => {
        const photoId = `${collectionName}/${photo.filename}`;
        const photoData = {
          id: photoId,
          collection: collectionName,
          path: `${collection.path}${photo.filename}`,
          ...photo
        };
        
        this.photos.set(photoId, photoData);
        photo.tags.forEach(tag => this.tags.add(tag));
        
        if (!this.collections.has(collectionName)) {
          this.collections.set(collectionName, []);
        }
        this.collections.get(collectionName).push(photoData);
      });
    });
  }

  getPhotoById(id) {
    return this.photos.get(id);
  }

  getPhotosByTag(tag) {
    return Array.from(this.photos.values()).filter(photo => 
      photo.tags.includes(tag)
    );
  }

  getPhotosByContext(context) {
    return Array.from(this.photos.values()).filter(photo => 
      photo.contexts.includes(context)
    );
  }

  getPhotosForContext(contextKey, options = {}) {
    const rules = photoConfig.contextRules[contextKey];
    if (!rules) return [];

    // Get the specific rule set (e.g., 'hero', 'carousel', 'main')
    const ruleKey = Object.keys(rules)[0];
    const contextRules = { ...rules[ruleKey], ...options };
    
    let photos = Array.from(this.photos.values());

    // Apply tag filters
    if (contextRules.tags) {
      photos = photos.filter(photo => 
        contextRules.tags.some(tag => photo.tags.includes(tag))
      );
    }

    // Apply exclude tag filters
    if (contextRules.excludeTags) {
      photos = photos.filter(photo => 
        !contextRules.excludeTags.some(tag => photo.tags.includes(tag))
      );
    }

    // Apply context filters - check if photo contexts includes the base context
    const baseContext = contextKey.split('-')[0];
    photos = photos.filter(photo => 
      photo.contexts.includes(baseContext) || photo.contexts.includes(contextKey)
    );

    // Sort by date if preferRecent
    if (contextRules.preferRecent) {
      photos.sort((a, b) => {
        const dateA = new Date(a.metadata.date);
        const dateB = new Date(b.metadata.date);
        return dateB - dateA;
      });
    }

    // Randomize if needed
    if (contextRules.randomize) {
      photos = this.shuffleArray(photos);
    }

    // Apply limit
    if (contextRules.limit) {
      photos = photos.slice(0, contextRules.limit);
    }

    return photos;
  }

  getRandomPhotoByTag(tag) {
    const photos = this.getPhotosByTag(tag);
    return photos[Math.floor(Math.random() * photos.length)];
  }

  getAllPhotos() {
    return Array.from(this.photos.values());
  }

  getCollectionPhotos(collectionName) {
    return this.collections.get(collectionName) || [];
  }

  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}

// Create and export a singleton instance
export const photoRegistry = new PhotoRegistry();

// Helper functions for common photo operations
export const getHeroPhoto = () => {
  try {
    return photoRegistry.getPhotosForContext('homepage-hero')[0] || 
           photoRegistry.getPhotoById('august-2025/website-01.JPG') ||
           { path: '/images/august-2025/website-01.JPG', metadata: { description: 'Abishek Ganesh' } };
  } catch (error) {
    console.error('Error getting hero photo:', error);
    return { path: '/images/august-2025/website-01.JPG', metadata: { description: 'Abishek Ganesh' } };
  }
};

export const getSidebarPhoto = () => {
  try {
    return photoRegistry.getPhotosForContext('sidebar-main')[0] || 
           photoRegistry.getPhotoById('august-2025/website-01.JPG') ||
           { path: '/images/august-2025/website-01.JPG', metadata: { description: 'Abishek Ganesh' } };
  } catch (error) {
    console.error('Error getting sidebar photo:', error);
    return { path: '/images/august-2025/website-01.JPG', metadata: { description: 'Abishek Ganesh' } };
  }
};

export const get404Photo = () => {
  try {
    return photoRegistry.getPhotosForContext('404-main')[0] || 
           photoRegistry.getPhotoById('august-2025/website-03.jpg') ||
           { path: '/images/august-2025/website-03.jpg', metadata: { description: 'The Rock parody' } };
  } catch (error) {
    console.error('Error getting 404 photo:', error);
    return { path: '/images/august-2025/website-03.jpg', metadata: { description: 'The Rock parody' } };
  }
};

export const getCarouselPhotos = () => {
  try {
    const photos = photoRegistry.getPhotosForContext('homepage-carousel');
    let carouselPhotos;
    
    // If not enough photos, get all non-humor and non-primary photos
    if (photos.length < 5) {
      carouselPhotos = photoRegistry.getAllPhotos().filter(p => 
        !p.tags.includes('humor') && !p.tags.includes('primary')
      );
    } else {
      // Filter out primary photo from carousel since it's featured in sidebar
      carouselPhotos = photos.filter(p => !p.tags.includes('primary'));
    }
    
    // Shuffle the photos for variety
    return photoRegistry.shuffleArray(carouselPhotos);
  } catch (error) {
    console.error('Error getting carousel photos:', error);
    return [];
  }
};

// Generic helper to get photos for any context
export const getPhotosForContext = (context) => {
  try {
    return photoRegistry.getPhotosByContext(context);
  } catch (error) {
    console.error(`Error getting photos for context ${context}:`, error);
    return [];
  }
};