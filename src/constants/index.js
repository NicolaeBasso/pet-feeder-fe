export const users = [
  {
    id: '13189713-1d68-42af-a947-b0285d1c1ce8',
    name: 'Jake Johnson',
    email: 'jj@gmail.com',
    password: '4321'
  }
];

export const FOOD_TYPES = { dry: 'dry', wet: 'wet' };
// 14400 seconds = 4 hours...
export const SCHEDULE_TIME = [
  { id: '46d55c40-fda5-4078-b744-01ce673e0e32', time: 21600 },
  { id: '09b0823f-34ad-40c6-90e0-8f0fc305f59c', time: 43200 },
  { id: 'a9ed6426-a619-4095-80a5-7d4aa4a3b705', time: 64800 }
];
export const DEFAULT_LOCATION = 'Main';
export const DEFAULT_LOCATIONS = ['Main', 'Kitchen', 'Garage', 'Balcony'];
export const DEFAULT_SCHEDULES = [21600, 43200, 64800];

export const DEFAULT_MENU = {
  id: '43c64ee1-ffba-427c-bd07-c1728e122eb4',
  name: 'Pro Plan',
  type: FOOD_TYPES.dry
};

export const DEFAULT_PLANS = [
  {
    id: 'adeebbdb-8f16-4b3f-9189-e86df7cd228d',
    name: 'Standard-3t-6h',
    amount: 3,
    scheduleTime: DEFAULT_SCHEDULES[0],
    menu: DEFAULT_MENU
  },
  {
    id: 'f3c7fcba-7afe-4906-90fe-eac6e90f25d1',
    name: 'Standard-2t-8h',
    amount: 2,
    scheduleTime: DEFAULT_SCHEDULES[2],
    menu: DEFAULT_MENU
  }
];

export const DEFAULT_DEVICES = [
  {
    id: 'aa6b7a45-1a20-4eb0-8229-0b6882dac4ad',
    name: 'Haiko device',
    power: true,
    pet: null,
    location: DEFAULT_LOCATION,
    plan: null
  },
  {
    id: '502d65cc-6e7b-473e-b0f6-6d678f808374',
    name: 'Gingers device',
    power: true,
    pet: null,
    location: null,
    plan: DEFAULT_PLANS[0]
  },
  {
    id: '502d65cc-6e7b-473e-b0f6-6d678f808374',
    name: 'Bellas device',
    power: true,
    pet: null,
    location: null,
    plan: DEFAULT_PLANS[0]
  }
];

export const DEFAULT_PETS = [
  {
    id: '3bcd4715-9a6f-4d01-aa1b-6188bcce8ffe',
    name: 'Haiko',
    deviceId: 'aa6b7a45-1a20-4eb0-8229-0b6882dac4ad'
  },
  {
    id: '3bcd4715-9a6f-4d01-aa1b-6188bcceffe',
    name: 'Ginger',
    device: 'Gingers device'
  }
];
