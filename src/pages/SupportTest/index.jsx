/**
 * @desc 浏览器兼容性测试
 */
import React from 'react'

const COLORS = { OK: '#39b54a', ERROR: '#c44230' }

const apiBase = [
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy',
    name: 'Proxy',
    status: Boolean(window.Proxy),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise',
    name: 'Promise',
    status: Boolean(window.Promise),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map',
    name: 'Map',
    status: Boolean(window.Map),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set',
    name: 'Set',
    status: Boolean(window.Set),
  },
]

const apiArray = [
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from',
    name: 'Array.from',
    status: Boolean(Array.from),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray',
    name: 'Array.isArray',
    status: Boolean(Array.isArray),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of',
    name: 'Array.of',
    status: Boolean(Array.of),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat',
    name: 'Array.prototype.concat',
    status: Boolean(Array.prototype.concat),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin',
    name: 'Array.prototype.copyWithin',
    status: Boolean(Array.prototype.copyWithin),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries',
    name: 'Array.prototype.entries',
    status: Boolean(Array.prototype.entries),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
    name: 'Array.prototype.every',
    status: Boolean(Array.prototype.every),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill',
    name: 'Array.prototype.fill',
    status: Boolean(Array.prototype.fill),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
    name: 'Array.prototype.filter',
    status: Boolean(Array.prototype.filter),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find',
    name: 'Array.prototype.find',
    status: Boolean(Array.prototype.find),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex',
    name: 'Array.prototype.findIndex',
    status: Boolean(Array.prototype.findIndex),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat',
    name: 'Array.prototype.flat',
    status: Boolean(Array.prototype.flat),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap',
    name: 'Array.prototype.flatMap',
    status: Boolean(Array.prototype.flatMap),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
    name: 'Array.prototype.forEach',
    status: Boolean(Array.prototype.forEach),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes',
    name: 'Array.prototype.includes',
    status: Boolean(Array.prototype.includes),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf',
    name: 'Array.prototype.indexOf',
    status: Boolean(Array.prototype.indexOf),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join',
    name: 'Array.prototype.join',
    status: Boolean(Array.prototype.join),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys',
    name: 'Array.prototype.keys',
    status: Boolean(Array.prototype.keys),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf',
    name: 'Array.prototype.lastIndexOf',
    status: Boolean(Array.prototype.lastIndexOf),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
    name: 'Array.prototype.map',
    status: Boolean(Array.prototype.map),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
    name: 'Array.prototype.pop',
    status: Boolean(Array.prototype.pop),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
    name: 'Array.prototype.push',
    status: Boolean(Array.prototype.push),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce',
    name: 'Array.prototype.reduce',
    status: Boolean(Array.prototype.reduce),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight',
    name: 'Array.prototype.reduceRight',
    status: Boolean(Array.prototype.reduceRight),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse',
    name: 'Array.prototype.reverse',
    status: Boolean(Array.prototype.reverse),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift',
    name: 'Array.prototype.shift',
    status: Boolean(Array.prototype.shift),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
    name: 'Array.prototype.slice',
    status: Boolean(Array.prototype.slice),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some',
    name: 'Array.prototype.some',
    status: Boolean(Array.prototype.some),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
    name: 'Array.prototype.sort',
    status: Boolean(Array.prototype.sort),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
    name: 'Array.prototype.splice',
    status: Boolean(Array.prototype.splice),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString',
    name: 'Array.prototype.toLocaleString',
    status: Boolean(Array.prototype.toLocaleString),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toSource',
    name: 'Array.prototype.toSource',
    status: Boolean(Array.prototype.toSource),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString',
    name: 'Array.prototype.toString',
    status: Boolean(Array.prototype.toString),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift',
    name: 'Array.prototype.unshift',
    status: Boolean(Array.prototype.unshift),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values',
    name: 'Array.prototype.values',
    status: Boolean(Array.prototype.values),
  },
]

