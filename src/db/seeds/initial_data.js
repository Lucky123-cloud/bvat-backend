exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('outlet_products').del();
  await knex('faqs').del();
  await knex('outlets').del();
  await knex('products').del();

  // Inserts seed entries
  await knex('products').insert([
    {
      name: 'Organic Kale',
      category: 'Vegetable',
      certification: 'Organic',
      description: 'Leafy greens.'
    },
    {
      name: 'Free-range Eggs',
      category: 'Poultry',
      certification: 'Free-range',
      description: 'Eggs from free-range chickens.'
    },
    {
      name: 'Heritage Tomatoes',
      category: 'Vegetable',
      certification: 'Non-GMO',
      description: 'Heirloom variety tomatoes.'
    }
  ]);

  await knex('outlets').insert([
    {
      name: 'Green Market Nairobi',
      region: 'Nairobi',
      latitude: -1.292066,
      longitude: 36.821945
    },
    {
      name: 'Eco Farm Shop',
      region: 'Central',
      latitude: -0.303099,
      longitude: 37.347707
    }
  ]);

  await knex('faqs').insert([
    {
      question: 'What is Agroecology?',
      answer: 'Agroecology is a holistic approach to farming that works with nature.',
      lang: 'en'
    },
    {
      question: 'How does organic certification work?',
      answer: 'Organic certification ensures products meet strict standards without synthetic chemicals.',
      lang: 'en'
    },
    {
      question: 'Qu\'est-ce que l\'agroécologie?',
      answer: 'L\'agroécologie est une approche holistique de l\'agriculture qui travaille avec la nature.',
      lang: 'fr'
    }
  ]);

  await knex('outlet_products').insert([
    { outlet_id: 1, product_id: 1 },
    { outlet_id: 1, product_id: 2 },
    { outlet_id: 2, product_id: 1 },
    { outlet_id: 2, product_id: 3 }
  ]);
};