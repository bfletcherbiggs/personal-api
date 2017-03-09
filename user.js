

    var user = {
      name: 'bozo',
      location: 'tejas',
      occupations: ['clown','animal','bean counter','zipppydoo','joe'],
      hobbies: [
        {
          name: 'juggling',
          type: 'active'
        },
        {
          name: 'smuggling',
          type: 'active'
        },
        {
          name: 'snuggling',
          type: 'inactive'
        }
      ],
      family: [
        {
          name: 'showzo',
          relation: 'brother',
          gender: 'male'
        },
        {
          name: 'fugly',
          relation: 'sister',
          gender: 'female'
        },{
          name: 'tozo',
          relation: 'uncle',
          gender: 'male'
        }
      ],
      restaurants: [
        {
          name: 'Taco Bueno',
          type: 'Tex-Mex',
          rating: 10
        },
        {
          name: 'Big Guys Chicken',
          type: 'Mediterranean',
          rating: 1
        },
        {
          name: 'Zenna',
          type: 'Thai',
          rating: 8
        }
      ]
    }

module.exports = user;
