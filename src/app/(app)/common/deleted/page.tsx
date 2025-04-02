import Link from 'next/link'

import { NormalContainer } from '~/components/layout/container/Normal'
import { StyledButton } from '~/components/ui/button'

export default async function PageDeleted() {
  return (
    <NormalContainer>
      <div className="mt-[250px] flex h-full flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Σ（ﾟдﾟlll）此頁面已被刪除</h1>
        <h2 className="text-4xl font-bold">可能作者不想讓你知道o(╯□╰)o</h2>

        <StyledButton className="mt-8">
          <Link href="/">返回首頁↻</Link>
        </StyledButton>
      </div>
    </NormalContainer>
  )
}
