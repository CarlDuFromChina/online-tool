/**
 * 解压css
 * @param {String} s 
 * @returns 
 */
export function format(s) {
  s = s.replace(/\s*([\{\}\:\;\,])\s*/g, '$1');
  s = s.replace(/;\s*;/g, ';'); //清除连续分号
  s = s.replace(/\,[\s\.\#\d]*{/g, '{');
  s = s.replace(/([^\s])\{([^\s])/g, '$1 {\n\t$2');
  s = s.replace(/([^\s])\}([^\n]*)/g, '$1\n}\n$2');
  s = s.replace(/([^\s]);([^\s\}])/g, '$1;\n\t$2');
  return s;
}

/**
 * 压缩css
 * @param {String} s 
 * @returns 
 */
export function pack(s) {
  s = s.replace(/\/\*(.|\n)*?\*\//g, ''); //删除注释
  s = s.replace(/\s*([\{\}\:\;\,])\s*/g, '$1');
  s = s.replace(/\,[\s\.\#\d]*\{/g, '{'); //容错处理
  s = s.replace(/;\s*;/g, ';'); //清除连续分号
  s = s.match(/^\s*(\S+(\s+\S+)*)\s*$/); //去掉首尾空白
  return s == null ? '' : s[1];
}
