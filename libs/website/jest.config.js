module.exports = {
  name: 'website',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/website',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
