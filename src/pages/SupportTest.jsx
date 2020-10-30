/**
 * @desc 浏览器兼容性测试
 */
import React from 'react'

export default function () {
  const apis = [
    { title: 'Proxy', status: !!window.Proxy },
    { title: 'Promise', status: !!window.Promise },
    { title: 'Map', status: !!window.Map },
    { title: 'Set', status: !!window.Set },

    // 字符串
    { title: 'String.fromCodePoint', status: !!String.fromCodePoint },
    { title: 'String.raw', status: !!String.raw },
    { title: 'str.codePointAt', status: !!''.codePointAt },
    { title: 'str.normalize', status: !!''.normalize },
    { title: 'str.includes', status: !!''.includes },
    { title: 'str.startsWith', status: !!''.startsWith },
    { title: 'str.endsWith', status: !!''.endsWith },
    { title: 'str.padStart', status: !!''.padStart },
    { title: 'str.padEnd', status: !!''.padEnd },
    { title: 'str.trim', status: !!''.trim },
    { title: 'str.trimStart', status: !!''.trimStart },
    { title: 'str.trimEnd', status: !!''.trimEnd },

    // 数组
    { title: 'Array.from', status: !!Array.from },
    { title: 'Array.of', status: !!Array.of },
    { title: 'arr.includes', status: !![].includes },
    { title: 'arr.keys', status: !![].keys },
    { title: 'arr.values', status: !![].values },
    { title: 'arr.copyWithin', status: !![].copyWithin },
    { title: 'arr.find', status: !![].find },
    { title: 'arr.findIndex', status: !![].findIndex },
    { title: 'arr.fill', status: !![].fill },
    { title: 'arr.map', status: !![].map },
    { title: 'arr.filter', status: !![].filter },

    // 对象
    { title: 'Object.assign', status: !!Object.assign },
    { title: 'Object.fromEntries', status: !!Object.fromEntries },
  ]

  return (
    <div>
      <h1>apis</h1>

      <ol>
        {apis.map(({ title, status }) => (
          <li
            key={title}
            style={{
              padding: '10px',
              fontSize: '22px',
              color: '#ffffff',
              backgroundColor: status ? '#39b54a' : '#c44230',
            }}
          >
            {title}
          </li>
        ))}
      </ol>
    </div>
  )
}
