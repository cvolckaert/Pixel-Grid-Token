import styled from 'styled-components'

export const PixelGrid = styled.div`
  text-align: center;
  margin-top: 50px;
`


export const Pixel = styled.div.attrs(
  ({ backgroundColor }) => ({
    style: {
      backgroundColor
    }
  })
)`
  display: inline-block;
  height: 100%;
  width: 20px;
`;

export const Heading = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 40px;
  margin-top: 100px;
  font-family: 'Roboto Slab', serif;
`

export const Row = styled.div`
  height: 20px;
`
