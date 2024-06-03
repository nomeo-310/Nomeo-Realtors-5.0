import { TbBellRinging, TbFileText, TbHomeHeart, TbHomePlus, TbHomeRibbon, TbLockPlus, TbMessage, TbUserEdit } from 'react-icons/tb';


export interface navbarItem {
  label:string,
  path:string
}

export interface testimony {
  title: string;
  testimony: string;
  name: string;
  career: string;
  profileImage: string;
};

export interface frequentlyAskedQuestion {
  question: string;
  answer: string;
}

export interface blog {
  id: string;
  title: string;
  description: string;
  imageBanner: string;
  createdAt: string;
  author: string;
  authorImage: string
  blogContent: {
    paragraph?: string;
    quote?: {
      author: string
      content:string
    }
    content: {
      header?: string;
      content: string;
  }[]
  }
};

export interface  propertyProps {
  id:string
  propertTag: string
  furnitureTag: string
  propertyImage: string
  propertyImageList: string[]
  propertySize: number
  beds: number
  baths: number
  toilets: number
  agentInCharge: string
  agentInChargeImage: string,
  liked?: boolean
  saved?: boolean
  monthlyRent?: number
  propertyCost?: number
  title: string
  location: string
  mainFees: {name: string, amount: number}[]
  optionalFees: {name: string, amount: number}[]
  nearbyPlaces: {name:string, distance: string}[]
  intro: string
  description: string
  verifiedamenities: string[]
};

export const loggedIn = true;
export const userSurname = 'Salomi';

export const furnitureTags = ['furnished', 'unfurnished'];
export const propertyTags = ['sale', 'rent'];

export const navBarList = [
  {
    label: 'buy', 
    path: '/buy'
  },
  {
    label: 'rent', 
    path: '/rent'
  },
  {
    label: 'about us', 
    path: '/about-us'
  },
  {
    label: 'blog', 
    path: '/blogs'
  }
];

export const testimonyList = [
  {
    title: 'finding my dream home',
    testimony: "As a first-time homebuyer, I was feeling overwhelmed by the entire process.  Nomeo Suites was a lifesaver!  My agent, Tunde Koleosho, was incredibly patient and knowledgeable.  She took the time to understand my needs and budget, and ultimately found me the perfect condo in a great neighborhood.  I highly recommend Nomeo Suites to anyone looking to buy a home in Lagos.",
    name: "sarah jones", 
    career: "marketing manager",
    profileImage: '/images/profile_1.jpg'
  },
  {
    title: 'stress free leasing',
    testimony: "Owning rental properties can be a hassle, but not anymore thanks to Nomeo Suites!  Their property management services are fantastic.  They handle everything from tenant screening to rent collection and maintenance, allowing me to focus on other things.  I can confidently say that Nomeo Suites has made me a much more relaxed landlord.",
    name: "david thompson", 
    career: "software engineer",
    profileImage: '/images/profile_2.jpg'
  },
  {
    title: 'selling for top dollar',
    testimony: "I needed to sell my house quickly and for the best possible price.  Nomeo Suites came through in a big way!  Their market analysis was spot-on, and their marketing strategy attracted a ton of interest.  My agent, Segun Aiyegbami, is a skilled negotiator and secured a full-price offer within a week of listing.  Couldn't be happier with the service!",
    name: "aisha mohammed", 
    career: "architect",
    profileImage: '/images/profile_3.jpg'
  },
  {
    title: 'finding the perfect tenant',
    testimony: "Finding a good tenant can be a challenge.  Nomeo Suites made the process so easy.  They screened a pool of qualified applicants and presented me with only the best options.  The tenant they placed in my rental property is fantastic - responsible, respectful, and always pays rent on time.  I highly recommend their tenant placement services.",
    name: "emeka okafor", 
    career: "business owner",
    profileImage: '/images/profile_4.jpg'
  },
  {
    title: 'investment success',
    testimony: "Investing in real estate can be risky, but with Nomeo Suites by my side, I feel confident. Their team provided invaluable advice on property selection and financing, helping me secure a great rental property with excellent potential.  They even handle the ongoing management, ensuring a steady stream of income.  Thanks to Nomeo Suites, my real estate investment is off to a fantastic start!",
    name: "john & maria garcia", 
    career: "teachers",
    profileImage: ''
  },
  {
    title: 'smooth sailing',
    testimony: "Buying a house is a big decision, and I wanted a realtor I could trust.  Nomeo Suites did not disappoint!  My agent, Babatunde Ayoola, was always available to answer my questions and explain the process.  She made sure everything went smoothly from start to finish.  I highly recommend Nomeo Suites for a stress-free buying experience.",
    name: "babatunde adebayo", 
    career: "doctor",
    profileImage: '/images/profile_6.jpg'
  },
  {
    title: 'neighborhood experts',
    testimony: "We were new to Lagos and unfamiliar with the different neighborhoods.  Nomeo Suites was an invaluable resource.  They provided detailed information on various areas, including schools, amenities, and safety considerations.  Their expertise helped us find the perfect family-friendly neighborhood for our needs.  We're so happy in our new home!",
    name: "lisa & michael wang", 
    career: "entrepreneurs",
    profileImage: ''
  }
];

