/**
 * eg: npm run cli-version
 * 配合企业级 devops 流水线
 */
const execSync = require('child_process').execSync;
const path = require('path');
const fs = require('fs');

function getPackageJson() {
  console.log('------ 开始读取package.json -------');
  const packageJson = fs.readFileSync(
    path.resolve(__dirname, '../package.json'),
  );
  console.log('------ 读取package.json文件完毕 -------');
  return JSON.parse(packageJson);
}

const cmdStr = 'npm view taro-qn-components version';

const buffer = execSync(cmdStr);
const currVersion = buffer.toString().replace(/\n/, '');

console.log(`目前npm上taro-qn-components版本为 ${currVersion}`);

const calcNext = () => {
  const arr = currVersion.split('.');
  if (Number(arr[2]) < 99) {
    return `${arr[0]}.${arr[1]}.${Number(arr[2]) + 1}`;
  } else if (Number(arr[1]) < 99) {
    return `${arr[0]}.${Number(arr[1]) + 1}.0`;
  }
  return `${Number(arr[0]) + 1}.0.0`;
};

const package = getPackageJson();

package.version = calcNext();

fs.writeFileSync(
  path.resolve(__dirname, '../package.json'),
  JSON.stringify(package),
);

console.log(`------ 本次生成新版本号：${package.version} -------`);
