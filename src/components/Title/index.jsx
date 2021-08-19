/**
 * @name Title
 * @description
 * @author darcrand
 */

import React from 'react'
import styles from './styles.module.less'
import './styles.less'

const Title = ({ children = undefined }) => {
  return <h1 className={[styles.title, 'title'].join(' ')}>{children}</h1>
}

export default Title
