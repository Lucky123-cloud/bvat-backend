const axios = require('axios');

const BASE_URL = 'http://localhost:3000/api';

async function runTests() {
  console.log('🚀 Starting API Tests...\n');

  try {
    // Test 1: Get stats
    console.log('1. Testing /api/stats');
    const statsResponse = await axios.get(`${BASE_URL}/stats`);
    console.log('✅ Stats:', statsResponse.data);
    console.log('---\n');

    // Test 2: Get products with pagination
    console.log('2. Testing /api/products with pagination');
    const productsResponse = await axios.get(`${BASE_URL}/products?page=1&limit=2`);
    console.log('✅ Products:', productsResponse.data);
    console.log('---\n');

    // Test 3: Create a new product
    console.log('3. Testing POST /api/products');
    const newProduct = {
      name: 'Test Organic Carrots',
      category: 'Vegetable',
      certification: 'Organic',
      description: 'Fresh organic carrots from local farm'
    };
    const createResponse = await axios.post(`${BASE_URL}/products`, newProduct);
    console.log('✅ Created Product:', createResponse.data);
    console.log('---\n');

    // Test 4: Get outlets
    console.log('4. Testing /api/outlets');
    const outletsResponse = await axios.get(`${BASE_URL}/outlets`);
    console.log('✅ Outlets:', outletsResponse.data);
    console.log('---\n');

    // Test 5: Get FAQs
    console.log('5. Testing /api/faqs');
    const faqsResponse = await axios.get(`${BASE_URL}/faqs`);
    console.log('✅ FAQs:', faqsResponse.data);
    console.log('---\n');

    // Test 6: Search
    console.log('6. Testing /api/search');
    const searchResponse = await axios.get(`${BASE_URL}/search?q=organic`);
    console.log('✅ Search Results:', searchResponse.data);
    console.log('---\n');

    console.log('🎉 All tests completed successfully!');

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
  }
}

// Install axios if not already installed
console.log('Make sure to install axios: npm install axios');
runTests();