export const blogList = [
  {
    id: "blog_1",
    title: "The Art of Negotiation: Getting the Best Deal on Your Lagos Property.",
    description: "In the fast-paced world of Lagos real estate, negotiation is an essential skill for both buyers and sellers.  This dance, as Olajide Martins, a seasoned agent at Martoni Consults Inc., puts it, requires understanding your counterpart, respecting their position, but also fiercely advocating for your own interests. Whether you're aiming to snag your dream home at a competitive price or maximize your return on investment, mastering the art of negotiation can significantly impact your outcome.  Don't worry, aspiring Lagosian negotiator, we've got you covered!  This guide will equip you with valuable tips and strategies to navigate the negotiation process and secure the best deal on your Lagos property.",
    blogContent: {
      paragraph: "Here are some key notes to remeber when doing negotiation: ",
      quote: {
        author: "Madam Bukola McCarthy, seasoned Lagos landlady.",
        content: "Negotiating Lagos property is like navigating the energetic streets of Lagos itself, It's a dance – a courteous back-and-forth where respect and cunning go hand-in-hand. Be firm on your value, but don't be afraid to bend a little. A win-win solution is often the sweetest deal, leaving both parties satisfied and ready to celebrate with a plate of delicious jollof rice."
      },
      content: [
        {
          header: "Knowledge is Power: The Bedrock of Confidence",
          content: "The foundation of a strong negotiating position is built on knowledge.  In Lagos' dynamic market, immersing yourself in local trends, understanding neighborhood values, and researching comparable properties is paramount. Solid research equips you to speak with confidence and propose realistic offers and knowing the market empowers you to navigate the dance with a steady step."
        },
        {
          header: "Building Rapport: The Foundation for Mutual Understanding",
          content: "While negotiation involves advocating for your needs, it's not a battleground. Clay Holloway once advised that Building rapport with the seller or landlord is key because a genuine conversation fosters trust and opens the door to creative solutions that benefit both parties.  Imagine negotiation as a tango – two partners working in harmony, yet each with their own steps to perform."
        },
        {
          header: "Active Listening: Unveiling the Other Side's Needs",
          content: "Effective negotiation is a two-way street. It is a popular advise that you listen intently to the seller's perspective because understanding their motivations and timelines can help you craft a compelling offer that addresses their priorities alongside yours. By actively listening, you can anticipate their next move and respond with a graceful counter-step."
        },
        {
          header: "Confidence with Flexibility: Striking the Perfect Balance",
          content: "Projecting confidence is vital, but remaining flexible is equally important. It is always good to be prepared to walk away if the deal doesn't align with your needs.  However, also express a willingness to compromise on certain aspects, demonstrating your genuine interest in reaching a mutually beneficial agreement.  Think of it as finding the sweet spot in the music – your voice strong and clear, yet adaptable to the rhythm of the seller's needs."
        },
        {
          header: "Beyond Price: Exploring Creative Solutions",
          content: "Negotiation isn't just about the bottom line.  It includes think creatively and exploring other options like closing dates, repair responsibilities, or even including furniture or appliances in the deal. These creative solutions can bridge gaps and pave the way for a successful outcome for both parties.  Imagine negotiation as a jazz improvisation – you and the seller riffing off each other, finding unexpected harmonies that elevate the entire piece."
        },
        {
          header: "Partnering for Success: Why Having an Expert in Your Corner Matters",
          content: "Lagos' real estate market can be complex. Therefore, having an experienced agent by your side is invaluable.This is beacuse they possess the market knowledge, negotiation skills, and local connections to ensure you achieve the best possible deal. An expert agent acts as your guide on the dance floor, anticipating the seller's moves, and helping you execute yours with finesse."
        },
        {
          header: "Partnering for Success: Why Having an Expert in Your Corner Matters",
          content: "Lagos' real estate market can be complex. Therefore, having an experienced agent by your side is invaluable.This is beacuse they possess the market knowledge, negotiation skills, and local connections to ensure you achieve the best possible deal. An expert agent acts as your guide on the dance floor, anticipating the seller's moves, and helping you execute yours with finesse."
        },
        {
          header: "The Art of Negotiation: A Rewarding Journey",
          content: "Negotiation may seem daunting, but with knowledge, preparation, and a willingness to collaborate, you can master this art form. A successful negotiation isn't just about securing the best price, but it's about securing a deal that leaves everyone feeling satisfied and sets the stage for a positive experience in thriving property market.  Ultimately, negotiation is a rewarding journey – a dance where both partners emerge feeling they've created something beautiful."
        }
      ]
    },
    imageBanner: "/images/blogImage_1.jpg",
    createdAt: "18 Jan 2024",
    author: "Eliazor Nwanne",
    authorImage: "/images/profile_1.jpg"
  },
  {
    id: "blog_2",
    title: "Investing in Lagos Real Estate: Strategies for Success.",
    description: "Lagos, a bustling metropolis and the economic heart of Nigeria, presents a compelling opportunity for real estate investors. With a rapidly growing population and a constant demand for housing, the Lagos property market offers the potential for significant returns. However, navigating this dynamic market requires a well-defined strategy and a deep understanding of the local landscape.",
    blogContent: {
      paragraph: "",
      quote: {
        author: "Chief Adeola Ogunbiyi, veteran investor.",
        content: "Lagos real estate is a patient lion, it may slumber for a while, but with the right knowledge and a well-timed approach, you can rouse it and unlock its potential for impressive returns. Do your research, understand the market cycles, and be prepared to pounce when the right opportunity arises. Remember, Lagos rewards those who are bold and strategic."
      },
      content: [
        {
          title: "",
          content: "The first step to success lies in thorough market research. Familiarize yourself with current trends, rental yields in different neighborhoods, and the projected growth trajectory of various areas. As Lagos itself is dynamic and no condition is permanent, the real estate landscape is no exception. By staying informed, you can position yourself to capitalize on emerging opportunities."
        },
        {
          title: "",
          content: "Choosing the right location is paramount. Lagos boasts a diverse range of neighborhoods, each catering to a distinct demographic.  Ikoyi, for instance, is renowned for its luxury apartments and high-end clientele, while Lekki attracts young professionals seeking a modern lifestyle. Understanding the target market for each area is crucial for maximizing rental income and capital appreciation."
        },
        {
          title: "",
          content: "The type of property you choose will also significantly impact your investment's success.  Apartments in safe, secure neighborhoods are ideal for generating rental income, while land in developing areas holds the potential for long-term capital gains. Consider your investment goals and risk tolerance when making this decision."
        },
        {
          title: "",
          content: "Lagos' legal framework surrounding property can be complex. Consulting with a reputable lawyer specializing in real estate is essential. They can guide you through the buying process, ensure you acquire a clean title, and protect your investment from unforeseen legal issues."
        },
        {
          title: "",
          content: "Finally, having a clear exit strategy in mind is crucial.  Are you looking for steady rental income or aiming to sell the property for a profit in a few years?  Knowing your end goal will influence the type of property you choose and the overall investment strategy you employ."
        },
        {
          title: "",
          content: "Investing in Lagos real estate can be a rewarding path to building wealth and achieving financial security. However, by following these strategies, you can increase your chances of success in this dynamic and ever-evolving market. Remember, knowledge is power – conduct your research, secure the right team, and make informed decisions to turn your Lagos real estate dreams into a brick-and-mortar reality."
        },
      ]
    },
    imageBanner: "/images/blogImage_2.jpg",
    createdAt: "25 Jan 2024",
    author: "Babatunde Omisola",
    authorImage: "/images/profile_4.jpg"
  },
  {
    id: "blog_3",
    title: "The Ultimate Lagos Home Staging Guide: Transforming Your Property for Success",
    description: "Selling your property in Lagos? First impressions are everything! Home staging is the art of preparing your property to showcase its best features and attract qualified buyers. A well-staged home can significantly increase interest, shorten selling time, and potentially fetch a higher price. Here's your ultimate guide to home staging success in Lagos:",
    blogContent : {
      paragraph: "",
      quote: {
        author: "",
        content: "Staging a Lagos home is like dressing for success in this market – a little polish can make all the difference in catching a buyer's eye. It's not about hiding flaws, but rather accentuating the positive features and showcasing the potential your property holds. Just like a well-tailored outfit boosts confidence, a staged home makes a bold statement, leaving a lasting impression that says 'This is the Lagos home you've been waiting for.'"
      },
      content: [
        {
          title: "Declutter and Depersonalize:",
          content: "Your home is a canvas – potential buyers need to envision themselves living there.  Pack away personal belongings, family photos, and knick-knacks.  Decluttering creates a sense of spaciousness and allows potential buyers to see the full potential of the property.  Always remember that you have nothing in your house that you do not know to be useful, or believe to be beautiful. Let your home's inherent beauty shine through."
        },
        {
          title: "Deep Clean and Spruce Up:",
          content: "First impressions are paramount, and a spotless, sparkling home creates a positive emotional connection with viewers.  Ensure the property is thoroughly cleaned, from sparkling floors to gleaming windows.  Address minor repairs like leaky faucets or loose doorknobs.  A well-maintained home assures buyers they won't be inheriting a string of repair headaches."
        },
        {
          title: "Lighten Up and Brighten Up:",
          content: "Lagos boasts beautiful sunshine – use it to your advantage! Open curtains and blinds to allow natural light to flood the rooms.  If possible, schedule viewings during the daytime to maximize the impact.  Consider adding strategically placed lamps and mirrors to enhance the brightness and create an illusion of spaciousness.  A bright and airy home feels more inviting and uplifting."
        },
        {
          title: "Stage for Functionality:",
          content: "Showcase the functionality of each room.  In the living room, arrange furniture to create a conversation area.  Set the dining table for a casual meal in the dining room.  Place towels neatly folded on the bathroom counter.  This subtle staging helps buyers envision themselves using the space and living comfortably in the home."
        },
        {
          title: "Curb Appeal is King:",
          content: "Don't underestimate the power of a well-maintained exterior.  Pressure wash the driveway, mow the lawn, and plant some colorful flowers.  A vibrant and inviting entrance sets the tone for the entire property and creates a positive first impression."
        },
        {
          title: "Stage Within Your Budget:",
          content: "Home staging doesn't require a complete overhaul.  You can achieve impressive results with a strategic rearrangement of furniture, creative use of throw pillows and colorful accents, and fresh flowers.  The key is to invest in small touches that create a warm, inviting atmosphere."
        },
        {
          title: "",
          content: "By following these tips, you can transform your Lagos property from a lived-in space into a haven that entices potential buyers.  Remember, staging is an investment – a relatively small outlay that can significantly increase your chances of a quick and profitable sale. So, declutter, clean, stage strategically, and in no time, your property will get sold."
        }
      ]
    },
    imageBanner: "/images/blogImage_3.jpg",
    createdAt: "2 Feb 2024",
    author: "Babatunde Omisola",
    authorImage: "/images/profile_4.jpg"
  }
];

