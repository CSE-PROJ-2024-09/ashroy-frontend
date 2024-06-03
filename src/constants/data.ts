const routes = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/orphanage',
    label: 'Orphanage',
    description: 'lorem ipsul dolor sent color enhum here',
  },
  {
    path: '/animal-welfare',
    label: 'Animal Welfare',
    description: 'lorem ipsul dolor sent color enhum here',
  },
  {
    path: '/elderly-care',
    label: 'Ealderly Care',
    description: 'lorem ipsul dolor sent color enhum here',
  },
  {
    path: '/shelter-home',
    label: 'Shelter Home',
    description: 'lorem ipsul dolor sent color enhum here',
  },
];

const orphanages = [
  {
    id: 1,
    name: 'Happy Hearts Orphanage',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdlQHq3RNDIKvBeilVjpksE1sdoOiRoBdvk3Odbq8gLA&s',
    location: '123 Sunshine Street, Pleasantville',
    phone: '(123) 456-7890',
    email: 'info@happyhearts.org',
    website: 'www.happyhearts.org',
    description:
      'Providing a loving home and education for children in need since 1985.',
    capacity: 50,
    current_children: 45,
    services: ['Education', 'Healthcare', 'Counseling', 'Recreation'],
  },
  {
    id: 2,
    name: "Safe Haven Children's Home",
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdlQHq3RNDIKvBeilVjpksE1sdoOiRoBdvk3Odbq8gLA&s',
    location: '456 Peaceful Avenue, Harmony City',
    phone: '(987) 654-3210',
    email: 'contact@safehaven.org',
    website: 'www.safehaven.org',
    description:
      'A safe and nurturing environment for abandoned and orphaned children.',
    capacity: 60,
    current_children: 50,
    services: ['Shelter', 'Education', 'Medical Care', 'Adoption Services'],
  },
  {
    id: 3,
    name: 'Bright Future Orphanage',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdlQHq3RNDIKvBeilVjpksE1sdoOiRoBdvk3Odbq8gLA&s',
    location: '789 Hope Road, Joytown',
    phone: '(555) 123-4567',
    email: 'hello@brightfuture.org',
    website: 'www.brightfuture.org',
    description: 'Dedicated to building brighter futures for children in need.',
    capacity: 40,
    current_children: 35,
    services: [
      'Education',
      'Vocational Training',
      'Psychological Support',
      'Nutrition',
    ],
  },
  {
    id: 4,
    name: 'New Beginnings Orphanage',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdlQHq3RNDIKvBeilVjpksE1sdoOiRoBdvk3Odbq8gLA&s',
    location: '321 Dream Lane, Promise City',
    phone: '(444) 987-6543',
    email: 'support@newbeginnings.org',
    website: 'www.newbeginnings.org',
    description:
      'Empowering orphaned children with love, care, and opportunities.',
    capacity: 70,
    current_children: 65,
    services: [
      'Healthcare',
      'Education',
      'Rehabilitation',
      'Adoption Services',
    ],
  },
  {
    id: 5,
    name: 'Hope for Kids Orphanage',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdlQHq3RNDIKvBeilVjpksE1sdoOiRoBdvk3Odbq8gLA&s',
    location: '654 Caring Street, Loveville',
    phone: '(333) 555-7890',
    email: 'admin@hopeforkids.org',
    website: 'https://www.hopeforkids.org',
    description:
      'Committed to providing a safe and loving environment for children in need.',
    capacity: 55,
    current_children: 50,
    services: ['Shelter', 'Education', 'Counseling', 'Community Outreach'],
  },
];

