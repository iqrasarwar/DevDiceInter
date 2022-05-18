console.log("node 1st one")
//type node to start repl
//.exit to exit repl
//type null > index.js  create index.js
 //REPL
 //execute expressions
 // use variables
 // multiline code

 // - last result in repl
//  PS C:\Users\BUTT SYSTEMS\OneDrive\Desktop\DevDice> node
//  Welcome to Node.js v16.14.0.
//  Type ".help" for more information.
//  > .exit


//      Directory: C:\Users\BUTT SYSTEMS\OneDrive\Desktop\DevDice


//  Mode                 LastWriteTime         Length Name
//  ----                 -------------         ------ ----
//  d-----         5/18/2022   3:04 PM                Node
//  d-----         4/27/2022   1:19 AM                week01
//  d-----          5/3/2022   1:38 AM                Week02
//  -a----         4/27/2022   9:56 PM             15 README.md


//  PS C:\Users\BUTT SYSTEMS\OneDrive\Desktop\DevDice> node
//  Welcome to Node.js v16.14.0.
//  Type ".help" for more information.
//  > 3+3
//  6
//  > do
//  ... {
//  ... console.log(3)
//  ... }
//  ... while(x!=2)
//  3
//  Uncaught ReferenceError: x is not defined
//  > .editor
//  // Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
//  x=3
//  console.log(x)

//  3
//  undefined
//  >
//  AbortController       AbortSignal           AggregateError        Array                 ArrayBuffer           Atomics               BigInt
//  BigInt64Array         BigUint64Array        Boolean               Buffer                DataView              Date                  Error
//  EvalError             Event                 EventTarget           FinalizationRegistry  Float32Array          Float64Array          Function
//  Infinity              Int16Array            Int32Array            Int8Array             Intl                  JSON                  Map
//  Math                  MessageChannel        MessageEvent          MessagePort           NaN                   Number                Object
//  Promise               Proxy                 RangeError            ReferenceError        Reflect               RegExp                Set
//  SharedArrayBuffer     String                Symbol                SyntaxError           TextDecoder           TextEncoder           TypeError
//  URIError              URL                   URLSearchParams       Uint16Array           Uint32Array           Uint8Array            Uint8ClampedArray
//  WeakMap               WeakRef               WeakSet               WebAssembly           _                     _error                assert
//  async_hooks           atob                  btoa                  buffer                child_process         clearImmediate        clearInterval
//  clearTimeout          cluster               console               constants             crypto                decodeURI             decodeURIComponent
//  dgram                 diagnostics_channel   dns                   domain                encodeURI             encodeURIComponent    escape
//  eval                  events                fs                    global                globalThis            http                  http2
//  https                 inspector             isFinite              isNaN                 module                net                   os
//  parseFloat            parseInt              path                  perf_hooks            performance           process               punycode
//  querystring           queueMicrotask        readline              repl                  require               setImmediate          setInterval
//  setTimeout            stream                string_decoder        sys                   timers                tls                   trace_events
//  tty                   undefined             unescape              url                   util                  v8                    vm
//  wasi                  worker_threads        x                     zlib

//  __proto__             hasOwnProperty        isPrototypeOf         propertyIsEnumerable  toLocaleString        toString              valueOf

//  constructor