export const frequentlyAskedQuestions = [
  {
    question: 'In buying a home, how much can I afford',
    answer: 'We recommend speaking with a mortgage lender to determine your pre-approval amount, which is a good starting point for your home search.'
  },
  {
    question: "What's the difference between a pre-approval and a pre-qualification?",
    answer: 'A pre-approval is a more in-depth analysis of your finances by a lender, giving you a stronger offer when negotiating with sellers. A pre-qualification is a less formal estimate.'
  },
  {
    question: "What are closing costs?",
    answer: 'Closing costs encompass various fees associated with buying a property, such as taxes, title insurance, and origination fees for your mortgage.'
  },
  {
    question: "How do I know how much my home is worth?",
    answer: "We can provide a Comparative Market Analysis (CMA) to estimate your property's value based on similar recently sold homes."
  },
  {
    question: "What should I do to prepare my home for selling?",
    answer: "We can offer recommendations for minor improvements and staging tips to enhance your home's appeal to potential buyers."
  },
  {
    question: "How long will it take to sell my house?",
    answer: "The timeframe can vary depending on market conditions and your property's unique features. We can provide an estimate based on current trends."
  },
  {
    question: "What's involved in the tenant screening process?",
    answer: "We typically conduct credit checks, background checks, and verify employment to ensure responsible tenants."
  },
  {
    question: "How do I handle maintenance requests?",
    answer: "For our property management clients, we can manage maintenance requests by coordinating with qualified repair professionals."
  },
  {
    question: "What are the benefits of using a property management service?",
    answer: "Property management services save you time and hassle by handling tenant screening, rent collection, and property maintenance on your behalf."
  },
  {
    question: "What are some government programs that can assist first-time homebuyers?",
    answer: "We can provide information on available government programs and grants that may help with down payment or closing costs."
  }
];

