import React, { useMemo } from 'react'
import { Spin } from 'antd'
import styles from './styles.module.less'

function FullScreenLoading({ loading = false, zIndex = 100 }) {
  const computedClassName = useMemo(() => {
    return loading ? styles.container_loading : styles.container
  }, [loading])

  return (
    <div className={computedClassName} style={{ zIndex }}>
      <Spin spinning={loading} />
    </div>
  )
}

export default React.memo(FullScreenLoading)
