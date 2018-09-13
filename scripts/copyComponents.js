const vfs = require("vinyl-fs");
const dest = process.cwd() + `/rn`;
const through = require("through2");
const path = require("path");
const targ = path.join(__dirname, "../");
console.log(targ);

vfs
  .src(["components/**","themes/**"], {
    cwd: targ,
    cwdbase: true,
    dot: true
  })
  .pipe(template(dest, process.cwd()))
  .pipe(vfs.dest(dest))
  .on("end", function() {
    console.log("end");
  })
  .resume();
function template(dest, cwd) {
  return through.obj(function(file, enc, cb) {
    if (!file.stat.isFile()) {
      return cb();
    }

    info("create", file.path.replace(cwd + "/", ""));
    this.push(file);
    cb();
  });
}

function info(type, message) {
  console.log(`${type}  ${message}`);
}
