export function format(text) {
  var shift = createShiftArr(4);
  var ar = text.replace(/>\s{0,}</g, "><")
    .replace(/</g, "~::~<")
    .replace(/\s*xmlns\:/g, "~::~xmlns:")
    .replace(/\s*xmlns\=/g, "~::~xmlns=")
    .split('~::~'),
    len = ar.length,
    inComment = false,
    deep = 0,
    str = '',
    ix = 0;

  for (ix = 0; ix < len; ix++) {
    // start comment or <![CDATA[...]]> or <!DOCTYPE //
    if (ar[ix].search(/<!/) > -1) {
      str += shift[deep] + ar[ix];
      inComment = true;
      // end comment  or <![CDATA[...]]> //
      if (ar[ix].search(/-->/) > -1 || ar[ix].search(/\]>/) > -1 || ar[ix].search(/!DOCTYPE/) > -1) {
        inComment = false;
      }
    } else
      // end comment  or <![CDATA[...]]> //
      if (ar[ix].search(/-->/) > -1 || ar[ix].search(/\]>/) > -1) {
        str += ar[ix];
        inComment = false;
      } else
        // <elm></elm> //
        if (/^<\w/.exec(ar[ix - 1]) && /^<\/\w/.exec(ar[ix]) &&
          /^<[\w:\-\.\,]+/.exec(ar[ix - 1]) == /^<\/[\w:\-\.\,]+/.exec(ar[ix])[0].replace('/', '')) {
          str += ar[ix];
          if (!inComment) deep--;
        } else
          // <elm> //
          if (ar[ix].search(/<\w/) > -1 && ar[ix].search(/<\//) == -1 && ar[ix].search(/\/>/) == -1) {
            str = !inComment ? str += shift[deep++] + ar[ix] : str += ar[ix];
          } else
            // <elm>...</elm> //
            if (ar[ix].search(/<\w/) > -1 && ar[ix].search(/<\//) > -1) {
              str = !inComment ? str += shift[deep] + ar[ix] : str += ar[ix];
            } else
              // </elm> //
              if (ar[ix].search(/<\//) > -1) {
                str = !inComment ? str += shift[--deep] + ar[ix] : str += ar[ix];
              } else
                // <elm/> //
                if (ar[ix].search(/\/>/) > -1) {
                  str = !inComment ? str += shift[deep] + ar[ix] : str += ar[ix];
                } else
                  // <? xml ... ?> //
                  if (ar[ix].search(/<\?/) > -1) {
                    str += shift[deep] + ar[ix];
                  } else
                    // xmlns //
                    if (ar[ix].search(/xmlns\:/) > -1 || ar[ix].search(/xmlns\=/) > -1) {
                      str += shift[deep] + ar[ix];
                    }

                    else {
                      str += ar[ix];
                    }
  }

  return (str[0] == '\n') ? str.slice(1) : str;
}

function createShiftArr(step) {
  var space = '    ';
  if (isNaN(parseInt(step))) {  // argument is string
    space = step;
  } else { // argument is integer
    space = new Array(step + 1).join(' '); //space is result of join (a string), not an array
  }
  var shift = ['\n']; // array of shifts
  for (var ix = 0; ix < 100; ix++) {
    shift.push(shift[ix] + space);
  }
  return shift;
};

//计算头函数 用来缩进
function setPrefix(prefixIndex) {
  var result = '';
  var span = '    ';//缩进长度
  var output = [];
  for (var i = 0; i < prefixIndex; ++i) {
    output.push(span);
  }
  result = output.join('');
  return result;
}

export function pack(s) {
  var str = s.replace(/\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g, "")
    .replace(/[ \r\n\t]{1,}xmlns/g, ' xmlns');
  return str.replace(/>\s{0,}</g, "><");
}