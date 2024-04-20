"use client"
import styled from 'styled-components';

export const Badge = styled.div``;

export const FooterContainer = styled.footer`
  background-color: #426888;
  bottom: 0;
  left: 0;
  right: 0;

  .copy p {
    text-align: center;
    color: #fff;

    font-weight: 400;
  }
`;

export const Content = styled.div`
  margin: 0 auto;

  width: 100%;
  height: 100%;
  padding: 40px 80px;

  .logo-container {
    display: flex;
    align-items: center;
    .bar {
      width: 100%;
      height: 1px;
      background-color: white;
      margin: 0 16px;
    }
    span {
      font-size: 14px;

      color: white;
    }
  }
  @media (min-width: 360px) and (max-width: 640px) {
    padding: 39px 20px 17px 20px;
    .logo-container {
      gap: 35px;
      flex-direction: column;
      margin-bottom: 60px;
    }
  }
`;

export const SectionContainer = styled.div`
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;

  @media (min-width: 360px) and (max-width: 640px) {
    display: block;
    margin-bottom: 80px;
  }
`;

export const SectionFooter = styled.section`
  padding-top: 64px;

  h5 {
    color: #01e9b5;

    font-size: 18px;
    font-height: 18px;
    font-weight: 400;

    margin-bottom: 12px;
    margin-left: 12px;
  }
  ${Badge} {
    position: absolute;
    right: auto;
    background: #01e9b5;
    color: #426888;
    font-size: 12px;
    border-radius: 2px;
    padding: 4px;
    transform: translate(-18%, -91%) !important;
    display: inline-block;
    font-size: 0.7em;
    font-weight: 500;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    transform: rotate(37deg);
  }
`;

export const ItemsContainer = styled.ul`
  list-style: none;
  max-width: 283px;

  @media (min-width: 360px) and (max-width: 640px) {
    max-width: 100%;
  }
`;

export const Item = styled.li`
  margin-left: 12px;
  margin-top: 24px;

  color: #d9ebfc;

  font-size: 18px;
  font-height: 18px;
  font-weight: 400;

  a {
    color: #d9ebfc;
    text-decoration: none;
  }
`;

export const SocialNetworksContainer = styled.ul`
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  max-width: 283px;
`;

export const SocialNetworks = styled.li`
  width: 40px;
  height: 40px;
  margin-left: 12px;
  margin-top: 12px;
`;

export const AppsFooter = styled.li`
  margin-left: 12px;
  margin-top: 12px;
  list-style: none;

  h5 {
    margin-top: 24px;
    margin-left: 0px;
  }
  p{
    color:#01e9b5; 
    margin-bottom: 3px;
  }
  img {
    width: 69%;
    border-radius: 10px;
  }
`;

export const WhatsppFlutuante = styled.div`
  background: #01e9b5;
  width: 8%;
  right:3rem;
  position: fixed;
  z-index: 1800;
  bottom: 21px;
  text-align: center;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  padding: 12px;

  svg {
    fill: #fff;
  }
`;
