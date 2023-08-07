import { styled } from 'styled-components';
import { Gallery } from 'components/ImageGallery/ImageGallery.styled';
export const StyledSkeleton = styled(Gallery)`
  min-width: calc(100vw - 48px);
`;
export const GridItem = styled.div`
  width: 100%;
  object-fit: cover;
`;
