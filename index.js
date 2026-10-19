
const core = require('@actions/core');

try {
  const name = core.getInput('name');
  core.info(`Hello, ${name}!`);
  core.info('My custom JavaScript action is working.');
} catch (error) {
  core.setFailed(error.message);
}