const animalWelfares = [
  {
    id: 1,
    name: 'Happy Tails Animal Rescue',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztp7t_yb_v-K36INKo1Mp9bhR41pyer0vyCE_L4LywA&s',
    location: '456 Pet Lane, Animalville',
    phone: '(123) 456-7890',
    email: 'info@happytails.org',
    website: 'www.happytails.org',
    description:
      'Dedicated to rescuing and rehabilitating abandoned and abused animals.',
    capacity: 100,
    current_animals: 85,
    services: ['Rescue', 'Rehabilitation', 'Adoption', 'Medical Care'],
  },
  {
    id: 2,
    name: 'Paws and Claws Shelter',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztp7t_yb_v-K36INKo1Mp9bhR41pyer0vyCE_L4LywA&s',
    location: '789 Furry Avenue, Pawtown',
    phone: '(987) 654-3210',
    email: 'contact@pawsandclaws.org',
    website: 'www.pawsandclaws.org',
    description:
      'Providing a safe haven for homeless pets and promoting responsible pet ownership.',
    capacity: 120,
    current_animals: 110,
    services: ['Shelter', 'Adoption', 'Spay/Neuter', 'Education'],
  },
  {
    id: 3,
    name: 'Animal Haven Sanctuary',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztp7t_yb_v-K36INKo1Mp9bhR41pyer0vyCE_L4LywA&s',
    location: '321 Sanctuary Road, Safe City',
    phone: '(555) 123-4567',
    email: 'hello@animalhaven.org',
    website: 'www.animalhaven.org',
    description:
      'A loving home for animals in need, offering rescue, care, and adoption services.',
    capacity: 80,
    current_animals: 70,
    services: ['Rescue', 'Shelter', 'Adoption', 'Behavioral Training'],
  },
  {
    id: 4,
    name: 'Forever Friends Animal Shelter',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztp7t_yb_v-K36INKo1Mp9bhR41pyer0vyCE_L4LywA&s',
    location: '654 Kindness Street, Loveville',
    phone: '(444) 987-6543',
    email: 'support@foreverfriends.org',
    website: 'www.foreverfriends.org',
    description:
      'Committed to providing care and finding loving homes for all animals.',
    capacity: 90,
    current_animals: 75,
    services: [
      'Medical Care',
      'Adoption',
      'Rehabilitation',
      'Community Outreach',
    ],
  },
  {
    id: 5,
    name: 'Safe Paws Rescue',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztp7t_yb_v-K36INKo1Mp9bhR41pyer0vyCE_L4LywA&s',
    location: '987 Guardian Lane, Protect City',
    phone: '(333) 555-7890',
    email: 'admin@safepaws.org',
    website: 'www.safepaws.org',
    description:
      'Rescuing and caring for animals in need, and educating the public on animal welfare.',
    capacity: 110,
    current_animals: 90,
    services: ['Rescue', 'Adoption', 'Spay/Neuter', 'Education'],
  },
];

const elderlyCares = [
  {
    id: 1,
    name: 'Golden Years Retirement Home',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybYrHZNxq0ga49IJnI3H-L32H3rF361zfKt1PPt7v0w&s',
    location: '123 Serenity Street, Peaceville',
    phone: '(123) 456-7890',
    email: 'info@goldenyears.org',
    website: 'www.goldenyears.org',
    description:
      'Providing compassionate care and a comfortable living environment for seniors.',
    capacity: 80,
    current_residents: 70,
    services: [
      'Medical Care',
      'Recreational Activities',
      'Physical Therapy',
      'Dining Services',
    ],
  },
  {
    id: 2,
    name: 'Sunshine Senior Living',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybYrHZNxq0ga49IJnI3H-L32H3rF361zfKt1PPt7v0w&s',
    location: '456 Golden Lane, Elderwood',
    phone: '(987) 654-3210',
    email: 'contact@sunshineseniorliving.org',
    website: 'www.sunshineseniorliving.org',
    description:
      'A vibrant community focused on providing exceptional care and enriching experiences.',
    capacity: 100,
    current_residents: 90,
    services: [
      'Assisted Living',
      'Memory Care',
      'Social Events',
      'Fitness Programs',
    ],
  },
  {
    id: 3,
    name: 'Peaceful Haven Elder Care',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybYrHZNxq0ga49IJnI3H-L32H3rF361zfKt1PPt7v0w&s',
    location: '789 Tranquility Road, Calm City',
    phone: '(555) 123-4567',
    email: 'hello@peacefulhaven.org',
    website: 'www.peacefulhaven.org',
    description:
      'A serene and supportive environment for seniors to enjoy their golden years.',
    capacity: 60,
    current_residents: 55,
    services: [
      'Nursing Care',
      'Rehabilitation',
      'Recreational Activities',
      'Nutritional Support',
    ],
  },
  {
    id: 4,
    name: 'Harmonious Home for Seniors',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybYrHZNxq0ga49IJnI3H-L32H3rF361zfKt1PPt7v0w&s',
    location: '321 Harmony Lane, Restville',
    phone: '(444) 987-6543',
    email: 'support@harmonioushome.org',
    website: 'www.harmonioushome.org',
    description:
      'Combining comfort and care to create a warm and welcoming atmosphere for seniors.',
    capacity: 90,
    current_residents: 80,
    services: [
      '24/7 Care',
      'Therapeutic Services',
      'Social Engagement',
      'Wellness Programs',
    ],
  },
  {
    id: 5,
    name: "Elder's Haven",
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybYrHZNxq0ga49IJnI3H-L32H3rF361zfKt1PPt7v0w&s',
    location: '654 Peace Street, Kindtown',
    phone: '(333) 555-7890',
    email: 'admin@eldershaven.org',
    website: 'www.eldershaven.org',
    description:
      'Dedicated to enhancing the quality of life for elderly individuals through comprehensive care.',
    capacity: 75,
    current_residents: 65,
    services: [
      'Skilled Nursing',
      'Personal Care',
      'Entertainment',
      'Meal Services',
    ],
  },
];

