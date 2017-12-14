export class ReactiveHero {
  id = 0;
  name = '';
  addresses: Address[];
  constructor(id, name, addresses) {
    this.id = id;
    this.name = name;
    this.addresses = addresses;
  }
}

export class Address {
  street = '';
  city = '';
  state = '';
  zip = '';
}

export const heroes: ReactiveHero[] = [
  {
    id: 1,
    name: 'Whirlwind',
    addresses: [
      {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
      {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
    ]
  },
  {
    id: 2,
    name: 'Bombastic',
    addresses: [
      {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
    ]
  },
  {
    id: 3,
    name: 'Magneta',
    addresses: [ ]
  },
];

export const states = ['CA', 'MD', 'OH', 'VA'];

export const saveAddress = (id: number, address: Address): string => {
  let result = '';
  heroes.forEach((e) => {
    if (e.id === id) {
      e.addresses.push(address);
      result = JSON.stringify({
        stateCode: 1,
        message: 'success'
      });
    }
  });
  if (result !== '') {
    return result;
  } else {
    return  JSON.stringify({
      stateCode: 0,
      message: '没有这个Hero'
    });
  }
};

export const saveHero = (hero: ReactiveHero) => {
  heroes.push(hero);
};