const apiString = [
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode',
    name: 'String.fromCharCode',
    status: Boolean(String.fromCharCode),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint',
    name: 'String.fromCodePoint',
    status: Boolean(String.fromCodePoint),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/anchor',
    name: 'String.prototype.anchor',
    status: Boolean(String.prototype.anchor),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/big',
    name: 'String.prototype.big',
    status: Boolean(String.prototype.big),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/blink',
    name: 'String.prototype.blink',
    status: Boolean(String.prototype.blink),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/bold',
    name: 'String.prototype.bold',
    status: Boolean(String.prototype.bold),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt',
    name: 'String.prototype.charAt',
    status: Boolean(String.prototype.charAt),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt',
    name: 'String.prototype.charCodeAt',
    status: Boolean(String.prototype.charCodeAt),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt',
    name: 'String.prototype.codePointAt',
    status: Boolean(String.prototype.codePointAt),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/concat',
    name: 'String.prototype.concat',
    status: Boolean(String.prototype.concat),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith',
    name: 'String.prototype.endsWith',
    status: Boolean(String.prototype.endsWith),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fixed',
    name: 'String.prototype.fixed',
    status: Boolean(String.prototype.fixed),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fontcolor',
    name: 'String.prototype.fontcolor',
    status: Boolean(String.prototype.fontcolor),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fontsize',
    name: 'String.prototype.fontsize',
    status: Boolean(String.prototype.fontsize),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes',
    name: 'String.prototype.includes',
    status: Boolean(String.prototype.includes),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf',
    name: 'String.prototype.indexOf',
    status: Boolean(String.prototype.indexOf),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/italics',
    name: 'String.prototype.italics',
    status: Boolean(String.prototype.italics),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf',
    name: 'String.prototype.lastIndexOf',
    status: Boolean(String.prototype.lastIndexOf),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/link',
    name: 'String.prototype.link',
    status: Boolean(String.prototype.link),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare',
    name: 'String.prototype.localeCompare',
    status: Boolean(String.prototype.localeCompare),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match',
    name: 'String.prototype.match',
    status: Boolean(String.prototype.match),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll',
    name: 'String.prototype.matchAll',
    status: Boolean(String.prototype.matchAll),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/normalize',
    name: 'String.prototype.normalize',
    status: Boolean(String.prototype.normalize),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd',
    name: 'String.prototype.padEnd',
    status: Boolean(String.prototype.padEnd),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padStart',
    name: 'String.prototype.padStart',
    status: Boolean(String.prototype.padStart),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/quote',
    name: 'String.prototype.quote',
    status: Boolean(String.prototype.quote),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat',
    name: 'String.prototype.repeat',
    status: Boolean(String.prototype.repeat),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace',
    name: 'String.prototype.replace',
    status: Boolean(String.prototype.replace),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search',
    name: 'String.prototype.search',
    status: Boolean(String.prototype.search),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice',
    name: 'String.prototype.slice',
    status: Boolean(String.prototype.slice),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/small',
    name: 'String.prototype.small',
    status: Boolean(String.prototype.small),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split',
    name: 'String.prototype.split',
    status: Boolean(String.prototype.split),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith',
    name: 'String.prototype.startsWith',
    status: Boolean(String.prototype.startsWith),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/strike',
    name: 'String.prototype.strike',
    status: Boolean(String.prototype.strike),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/sub',
    name: 'String.prototype.sub',
    status: Boolean(String.prototype.sub),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr',
    name: 'String.prototype.substr',
    status: Boolean(String.prototype.substr),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring',
    name: 'String.prototype.substring',
    status: Boolean(String.prototype.substring),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/sup',
    name: 'String.prototype.sup',
    status: Boolean(String.prototype.sup),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase',
    name: 'String.prototype.toLocaleLowerCase',
    status: Boolean(String.prototype.toLocaleLowerCase),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase',
    name: 'String.prototype.toLocaleUpperCase',
    status: Boolean(String.prototype.toLocaleUpperCase),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase',
    name: 'String.prototype.toLowerCase',
    status: Boolean(String.prototype.toLowerCase),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toSource',
    name: 'String.prototype.toSource',
    status: Boolean(String.prototype.toSource),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toString',
    name: 'String.prototype.toString',
    status: Boolean(String.prototype.toString),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase',
    name: 'String.prototype.toUpperCase',
    status: Boolean(String.prototype.toUpperCase),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim',
    name: 'String.prototype.trim',
    status: Boolean(String.prototype.trim),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/TrimRight',
    name: 'String.prototype.trimRight',
    status: Boolean(String.prototype.trimRight),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/TrimLeft',
    name: 'String.prototype.trimStart',
    status: Boolean(String.prototype.trimStart),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf',
    name: 'String.prototype.valueOf',
    status: Boolean(String.prototype.valueOf),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/raw',
    name: 'String.raw',
    status: Boolean(String.raw),
  },
]

