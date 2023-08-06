import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { StyledSkeleton, GridItem } from './Loader.styled';
export function Loader() {
  return (
    <SkeletonTheme baseColor="#3d6defd2" highlightColor="#f3eb08d1">
      <StyledSkeleton>
        {Array.from({ length: 12 }).map((_, index) => (
          <GridItem key={index}>
            <Skeleton height={200} borderRadius={10} />
          </GridItem>
        ))}
      </StyledSkeleton>
    </SkeletonTheme>
  );
}
