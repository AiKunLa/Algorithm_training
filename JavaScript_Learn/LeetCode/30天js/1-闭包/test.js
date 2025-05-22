try {
  console.log('Test 1: expect(5).toBe(5)');
  const result1 = expect(5).toBe(5);
  console.log('Result:', result1); // 应输出true
} catch (e) {
  console.error('Error:', e.message);
}

try {
  console.log('Test 2: expect(5).toBe(6)');
  const result2 = expect(5).toBe(6);
  console.log('Result:', result2);
} catch (e) {
  console.error('Error:', e.message); // 应输出"Not Equal"
}

try {
  console.log('Test 3: expect(5).notToBe(5)');
  const result3 = expect(5).notToBe(5);
  console.log('Result:', result3);
} catch (e) {
  console.error('Error:', e.message); // 应输出"Equal"
}

try {
  console.log('Test 4: expect(5).notToBe(6)');
  const result4 = expect(5).notToBe(6);
  console.log('Result:', result4); // 应输出true
} catch (e) {
  console.error('Error:', e.message);
}