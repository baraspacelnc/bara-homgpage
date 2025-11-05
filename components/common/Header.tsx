import Link from 'next/link'
import styled from 'styled-components'
import { device } from 'styled/Breakpoint'

const Header = () => {
  return (
    <HeaderSection>
      <HeaderChild>
        <Link href="/">
          <Logo src="/logo.png" />
        </Link>
        <HeaderNav>
          <NavItem href="/">사업소개</NavItem>
          <NavItem href="https://www.simba.kr" target="_blank">
            서비스 바로가기
          </NavItem>
          <NavItem href="/partner">파트너십</NavItem>
          <NavItem href="/expert">전문가 모집</NavItem>
        </HeaderNav>
      </HeaderChild>
    </HeaderSection>
  )
}

export default Header

const HeaderSection = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1296px;
  min-width: 360px;
  /* height: 72px; */
  height: 86px;
  width: 100%;
  /* padding: 0 26px; */
  padding: 0 60px;
  margin: 0 auto;
  @media ${device.md} {
    padding: 0 26px;
  }
`
const HeaderChild = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const EmptyFrag = styled.div`
  max-width: 191px;
  width: 100%;
  @media ${device.md} {
    display: none;
  }
`

const Logo = styled.img`
  /* width: 99px; */
  width: 136px;
  height: auto;
  object-fit: contain;
`

const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  /* width: 191px; */
  @media ${device.md} {
    justify-content: end;
    gap: 30px;
    a:first-child {
      display: none;
    }
  }
`

const NavItem = styled(Link)`
  color: #191919;
  font-size: 16px;
  font-weight: 500;
  /* no wrap */
  white-space: nowrap;
`

// const NavButton = styled.button`
//   border: none;
//   border-radius: 231px;
//   background: var(--Primary);
//   padding: 12px 41px;
//   justify-content: center;
//   align-items: center;
//   color: #fff;
//   font-size: 16px;
//   font-weight: 700;
// `;