//  > fs
//  {
//    appendFile: [Function: appendFile],
//    appendFileSync: [Function: appendFileSync],
//    access: [Function: access],
//    accessSync: [Function: accessSync],
//    chown: [Function: chown],
//    chownSync: [Function: chownSync],
//    chmod: [Function: chmod],
//    chmodSync: [Function: chmodSync],
//    close: [Function: close],
//    closeSync: [Function: closeSync],
//    copyFile: [Function: copyFile],
//    copyFileSync: [Function: copyFileSync],
//    cp: [Function: cp],
//    cpSync: [Function: cpSync],
//    createReadStream: [Function: createReadStream],
//    createWriteStream: [Function: createWriteStream],
//    exists: [Function: exists],
//    existsSync: [Function: existsSync],
//    fchown: [Function: fchown],
//    fchownSync: [Function: fchownSync],
//    fchmod: [Function: fchmod],
//    fchmodSync: [Function: fchmodSync],
//    fdatasync: [Function: fdatasync],
//    fdatasyncSync: [Function: fdatasyncSync],
//    fstat: [Function: fstat],
//    fstatSync: [Function: fstatSync],
//    fsync: [Function: fsync],
//    fsyncSync: [Function: fsyncSync],
//    ftruncate: [Function: ftruncate],
//    ftruncateSync: [Function: ftruncateSync],
//    futimes: [Function: futimes],
//    futimesSync: [Function: futimesSync],
//    lchown: [Function: lchown],
//    lchownSync: [Function: lchownSync],
//    lchmod: undefined,
//    lchmodSync: undefined,
//    link: [Function: link],
//    linkSync: [Function: linkSync],
//    lstat: [Function: lstat],
//    lstatSync: [Function: lstatSync],
//    lutimes: [Function: lutimes],
//    lutimesSync: [Function: lutimesSync],
//    mkdir: [Function: mkdir],
//    mkdirSync: [Function: mkdirSync],
//    mkdtemp: [Function: mkdtemp],
//    mkdtempSync: [Function: mkdtempSync],
//    open: [Function: open],
//    openSync: [Function: openSync],
//    opendir: [Function: opendir],
//    opendirSync: [Function: opendirSync],
//    readdir: [Function: readdir],
//    readdirSync: [Function: readdirSync],
//    read: [Function: read],
//    readSync: [Function: readSync],
//    readv: [Function: readv],
//    readvSync: [Function: readvSync],
//    readFile: [Function: readFile],
//    readFileSync: [Function: readFileSync],
//    readlink: [Function: readlink],
//    readlinkSync: [Function: readlinkSync],
//    realpath: [Function: realpath] { native: [Function (anonymous)] },
//    realpathSync: [Function: realpathSync] { native: [Function (anonymous)] },
//    rename: [Function: rename],
//    renameSync: [Function: renameSync],
//    rm: [Function: rm],
//    rmSync: [Function: rmSync],
//    rmdir: [Function: rmdir],
//    rmdirSync: [Function: rmdirSync],
//    stat: [Function: stat],
//    statSync: [Function: statSync],
//    symlink: [Function: symlink],
//    symlinkSync: [Function: symlinkSync],
//    truncate: [Function: truncate],
//    truncateSync: [Function: truncateSync],
//    unwatchFile: [Function: unwatchFile],
//    unlink: [Function: unlink],
//    unlinkSync: [Function: unlinkSync],
//    utimes: [Function: utimes],
//    utimesSync: [Function: utimesSync],
//    watch: [Function: watch],
//    watchFile: [Function: watchFile],
//    writeFile: [Function: writeFile],
//    writeFileSync: [Function: writeFileSync],
//    write: [Function: write],
//    writeSync: [Function: writeSync],
//    writev: [Function: writev],
//    writevSync: [Function: writevSync],
//    Dir: [class Dir],
//    Dirent: [class Dirent],
//    Stats: [Function: Stats],
//    ReadStream: [Getter/Setter],
//    WriteStream: [Getter/Setter],
//    FileReadStream: [Getter/Setter],
//    FileWriteStream: [Getter/Setter],
//    _toUnixTimestamp: [Function: toUnixTimestamp],
//    F_OK: 0,
//    R_OK: 4,
//    W_OK: 2,
//    X_OK: 1,
//    constants: [Object: null prototype] {
//      UV_FS_SYMLINK_DIR: 1,
//      UV_FS_SYMLINK_JUNCTION: 2,
//      O_RDONLY: 0,
//      O_WRONLY: 1,
//      O_RDWR: 2,
//      UV_DIRENT_UNKNOWN: 0,
//      UV_DIRENT_FILE: 1,
//      UV_DIRENT_DIR: 2,
//      UV_DIRENT_LINK: 3,
//      UV_DIRENT_FIFO: 4,
//      UV_DIRENT_SOCKET: 5,
//      UV_DIRENT_CHAR: 6,
//      UV_DIRENT_BLOCK: 7,
//      S_IFMT: 61440,
//      S_IFREG: 32768,
//      S_IFDIR: 16384,
//      S_IFCHR: 8192,
//      S_IFLNK: 40960,
//      O_CREAT: 256,
//      O_EXCL: 1024,
//      UV_FS_O_FILEMAP: 536870912,
//      O_TRUNC: 512,
//      O_APPEND: 8,
//      F_OK: 0,
//      R_OK: 4,
//      W_OK: 2,
//      X_OK: 1,
//      UV_FS_COPYFILE_EXCL: 1,
//      COPYFILE_EXCL: 1,
//      UV_FS_COPYFILE_FICLONE: 2,
//      COPYFILE_FICLONE: 2,
//      UV_FS_COPYFILE_FICLONE_FORCE: 4,
//      COPYFILE_FICLONE_FORCE: 4
//    },
//    promises: [Getter]
//  }
