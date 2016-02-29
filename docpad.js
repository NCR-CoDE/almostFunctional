module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Almost functional",
      description: "Where theory meets practice",
      date: "April 14",
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
          description: "We don't yet know exactly what Bodil will be talking about yet but it will almost certainly include ponies.",
          time: "18:15"
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
          text: "@pozorvlak"
        },
        presentation: {
          title: "Git: an Epic Victory for Academic Computer Science",
          description: "Programmers all over the world use Git in mission-critical ways, totally unaware of its academic pedigree. Miles will take us through the foundations on which Git is built and ask what other uses we could put them to.",
          time: "19:40"
        }
      },
      {
        name: "Michael Arntzenius",
        photo: "themes/yellow-swan/img/micheal.jpg",
        bio: "Michael isn't really sure what he's doing with his life, but it seems to involve staring at glowing screens and making repetitive, precise finger movements.",
        company: "University of Birmingham",
        link: {
          href: "https://twitter.com/arntzenius",
          text: "@arntzenius"
        },
        presentation: {
          title: "What's a monoid, anyway? or, the algebra of data!",
          description: "I mean, really, what IS a monoid? It's less complicatedthan it sounds! In just twenty minutes, I'll explain what a monoid is, with examples, and (bonus!) why you should care.",
          time: "20:10"
        }
      },
      {
        name: "Felienne Hermans",
        photo: "themes/yellow-swan/img/felienne.jpg",
        bio: "Felienne is assistant professor at Delft University of Technology. In 2013, she defended her PhD thesis ‘Analyzing and Visualizing Spreadsheets’. During her PhD she founded a company called Infotron, which brings her spreadsheet quality analysis tools to the market. One of Felienne’s biggest passions in life is to share enthusiasm for programming with others. She teaches kids LEGO Mindstorms programming every Saturday and is one of the founders of the Joy of Coding conference, a one day developer conference in Rotterdam.",
        company: "Delft University of Technology",
        link: {
          href: "https://twitter.com/@felienne",
          text: "@felienne"
        },
        presentation: {
          title: "Program derivation for functional languages",
          description: "Program derivation was all the rage in the era of Dijkstra, but is it still relevant today in the age of TDD and model checking? Felienne thinks so! In this session she will show you how to systematically derive a program from a specification. You will be surprised to discover that you already know and apply many techniques for derivation.",
          time: "20:40"
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
