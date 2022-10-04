import styled from "styled-components";
import React from "react";
import { useWindowDimensions } from "../Util/Width";

const Left = styled.div`
padding-left:15px;
.h1{
    color:white;
    display: block;
    font-size: 55px;
    line-height: 26px;
}
p{color:white; line-height:10px;font-size: 14px;}
@media screen and (max-width: 1400px) {
    .h1{
        line-height: 45px;    
    }
    p{
        line-height: 28px;
    }
}

`

const ButtonPrime = styled.button`
color:white;
border:none;
height:100px; 
width:130px;
// padding: 7px 20px 7px 20px;
background: rgb(56,2,60);
background: linear-gradient(90deg, rgba(56,2,60,1) 0%, rgba(170,29,114,1) 69%);
clip-path: polygon(100% 35%, 100% 53%, 87% 70%, 0 71%, 0 54%, 13% 36%);
`
const ButtonGrey = styled.button`
color:white;
border:none;
height:100px; 
width:130px;
// padding: 7px 20px 7px 20px;
background: #D3D0C9;
clip-path: polygon(85% 35%, 100% 53%, 100% 70%, 15% 70%, 0 54%, 0 35%);
margin-left:20px;
`

const MainWrapper = styled.div`
display:flex;
max-width:1020px;
  justify-content:space-between;
  background: rgb(114,26,87);
background: radial-gradient(circle, rgba(114,26,87,1) 0%, rgba(41,8,37,1) 16%);
@media screen and (max-width: 1400px) {
    width:100%
}
@media screen and (max-width: 768px) {
    width:100%
    display:flex;
    flex-direction:column;
    min-width:760px;
    margin-left:0px; 
    margin-right:80px;
}

`
const PeopleLiked= styled.div`
display:flex; align-items:center;
@media screen and (max-width: 768px) {
    margin-left:220px; 
}
`
export default function MainContent(){
    const { height, width } = useWindowDimensions();
    console.log('>>>>>>>',width);
    return(
        <MainWrapper>
            
        
        <Left>
            <div>
            <h1 className="h1">Buy and Sell with</h1>
            <h1 className="h1">Peace of Mind</h1>
            </div>
            <div>
            <p>For Creators, shhoppers, crypto defi natives, </p>
            <p>one platForm for all. At Africa's First NFT </p>
            <p>MarketPlace</p>
            </div>
            <div >
                <ButtonPrime>Start Now</ButtonPrime>
                <ButtonGrey>Explore Hash grade 
                </ButtonGrey>
            </div> 
            <PeopleLiked>
            <img src="/images/avator.png" alt="logo" height={"30px"} width={"120px"}/>
            <p>250k+ people use Hashgreed</p>
            </PeopleLiked>
        </Left>
        <div className="right">
            <img src="/images/mainStatue.png" alt="logo" height={"570px"} width={"480px"}/>
        </div>
        </MainWrapper>
    )
}