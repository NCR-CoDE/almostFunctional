module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Almost functional",
      description: "Where theory meets practice",
      date: "April 15",
      // If your event is free, just comment this line
      //price: "$100",
      venue: "NCR Edinburgh",
      address: "10 Kittle Yards, EH9 1PJ",
      city: "Edinburgh",
      state: "Scotland"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Register now!",
        link: "https://www.eventbrite.co.uk/e/almost-functional-tickets-21309546427"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
//    forkButton: {
//        repository: "https://github.com/braziljs/conf-boilerplate"
//    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
 //     googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'speakers',
      'location',
      'schedule',
      'sponsors',
//      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      speakers: "Speakers",
      schedule: "Schedule",
      sponsors: "Sponsors",
      partners: "Partners",
      contact: "Contact"
    },

    // The entire schedule
    schedule: [
      {
        name: "Arrive and mingle",
        time: "1800"
      },
      {
        name: "Bodil Stokke",
        photo: "themes/yellow-swan/img/bodil.jpeg",
        bio: "Bodil was a controversial figure during her lifetime, championed by supporters as an enlightened guru and derided as a fraudulent charlatan by critics. Her doctrines influenced the spread of Homotopy Type Theory in the West as well as the development of Western computer science currents like dependent types, blockchains and isomorphic JavaScript.",
        company: "Church of emacs",
        link: {
          href: "https://twitter.com/bodil",
          text: "@bodil"
        },
        presentation: {
          title: "Something with ponies",
          description: "We don't yet know exactly what Bodil will be talking about yet but it will almost certainly include ponies",
          time: "18h15"
        }
      },
      {
        name: "Bob Atkey",
        photo: "themes/yellow-swan/img/bobatkey.jpg",
        bio: "Bob is an academic with pretensions to usefulness. He is interested in writing down symbols, and then worrying what the symbols mean.",
        company: "University of Strathclyde",
        link: {
          href: "https://twitter.com/bentnib",
          text: "@bentnib"
        },
        presentation: {
          title: "Multi-paradigm programming: are we there yet?",
          description: "Do existing languages that combine imperative and functional styles makes things simpler or more complex? Is there a different approach that would give us the best of both worlds?",
         time: "19:15"
       }
      },
      {
        name: "Miles Gould",
        photo: "themes/yellow-swan/img/milesgould.jpg",
        bio: "Miles has bounced between academia and industry, having worked in fields as diverse as satellite communications, tokamak physics, compilers for embedded systems, and higher-dimensional category theory. He is currently working at Red Hat on the open-source cloud-computing platform OpenStack. When not thinking about computers, he likes to spend his time up mountains.",
        company: "Red Hat",
        link: {
          href: "https://twitter.com/pozorvlak",
          text: "pozorvlak"
        },
        presentation: {
          title: "Git: an Epic Victory for Academic Computer Science",
          description: "Programmers all over the world use Git in mission-critical ways, totally unaware of its academic pedigree. Miles will take us through the foundations on which Git is built and ask what other uses we could put them to.",
          time: "19:40"
        }
      },
      {
        name: "TBC",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "More speakers to be added soon",
        company: "?",
        presentation: {
          title: "?",
          description: "?",
          time: "19:30"
        }
      },
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "NCR Edinburgh",
        logo: "themes/yellow-swan/img/logo_116x116.jpg",
        url: "http://ncredinburgh.com"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "NCR Edinburgh",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://braziljs.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
