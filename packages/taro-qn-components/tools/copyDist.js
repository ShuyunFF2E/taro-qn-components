const fse = require('fs-extra');

fse.readJson('./.conf', function (err, data) {
  if (err) {
    console.log('read .conf err', err);
  } else if (data.syncProjectPath) {
    console.log('data', data);
    fse.copy('./dist', data.syncProjectPath, function (err) {
      if (err) {
        console.log('copy err', err);
        return;
      }
      console.log('copy successful');
    });
  }
});