const shelterHomes = [
  {
    id: 1,
    name: 'Safe Haven Shelter Home',
    image:
      'https://images.news18.com/ibnlive/uploads/2021/07/1627383097_shelter-home-3.jpg?impolicy=website&width=0&height=0',
    location: '123 Shelter Lane, Haven City',
    phone: '(123) 456-7890',
    email: 'info@safehavenshelter.org',
    website: 'www.safehavenshelter.org',
    description:
      'Providing temporary housing and support services for individuals and families in need.',
    capacity: 100,
    current_residents: 85,
    services: ['Temporary Housing', 'Counseling', 'Job Training', 'Healthcare'],
  },
  {
    id: 2,
    name: 'Hope Shelter',
    image:
      'https://images.news18.com/ibnlive/uploads/2021/07/1627383097_shelter-home-3.jpg?impolicy=website&width=0&height=0',
    location: '456 Hope Street, Uplift Town',
    phone: '(987) 654-3210',
    email: 'contact@hopeshelter.org',
    website: 'www.hopeshelter.org',
    description:
      'A supportive environment for homeless individuals to rebuild their lives.',
    capacity: 120,
    current_residents: 100,
    services: [
      'Emergency Shelter',
      'Case Management',
      'Education Programs',
      'Health Services',
    ],
  },
  {
    id: 3,
    name: 'New Beginnings Shelter',
    image:
      'https://images.news18.com/ibnlive/uploads/2021/07/1627383097_shelter-home-3.jpg?impolicy=website&width=0&height=0',
    location: '789 New Road, Opportunity City',
    phone: '(555) 123-4567',
    email: 'hello@newbeginningshelter.org',
    website: 'www.newbeginningshelter.org',
    description:
      'Offering shelter and comprehensive support services to help individuals achieve stability.',
    capacity: 80,
    current_residents: 70,
    services: [
      'Shelter',
      'Mental Health Services',
      'Vocational Training',
      'Nutritional Support',
    ],
  },
  {
    id: 4,
    name: 'Unity Shelter Home',
    image:
      'https://images.news18.com/ibnlive/uploads/2021/07/1627383097_shelter-home-3.jpg?impolicy=website&width=0&height=0',
    location: '321 Unity Drive, Togetherness Town',
    phone: '(444) 987-6543',
    email: 'support@unityshelter.org',
    website: 'www.unityshelter.org',
    description:
      'A welcoming place providing housing and assistance to those in need.',
    capacity: 90,
    current_residents: 80,
    services: [
      'Housing',
      'Life Skills Training',
      'Medical Services',
      'Community Outreach',
    ],
  },
  {
    id: 5,
    name: 'Peaceful Shelter',
    image:
      'https://images.news18.com/ibnlive/uploads/2021/07/1627383097_shelter-home-3.jpg?impolicy=website&width=0&height=0',
    location: '654 Calm Avenue, Serenity City',
    phone: '(333) 555-7890',
    email: 'admin@peacefulshelter.org',
    website: 'www.peacefulshelter.org',
    description:
      'Dedicated to offering safe and secure housing for the homeless.',
    capacity: 110,
    current_residents: 95,
    services: [
      'Temporary Housing',
      'Counseling',
      'Job Placement Assistance',
      'Health Services',
    ],
  },
];

export { routes, orphanages, animalWelfares, elderlyCares, shelterHomes };