const apiObject = [
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign',
    name: 'Object.assign',
    status: Boolean(Object.assign),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create',
    name: 'Object.create',
    status: Boolean(Object.create),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties',
    name: 'Object.defineProperties',
    status: Boolean(Object.defineProperties),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty',
    name: 'Object.defineProperty',
    status: Boolean(Object.defineProperty),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries',
    name: 'Object.entries',
    status: Boolean(Object.entries),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze',
    name: 'Object.freeze',
    status: Boolean(Object.freeze),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries',
    name: 'Object.fromEntries',
    status: Boolean(Object.fromEntries),
  },
  {
    href:
      'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor',
    name: 'Object.getOwnPropertyDescriptor',
    status: Boolean(Object.getOwnPropertyDescriptor),
  },
  {
    href:
      'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors',
    name: 'Object.getOwnPropertyDescriptors',
    status: Boolean(Object.getOwnPropertyDescriptors),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames',
    name: 'Object.getOwnPropertyNames',
    status: Boolean(Object.getOwnPropertyNames),
  },
  {
    href:
      'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols',
    name: 'Object.getOwnPropertySymbols',
    status: Boolean(Object.getOwnPropertySymbols),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf',
    name: 'Object.getPrototypeOf',
    status: Boolean(Object.getPrototypeOf),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is',
    name: 'Object.is',
    status: Boolean(Object.is),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible',
    name: 'Object.isExtensible',
    status: Boolean(Object.isExtensible),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen',
    name: 'Object.isFrozen',
    status: Boolean(Object.isFrozen),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed',
    name: 'Object.isSealed',
    status: Boolean(Object.isSealed),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys',
    name: 'Object.keys',
    status: Boolean(Object.keys),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions',
    name: 'Object.preventExtensions',
    status: Boolean(Object.preventExtensions),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__',
    name: 'Object.prototype.__defineGetter__',
    status: Boolean(Object.prototype.__defineGetter__),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__',
    name: 'Object.prototype.__defineSetter__',
    status: Boolean(Object.prototype.__defineSetter__),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__',
    name: 'Object.prototype.__lookupGetter__',
    status: Boolean(Object.prototype.__lookupGetter__),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__',
    name: 'Object.prototype.__lookupSetter__',
    status: Boolean(Object.prototype.__lookupSetter__),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty',
    name: 'Object.prototype.hasOwnProperty',
    status: Boolean(Object.prototype.hasOwnProperty),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf',
    name: 'Object.prototype.isPrototypeOf',
    status: Boolean(Object.prototype.isPrototypeOf),
  },
  {
    href:
      'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable',
    name: 'Object.prototype.propertyIsEnumerable',
    status: Boolean(Object.prototype.propertyIsEnumerable),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString',
    name: 'Object.prototype.toLocaleString',
    status: Boolean(Object.prototype.toLocaleString),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource',
    name: 'Object.prototype.toSource',
    status: Boolean(Object.prototype.toSource),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString',
    name: 'Object.prototype.toString',
    status: Boolean(Object.prototype.toString),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf',
    name: 'Object.prototype.valueOf',
    status: Boolean(Object.prototype.valueOf),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal',
    name: 'Object.seal',
    status: Boolean(Object.seal),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf',
    name: 'Object.setPrototypeOf',
    status: Boolean(Object.setPrototypeOf),
  },
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values',
    name: 'Object.values',
    status: Boolean(Object.values),
  },
]

const PropertyTable = ({ title = '', keys = [] }) => {
  if (!Array.isArray(keys) || keys.length === 0) return false

  return (
    <div>
      <h1 style={{ paddingLeft: 40 }}>{title}</h1>
      <ol style={{ padding: '0 40px', listStyleType: 'decimal' }}>
        {keys.map((k) => (
          <li key={k.name} style={{ marginBottom: 10, backgroundColor: k.status ? COLORS.OK : COLORS.ERROR }}>
            <a
              style={{ display: 'block', padding: 10, color: '#fff', fontSize: 20 }}
              href={k.href}
              target='_blank'
              rel='noopener noreferrer'
            >
              {k.name}
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function () {
  return (
    <div>
      <PropertyTable title='Base' keys={apiBase} />
      <PropertyTable title='Array' keys={apiArray} />
      <PropertyTable title='String' keys={apiString} />
      <PropertyTable title='Object' keys={apiObject} />
    </div>
  )
}
