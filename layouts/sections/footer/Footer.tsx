import React, {useContext} from 'react';
import styled from 'styled-components';
import {SectionTitle} from '@/components/SectionTitle';
import {Icon} from '@/components/icon/icon';
import {Social} from '@/context/Context';
import {theme} from '@/styles/theme';

export const Footer = () => {
    const network = useContext(Social);
    return (
        <StyledFooter>
            <SectionTitle>You can find me there</SectionTitle>
            <SocialIconList>
                {network.map(el => <SocialIconLink key={el.network}><Icon icon={el.icon} size={'30px'}/>
                </SocialIconLink>)}
            </SocialIconList>
            <Copyright>@copyright</Copyright>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBG};
  text-align: center;
`
const SocialIconList = styled.ul`
  
`
const SocialIconLink = styled.a`
  cursor: pointer;
  margin-right: 30px;
`
const Copyright = styled.small`
`