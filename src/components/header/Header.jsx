import { IconButton, Menu, MenuList } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/MenuOutlined"

import styled from 'styled-components'

const NavLink = styled.div`
    display: flex;
    // width:500px;
    // margin-left:20px;
`
const NavLinkObj = styled.div`
    color : white; 
    
    padding: 0 10px 10px 10px; 

    // background: #fbff14; /* fallback for old browsers */
    // background: -webkit-linear-gradient(to right, #fbff14, #fa2500); /* Chrome 10-25, Safari 5.1-6 */
    // background: linear-gradient(to right, #fbff14, #fa2500); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    // -webkit-background-clip: text;
    // background-clip: text;
    // color: transparent;

    &:hover{
        cursor:pointer;
        background: #fbff14; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #fbff14, #fa2500); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #fbff14, #fa2500); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    border-bottom: 2px solid white;
    }
    &.selected {
        background: #fbff14; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #fbff14, #fa2500); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #fbff14, #fa2500); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        border-bottom: 2px solid white
    }
`
const ButtonAccount = styled.button`
color:white;
border:none;
height:40px; 
width:100px;
// padding: 7px 20px 7px 20px;
background: rgb(56,2,60);
background: linear-gradient(90deg, rgba(56,2,60,1) 0%, rgba(170,29,114,1) 69%);
&:hover{
    cursor:pointer;
    S
}
`
const NavHeadWrapper = styled.div`
 
display:flex; 
height:90px; 
min-width: 1020px;
justify-content:space-between; 
align-items:center;
background-color: rgb(64,9,51);
@media screen (min-width:365px)and (max-width: 768px) {
    width:60%;
}
@media screen and (max-width: 768px) {
    // margin-left:220px; 
    min-width:640px;
}

`
const NavTabview = styled.div`
display:flex; 
height:90px; 
min-width: 620px;
justify-content:space-between; 
align-items:center;
background-color: rgb(64,9,51);
@media screen and (max-width: 768px) {
    // margin-left:220px; 
    min-width:440px;
}

`
const ImageTag = styled.div`
// @media screen (min-width:365px)and (max-width: 768px) {
//     width:100px; 
// }

`
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
 function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }

export default function Header(){
    
    const { height, width } = useWindowDimensions();

    const initial = {
        home:false,
        about:false,
        faq:false,
        useCase: false
    }
    const [select, setSelected] = useState(initial)
    console.log(width);
    const navigate = useNavigate();
    const clickNavItem = {
        home:()=>{
            navigate('/');
            setSelected({...initial, home:true})
        },
        about:()=>{
    
            setSelected({...initial, about:true})
        },
        faq:()=>{
            navigate('/footer');
            setSelected({...initial, faq:true})
        },
        useCase:()=>{
            setSelected({...initial, useCase:true})
        }
    }
    useEffect(()=>{
        clickNavItem.home()
    },[])
    return(
     <>{
        width>894?
        <NavHeadWrapper>
        <ImageTag>
            <img src="/images/logo.png" alt="logo" height={"70px"} width={"280px"}/>
        </ImageTag>

        <NavLink>
            <NavLinkObj className={select.home? 'selected':''} onClick={clickNavItem.home}>
                Home
            </NavLinkObj>
            <NavLinkObj className={select.about? 'selected':''} onClick={clickNavItem.about}>
                About
            </NavLinkObj>
            <NavLinkObj className={select.faq? 'selected':''} onClick={clickNavItem.faq}>
                FAQ's
            </NavLinkObj>
            <NavLinkObj className={select.useCase? 'selected':''} onclick={clickNavItem.useCase}>
                Use Causes
            </NavLinkObj>
        </NavLink>

        <ButtonAccount>Account</ButtonAccount>
        </NavHeadWrapper>

:
<NavTabview>
        <div style={{marginLeft:"-70px"}}>
            <img src="/images/logo.png" alt="logo" height={"70px"} width={"280px"}/>
        </div>
        
        <IconButton>
            <MenuIcon sx={{color:"white", fontSize:"40px",}}/>
        </IconButton>
</NavTabview>
}
        </>
    )
}