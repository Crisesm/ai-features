import test from 'node:test';import assert from 'node:assert/strict';import {extractActions,summarizeNotes} from '../src/extract.js';
test('extracts action items with source lines',()=>assert.deepEqual(extractActions('Intro\nTODO: Review hooks\n- HOMEWORK: Build a screen'),[{text:'Review hooks',sourceLine:2},{text:'Build a screen',sourceLine:3}]));
test('ignores unrelated text',()=>assert.deepEqual(extractActions('Discuss architecture'),[]));
test('summarizes line count',()=>assert.equal(summarizeNotes('One\n\nTwo').lineCount,2));
