import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.push({
      data: [{
        id: 1,
        type: 'mutant',
        attributes: {
          name: "Kitty Pryde",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060519075008729.jpg"
        },
        relationships: {}
      }, {
        id: 2,
        type: 'mutant',
        attributes: {
          name: "Wolverine",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060519075006823.jpg"
        },
        relationships: {}
      }, {
        id: 3,
        type: 'mutant',
        attributes: {
          name: "Rogue",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060519075007932.jpg"
        },
        relationships: {}
      }, {
        id: 4,
        type: 'mutant',
        attributes: {
          name: "Jean Grey",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060518050753816.jpg"
        },
        relationships: {}
      }, {
        id: 5,
        type: 'mutant',
        attributes: {
          name: "Nightcrawler",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060518050754347.jpg"
        },
        relationships: {}
      }, {
        id: 6,
        type: 'mutant',
        attributes: {
          name: "Storm",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060518050753613.jpg"
        },
        relationships: {}
      }, {
        id: 7,
        type: 'mutant',
        attributes: {
          name: "Beast",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060518050754019.jpg"
        },
        relationships: {}
      }, {
        id: 8,
        type: 'mutant',
        attributes: {
          name: "Colossus",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060518050753378.jpg"
        },
        relationships: {}
      }, {
        id: 9,
        type: 'mutant',
        attributes: {
          name: "Archangel",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060517084409483.jpg"
        },
        relationships: {}
      }, {
        id: 10,
        type: 'mutant',
        attributes: {
          name: "Sabretooth",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060517084407296.jpg"
        },
        relationships: {}
      }, {
        id: 11,
        type: 'mutant',
        attributes: {
          name: "Iceman",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060517084407999.jpg"
        },
        relationships: {}
      }, {
        id: 12,
        type: 'mutant',
        attributes: {
          name: "Cable",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060517084409030.jpg"
        },
        relationships: {}
      }, {
        id: 13,
        type: 'mutant',
        attributes: {
          name: "Havok",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060516102227534.jpg"
        },
        relationships: {}
      }, {
        id: 14,
        type: 'mutant',
        attributes: {
          name: "Bishop",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060516102226081.jpg"
        },
        relationships: {}
      }, {
        id: 15,
        type: 'mutant',
        attributes: {
          name: "Blink",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060516102226597.jpg"
        },
        relationships: {}
      }, {
        id: 16,
        type: 'mutant',
        attributes: {
          name: "Banshee",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060516102227066.jpg"
        },
        relationships: {}
      }, {
        id: 17,
        type: 'mutant',
        attributes: {
          name: "Madrox",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060516102227987.jpg"
        },
        relationships: {}
      }, {
        id: 18,
        type: 'mutant',
        attributes: {
          name: "Emma Frost",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060515054401614.jpg"
        },
        relationships: {}
      }, {
        id: 19,
        type: 'mutant',
        attributes: {
          name: "Psylocke",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060515054400240.jpg"
        },
        relationships: {}
      }, {
        id: 20,
        type: 'mutant',
        attributes: {
          name: "Quicksilver",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060515054400818.jpg"
        },
        relationships: {}
      }, {
        id: 21,
        type: 'mutant',
        attributes: {
          name: "Chamber",
          image_url: "http://comicsmedia.ign.com/comics/image/article/708/708826/the-top-25-x-men-20060515054401208.jpg"
        },
        relationships: {}
      }]
    });
  }
});
