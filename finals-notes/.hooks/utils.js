const { spawnSync } = require('child_process');

const INFO = 'info';
const WARN = 'warning'
const SUCCESS = 'success';
const ERROR = 'error';

Reset = '\x1b[0m';
Bright = '\x1b[1m';
Dim = '\x1b[2m';
Underscore = '\x1b[4m';
Blink = '\x1b[5m';
Reverse = '\x1b[7m';
Hidden = '\x1b[8m';
FgBlack = '\x1b[1;30m';
FgRed = '\x1b[1;31m';
FgGreen = '\x1b[1;32m';
FgYellow = '\x1b[1;33m';
FgBlue = '\x1b[1;34m';
FgMagenta = '\x1b[1;35m';
FgCyan = '\x1b[1;36m';
FgWhite = '\x1b[1;37m';

const printer = (c1, description) => msg => console.log(
  c1,
  description + ':' + `${
    (description === INFO || description === ERROR)?
    '\t\t' : '\t'}`,
  Reset,
  msg,
);

const shellOptions = { shell: true, stdio: 'inherit' };
const info = printer(FgBlue, INFO);
const warn = printer(FgYellow, WARN);
const success = printer(FgGreen, SUCCESS);
const error = printer(FgRed, ERROR);

module.exports = {
  command: ({ command, args, output = true }) => spawnSync(command, args, output ? shellOptions : { ...shellOptions, stdio: undefined }),

  info,
  warn,
  success,
  error,

  run: ({
    title,
    successMsg = 'passed...',
    errorMsg = 'failed...',
    command,
    args = [],
  }) => {
    info(title);

    const { status } = spawnSync(command, args, shellOptions);

    if (status === 0) {
      success(successMsg);
      console.log();
    }
    else {
      error(errorMsg);
      process.exit(1);
    }
  },

  finish: () => {
    success('all checks passed');
    process.exit(0);
  },
};
