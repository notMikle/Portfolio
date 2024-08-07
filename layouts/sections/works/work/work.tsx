import React from 'react';
import styled from 'styled-components';
import {Icon} from '@/components/icon/icon';
import {SiGithub} from 'react-icons/si';
import {FaLink} from 'react-icons/fa6';
import {Button} from '@/components/Button';
import {theme} from '@/styles/theme';
import {useRouter} from 'next/router';


type WorkPropsType = {
    title: string
    description: string
    srcProd: string
    srcGit:string
    stack:string
    image?:string
}
export const Work = (props: WorkPropsType) => {
    const router = useRouter()
    const linkHandler = () =>{
        router.push(props.srcProd)
    }
    return (
        <StyledWork>
            <ImageWrapper>
                <Button onClick={linkHandler}>view</Button>
                <Image src={props.image} alt="imageProject"/>
            </ImageWrapper>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.description}</Text>
                <Text>{props.stack}</Text>
                <Link href={props.srcProd}> <Icon icon={FaLink} size={'15px'} color={'#000'}></Icon><span>Demo</span></Link>
                <Link href={props.srcGit}> <Icon icon={SiGithub} size={'15px'} color={'#000'}></Icon><span>Code</span></Link>
            </Description>
        </StyledWork>
    );
};

const Link = styled.a`
  position: relative;
  display: inline-block;
  font-weight: 400;
  font-size: 16px;

  span {
    padding-left: 10px;
  }
  &:hover {
    transform: translateY(-1px) scale(1.05);
    &::before{
      height: 1px;
    }
  }
  &::before{
    content: "";
    position: absolute;
    background-color: black;
    left: 0;
    right: 0;
    bottom: 0;
  }
`
const StyledWork = styled.div`
  flex-grow: 1;
  max-width: 350px;
  //border-radius: 30px;
  background-color: rgb(255, 255, 255);
  color: black;
  ${Link} {
    color: black;
    & + ${Link} {
      margin-left: 20px;
    }
  }
  @media ${theme.media.desktop}{
    max-width: 540px;
  }
`
const ImageWrapper = styled.div`
  position: relative;
  ${Button}{
      color: gray;
      border: 1px gray solid;
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    opacity: 0;
  }
  &:hover {
    &::before{
      opacity: 1;
    }
    ${Button}{
      opacity: 1;
    }
  }
  @media ${theme.media.tablet}{
    &::before{
      opacity: 1;
    }
    ${Button}{
      opacity: 1;
    }
  }
`
const Image = styled.img`
    height: 200px;
  width: 100%;
  object-fit: cover;
`
const Text = styled.p`
  margin: 14px 0 10px;
`
const Title = styled.h3`

`
const Description = styled.div`
  padding: 25px 20px;
`

