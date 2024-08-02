import applicanceIcon from './assets/category/home-appliance.png';
import toyPic from './assets/toys.png';
import toyIcon from './assets/category/box.png';
import digitalIcon from './assets/category/gadgets.png';
import ipadPic from './assets/ipad.png';
const categoryList = [
  {
    name: 'Electronics',
    id: 'cat001',
    icon: digitalIcon,
    children: [
      {
        id: 'child001',
        name: 'Ipad Mini',
        source: 'Samsung Galaxy S23',
        getDate: '2024-01-15',
        picture: ipadPic,
        comment: 'Latest model with high-end specs.',
      },
      {
        id: 'child002',
        name: 'Laptop',
        source: 'Dell XPS 15',
        getDate: '2024-02-10',
        picture: ipadPic,
        comment: 'Powerful laptop for professional use.',
      },
      {
        id: 'child003',
        name: 'Smartwatch',
        source: 'Apple Watch Series 9',
        getDate: '2023-12-05',
        picture: ipadPic,
        comment: 'Wearable device with health monitoring features.',
      },
    ],
  },
  {
    name: 'Toys',
    id: 'cat002',
    icon: toyIcon,
    children: [
      {
        id: 'child001',
        name: 'Action Figure',
        source: 'Marvel Avengers',
        getDate: '2024-02-01',
        picture: toyPic,
        comment: 'Exclusive Avengers action figure.',
      },
      {
        id: 'child002',
        name: 'Board Game',
        source: 'Monopoly Classic',
        getDate: '2023-12-15',
        picture: toyPic,
        comment: 'Classic board game for family fun.',
      },
      {
        id: 'child003',
        name: 'Toy Car',
        source: 'Hot Wheels Sports Car',
        getDate: '2024-01-10',
        picture: toyPic,
        comment: 'High-speed toy car with realistic design.',
      },
      {
        id: 'child004',
        name: 'Action Figure',
        source: 'Marvel Spider-Man',
        getDate: '2024-03-12',
        picture: toyPic,
        comment: 'Limited edition action figure.',
      },
      {
        id: 'child005',
        name: 'Puzzle',
        source: '1000-piece World Map Puzzle',
        getDate: '2023-11-20',
        picture: toyPic,
        comment: 'Challenging puzzle for all ages.',
      },
      {
        id: 'child006',
        name: 'Lego Set',
        source: 'Lego Star Wars Millennium Falcon',
        getDate: '2024-04-01',
        picture: toyPic,
        comment: 'Detailed Lego set for Star Wars fans.',
      },
      {
        id: 'child007',
        name: 'Stuffed Animal',
        source: 'Build-A-Bear Unicorn',
        getDate: '2024-05-10',
        picture: toyPic,
        comment: 'Customizable unicorn stuffed animal.',
      },
      {
        id: 'child008',
        name: 'RC Drone',
        source: 'High-Flyer Drone',
        getDate: '2024-06-20',
        picture: toyPic,
        comment: 'Advanced remote control drone with HD camera.',
      },
      {
        id: 'child009',
        name: 'Educational Kit',
        source: 'Science Experiment Kit',
        getDate: '2024-07-15',
        picture: toyPic,
        comment: 'Hands-on science kit for young scientists.',
      },
      {
        id: 'child010',
        name: 'Playset',
        source: 'Wooden Kitchen Playset',
        getDate: '2024-08-25',
        picture: toyPic,
        comment: 'Realistic kitchen playset for imaginative play.',
      },
    ],
  },
  {
    name: 'Appliances',
    id: 'cat003',
    icon: applicanceIcon,
    children: [
      {
        id: 'child007',
        name: 'Refrigerator',
        source: 'LG Double Door',
        getDate: '2024-01-30',
        picture: toyPic,
        comment: 'Energy-efficient refrigerator with large capacity.',
      },
      {
        id: 'child008',
        name: 'Microwave',
        source: 'Panasonic Inverter Microwave',
        getDate: '2024-02-15',
        picture: toyPic,
        comment: 'Microwave with advanced cooking features.',
      },
      {
        id: 'child009',
        name: 'Washing Machine',
        source: 'Bosch Front Load',
        getDate: '2023-12-22',
        picture: toyPic,
        comment: 'Quiet and efficient washing machine.',
      },
    ],
  },
];

export { categoryList };
