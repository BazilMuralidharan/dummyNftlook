import styled from "styled-components"
import React from "react"
const Card = styled.div`
h4{
    color:#840141;
    font-size:30px;
    line-height:0px;
    padding-bottom:10px;
}
p{
    color:white;
    font-size:15px;
    line-height:2px;
}
`

const ButtonPrime = styled.button`
color:white;
border:none;
height:200px; 
width:230px;
// padding: 7px 20px 7px 20px;
background: rgb(56,2,60);
background: linear-gradient(90deg, rgba(56,2,60,1) 0%, rgba(170,29,114,1) 69%);
clip-path: polygon(100% 35%, 100% 53%, 87% 70%, 0 71%, 0 54%, 13% 36%);
`
const FootWrap = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    background: rgb(114,26,87);
  background: radial-gradient(circle, rgba(114,26,87,1) 0%, rgba(41,8,37,1) 16%);
`

export default function Footer(){
    return(
        <>
        <div>
        <FootWrap>
            <div>
                <h2 style={{color:"white", fontSize:"30px"}}>Follow These Steps To Use Our Application</h2>
            </div>
            <div style={{display:"flex", width:"1020px", justifyContent:"space-between", paddingLeft:"10px", paddingTop:"30px"}}>
                <Card>
                    <img src="/images/icon1.png" alt="logo" height={"70px"} width={"70px"}/>
                    <h4>Sign Up</h4>
                    <p>Click on the "Watch</p>
                    <p>Cideo" button below to</p>
                    <p>see how to sign up on</p>
                    <p>Hashgreed</p>
                </Card>

                
                <Card>
                    <img src="/images/icon1.png" alt="logo" height={"70px"} width={"70px"}/>
                    <h4>Sign Up</h4>
                    <p>Click on the "Watch</p>
                    <p>Cideo" button below to</p>
                    <p>see how to sign up on</p>
                    <p>Hashgreed</p>
                </Card>

                <Card>
                    <img src="/images/icon2.png" alt="logo" height={"70px"} width={"70px"}/>
                    <h4>Bid/ Buy</h4>
                    <p>Now that you have your</p>
                    <p>Hash and Cart credits, go</p>
                    <p>ahead and watch how to</p>
                    <p>shop on Hashgreed</p>
                </Card>

                

            </div>

                <ButtonPrime>Watch Video</ButtonPrime>
        </FootWrap>
        </div>
        </>
    )
}