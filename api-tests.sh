#!/bin/bash

echo "🚀 Testing BvAT Backend API"
echo "============================"

# Test 1: Get stats
echo -e "\n1. Testing /api/stats"
curl -s http://localhost:3000/api/stats | jq .

# Test 2: Get products
echo -e "\n2. Testing /api/products"
curl -s "http://localhost:3000/api/products?page=1&limit=2" | jq .

# Test 3: Create a product
echo -e "\n3. Testing POST /api/products"
curl -s -X POST "http://localhost:3000/api/products" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Organic Carrots",
    "category": "Vegetable",
    "certification": "Organic",
    "description": "Fresh organic carrots from local farm"
  }' | jq .

# Test 4: Get outlets
echo -e "\n4. Testing /api/outlets"
curl -s http://localhost:3000/api/outlets | jq .

# Test 5: Get FAQs
echo -e "\n5. Testing /api/faqs"
curl -s http://localhost:3000/api/faqs | jq .

# Test 6: Search
echo -e "\n6. Testing /api/search"
curl -s "http://localhost:3000/api/search?q=organic" | jq .

echo -e "\n🎉 API tests completed!"