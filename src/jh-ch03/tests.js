/**
 * 3장 예제 코드
 */

"use strict";

QUnit.module('JH 3장 TEST');


// 라이브러리 import
const _ = require('lodash');
const R = require('ramda');
const assert = QUnit.assert;

const Person = require('../model/Person.js').Person;
const Address = require('../model/Address.js').Address;

var p1 = new Person('111-11-1111', 'Jihoon', 'Park', 1900, new Address('US'));
var p2 = new Person('222-22-2222', 'gildong', 'Hong', 1907, new Address('Greece'));
var p3 = new Person('333-33-3333', 'Jamin', 'Lee', 1903, new Address('Hungary'));
var p4 = new Person('444-44-4444', 'Dongsu', 'Kim', 1903, new Address('US'));

var persons = [p1, p2, p3, p4];

QUnit.test('Hello World QUnit TEST', function () {
  const result = {msg: 'hello world'};

  assert.deepEqual(result, {
    msg: 'hello world',
  });

});


QUnit.test('map() test', () => {
  const results = _.map(persons,
    p => (p.address.country.toLowerCase() === 'us') ? p.firstname : '');
  assert.deepEqual(results, ['Jihoon','', '','Dongsu']);
});

