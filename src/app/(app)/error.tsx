'use client'

import { useEffect } from 'react'

// import { captureException } from '@sentry/nextjs'
import { NormalContainer } from '~/components/layout/container/Normal'
import { StyledButton } from '~/components/ui/button'

export default ({ error, reset }: any) => {
  useEffect(() => {
    console.error('error', error)
    // captureException(error)
  }, [error])

  return (
    <NormalContainer>
      <div className="center flex min-h-[calc(100vh-10rem)] flex-col">
        <h2 className="mb-5 text-center">
          <p>渲染頁面時出現了錯誤</p>
          <p>
            多次出现错误请联系开发者 <a href="mailto:i@innei.in">Innei</a>
            ，谢谢！
          </p>
        </h2>
        <StyledButton variant="primary" onClick={() => location.reload()}>
          重新整理➠
        </StyledButton>
      </div>
    </NormalContainer>
  )
}
