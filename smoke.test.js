import assert from 'node:assert/strict';

try {
  assert.ok(process.version, 'Node.js runtime is available');
  assert.equal(2 + 2, 4, 'Basic arithmetic sanity check');
  console.log('Smoke test passed.');
  process.exit(0);
} catch (error) {
  console.error('Smoke test failed:', error instanceof Error ? error.message : error);
  process.exit(1);
}
