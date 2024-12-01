import { HTMLAttributes } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "@/shared/components"

export default function PageLayout() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  )
}

function Wrapper({ children }: HTMLAttributes<HTMLDivElement>) {
  return <div className="h-dvh">{children}</div>
}

function Main({ children }: HTMLAttributes<HTMLDivElement>) {
  return <main className="h-full w-full overflow-hidden">{children}</main>
}