export const propertyList = [
  {
    id:'property_1',
    propertTag: 'sale',
    furnitureTag: 'furnished',
    propertyImage: '/images/property_1.jpg',
    propertyImageList: ['/images/property_1a.jpg', '/images/property_1b.jpg', '/images/property_1c.jpg', '/images/property_1d.jpg', '/images/property_1e.jpg', '/images/property_1f.jpg', '/images/property_1g.jpg', '/images/property_1h.jpg', '/images/property_1i.jpg', '/images/property_1j.jpg', '/images/property_1k.jpg', '/images/property_1l.jpg' ],
    propertySize: 2500,
    beds: 4,
    baths: 4,
    toilets: 5,
    agentInCharge: 'Tunde Okeowo',
    agentInChargeImage: '/images/profile_1.jpg',
    liked: false,
    saved: false,
    monthlyRent: undefined,
    propertyCost: 750000000,
    title: 'Modern Oasis Apartment in Lekki Phase 1',
    location: 'Lekki Phase 1, Lagos',
    mainFees: [
      { name: 'application', amount:  50000},
      { name: 'service', amount: 120000 },
      { name: 'security', amount: 120000 },
      { name: 'electricity', amount: 250000 },
    ],
    nearbyPlaces: [
      { name: 'restaurant', distance:  '500km'},
      { name: 'mall', distance: '800km' },
      { name: 'central market', distance: '200km' },
      { name: 'schools', distance: '800m' },
    ],
    optionalFees: [
      { name: 'wifi', amount:  50000},
      { name: 'club membership', amount: 50000 },
    ],
    intro: "This stunning 4-bedroom detached home in Lekki Phase 1 boasts modern finishes, a private pool, and lush landscaping.  Perfect for entertaining and enjoying the Lagos outdoor lifestyle.",
    description: "This expansive 4-bedroom, 4-bathroom detached property offers a haven of modern luxury.  The open-plan living area is ideal for entertaining, while the well-equipped kitchen is a chef's dream.  Each bedroom is a tranquil retreat, and the master suite features a spa-like bathroom.  Step outside to your private oasis, complete with a sparkling pool, lush gardens, and a covered patio perfect for relaxing or unwinding with loved ones.",
    verifiedamenities: ["wifi", "private pool", "landscaped gardens", "backyard", "modern kitchen", "storage space", "security post", "parking space"]
  },
  {
    id:'property_2',
    propertTag: 'rent',
    furnitureTag: 'furnished',
    propertyImage: '/images/property_2.jpg',
    propertyImageList: ['/images/property_2a.jpg', '/images/property_2b.jpg', '/images/property_2c.jpg', '/images/property_2.jpg', '/images/property_2e.jpg', '/images/property_2f.jpg', '/images/property_2g.jpg', '/images/property_2h.jpg', '/images/property_2i.jpg', '/images/property_2j.jpg', '/images/property_2k.jpg' ],
    propertySize: 120,
    beds: 3,
    baths: 3,
    toilets: 4,
    agentInCharge: 'Afolabi Ishola',
    agentInChargeImage: '/images/profile_2.jpg',
    liked: true,
    saved: false,
    monthlyRent: 158000,
    propertyCost: undefined,
    title: 'Luxurious Living Apartment in the heart of Alausa, Ikeja',
    location: 'Ikeja, Lagos',
    mainFees: [
      { name: 'application fees', amount:  50000},
      { name: 'agreement', amount: 80000 },
      { name: 'commission', amount: 80000 },
      { name: 'damages', amount: 250000 },
      { name: 'facility charges', amount: 250000 },
    ],
    nearbyPlaces: [
      { name: 'restaurant', distance:  '500km'},
      { name: 'mall', distance: '800km' },
      { name: 'central market', distance: '200km' },
      { name: 'schools', distance: '800m' },
    ],
    optionalFees: [
      { name: 'wifi', amount:  50000},
      { name: 'dog rent', amount: 50000 },
      { name: 'cat rent', amount: 50000 },
    ],
    intro: "This stunning 3-bedroom detached home in Alausa boasts modern finishes, a private pool, and lush landscaping.  Perfect for entertaining and enjoying the Lagos outdoor lifestyle.",
    description: "This expansive 3-bedroom, 3-bathroom detached property offers a haven of modern luxury.  The open-plan living area is ideal for entertaining, while the well-equipped kitchen is a chef's dream.  Each bedroom is a tranquil retreat, and the master suite features a spa-like bathroom.  Step outside to your private oasis, complete with a sparkling pool, lush gardens, and a covered patio perfect for relaxing or unwinding with loved ones.",
    verifiedamenities: ["wifi", "private pool", "landscaped gardens", "backyard", "modern kitchen", "storage space", "security post", "parking space"]
  },
  {
    id:'property_3',
    propertTag: 'sale',
    furnitureTag: 'furnished',
    propertyImage: '/images/property_3.jpg',
    propertyImageList: ['/images/property_3a.jpg', '/images/property_3b.jpg', '/images/property_3c.jpg', '/images/property_3d.jpg', '/images/property_3e.jpg', '/images/property_3f.jpg', '/images/property_3g.jpg', '/images/property_3h.jpg', '/images/property_3i.jpg', '/images/property_3j.jpg', '/images/property_3k.jpg', '/images/property_3l.jpg', '/images/property_3m.jpg', '/images/property_3n.jpg', '/images/property_3o.jpg', '/images/property_3p.jpg' ],
    propertySize: 2500,
    beds: 3,
    baths: 3,
    toilets: 4,
    agentInCharge: 'Babajide Smart',
    agentInChargeImage: '/images/profile_3.jpg',
    liked: true,
    saved: true,
    monthlyRent: undefined,
    propertyCost: 450000000,
    title: 'Luxurious Apartment Living in Ikoyi',
    location: 'Ikoyi, Lagos',
    mainFees: [
      { name: 'application fees', amount:  50000},
      { name: 'service charge', amount: 120000 },
      { name: 'annual estate security', amount: 120000 },
      { name: 'annual estate electricity', amount: 250000 },
    ],
    nearbyPlaces: [
      { name: 'restaurant', distance:  '500km'},
      { name: 'mall', distance: '800km' },
      { name: 'central market', distance: '200km' },
      { name: 'schools', distance: '800m' },
    ],
    optionalFees: [
      { name: 'wifi', amount:  50000},
      { name: 'estate club membership', amount: 50000 },
    ],
    intro: "This stunning 3-bedroom detached home in Lekki Phase 1 boasts modern finishes, a private pool, and lush landscaping.  Perfect for entertaining and enjoying the Lagos outdoor lifestyle.",
    description: "This expansive 3-bedroom, 3-bathroom detached property offers a haven of modern luxury.  The open-plan living area is ideal for entertaining, while the well-equipped kitchen is a chef's dream.  Each bedroom is a tranquil retreat, and the master suite features a spa-like bathroom.  Step outside to your private oasis, complete with a sparkling pool, lush gardens, and a covered patio perfect for relaxing or unwinding with loved ones.",
    verifiedamenities: ["wifi", "private pool", "landscaped gardens", "backyard", "modern kitchen", "storage space", "security post", "parking space"]
  },
  {
    id: 'property_4',
    propertTag: 'rent',
    furnitureTag: 'furnished',
    propertyImage: '/images/property_4.jpg',
    propertyImageList: ['/images/property_4a.jpg', '/images/property_4b.jpg', '/images/property_4c.jpg', '/images/property_4d.jpg', '/images/property_4e.jpg', '/images/property_4f.jpg', '/images/property_4g.jpg', '/images/property_4h.jpg', '/images/property_4i.jpg', '/images/property_4j.jpg', '/images/property_4k.jpg', '/images/property_4l.jpg', 'images/property_4m.jpg' ],
    propertySize: 120,
    beds: 3,
    baths: 3,
    toilets: 4,
    agentInCharge: 'Afolabi Ishola',
    agentInChargeImage: '/images/profile_4.jpg',
    liked: false,
    saved: false,
    monthlyRent: 158000,
    propertyCost: undefined,
    title: 'Luxurious Living Apartment in the heart of Alausa, Ikeja',
    location: 'Ikeja, Lagos',
    mainFees: [
      { name: 'application fees', amount:  50000},
      { name: 'agreement', amount: 80000 },
      { name: 'commission', amount: 80000 },
      { name: 'damages', amount: 250000 },
      { name: 'facility charges', amount: 250000 },
    ],
    nearbyPlaces: [
      { name: 'restaurant', distance:  '500km'},
      { name: 'mall', distance: '800km' },
      { name: 'central market', distance: '200km' },
      { name: 'schools', distance: '800m' },
    ],
    optionalFees: [
      { name: 'wifi', amount:  50000},
      { name: 'dog rent', amount: 50000 },
      { name: 'cat rent', amount: 50000 },
    ],
    intro: "This stunning 3-bedroom detached home in Alausa boasts modern finishes, a private pool, and lush landscaping.  Perfect for entertaining and enjoying the Lagos outdoor lifestyle.",
    description: "This expansive 3-bedroom, 3-bathroom detached property offers a haven of modern luxury.  The open-plan living area is ideal for entertaining, while the well-equipped kitchen is a chef's dream.  Each bedroom is a tranquil retreat, and the master suite features a spa-like bathroom.  Step outside to your private oasis, complete with a sparkling pool, lush gardens, and a covered patio perfect for relaxing or unwinding with loved ones.",
    verifiedamenities: ["wifi", "private pool", "landscaped gardens", "backyard", "modern kitchen", "storage space", "security post", "parking space"]
  },
  {
    id: 'property_5',
    propertTag: 'rent',
    furnitureTag: 'furnished',
    propertyImage: '/images/property_5.jpg',
    propertyImageList: ['/images/property_5a.jpg', '/images/property_5b.jpg', '/images/property_5c.jpg', '/images/property_5d.jpg', '/images/property_5e.jpg', '/images/property_5f.jpg', '/images/property_5g.jpg', '/images/property_5h.jpg', '/images/property_5i.jpg', '/images/property_5j.jpg', '/images/property_5k.jpg', '/images/property_5l.jpg', '/images/property_5m.jpg', '/images/property_5n.jpg', '/images/property_5o.jpg', '/images/property_5p.jpg' ],
    propertySize: 120,
    beds: 3,
    baths: 3,
    toilets: 4,
    agentInCharge: 'Afolabi Ishola',
    agentInChargeImage: '/images/profile_5.jpg',
    liked: true,
    saved: false,
    monthlyRent: 158000,
    propertyCost: undefined,
    title: 'Luxurious Living Apartment in the heart of Alausa, Ikeja',
    location: 'Ikeja, Lagos',
    mainFees: [
      { name: 'application fees', amount:  50000},
      { name: 'agreement', amount: 80000 },
      { name: 'commission', amount: 80000 },
      { name: 'damages', amount: 250000 },
      { name: 'facility charges', amount: 250000 },
    ],
    nearbyPlaces: [
      { name: 'restaurant', distance:  '500km'},
      { name: 'mall', distance: '800km' },
      { name: 'central market', distance: '200km' },
      { name: 'schools', distance: '800m' },
    ],
    optionalFees: [
      { name: 'wifi', amount:  50000},
      { name: 'dog rent', amount: 50000 },
      { name: 'cat rent', amount: 50000 },
    ],
    intro: "This stunning 3-bedroom detached home in Alausa boasts modern finishes, a private pool, and lush landscaping.  Perfect for entertaining and enjoying the Lagos outdoor lifestyle.",
    description: "This expansive 3-bedroom, 3-bathroom detached property offers a haven of modern luxury.  The open-plan living area is ideal for entertaining, while the well-equipped kitchen is a chef's dream.  Each bedroom is a tranquil retreat, and the master suite features a spa-like bathroom.  Step outside to your private oasis, complete with a sparkling pool, lush gardens, and a covered patio perfect for relaxing or unwinding with loved ones.",
    verifiedamenities: ["wifi", "private pool", "landscaped gardens", "backyard", "modern kitchen", "storage space", "security post", "parking space"]
  },
  {
    id: 'property_6',
    propertTag: 'rent',
    furnitureTag: 'furnished',
    propertyImage: '/images/property_6.jpg',
    propertyImageList: ['/images/property_6a.jpg', '/images/property_6b.jpg', '/images/property_6c.jpg', '/images/property_6d.jpg', '/images/property_6e.jpg', '/images/property_6f.jpg', '/images/property_6g.jpg', '/images/property_6h.jpg', '/images/property_6i.jpg', '/images/property_6j.jpg', '/images/property_6k.jpg', '/images/property_6l.jpg', '/images/property_6m.jpg', '/images/property_6n.jpg', '/images/property_6o.jpg', '/images/property_6p.jpg', '/images/property_6q.jpg' ],
    propertySize: 120,
    beds: 3,
    baths: 3,
    toilets: 4,
    agentInCharge: 'Afolabi Ishola',
    agentInChargeImage: '/images/profile_6.jpg',
    liked: false,
    saved: false,
    monthlyRent: 158000,
    propertyCost: undefined,
    title: 'Luxurious Living Apartment in the heart of Alausa, Ikeja',
    location: 'Ikeja, Lagos',
    mainFees: [
      { name: 'application fees', amount:  50000},
      { name: 'agreement', amount: 80000 },
      { name: 'commission', amount: 80000 },
      { name: 'damages', amount: 250000 },
      { name: 'facility charges', amount: 250000 },
    ],
    nearbyPlaces: [
      { name: 'restaurant', distance:  '500km'},
      { name: 'mall', distance: '800km' },
      { name: 'central market', distance: '200km' },
      { name: 'schools', distance: '800m' },
    ],
    optionalFees: [
      { name: 'wifi', amount:  50000},
      { name: 'dog rent', amount: 50000 },
      { name: 'cat rent', amount: 50000 },
    ],
    intro: "This stunning 3-bedroom detached home in Alausa boasts modern finishes, a private pool, and lush landscaping.  Perfect for entertaining and enjoying the Lagos outdoor lifestyle.",
    description: "This expansive 3-bedroom, 3-bathroom detached property offers a haven of modern luxury.  The open-plan living area is ideal for entertaining, while the well-equipped kitchen is a chef's dream.  Each bedroom is a tranquil retreat, and the master suite features a spa-like bathroom.  Step outside to your private oasis, complete with a sparkling pool, lush gardens, and a covered patio perfect for relaxing or unwinding with loved ones.",
    verifiedamenities: ["wifi", "private pool", "landscaped gardens", "backyard", "modern kitchen", "storage space", "security post", "parking space"]
  },
];

