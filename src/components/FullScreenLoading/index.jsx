import React from 'react'
import { Spin } from 'antd'
import styles from './styles.module.less'

function FullScreenLoading({ loading = false, zIndex = 100 }) {
  return (
    <div className={loading ? styles.container_loading : styles.container} style={{ zIndex }}>
      <Spin spinning={loading} />
    </div>
  )
}

export default React.memo(FullScreenLoading)
