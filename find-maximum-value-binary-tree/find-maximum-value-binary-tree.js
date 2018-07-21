'use strict';

module.exports = (bt) => {
  if (!bt) throw 'beat it';

  let maxValue = 0;

  let _walk = (node) => {

    if (node.left) { _walk(node.left); }

    maxValue = node.value > maxValue ? node.value : maxValue;

    if (node.right) { _walk(node.right); }

  };
  _walk(this.root);

  return maxValue;
};