export const homePageData = {};

export const aboutUsData = {
  maintitle: "At Nomeo Suites, we're passionate about empowering you to achieve your real estate goals in Lagos. Whether you're a first-time homebuyer, a seasoned investor, or a landlord seeking reliable tenants, we offer a comprehensive suite of services designed to streamline your journey and maximize your success.",
  whatSetUsApart: {
    subtitle: "Navigating the dynamic Lagos real estate market requires a partner who understands your goals and possesses the expertise to deliver exceptional results. At Nomeo Suites, we stand out from the crowd with a unique combination of qualities that ensure a smooth and successful experience for our clients. What set us apart includes:",
    setApart: [
      {
        title: "Full-Spectrum Expertise",
        body:"We cater to both sides of the real estate market. Our team of experienced agents is adept at assisting buyers in finding their dream property and helping landlords secure qualified tenants for their investment properties."
      },
      {
        title: "Unwavering Client Focus",
        body:"We understand that your real estate needs are unique. We take the time to understand your specific goals, budget, and preferences, providing personalized guidance and support throughout the entire process."
      },
      {
        title: "Extensive Local Market Knowledge",
        body:"As a deeply rooted Lagos agency, we possess an unrivaled understanding of the local market. This translates into expert advice on neighborhoods, pricing trends, and property values."
      },
      {
        title: "Streamlined Buying and Selling",
        body:"Let us navigate the complexities of the real estate transaction for you. We handle everything from property search and negotiation to mortgage pre-approval recommendations and closing coordination."
      },
      {
        title: "Seamless Leasing and Property Management",
        body:"For landlords, we offer a stress-free leasing and property management experience. We take care of tenant screening, lease agreements, rent collection, and property maintenance, allowing you to enjoy the benefits of ownership without the hassle."
      },
      {
        title: "Unwavering Commitment to Quality",
        body:"We believe in transparency, integrity, and exceeding client expectations. Our commitment to these values has earned us a reputation for excellence in the Lagos real estate market."
      },
    ]
  },
  partneringWithUs: {
    subtitle: "The Lagos real estate market is a vibrant tapestry, brimming with opportunities but also complexities.  Navigating this landscape requires a partner you can trust; a partner who understands your goals, possesses the expertise to unlock them, and prioritizes your success throughout the journey. What partnering withus means:",
    whyPartner: [
      {
        title: "Access to a diverse range of properties",
        body:"We maintain a robust network of property listings across Lagos, ensuring you have a wide selection of options to consider, whether you're searching for a cozy apartment, a spacious family home, or a lucrative investment property."
      },
      {
        title: "Highly skilled and dedicated agents",
        body:"Our team of licensed and experienced agents is committed to providing you with exceptional service. They possess in-depth market knowledge, strong negotiation skills, and a genuine desire to see you achieve your real estate goals."
      },
      {
        title: "Streamlined communication and efficient transactions",
        body:"We leverage technology to make the process as smooth and convenient as possible for you. From online property listings to secure communication channels, we ensure you're informed and involved every step of the way"
      },
    ]
  },
  whatservice: {
    subtitle: "At Nomeo Suites, we are your one-stop shop for all your Lagos real estate needs. Whether you're a seasoned investor seeking lucrative opportunities or a first-time homebuyer searching for your dream place, our experienced agents are here to guide you every step of the way.",
    ourServices: [
      {
        title: "Property Search and Acquisition (For Buyers and Renters)",
        body: "This involves assisting clients in finding their ideal property, whether for purchase or rent.  Real estate agents leverage their market expertise and local knowledge to source suitable properties, schedule viewings, and guide clients through the selection process. In course of this process, We take time to understand the need of our client by looking at their desired locations, their budget, checking out their lifestyle needs such proximity to school and work, and their move-in timelines (whether within a week or month). This part usually is the longest but with the help of our strong database and agent networks we are able to reduce the stress in half.", 
        id: "acquisition"
      },
      {
        title: "Sales and Marketing (For Sellers)",
        body: "Real estate agencies support sellers in achieving a successful sale of their property.  This includes tasks like property valuation, developing a marketing strategy, conducting open houses, managing negotiations, and handling the closing process. Selling your Lagos property can be an exciting prospect, but navigating the process alone can be daunting. At Nomeo Suites, we understand the intricacies of the Lagos real estate market and are here to guide you every step of the way, ensuring a stress-free and successful sale. During the whole process, we conduct a thorough market analysis to determine the current market value of your property, considering comparable recent sales, current trends, and neighborhood factors. After all of these things we employ our content creator to help in the advertisement because we understand we are in a competitive market.", 
        id: "sales"
      },
      {
        title: "Property Management (For Investors)",
        body: "Real estate agencies offer property management services to investors who own rental properties.  This can encompass tasks like tenant screening, rent collection, maintenance coordination, lease renewals, and ensuring compliance with relevant regulations. Investing in Lagos real estate can be a strategic decision, but managing rental properties requires time, effort, and expertise. At Nomeo Suites, we understand the unique needs of investors and offer comprehensive property management services that maximize your return on investment (ROI) while minimizing your stress. We meticulously screen potential tenants, conducting credit checks, employment verification, and reference checks to ensure responsible and qualified occupants for your property.", 
        id: "management"
      },

    ]
  },
  meetTheTeam: {
    subtitle: "At Nomeo Suites, we believe our success hinges on the dedication and expertise of our team.  Our agents are more than just real estate professionals; they're passionate about connecting you with the perfect property in Lagos, whether you're a seasoned investor, a first-time homebuyer, or a renter seeking your dream apartment.",
    teamList: [
      {
        name: 'Eleazor Nwanni',
        role: 'Content Creator',
        imageUrl: '/images/profile_1.jpg',
        instagramUrl: 'https://www.instagram.com/eleazorbae23',
        linkedinUrl: 'https://www.linkedin.com/eleazorbae23',
        threadsUrl: 'https://www.threads.com/eleazorbae23',
      },
      {
        name: 'Salomi Onome',
        role: 'Affliate Agent, Ikorodu.',
        imageUrl: '/images/profile_2.jpg',
        instagramUrl: 'https://www.instagram.com/pearlRealtors',
        linkedinUrl: 'https://www.linkedin.com/pearlRealtors',
        threadsUrl: 'https://www.threads.com/pearlRealtors',
      },
      {
        name: 'Modupe Ozolua',
        role: 'Graphic Designer',
        imageUrl: '/images/profile_3.jpg',
        instagramUrl: 'https://www.instagram.com/modupeola23',
        linkedinUrl: 'https://www.linkedin.com/modupeola23',
        threadsUrl: 'https://www.threads.com/modupeola23',
      },
      {
        name: 'Bamidele Smart',
        role: 'Graphic Designer',
        imageUrl: '/images/profile_4.jpg',
        instagramUrl: 'https://www.instagram.com/bambam345',
        linkedinUrl: 'https://www.linkedin.com/bambam345',
        threadsUrl: 'https://www.threads.com/bambam345',
      },
      {
        name: 'Shane McNaughtey',
        role: 'Software Developer',
        imageUrl: '/images/profile_5.jpg',
        instagramUrl: 'https://www.instagram.com/bambam345',
        linkedinUrl: 'https://www.linkedin.com/bambam345',
        threadsUrl: 'https://www.threads.com/bambam345',
      },
      {
        name: 'Olatunde Salami',
        role: 'Software Developer',
        imageUrl: '/images/profile_6.jpg',
        instagramUrl: 'https://www.instagram.com/bambam345',
        linkedinUrl: 'https://www.linkedin.com/bambam345',
        threadsUrl: 'https://www.threads.com/bambam345',
      },
      {
        name: 'Olaseni Ogunlesi',
        role: 'Affliate Agent, Lekki',
        imageUrl: '/images/profile_7.jpg',
        instagramUrl: 'https://www.instagram.com/bambam345',
        linkedinUrl: 'https://www.linkedin.com/bambam345',
        threadsUrl: 'https://www.threads.com/bambam345',
      },
      {
        name: 'Olasile Omotara',
        role: 'Affliate Agent, Ikeja',
        imageUrl: '/images/profile_8.jpg',
        instagramUrl: 'https://www.instagram.com/bambam345',
        linkedinUrl: 'https://www.linkedin.com/bambam345',
        threadsUrl: 'https://www.threads.com/bambam345',
      },
      {
        name: 'Kennedy Palmer',
        role: 'Accounting Consultant',
        imageUrl: '/images/profile_9.jpg',
        instagramUrl: 'https://www.instagram.com/bambam345',
        linkedinUrl: 'https://www.linkedin.com/bambam345',
        threadsUrl: 'https://www.threads.com/bambam345',
      },
      {
        name: 'Dedier Croucher',
        role: 'Accounting Consultant',
        imageUrl: '/images/profile_10.jpg',
        instagramUrl: 'https://www.instagram.com/bambam345',
        linkedinUrl: 'https://www.linkedin.com/bambam345',
        threadsUrl: 'https://www.threads.com/bambam345',
      },
      {
        name: 'Adeyinka Olakunle',
        role: 'Affliate Agent, Ikeja',
        imageUrl: '/images/profile_11.jpg',
        instagramUrl: 'https://www.instagram.com/bambam345',
        linkedinUrl: 'https://www.linkedin.com/bambam345',
        threadsUrl: 'https://www.threads.com/bambam345',
      },
      {
        name: 'Bayowa Oseni',
        role: 'Affliate Agent, Mushin',
        imageUrl: '/images/profile_12.jpg',
        instagramUrl: 'https://www.instagram.com/bambam345',
        linkedinUrl: 'https://www.linkedin.com/bambam345',
        threadsUrl: 'https://www.threads.com/bambam345',
      },
    ]
  }
};

