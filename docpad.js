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
      { // 45
        name: "Edwin Brady",
        photo: "themes/yellow-swan/img/edwin-hp.jpg",
        bio: "Edwin is an academic who likes implementing programming languages, including Whitespace and the less well known dependently typed language Idris. When he's not doing that, he's probably either playing Go, failing to solve a crossword, or stuck on a train.",
        company: "University of St Andrews",
        link: {
          href: "https://twitter.com/edwinbrady",
          text: "@edwinbrady"
        },
        presentation: {
          title: "TDD - Type Driven Development",
          description: "Software routinely fails. If our phone or laptop crashes, we just mutter expletives and reboot it, but errors in safety or security critical systems can be disastrous. I'll suggest how we might be able to do better, by making effective use of types.",
          time: "18:15"
        }
      },
      { // 15
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
      { // 20
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
          time: "19:40"
        }
      },
      {
        name: "Maurice Naftalin",
        photo: "themes/yellow-swan/img/maurice.jpg",
        bio: "Maurice has three decades of experience as a programmer, academic and trainer. He wrote the Java Generics book with Philip Wadler and Mastering Lambdas for Oracle Press.",
        company: "Morningside Light Ltd",
        link: {
          href: "https://twitter.com/mauricenaftalin",
          text: "@mauricenaftalin"
        },
        presentation: {
          title: "To be confirmed",
          description: "TBC",
          time: "20:10"
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
