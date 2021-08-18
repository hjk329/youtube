import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

import ActionButton from "../ActionButton";
import IconButton from "../Button/IconButton";
import {
    MdHome,
    MdExplore,
    MdSubscriptions,
    MdVideoLibrary,
    MdRestore,
    MdAccountCircle,
    MdAddCircle, MdSettings, MdFlag, MdHelp, MdFeedback, MdPlayCircleFilled, MdSurroundSound, MdMenu
} from "react-icons/all";
import {
    IconEdu,
    IconGame,
    IconLive,
    IconLogo,
    IconMovie,
    IconMusic,
    IconNews,
    IconSports,
    IconVid
} from "../../../../icons";


const Sidebar = () => {
    return (
        <Container>
            {/*<Logo>*/}
            {/*    <Button className={'side'}> <MdMenu/> </Button>*/}
            {/*    <Button className={'logo'}> <IconLogo/> </Button>*/}
            {/*</Logo>*/}
            <MenuBox>
                <ActionButton>
                    <IconButton icon={<MdHome/>} text={'홈'}/>
                    <IconButton icon={<MdExplore/>} text={'탐색'}/>
                    <IconButton icon={<MdSubscriptions/>} text={'구독'}/>
                </ActionButton>
            </MenuBox>

            <MenuBox>
                <ActionButton>
                    <IconButton icon={<MdVideoLibrary/>} text={'보관함'}/>
                    <IconButton icon={<MdRestore/>} text={'시청 기록'}/>
                </ActionButton>
            </MenuBox>
            <MenuBox>
                <p> 로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다. </p>
                <LoginButton>  <MdAccountCircle/> 로그인 </LoginButton>
            </MenuBox>
            <MenuBox>
                <p> 인기 YOUTUBE </p>
                <IconButton icon={<IconMusic/>} text={'보관함'}/>
                <IconButton icon={<IconSports/>} text={'스포츠'}/>
                <IconButton icon={<IconGame/>} text={'게임'}/>
                <IconButton icon={<IconMovie/>} text={'영화'}/>
                <IconButton icon={<IconNews/>} text={'뉴스'}/>
                <IconButton icon={<IconLive/>} text={'실시간'}/>
                <IconButton icon={<IconEdu/>} text={'학습'}/>
                <IconButton icon={<IconVid/>} text={'360° 동영상'}/>
            </MenuBox>
            <MenuBox>
                <ActionButton>
                    <IconButton icon={<MdAddCircle/>} text={'채널 탐색'}/>
                </ActionButton>
            </MenuBox>
            <MenuBox>
                <p> YOUTUBE 더보기</p>
                <ActionButton>
                    <IconButton icon={<MdPlayCircleFilled/>} text={'YouTube Premium'}/>
                    <IconButton icon={<MdSurroundSound/>} text={'실시간'}/>
                </ActionButton>
            </MenuBox>
            <MenuBox>
                <ActionButton>
                    <IconButton icon={<MdSettings/>} text={'설정'}/>
                    <IconButton icon={<MdFlag/>} text={'신고 기록'}/>
                    <IconButton icon={<MdHelp/>} text={'고객센터'}/>
                    <IconButton icon={<MdFeedback/>} text={'의견 보내기'}/>

                </ActionButton>
            </MenuBox>
            <MenuBox>
                <Info>
                    <a href="#!">정보 </a>
                    <a href="#!">보도자료 </a>
                    <a href="#!">저작권 </a>
                    <a href="#!">문의하기 </a>
                    <a href="#!">크리에이터 </a>
                    <a href="#!">광고 </a>
                    <a href="#!">개발자 </a>
                </Info>
                <Info>
                    <a href="#!">약관 </a>
                    <a href="#!">개인정보처리방침 </a>
                    <a href="#!">정책 및 안전 </a>
                    <a href="#!">YouTube 작동의 원리 </a>
                    <a href="#!">새로운 기능 테스트하기 </a>
                </Info>
                <Info>
                        © 2021 Google LLC <br/>
                        CEO: 선다 피차이 <br/>
                        주소: 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. <br/>
                        전화: 080-822-1450(무료)
                </Info>
            </MenuBox>
        </Container>
    )
}

const Container = styled.div`
  width: 240px;
  position: absolute;
  top:64px;
  left : 0;
  z-index: 100;
  background: rgb(255, 255, 255);
`;

const Logo = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  padding: 0 16px;

`;

const Button = styled.div`
  padding: 8px;
    svg {
      width: 24px;
      height: 24px;
      fill: rgb(96, 96, 96);
    }

`;

const MenuBox = styled.div`
  margin: 0 auto;
  border-bottom: 1px solid rgb(0, 0, 0, .1);

  p {
    padding: 12px 24px;
  }

`;

const LoginButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 36px;
  margin: 0 24px 10px;
  color: rgb(6, 95, 212);
  font-size: 14px;
  font-weight: 500;

  border: 1px solid rgb(6, 95, 212);
  border-radius: 2px;

  svg{
    fill: rgb(6, 95, 212);
    margin-right: 8px;
  }
  
`;

const Info = styled.div`
  padding: 16px 24px 0;
  font-size: 12px;
  font-weight: 400;
  color: #909090;
  a {
    font-size: 13px;
    font-weight: 500;
    color: #606060;
  }

`;
export default Sidebar;