export const blogData = {
  mainTitle: "Are you navigating the exciting yet complex world of Lagos real estate? Look no further! At Nomeo Suites, we're passionate about connecting you with your dream property and empowering you with knowledge. This blog is your gateway to expert advice, insightful market trends, and local real estate news. Whether you're a seasoned investor, a first-time homebuyer, or a renter seeking your perfect place, we've got something for everyone.",
};

export const agentMenuList = [
  {
    label: 'property',
    icon: TbHomePlus
  },
  {
    label: 'post',
    icon: TbFileText
  }
];

export const mainItemList = [
  {
    label: 'notifications',
    icon: TbBellRinging
  },
  {
    label: 'likes',
    icon: TbHomeHeart
  },
  {
    label: 'saves',
    icon: TbHomeRibbon
  },
  {
    label: 'profile',
    icon: TbUserEdit
  },
  {
    label: 'password',
    icon: TbLockPlus
  },

];

export const states = ['Edo', 'Federal Capital Territory', 'Kano', 'Kwara', 'Lagos', 'Ondo', 'Osun', 'Oyo'];

export const user = {
  name: 'Salomi Onome',
  email: 'onomesalomi@gmail.com',
  image: '/images/profile_4.jpg',
  mobileNumber: '07037575894',
  city: 'Ikeja',
  state: 'Lagos',
  agencyName: '',
  officeAddress: '',
  officeNumber: '',
  inspectionFee: 0,
  bio: '',
  isAgent: false,
}

export const user_2 = {
  name: 'Tunde Badamosi',
  email: 'olatundebadamosi@gmail.com',
  image: '/images/profile_6.jpg',
  mobileNumber: '07037575663',
  city: 'Mushin',
  state: 'Lagos',
  agencyName: 'BatchRealtor Inc.',
  officeAddress: 'block 45, Olatunji Ishola street, Mushin',
  officeNumber: '08036595663',
  inspectionFee: 3000,
  bio: '',
  isAgent: true,
}